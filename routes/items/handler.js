import { v4 as uuid } from "uuid";
import {items} from "../../config.js";

const notFound = (res) => {
    return res.code(404).send({error: "Item not found"});
}
//==================================================================

const getItems = (req, res) => {
    res.send(items);
}
//==================================================================

const getItem = (req, res) => {
    
    const item = items.find( item => item.id === req.params.id);
    
    if (!item) return notFound(res);
    res.send(item);
}
//==================================================================

const addItem = (req, res) => {

    const newItem = {
        id: uuid(),
        name: req.body.name,
    }
    items.push(newItem);

    res.send(items.at(-1));
}

//==================================================================

const deleteItem = (req, res) => {
    
    const index = items.findIndex(item => item.id === req.params.id)
    
    if (index === -1) return notFound(res);
    
    const item = items[index];
    items.splice(index, 1);
    res.code(204).send({message: `Successfully deleted \"${item}\"`, })
}
//==================================================================

const updateItem = (req, res) => {
    const index = items.findIndex(item => item.id == req.params.id);
    
    if (index === -1) return notFound(res);
    
    items[index].name = req.body.name;
    res.code(200).send(items[index])
}

export {getItems, getItem, addItem, deleteItem, updateItem};