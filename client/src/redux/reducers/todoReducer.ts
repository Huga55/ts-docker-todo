import {v4 as uuidv4} from "uuid";

const ADD_NEW = "ADD_NEW";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE = "DELETE";

type TodoListType = {
    id: string
    status: boolean
    text: string
}

const initialState = {
    list: [] as Array<TodoListType> | [],
}

type InitialStateType = typeof initialState

const todoReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch(action.type) {
        case "ADD_NEW":
            return {
                ...state,
                list: [...state.list, {id: uuidv4(), status: false, text: action.text}],
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                list: state.list.map((t) => {
                    if(t.id === action.id) {
                        t.status = !t.status;
                    }
                    return t;
                }),
            }
        case "DELETE":
            return {
                ...state,
                list: state.list.filter(t => t.id !== action.id)
            }
        default: 
            return state;
    }
}

export default todoReducer;

type ActionTypes = AddNewActionType | ChangeStatusActionType | DeleteActionType

type AddNewActionType = {
    type: typeof ADD_NEW
    text: string
}

export const addNewAction = (text: string): AddNewActionType => ({type: ADD_NEW, text});

type ChangeStatusActionType = {
    type: typeof CHANGE_STATUS
    id: string
}

export const changeStatusAction = (id: string): ChangeStatusActionType => ({type: CHANGE_STATUS, id});

type DeleteActionType = {
    type: typeof DELETE
    id: string
}

export const deleteAction = (id: string): DeleteActionType => ({type: DELETE, id});

