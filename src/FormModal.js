import React from "react";
import { ModalBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class FormModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book To Favorites</Modal.Title>
          </Modal.Header>
          <Modal.Body
          style={{ color: "black", fontSize: "2rem", fontweight: "bold" }}>

            <Form onSubmit={this.props.handleSubmit}>
            <label for="title">Name Of Book</label>
              <h2>
                <span></span>
              </h2>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Book Name"
                // onChange={event => setFirstName(event.target.value)}
                value={this.props.title}
              />
              <ModalBody/>
              <ModalBody style={{ color: "black", fontSize: "2rem", fontweight: "bold" }}>
            <label for="description">Name Of Book</label>
            <h2>
            <span></span>
            </h2>
            <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Book Description"
                  value={this.props.description}
                  // onChange={event => setLastName(event.target.value)}
                />
              </ModalBody>
              <ModalBody >
                <Form.Select id="status">
                  <option>Choose a Status</option>
                  <option value="Life Changing">Life Changing</option>
                  <option value="Favorite Five">Favorite Five</option>
                  <option value="Reccomended To Me">Reccomended To Me</option>
                </Form.Select>
              </ModalBody>
              <Button type="submit">Submit form</Button><span> </span>
              <Button  onClick={this.props.close}>close</Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default FormModal;
