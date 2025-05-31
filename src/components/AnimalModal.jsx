import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add New Animal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Age</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Species</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>Breed</Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label></Form.Label>
            </Form.Group>
            <Form.Group></Form.Group>
            <Form.Group></Form.Group>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save Baby</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
