<script>
  import 'tui-editor/dist/tui-editor.css'
  import 'tui-editor/dist/tui-editor-contents.css'
  import 'codemirror/lib/codemirror.css'
  import 'highlight.js/styles/github.css'

  import Editor from 'tui-editor'
  import { onMount } from 'svelte'

  onMount(() => {
    new Editor({
      el: document.querySelector('#text-editor'),
      initialEditType: 'wysiwyg',
      height: '500px',
      exts: [
        {
          name: 'chart',
          minWidth: 100,
          maxWidth: 600,
          minHeight: 100,
          maxHeight: 300
        },
        'scrollSync',
        'colorSyntax',
        'uml',
        'mark',
        'table'
      ]
    })
  })
</script>

<style>

</style>

<div id="text-editor" />
