export const estimateTextWidth = (text: string, fontSize: number): number => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) return 0
  context.font = `${fontSize}px Arial`
  return context.measureText(text).width
}
