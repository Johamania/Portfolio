import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {FormProvider, useForm} from "react-hook-form";
import TaskForm from "./TaskForm";
import {useDispatch} from "react-redux";
import {addNewTask, editTask} from "../../redux/task/taskActions";

const TaskModal = ({show, setShow, isEditing, item, status}) => {

    const dispatch = useDispatch()

    const methods = useForm({
        defaultValues: {
            name: item?.name || null,
            status: item?.status || status || null
        }
    })

    const handleClose = () => {
        setShow(false)
    }

    const onFinish = (formData) => {
        console.log(formData)

        const data = {
            name: formData.name,
            status: formData.status
        }

        if (isEditing) {
            dispatch(editTask({...data, id: item?.id}))
        } else {
            dispatch(addNewTask({...data, id: new Date().getTime()}))
        }

        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{isEditing ? "Edit" : "Add"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormProvider {...methods}>
                    <Form id={'form'} onSubmit={methods.handleSubmit(onFinish)}>
                        <TaskForm isEditing={isEditing}/>
                    </Form>
                </FormProvider>
            </Modal.Body>
            <Modal.Footer className={'d-flex justify-content-end gap-2'}>
                <Button type={'button'} variant={'danger'} onClick={handleClose}>Cancel</Button>
                <Button form={'form'} type={'submit'} variant={'success'}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskModal;
