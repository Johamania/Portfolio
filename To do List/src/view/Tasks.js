import React, {Fragment} from 'react';
import Open from "./open/Open";
import Iprogress from "./inprogress/Iprogress";
import Completed from "./completed/Completed";
import {Col, Row} from "react-bootstrap";

const Tasks = () => {
    return (
        <Row>
            <Col md={4}>
                <Open />
            </Col>
            <Col md={4}>
                <Iprogress />
            </Col>
            <Col md={4}>
                <Completed />
            </Col>
        </Row>
    );
};

export default Tasks;
