export const decodeTitle = (title) => {
  let decoded = title.replace("&#8217;", "'")
  return decoded
}
