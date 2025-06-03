import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AnimalModal({ show, onHide, form, onChange, onSave }) {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add New Animal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter animal name"
                value={form.name}
                onChange={(e) => onChange (e)}
              />
            </Form.Group>
            <Form.Group controlId=";formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                type="text"
                placeholder="Enter animal age"
                value={form.age}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formSpecies">
              <Form.Label>Species</Form.Label>
              <Form.Control
                name="species"
                type="text"
                placeholder="Enter animal species"
                value={form.species}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                name="breed"
                type="text"
                placeholder="Enter animal breed"
                value={form.breed}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="formImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="optional;"
                value={form.imageUrl}
                onChange={onChange}
                name="https://th.bing.com/th/id/OIP.270Z0qlc8ERYlmjsSa9zLwHaE8?w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              />
            </Form.Group>
            <Form.Group controlId="formKidFriendly">
              <Form.Check
                type="checkbox"
                label="Kid friendly"
                name="KidFriendly"
                checked={form.KidFriendly}
                onChange={onChange}
              ></Form.Check>
            </Form.Group>
            <Form.Group controlId="formVaccinated">
              <Form.Check
                type="checkbox"
                label="Vaccinated"
                name="Vaccinated"
                checked={form.Vaccinated}
                onChange={onChange}
              ></Form.Check>
            </Form.Group>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onHide} variant="secondary">
            Cancel
          </Button>
          <Button onClick={onSave} variant="primary">
            Save Baby
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
