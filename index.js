const core = require('@actions/core');
const OSS = require('ali-oss');
const ossdir = require('ali-oss-dir');

function uploadTool() {
  try {
    const oss = new OSS({
      region: core.getInput('region', { required: true }),
      accessKeyId: core.getInput('accessKeyId', { required: true }),
      accessKeySecret: core.getInput('accessKeySecret', { required: true }),
      bucket: core.getInput('bucket', { required: true })
    })

    const assetPath = core.getInput('assetPath', { required: true })
    const targetPath = core.getInput('targetPath', { required: true })

    ossdir(oss)
      .upload(assetPath)
      .to(targetPath)
      .then((results) => {
        core.info(results)
      })
  } catch (err) {
    core.setFailed(err.message)
  }
}

uploadTool()