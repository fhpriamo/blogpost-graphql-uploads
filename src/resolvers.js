module.exports = {
  Mutation: {
    uploadAvatar: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;

      return {
        filename,
        mimetype,
        encoding,
        uri: 'http://about:blank',
      };
    },
  },
};
