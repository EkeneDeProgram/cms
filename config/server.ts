// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });






export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),

  // Use Render-assigned port, fallback only for local dev
  port: env.int('PORT', 10000),

  app: {
    keys: env.array('APP_KEYS'),
  },
});
