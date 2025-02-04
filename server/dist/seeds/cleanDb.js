import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        // Use a type assertion to assure TypeScript that the model exists
        const model = models[modelName];
        // Check if the model is defined
        if (!model) {
            throw new Error(`Model ${modelName} does not exist.`);
        }
        if (!model.db || !model.db.db) {
            throw new Error(`Database connection for model ${modelName} is not defined.`);
        }
        const modelExists = await model.db.db.listCollections({
            name: collectionName
        }).toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
