import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


class addBook extends React.Component {
  render() {
    return (
      <>
     
     
      <Modal show={this.props.show} onHide={this.props.handleCloseAddbook}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book To Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.addBook}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name = "title"
                placeholder="test book 1"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="test"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Status</Form.Label>
              <Form.Select id="status">
              <option>Choose a Status</option>
                <option value="Life Changing">Life Changing</option>
                <option value="Favorite Five">Favorite Five</option>
                <option value="Reccomended To Me">Reccomended To Me</option>
              </Form.Select>
              
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseAddbook}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
     
    );
  }
}

export default addBook;
