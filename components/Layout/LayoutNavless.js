import Head from 'next/head'

export default ({ children }) => (
  <div>
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        background-image: url('/static/loginBackground.png');
        font-family: 'Fira Sans', sans-serif;
      }
    `}</style>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' />
      <meta name='theme-color' content='#00B5AD' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <link rel='shortcut icon' href='/static/plateLogo.png' />
      <link href='https://fonts.googleapis.com/css?family=Fira+Sans' rel='stylesheet' />
      <link href='/static/flexboxgrid.css' rel='stylesheet' />
      <link rel='manifest' href='/static/manifest.json' />
    </Head>
    {children}
  </div>
)
