const s3 = require('./s3');
const { app } = require('./config');

const {
  S3Uploader,
  FilesystemUploader,
} = require('./lib/gql-uploaders');

const s3AvatarUploader = new S3Uploader(s3, {
  baseKey: 'users/avatars',
  uploadParams: {
    CacheControl: 'max-age:31536000',
    ContentDisposition: 'inline',
  },
});

const fsAvatarUploader = new FilesystemUploader({
  dir: app.storageDir,
  filenameTransform: fname => `${Date.now()}_${fname}`,
});

module.exports = { avatarUploader: s3AvatarUploader };
