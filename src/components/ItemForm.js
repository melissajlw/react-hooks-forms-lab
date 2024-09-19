import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [item, setItem] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNewItem(event) {
    setItem(event.target.value)
  }

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newItem = {
      id: uuid(),
      name: item,
      category: category,
    }

    onItemFormSubmit(newItem)
    setItem("")
    setCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
