module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2fcc828b6b6226eb8916355cd2db8154'),
  },
});
