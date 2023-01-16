import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ task , setTask] = useState(TASKS)
  const [selectedCatButton, setSelectedCatButton] = useState('All')
  const [ categories, setCategories ] = useState(CATEGORIES)
  
  function addNewListItem(newItem) {
    setTask([...task, newItem])
  }

  function deletedItem(deletedItem) {
    setTask(task.filter((item)=> item.text !== deletedItem))
  }

  const displayedItem = task

  .filter (
    (item) => {
      if (selectedCatButton === 'All')
        return true
        return selectedCatButton === item.category
    }
  )
  
  
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {categories}
        onButton = {selectedCatButton}
        selectedButton = {setSelectedCatButton}
      />
      <NewTaskForm onTaskFormSubmit = {addNewListItem}
        categories = {categories}
      />
      <TaskList deletedItem = {deletedItem}
      tasks = {displayedItem} />
    </div>
  );
}

export default App;
