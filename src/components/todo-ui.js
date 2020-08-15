import React, {useState} from 'react'
import {
            Container, Row, Col, Button, Form, FormGroup, Input, Label,
            ListGroup, ListGroupItem,ListGroupItemHeading, ListGroupItemText
        } from "reactstrap";

const TodoUI = ({ todos, deleteTask, changeChecked, checkAll }) => {
 
  // let [checked, setChecked] = useState(false)
  // const curr_date = new Date().getDate();
  
  // let todoDate = new Date(date);
  // todoDate = todoDate.getDate();

  const taskList = todos.length ?
    (
      todos.map(todo => {
          let newTodoDate = new Date(todo.date);
          newTodoDate = newTodoDate.toDateString();
          // if (newTodoDate === curr_date) {
            return (
              // <div className="list-groups">
              <ListGroupItem className="my-tasks" key={todo.id}>
                <ListGroupItemHeading>{newTodoDate}</ListGroupItemHeading>
                <ListGroupItemText className="todo-item">
                  <Form>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          // onChange={() => {deleteTaskElement(todo.id)}}
                          // checked={checked}
                          onChange={() => changeChecked(todo)}
                        />{" "}
                        <span>{todo.task}</span>
                        {/* <Button color="danger" onClick={() => {deleteTask(todo.id)}}>Delete</Button> */}
                      </Label>
                    </FormGroup>
                  </Form>
                  {/* <p>{todo.date}</p> */}
                  <p>{todo.time}</p>
                </ListGroupItemText>
              </ListGroupItem>
              // </div>
            );
          // }
        })
      ) :
      (
        <p id="addTask">You have no task added</p>
      )

  // const scheduleList = () => {
  //   if (date !== today) {
  //     return null
  //   }
  //   else {
  //     return (
  //       // <div>
  //         <h3>Today-{date}</h3>
  //       // </div>
  //     )
  //   }
    
  // }
  
  return (
    <div className="task-list">
        <Container>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <div>
                <h3 id="schedule">
                  {todos.length ? "My Todos" : null}
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }}>
              <ListGroup>{taskList}</ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md={{ size: 6, offset: 3 }} className="select-all">
              {todos.length ? (
                <Form>
                  <FormGroup row>
                    <Col xs={5}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" onChange={checkAll}/>
                          <span>Select All</span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col xs={2}>
                      <Button color="danger" onClick={deleteTask}>Delete</Button>
                    </Col>
                  </FormGroup>
                </Form>
              ) : null}
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default TodoUI;