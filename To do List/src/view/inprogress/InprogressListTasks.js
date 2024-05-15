import React from 'react';
import {Button, Col, ListGroupItem, Row} from "react-bootstrap";
import AddButton from "../AddButton";

const InprogressListTasks = ({item}) => {
    return (
        <ListGroupItem>
            <Row className={'align-items-center'}>
                <Col md={8}>
                    <strong>{item?.name}</strong>
                </Col>
                <Col md={4} className={'d-flex flex-column gap-2'}>
                    <Button size={"sm"} variant={'danger'}>D</Button>
                    <AddButton isEditing={true} name={item.name} status={item.status} />
                </Col>
            </Row>

        </ListGroupItem>
    );
};

export default InprogressListTasks;
