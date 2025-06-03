import { useEffect, useState } from "react";
import "./App.css";
import AnimalModal from "./components/AnimalModal";
import Button from "react-bootstrap/Button";
import Animals from "./components/Animals";
import { createAnimal, scanAnimals } from "./dynamo";

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    species: "",
    breed: "",
    kidFriendly: false,
    vaccinated: false,
    imageUrl: "",
  });
  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    scanAnimals().then(setAnimals);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  async function handleAdd() {
    if (!form.name || !form.age || !form.species || !form.breed) return;
    const item = {
      id: crypto.randomUUID(),
      name: form.name,
      age: form.age,
      species: form.species,
      breed: form.breed,
      imageUrl: form.imageUrl || "https://via.placeholder.com/150",
    };
    await createAnimal(item);
    setAnimals((prevAnimals) => [...prevAnimals, item]);
    setShow(false);
  }

  return (
    <>
      <h1>Fur Babies Rescue</h1>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add New Animal
      </Button>
      <AnimalModal
        show={show}
        onHide={() => setShow(false)}
        form={form}
        onChange={handleChange}
        onSave={handleAdd}
      />
      <Animals animals={animals} />
    </>
  );
}

export default App;
