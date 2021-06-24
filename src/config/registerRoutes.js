const userRoutes = require('../routes/userRoutes');
const taskRoutes = require('../routes/taskRoutes');

module.exports = (app) => {
    app.use(userRoutes);
    app.use(taskRoutes);
};