import React, {Fragment, useState} from 'react';
import {Button} from "react-bootstrap";
import TaskModal from "./modal/TaskModal";

const AddButton = ({isEditing, item, status}) => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    return (
        <Fragment>
            <Button variant={isEditing ? "warning" : "primary"} onClick={handleShow}>
                {isEditing ? "E" : "Add new task"}
            </Button>

            <TaskModal
                show={show}
                setShow={setShow}
                isEditing={isEditing}
                item={item}
                status={status}
            />
        </Fragment>

    );
};

export default AddButton;
