import React from 'react'
import Form from '../components/Form'
import List from '../components/List'


const Home = () => {
  return (
    <div className="container mx-auto max-w-md py-8">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <Form />
        <List />
    </div>
  )
}

export default Home