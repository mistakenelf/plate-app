export const getBlockStyle = block => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'
    case 'text-align-right':
      return 'text-align-right'
    case 'text-align-left':
      return 'text-align-left'
    case 'text-align-center':
      return 'text-align-center'
    default:
      return null
  }
}
