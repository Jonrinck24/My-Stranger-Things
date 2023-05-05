import React, { useState }from 'react';
import { makePost } from '../ajax-requests';

function CreatePost({ token, getPosts }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const[location, setLocation]= useState('');
  
async function handleSubmit(event){
    event.preventDefault();
    const post = {title, description, price}

   const results = await makePost(post, token)

   if(results.success){
    getPosts();

   }
}


    return (
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder="Title"
        value={title}
        onChange={(event) =>{setTitle(event.target.value)}}
        />
         <input 
        type='text'
        placeholder="Item Description"
        value={description}
        onChange={(event) =>{setDescription(event.target.value)}}
        />
         <input 
        type='text'
        placeholder="Price"
        value={price}
        onChange={({target: {value}}) =>{setPrice(value)}}
        />
        <input 
        type='text'
        placeholder='Location'
        value={location}
        onChange={({target: {value}}) => {setLocation(value)}}
        />
        <button type='submit'> Create Post </button>
        
      </form>
      

    )
}

export default CreatePost; 