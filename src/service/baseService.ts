import Identifiable from "src/models/base/identifiable";

export default interface BaseService <T extends Identifiable<U> , U>{
    getAllElement(): Promise<T[]>,
    getById(id: U): Promise<T>,
    create(element: T): Promise<T>,
    update(id: U, element: Partial<T>): Promise<T>,
    delete(id: U): Promise<any>
}