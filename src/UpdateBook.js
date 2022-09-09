import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class UpdateBook extends React.Component {
  render() {
    return (
      <Modal show={this.props.showupdate} onHide={this.props.closeUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
          <Form onSubmit={this.props.UpdeteBookHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" placeholder="book name" name="title"  defaultValue={this.props.currentBook.title}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                name="description"
                defaultValue={this.props.currentBook.description}
              />
            </Form.Group>

            <Form.Select aria-label="Default select example" name="status" defaultValue={this.props.currentBook.status}>
              <option>Update Status</option>
              <option value="Life Changing">Life Changing</option>
                <option value="Favorite Five">Favorite Five</option>
                <option value="Reccomended To Me">Reccomended To Me</option>
            </Form.Select>

            <Button variant="primary" type="submit" >
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeUpdate}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdateBook;
