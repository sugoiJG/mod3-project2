const router = require("express").Router();

const todoItemsModel = require("../models/toDoItems");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
      priority: req.body.priority,
      dueDate: req.body.dueDate
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

router.get('/api/items', async (req, res) => {
  console.log("hitting api/items");
  try{
    const allTodoItems = await todoItemsModel.find({});
    console.log(allTodoItems);
    res.status(200).json(allTodoItems)
  }catch(err){
    res.json(err);
  }
})

router.put('/api/item/:id', async (req, res) => {
  try {
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.status(200).json('Item Updated');
  }catch(err){
    res.json(err)
  }
})

router.delete('/api/item/:id', async (req, res) => {
  try{
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch(err){
    res.json(err);
  }
})


module.exports = router;