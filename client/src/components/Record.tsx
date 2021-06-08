import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {useDispatch} from "react-redux";
import {changeStatusAction, deleteAction} from "../redux/reducers/todoReducer";

type PropsType = {
    id: string
    isEnd: boolean
    text: string
}

const Record: React.FC<PropsType> = (props) => {
    const { id, isEnd, text } = props;
    const dispatch = useDispatch();

    const deleteRecord = () => {
        dispatch(deleteAction(id));
    }

    const changeStatus = () => {
        dispatch(changeStatusAction(id));
    }

    return(
        <Box color="text.primary" className={`app__record ${isEnd? "app__record_end" : ""}`} onClick={changeStatus}>
            <div className="app__record-text">{text}</div>
            <Button variant="contained" color="secondary" className="app__delete" onClick={deleteRecord}>
                Удалить
            </Button>
        </Box>
    );
}

export default Record;