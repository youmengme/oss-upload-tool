const core = require('@actions/core');
const OSS = require('ali-oss');
const ossdir = require('ali-oss-dir');

const oss = new OSS({
  region: core.getInput('region', { required: true }),
  accessKeyId: core.getInput('accessKeyId', { required: true }),
  accessKeySecret: core.getInput('accessKeySecret', { required: true }),
  bucket: core.getInput('bucket', { required: true })
})


function uploadTool() {
  try {
    const assetPath = core.getInput('assetPath')
    const targetPath = core.getInput('targetPath')

    ossdir(oss)
      .upload(assetPath)
      .to(targetPath)
      .then((results) => {
        core.info(results)
      }).catch(e => {
        uploadTool()
      })
  } catch (err) {
    core.setFailed(err.message)
  }
}

uploadTool()