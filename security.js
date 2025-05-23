// Add CSRF protection middleware
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// Add rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);