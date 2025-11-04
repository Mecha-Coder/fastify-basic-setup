import { v4 as uuid } from "uuid";
import items from "./data.js";

const notFound = (res) => {
    return res.code(404).send({message: "Item not found"});
}


//--------------------------------------------------------------------

const getItems = (req, res) => {
    res.send(items);
}

//--------------------------------------------------------------------

const getItem = (req, res) => {
    
    const item = items.find( item => item.id === req.params.id);
    
    if (!item) return notFound(res);
    res.send(item);
}

//--------------------------------------------------------------------

const addItems = (req, res) => {

    const newItem = {
        id: uuid(),
        name: req.body,
    }
    items.push(newItem);

    res.code(201).send({message: "Success", newitem: newItem});
}

//--------------------------------------------------------------------

const deleteItem = (req, res) => {
    
    const index = items.findIndex(item => item.id === req.params.id)
    
    if (index === -1) return notFound(res);
    
    const item = items[index];
    items.splice(index, 1);
    res.code(204).send({message: `Successfully deleted \"${item}\"`, })
}

//--------------------------------------------------------------------

const updateItem = (req, res) => {
    const index = items.findIndex(item => item.id == req.params.id);
    
    if (index === -1) return notFound(res);
    
    const oldData = items[index].name;
    items[index].name = req.body;
    res.code(200).send({message: `Successfully updated "${oldData}" => "${items[index].name}"`})
}

export {getItems, getItem, addItems, deleteItem, updateItem};