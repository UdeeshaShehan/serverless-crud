import Todo from "src/models/Todo";
import baseDynamoDBService from "./baseDynamoDBService";

export default class TodoService extends baseDynamoDBService<Todo, string>{
};