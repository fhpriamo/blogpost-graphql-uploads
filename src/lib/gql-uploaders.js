const path = require('path');
const { v4: uuid } = require('uuid');

function uuidFilenameTransform(filename = '') {
  const fileExtension = path.extname(filename);

  return `${uuid()}${fileExtension}`;
}

class S3Uploader {
  constructor(s3, config) {
    const {
      baseKey = '',
      uploadParams = {},
      concurrencyOptions = {},
      filenameTransform = uuidFilenameTransform,
    } = config;

    this._s3 = s3;
    this._baseKey = baseKey.replace('/$', '');
    this._filenameTransform = filenameTransform;
    this._uploadParams = uploadParams;
    this._concurrencyOptions = concurrencyOptions;
  }

  async upload(stream, { filename, mimetype }) {
    const tranformedFilename = this._filenameTransform(filename);

    const { Location } = await this._s3
      .upload(
        {
          ...this._uploadParams,
          Body: stream,
          Key: `${this._baseKey}/${tranformedFilename}`,
          ContentType: mimetype,
        },
        this._concurrencyOptions
      )
      .promise();

    return Location;
  }
}

module.exports = { S3Uploader, uuidFilenameTransform };
