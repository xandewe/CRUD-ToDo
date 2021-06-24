const Task = require('../models/task');

const createTask = async (req, res) => {
    const {title, description, priority, status} = req.body;

    const userId = req.user.id;

    const task = await Task.create({title, description, priority, status, userId});
    
    serializer = {
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
    };
    
    res.status(201).json({data: serializer});
};

const getTasks = async (req, res) => {

    const userId = req.user.id;
    const listFields = ['id', 'title', 'description', 'priority', 'status'];

    const tasks = await Task.findAll({ where: {userId}, attributes: listFields});

    res.json({data: tasks});
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await Task.findByPk(id);

    if(task === null){
        return res.status(404).json({msg: 'not found task'});
    };

    if(task.userId !== userId){
        return res.status(401).json({msg: 'user unauthorized'});
    };

    serializer = {
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
    };
    
    res.json({data: serializer});
};


const updateTask = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await Task.findByPk(id);

    if(task === null){
        return res.status(404).json({msg: 'not found task'});
    };

    if(task.userId !== userId){
        return res.status(401).json({msg: 'user unauthorized'});
    };

    await task.update(req.body);

    serializer = {
        id: task.id,
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
    };
    
    res.json({data: serializer});
};

const destroyTask = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    const task = await Task.findByPk(id);

    if(task === null){
        return res.status(404).json({msg: 'not found task'});
    };

    if(task.userId !== userId){
        return res.status(401).json({msg: 'user unauthorized'});
    };

    await task.destroy({ where: { id }});

    res.status(204).send();
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    destroyTask,
};