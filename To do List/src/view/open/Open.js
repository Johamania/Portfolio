import React, {Fragment} from 'react';
import OpenListTasks from "./OpenListTasks";
import {Card, ListGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectTask} from "../../redux/task/taskActions";
import AddButton from "../AddButton";
import {OPEN} from "../../wrapper/wrapper";

const Open = () => {

    const tasks = useSelector(selectTask)

    return (
        <Fragment>

            <Card>
                <Card.Header>
                    <h2 className={'text-center'}>Open</h2>
                </Card.Header>

                <Card.Body>
                    <ListGroup>
                        {
                            tasks.filter(i=> i.status === OPEN).map((item, index) => 
                            <OpenListTasks key={item.id} item={item} />)
                        }
                    </ListGroup>
                </Card.Body>

                <Card.Footer>
                    <AddButton status={OPEN} />
                </Card.Footer>
            </Card>

        </Fragment>
    );
};

export default Open;
