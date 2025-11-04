import {
    getItems, 
    getItem, 
    addItems, 
    deleteItem, 
    updateItem
} from "../controller/items.js" 


const itemRoute = (app, options, done) => {

    app.get("/", getItems);
    app.get("/:id", getItem);
    app.post("/", addItems);
    app.delete("/:id", deleteItem);
    app.put("/:id", updateItem);

    done();
}

export default itemRoute;