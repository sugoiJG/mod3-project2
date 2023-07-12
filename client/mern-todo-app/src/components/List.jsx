import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { Link } from 'react-router-dom';

const List = () => {
  const {
    listItems,
    isUpdating,
    setIsUpdating,
    updateItemText,
    setUpdateItemText,
    deleteItem,
    updateItem,
  } = useContext(TodoContext);

  const renderUpdateForm = () => (
    <form
      className="update-form"
      onSubmit={(e) => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        placeholder="New Item"
        onChange={(e) => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
      />
      <button className="update-new-btn" type="submit">
        Update
      </button>
    </form>
  );

  <div className="space-y-4">
    {listItems.map((item) => (
      <div
        className="bg-gray-200 rounded-md py-4 px-6 flex items-center justify-between"
        key={item._id}
      >
        {isUpdating === item._id ? (
          renderUpdateForm()
        ) : (
          <>
            <div>
              <p className="font-bold">{item.item}</p>
              <p>Priority: {item.priority}</p>
              {item.dueDate && <p>Due Date: {item.dueDate.substring(0, 10)}</p>}
            </div>
            <div>
              <button
                className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mr-2"
                onClick={() => {
                  setIsUpdating(item._id);
                }}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4"
                onClick={() => {
                  deleteItem(item._id);
                }}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    ))}
  </div>;

  return (
    <div className="space-y-4">
      {listItems.map((item) => (
        <div
          className="bg-gray-200 rounded-md py-4 px-6 flex items-center justify-between"
          key={item._id}
        >
          {isUpdating === item._id ? (
            renderUpdateForm()
          ) : (
            <>
              <div>
                <Link to={`/details/${item._id}`}>
                <p className="font-bold">{item.item}</p>
                </Link>
                <p>Priority: {item.priority}</p>
                {item.dueDate && (
                  <p>Due Date: {item.dueDate.substring(0, 10)}</p>
                )}
              </div>
              <div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 mr-2"
                  onClick={() => {
                    setIsUpdating(item._id);
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4"
                  onClick={() => {
                    deleteItem(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
