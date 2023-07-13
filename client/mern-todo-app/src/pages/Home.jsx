import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import List from '../components/List';

const Home = () => {
  return (
    <div>
      <nav className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="text-2xl font-bold">
          To Do List
        </Link>
      </nav>
      <div className="container mx-auto max-w-md py-8">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <Form />
        <List />
      </div>
    </div>
  );
};

export default Home;