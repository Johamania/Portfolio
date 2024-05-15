import React from 'react';
import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectTask} from "../redux/task/taskActions";

const TaskHeader = () => {

    const tasks = useSelector(selectTask)

    return (
        <Card>
            <Card.Header>
                <h2>Umumiy vazifalar soni: {tasks.length}</h2>
            </Card.Header>
        </Card>
    );
};

export default TaskHeader;
