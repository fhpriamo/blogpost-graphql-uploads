const config = require('./config');
const s3 = require('./s3');
const { S3Uploader } = require('./lib/gql-uploaders');

const avatarUploader = new S3Uploader(s3, {
  baseKey: 'users/avatars',
  uploadParams: {
    CacheControl: 'max-age:31536000',
    ContentDisposition: 'inline',
  },
});

module.exports = { avatarUploader };
