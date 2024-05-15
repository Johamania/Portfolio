import InprogressListTasks from "./InprogressListTasks";
import {Card, ListGroup} from "react-bootstrap";
import AddButton from "../AddButton";
import {INPROGRESS, OPEN} from "../../wrapper/wrapper";
import {useSelector} from "react-redux";
import {selectTask} from "../../redux/task/taskActions";

const Iprogress = () => {

    const tasks = useSelector(selectTask)

    return (
        <Card>

            <Card.Header>
                <h2 className={'text-center'}>Inprogress</h2>
            </Card.Header>


            <Card.Body>
                <ListGroup>
                    {
                        tasks.filter(i=> i.status === INPROGRESS).map((item, index) =>
                           <InprogressListTasks key={item.id} item={item} />)
                    }
                </ListGroup>
            </Card.Body>

            <Card.Footer>
                <AddButton status={INPROGRESS} />
            </Card.Footer>

        </Card>
    );
};

export default Iprogress;
