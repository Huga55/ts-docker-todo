import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import FromAdd from "../components/Form";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import Record from "../components/Record";

const MainLayout = () => {
    const [activeType, setActiveType] = useState<"all" | "end" | "process">("all");
    const { list } = useSelector((state: AppStateType) => state.todo);
    const [records, setRecords] = useState(list);

    useEffect(() => {
        switch (activeType) {
            case "all":
                setRecords(list);
                break;
            case "end":
                setRecords(list.filter(r => !r.status));
                break;
            case "process":
                setRecords(list.filter(r => r.status));
                break;
        }
    }, [activeType, list])

    return(
        <Container maxWidth="sm">
            <div className="app__block">
                <div className="app__sort">
                    <div className={`app__sort-block ${activeType === "all"? "app__sort_active" : ""}`}>
                        <Button variant="contained" onClick={() => setActiveType("all")}>Все {list.length}</Button>
                    </div>
                    <div className={`app__sort-block ${activeType === "process"? "app__sort_active" : ""}`}>
                        <Button variant="contained" onClick={() => setActiveType("process")}>Выполненные {list.filter(r => r.status).length}</Button>
                    </div>
                    <div className={`app__sort-block ${activeType === "end"? "app__sort_active" : ""}`}>
                        <Button variant="contained" onClick={() => setActiveType("end")}>Текущие {list.filter(r => !r.status).length}</Button>
                    </div>
                </div>
                <h2 className="app__title">Todo List</h2>
                <FromAdd />
                {records.map(r => <Record id={r.id} isEnd={r.status} text={r.text} />)}
            </div>
        </Container>
    );
}

export default MainLayout;