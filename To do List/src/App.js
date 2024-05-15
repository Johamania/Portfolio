import React from 'react';
import TaskHeader from "./view/TaskHeader";
import Tasks from "./view/Tasks";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <Container>

            <TaskHeader />
            <br/>
            <Tasks />

        </Container>
    );
};

export default App;
