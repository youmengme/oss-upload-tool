
# Upload to OSS

上传单个文件或文件夹下所有文件（不含子文件夹）到 OSS

## Inputs

- `accessKeyId`: OSS AccessKeyId
- `AccessKeySecret`: OSS AccessKeySecret
- `region`: 区域，如 `oss-cn-hangzou`
- `bucket`: 存储桶名称
- `assetPath`: 本地资源路径
- `targetPath`: OSS 对象存储路径

## Outputs

- `urls`: 文件在 OSS 上的 url。上传多个文件时，多个 url 用逗号隔开。