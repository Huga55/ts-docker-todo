import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {addNewAction} from "../redux/reducers/todoReducer";

const FromAdd = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState<null | string>(null);
    const dispatch = useDispatch();

    const changeText = (e: any) => {
        if(error) setError(null);
        setText(e.currentTarget.value);
    }

    const submitHandler = () => {
        if(text.length < 5) {
            setError("Минимальная длина 5 символов");
        }else if(text.length > 30) {
            setError("Максимальная длина 30 символов");
        } else {
            dispatch(addNewAction(text));
            setText("");
        }
    }

    return(
        <div className="app__form">
            <TextField
                id="standard-basic"
                label="Новая запись"
                className="app__input"
                value={text}
                onChange={changeText}
                error={!!error}
                helperText={error || ""}/>
            <Button variant="contained" color="primary" onClick={submitHandler}>
                Добавить
            </Button>
        </div>
    );
}

export default FromAdd;