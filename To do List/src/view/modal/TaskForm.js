import React, {Fragment} from 'react';
import {Form} from "react-bootstrap";
import {Controller, useFieldArray, useFormContext} from "react-hook-form";
import {statuses} from "../../wrapper/wrapper";

const TaskForm = ({isEditing}) => {

    const {register, formState:{errors}, control} = useFormContext()


    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type={'text'} {...register("name", {
                    required: "To'ldirish majburiy"
                })} />
                <Form.Control.Feedback type={"invalid"} className={'d-block'}>
                    {errors?.name?.message}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Status</Form.Label>
                <Controller name={"status"} render={({field}) => {
                    return (
                        <Form.Select disabled={!isEditing} value={field.value} onChange={field.onChange}>
                            {statuses.map((item, index) => <option key={index}>
                                {item.name}
                            </option>)}
                        </Form.Select>
                    )
                }} />
            </Form.Group>
        </Fragment>
    );
};

export default TaskForm;
