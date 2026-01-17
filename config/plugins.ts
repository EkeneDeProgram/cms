// export default ({ env }) => ({
//   upload: {
//     config: {
//       provider: 'cloudinary',
//       providerOptions: {
//         cloud_name: env('CLOUDINARY_NAME'),
//         api_key: env('CLOUDINARY_KEY'),
//         api_secret: env('CLOUDINARY_SECRET'),
//       },
//       actionOptions: {
//         upload: {},
//         delete: {},
//       },
//       security: {
//         maxFileSize: 10 * 1024 * 1024, // 10MB
//         allowedMimeTypes: [
//           'image/jpeg',
//           'image/png',
//           'image/webp',
//           'image/gif',
//           'image/svg+xml',
//         ],
//       },
//     },
//   },

//   // THIS FIXES YOUR DEPLOY CRASH
//   'users-permissions': {
//     config: {
//       jwtSecret: env('USERS_PERMISSIONS_JWT_SECRET'),
//     },
//   },
// });












export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  'users-permissions': {
    config: {
      jwtSecret: env('USERS_PERMISSIONS_JWT_SECRET'),
    },
  },
});
