const fs = require('fs')
const core = require('@actions/core');
const OSS = require('ali-oss');
const { getFolderAllFilePath } = require('./utils')

const oss = new OSS({
  region: core.getInput('region', { required: true }),
  accessKeyId: core.getInput('accessKeyId', { required: true }),
  accessKeySecret: core.getInput('accessKeySecret', { required: true }),
  bucket: core.getInput('bucket', { required: true })
})

function uploadTool() {
  try {
    const assetPath = core.getInput('assetPath', { required: true }).replace(/\/+$/g, '')
    const targetPath = core.getInput('targetPath', { required: true }).replace(/\/+$/g, '')
    const exnames = core.getInput('exnames')
    const exmameArr = exnames.split(',').filter(ele => /^\./.test(ele))

    getFolderAllFilePath(assetPath, exmameArr).then(urls => {
      try {
        urls.forEach(ele => {
          const filePath = ele.replace(`${assetPath}/`, '')
          core.info(`${assetPath}/`)
          core.info(filePath)
          oss.put(`${targetPath}/${filePath}`, fs.readFileSync(ele))
        })
      } catch (err) {
        core.setFailed(err.message)
      }
    })
  } catch (err) {
    core.setFailed(err.message)
  }
}

uploadTool()
