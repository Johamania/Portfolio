import React from 'react';
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import AddButton from "../AddButton";
import { deleteTask } from '../../redux/task/taskActions';
import { useDispatch } from 'react-redux';

const OpenListTasks = ({item}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTask(item.id));
    };

    return (
        <ListGroupItem>
            <Row className={'align-items-center'}>
                <Col md={8}>
                    <strong>{item.name}</strong>
                </Col>
                <Col md={4} className={'d-flex flex-column gap-2'}>
                    <Button size={"sm"} variant={'danger'} onClick={handleDelete}>D</Button>
                    <AddButton isEditing={true} item={item} />
                </Col>
            </Row>

        </ListGroupItem>
    );
};

export default OpenListTasks;
