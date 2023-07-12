import {useContext} from 'react'
import { TodoContext } from '../TodoContext/TodoContext';

const Form = () => {

    const {
        itemText,
        setItemText,
        priority,
        setPriority,
        dueDate,
        setDueDate,
        addItem,
      } = useContext(TodoContext);


  return (
    <form className="mb-6" onSubmit={(e) => addItem(e)}>
    <input
      className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
      type="text"
      placeholder="Add Todo Item"
      onChange={(e) => {
        setItemText(e.target.value);
      }}
      value={itemText}
    />
    <select
      className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
      value={priority}
      onChange={(e) => {
        setPriority(e.target.value);
      }}
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <input
      className="border border-gray-300 rounded-md py-2 px-4 w-full mb-2"
      type="date"
      onChange={(e) => {
        setDueDate(e.target.value);
      }}
      value={dueDate}
    />
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
      type="submit"
    >
      Add
    </button>
  </form>
  )
}

export default Form