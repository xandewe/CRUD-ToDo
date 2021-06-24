const { Router } = require('express');
const dbTask = require('../controllers/taskController');
const td = require('../middlewares/taskMiddleware');
const ud = require('../middlewares/userMiddleware');

const route = new Router();

route.use(ud.verifyUserJWT);
route.post('/register/task', td.validateKeys, dbTask.createTask); 

route.get('/tasks', dbTask.getTasks);
route.get('/task/:id', dbTask.getTaskById);

route.patch('/task/:id', dbTask.updateTask);

route.delete('/task/:id', dbTask.destroyTask);

module.exports = route;