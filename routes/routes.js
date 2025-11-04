import {
    getItems, 
    getItem, 
    addItem, 
    deleteItem, 
    updateItem
} from "./items/handler.js" 

import {
    getAllItems_schema,
    getItem_schema,
    addItem_schema, 
    deleteItem_schema, 
    updateItem_schema
} from "./items/schema.js"


const items_route = (fastify, options, done) => {

    fastify.get("/", getAllItems_schema, getItems);
    fastify.get("/:id", getItem_schema, getItem);
    fastify.post("/", addItem_schema, addItem);
    fastify.delete("/:id", deleteItem_schema, deleteItem);
    fastify.put("/:id", updateItem_schema, updateItem);

    done();
}

export default items_route;