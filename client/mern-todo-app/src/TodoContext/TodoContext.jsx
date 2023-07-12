import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [itemText, setItemText] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        setListItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  const addItem = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5500/api/item", {
        item: itemText,
        priority: priority,
        dueDate: dueDate,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
      setPriority("low");
      setDueDate("");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  const updateItem = async () => {
    try {
      await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {
        item: updateItemText,
      });
      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === isUpdating
      );
      listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        itemText,
        setItemText,
        priority,
        setPriority,
        dueDate,
        setDueDate,
        listItems,
        setListItems,
        isUpdating,
        setIsUpdating,
        updateItemText,
        setUpdateItemText,
        addItem,
        deleteItem,
        updateItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
