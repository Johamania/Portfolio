import React, {Fragment} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import AddButton from "../AddButton";
import {COMPLETED, INPROGRESS, OPEN} from "../../wrapper/wrapper";
import {useSelector} from "react-redux";
import {selectTask} from "../../redux/task/taskActions";
import CompletedListTasks from './CompletedListTasks';

const Completed = () => {

    const tasks = useSelector(selectTask)

    return (
        <Card>

            <Card.Header>
                <h2 className={'text-center'}>Copleted</h2>
            </Card.Header>


            <Card.Body>
                <ListGroup>
                    {
                        tasks.filter(i=> i.status === COMPLETED).map((item, index) =>
                           <CompletedListTasks key={item.id} item={item} />)
                    }
                </ListGroup>
            </Card.Body>

            <Card.Footer>
                <AddButton status={COMPLETED} />
            </Card.Footer>

        </Card>
    );
};

export default Completed;
