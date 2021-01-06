const fs = require('fs')
const path = require('path')

function getFolderAllFilePath(dir, extnames = []) {
  return new Promise(resolve => {
    fs.readdir(dir, async (err, files) => {
      if (err) {
        resolve([])
        return
      }
      const promises = files.map(filename => {
        return new Promise(resolveItem => {
          let pathname = path.join(dir, filename)
          fs.stat(pathname, async (err, stats) => { // 读取文件信息
            if (err) {
              resolveItem([])
            }
            if (stats.isFile()) {
              if (extnames.includes(path.extname(pathname))) {  // 排除 目录下的 json less 文件
                resolveItem([])
              } else {
                resolveItem(pathname)
              }
            }
            if (stats.isDirectory()) {
              resolveItem(await getFolderAllFilePath(pathname))
            } 
          })
        })
      })
      const urls = await Promise.all(promises)
      resolve(urls.flat())
    })
  })
}
module.exports = {
  getFolderAllFilePath
}