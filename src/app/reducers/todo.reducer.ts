import { TodoActionType } from "../shared/enums/todo-action-types.enum";
import { ActionParent } from "../actions/todo.action";
import { Todo} from "../models/Todo";


const initialState: Todo[] = [
   {title:""}
];


export function TodoReducer(state=initialState, action :ActionParent)
{
    switch(action.type)
    {
        case TodoActionType.Add:
            return[...state,action.payload]
        case TodoActionType.Remove:
            return[...state.splice(action.payload,1)]
        default : return state;
    }
}


