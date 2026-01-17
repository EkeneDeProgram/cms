// export default [
//   'strapi::logger',
//   'strapi::errors',

//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'img-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'https://res.cloudinary.com',
//           ],
//           'media-src': [
//             "'self'",
//             'data:',
//             'blob:',
//             'https://res.cloudinary.com',
//           ],
//         },
//       },
//     },
//   },

//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];









export default [
  // Logger for requests
  'strapi::logger',

  // Error handler
  'strapi::errors',

  // Security middleware with content security policy
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com', // allow Cloudinary images
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com', // allow Cloudinary media
          ],
        },
      },
    },
  },

  // Enable CORS
  'strapi::cors',

  // Add X-Powered-By header
  'strapi::poweredBy',

  // Body parser middleware with 10MB limits
  {
    name: 'strapi::body',
    config: {
      multipart: true,        // enable multipart form-data (uploads)
      formLimit: '10mb',      // max size for form submissions
      jsonLimit: '10mb',      // max size for JSON bodies
      textLimit: '10mb',      // max size for text bodies
    },
  },

  // Session support
  'strapi::session',

  // Favicon support
  'strapi::favicon',

  // Serve static files from /public
  'strapi::public',
];
