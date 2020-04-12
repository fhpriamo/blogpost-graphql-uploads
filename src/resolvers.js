const { avatarUploader } = require('./uploaders');

module.exports = {
  Mutation: {
    uploadAvatar: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      const uri = await avatarUploader.upload(createReadStream(), {
        filename,
        mimetype,
      });

      return {
        filename,
        mimetype,
        encoding,
        uri,
      };
    },
  },
};
