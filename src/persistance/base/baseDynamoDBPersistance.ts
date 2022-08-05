import BasePersistance from "./basePersistance";
import Identifiable from "../../models/base/identifiable";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export default class baseDynamoDBPersistance <T extends Identifiable<U> , U> implements BasePersistance <T , U> {

    constructor(private docClient: DocumentClient, private tableName: string) {}

    async getAllElement(): Promise<T[]> {
        const allElements = await this.docClient.scan({
            TableName: this.tableName
        }).promise();

        return allElements.Items as T[];
    }

    async getById(id: U): Promise<T> {
        const element = await this.docClient.get({
            TableName: this.tableName,
            Key: {
                id
            }
        }).promise()

        if (!element.Item) {
            throw new Error("Id does not exit");
        }
        return element.Item as T;
    }

    async create(element: T): Promise<T> {
        await this.docClient.put({
            TableName: this.tableName,
            Item: element
        }).promise()

        return element as T;
    }

    async update(id: U, element: Partial<T>): Promise<T> {
        const updated = await this.docClient
            .update({
                TableName: this.tableName,
                Key: { todosId: id },
                UpdateExpression:
                    "set #status = :status",
                ExpressionAttributeNames: {
                    "#status": "status",
                },
                ExpressionAttributeValues: {
                    ":status": element['status'],
                },
                ReturnValues: "ALL_NEW",
            })
            .promise();

        return updated.Attributes as T;
    }

    async delete(id: U): Promise<any> {
        const element  = await this.docClient.delete({
            TableName: this.tableName,
            Key: {
                id
            }
        }).promise();

        return element;
    }

}