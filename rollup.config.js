import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';

const production = !process.env.ROLLUP_WATCH;

const serve = () => {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn(
          'npm',
          ['run', 'serve', '--', '--dev', '-s', '--port 3000'],
          {
            stdio: ['ignore', 'inherit', 'inherit'],
            shell: true,
          },
        );
      }
    },
  };
};

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    eslint({}),
    postcss({ extract: true }),
    svelte({
      dev: !production,
      css: css => {
        css.write('public/build/bundle.css');
      },
    }),
    resolve({
      browser: true,
      extensions: ['.svelte', '.js'],
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    !production && serve(),
    !production &&
      livereload({
        watch: 'public',
        port: 8080,
      }),
    production && terser(),
  ],
  watch: {
    clearScreen: true,
  },
};
