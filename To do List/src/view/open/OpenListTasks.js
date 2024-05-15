import React from 'react';
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import AddButton from "../AddButton";

const OpenListTasks = ({item}) => {
    return (
        <ListGroupItem>
            <Row className={'align-items-center'}>
                <Col md={8}>
                    <strong>{item.name}</strong>
                </Col>
                <Col md={4} className={'d-flex flex-column gap-2'}>
                    <Button size={"sm"} variant={'danger'}>D</Button>
                    <AddButton isEditing={true} item={item} />
                </Col>
            </Row>

        </ListGroupItem>
    );
};

export default OpenListTasks;
