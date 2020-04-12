const { extname } = require('path');
const { v4: uuid } = require('uuid');
const s3 = require('./s3');

module.exports = {
  Mutation: {
    uploadAvatar: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const { Location } = await s3.upload({
        Body: createReadStream(),
        Key: `${uuid()}${extname(filename)}`,
        ContentType: mimetype
      }).promise();

      return {
        filename,
        mimetype,
        encoding,
        uri: Location,
      };
    },
  },
};
