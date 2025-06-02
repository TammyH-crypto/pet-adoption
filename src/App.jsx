import { useState } from "react";
import "./App.css";
import AnimalModal from "./components/AnimalModal";


function App() {
const [form, setForm] = useState({
  name: "",
  age: "",
  species: "",
  breed: "",
  kidFriendly: false,
  vaccinated: false,
  imageUrl: ""
})

  return (
    <>
      <h1>Fur Babies Rescue</h1>
      <AnimalModal show={true} onHide={console.log} form={form} />
    </>
  );
}

export default App;
