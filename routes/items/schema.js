const ParamSchema = {
    type: "object",
    required: ["id"],  // Add required field
    properties: {
        id: { type: "string" }
    }            
};

const BodySchema = {
    type: "object",  // Should be object, not string
    required: ["name"],  // Specify required fields
    properties: {
        name: { type: "string" }
    }
};

const OneItemSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        name: {type: "string"},
    }
}

const ErrorSchema = {
    type: "object",
    properties: {
        error: { type: "string" }
    }
}

//=======================================

const getAllItems_schema = {
    schema: {
        response: {
            200: {
                type: "array",
                items: OneItemSchema,
            }
        }
    }
}

const getItem_schema = {
    schema: {
        params: ParamSchema,
        response: {
            200: OneItemSchema,
            404: ErrorSchema,
        }
    }
};

const addItem_schema = {
    schema: {
        body: BodySchema,
        response: {201: OneItemSchema}
    }
};

const deleteItem_schema = {
    schema: {
        params: ParamSchema,
        response: {
            204 : {
                type: "object",
                properties: {
                    message: {type: "string"},
                    }
                },
            404: ErrorSchema,
            } 
        }
};

const updateItem_schema = {
    schema: {
        params: ParamSchema,
        body: BodySchema,
        response: {
            200: OneItemSchema,
            404: ErrorSchema,
        },
    }
};

export {getAllItems_schema, getItem_schema, addItem_schema, deleteItem_schema, updateItem_schema, OneItemSchema};