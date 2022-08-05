import Todo from "../models/Todo";
import baseDynamoDBPersistance from "./base/baseDynamoDBPersistance";

export default class TodoPersistance extends baseDynamoDBPersistance <Todo, string> {

}