<template>
  <div class="bg-white border-2">
    <editor-menu-bar :editor="editor">
      <div
        class="bg-white border-b-2 p-4 flex items-center justify-between"
        slot-scope="{ commands, isActive }"
      >
        <font-awesome-icon
          icon="bold"
          class="text-lg cursor-pointer"
          @click="commands.bold"
        />
        <font-awesome-icon
          icon="italic"
          class="text-lg cursor-pointer"
          @click="commands.italic"
        />
        <font-awesome-icon
          icon="strikethrough"
          class="text-lg cursor-pointer"
          @click="commands.strike"
        />
        <font-awesome-icon
          icon="underline"
          class="text-lg cursor-pointer"
          @click="commands.underline"
        />
        <font-awesome-icon
          icon="code"
          class="text-lg cursor-pointer"
          @click="commands.code"
        />
        <font-awesome-icon
          icon="paragraph"
          class="text-lg cursor-pointer"
          @click="commands.paragraph"
        />
        <font-awesome-icon
          icon="strikethrough"
          class="text-lg cursor-pointer"
          @click="commands.strike"
        />
        <font-awesome-icon
          icon="list"
          class="text-lg cursor-pointer"
          @click="commands.bullet_list"
        />
        <font-awesome-icon
          icon="list-ol"
          class="text-lg cursor-pointer"
          @click="commands.ordered_list"
        />
        <font-awesome-icon
          icon="quote-right"
          class="text-lg cursor-pointer"
          @click="commands.blockquote"
        />
        <font-awesome-icon
          icon="file-code"
          class="text-lg cursor-pointer"
          @click="commands.code_block"
        />
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>
        <font-awesome-icon
          icon="undo"
          class="text-lg cursor-pointer"
          @click="commands.undo"
        />
        <font-awesome-icon
          icon="redo"
          class="text-lg cursor-pointer"
          @click="commands.redo"
        />
      </div>
    </editor-menu-bar>
    <editor-content class="p-4" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      contents:
        '<h1><strong>Your new task</strong></h1><p></p><h3>Create a new task here</h3><p></p><p>You can group a list of items like below:</p><p></p><ul><li><p>List item 1</p></li><li><p>List item 2</p></li><li><p>List item 3</p></li></ul>',
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content:
          '<h1><strong>Your new task</strong></h1><p></p><h3>Create a new task here</h3><p></p><p>You can group a list of items like below:</p><p></p><ul><li><p>List item 1</p></li><li><p>List item 2</p></li><li><p>List item 3</p></li></ul>',
        onUpdate: ({ getHTML }) => {
          this.contents = getHTML()
        }
      })
    }
  },
  created() {
    this.$emit('updateContent', this.contents)
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  watch: {
    contents() {
      this.$emit('updateContent', this.contents)
    }
  }
}
</script>

<style>
.ProseMirror {
  height: 100%;
}
.ProseMirror:focus {
  outline: none;
}
</style>
