import dynamoDBClient from "src/models";
import TodoPersistance from "src/persistance/todoPersistance";
import TodoService from "./todoService";

const persistance = new TodoPersistance(dynamoDBClient(), "TodoTable")
const todoService = new TodoService(persistance);

export default todoService;