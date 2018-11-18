const allJSfilesInFolder = require.context('./', true, /\.(scss)$/)

const exportFiles = allJSfilesInFolder.keys().reduce((list, file) => {
  if (file === './index.js') return list
  list[file.slice(2, -5)] = allJSfilesInFolder(file)
  return list
}, {})
export default exportFiles
