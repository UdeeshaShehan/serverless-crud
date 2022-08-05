import Identifiable from "src/models/base/identifiable";
import baseDynamoDBPersistance from "src/persistance/base/baseDynamoDBPersistance";
import BaseService from "./baseService";

export default class baseDynamoDBService <T extends Identifiable<U>, U> implements BaseService<T, U> {
    
    constructor(private baseDynamoDBpersistance: baseDynamoDBPersistance<T, U>) {}

    async getAllElement(): Promise<T[]> {
        return this.baseDynamoDBpersistance.getAllElement();
    }
    
    async getById(id: U): Promise<T> {
        return this.baseDynamoDBpersistance.getById(id);
    }

    async create(element: T): Promise<T> {
        return this.baseDynamoDBpersistance.create(element);
    }

    async update(id: U, element: Partial<T>): Promise<T> {
        return this.baseDynamoDBpersistance.update(id, element);
    }

    async delete(id: U): Promise<any> {
        return this.baseDynamoDBpersistance.delete(id);
    }

}