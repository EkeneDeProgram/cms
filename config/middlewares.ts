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
  'strapi::logger',        // logging requests
  'strapi::errors',        // error handling

  {
    name: 'strapi::security',  // security headers and CSP
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://res.cloudinary.com',
          ],
        },
      },
    },
  },

  'strapi::cors',          // enable CORS
  'strapi::poweredBy',     // X-Powered-By header

  'strapi::query',         // ⚠ MUST be here, required for API queries

  {
    name: 'strapi::body',  // body parser for uploads & JSON
    config: {
      multipart: true,
      formLimit: '10mb',
      jsonLimit: '10mb',
      textLimit: '10mb',
    },
  },

  'strapi::session',       // session support
  'strapi::favicon',       // favicon
  'strapi::public',        // static files
];
