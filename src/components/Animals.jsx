import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function Animals({ animals }) {
  return (
    <ListGroup>
      {animals.map((animal) => (
        <ListGroup.Item key={animal.id}>
          <h5>{animal.name}</h5>
          <p>Species: {animal.species}</p>
          <p>Breed: {animal.breed}</p>
          <p>Age: {animal.age}</p>
          <img
            src={animal.imageUrl}
            alt={animal.name}
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            {animal.kidFriendly && <span>Kid Friendly</span>}
            {animal.kidFriendly && <span>Not Kid Friendly</span>}
          </div>
          <div>
            {animal.vaccinated && <span>Vaccinated</span>}
            {animal.vaccinated && <span>Not Vaccinated</span>}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
