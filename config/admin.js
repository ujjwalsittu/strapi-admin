module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e86d33388554fddf649a9e343adeb2a9'),
  },
});
