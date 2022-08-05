import Identifiable from "./base/identifiable";
import ModifyTracble from "./base/modifyTracable";

export default interface Todo extends Identifiable<string>, ModifyTracble <string>{
    title:string,
    description: string,
    status:boolean
}