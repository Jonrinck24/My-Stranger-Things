import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';;
import { useState } from 'react';
import { deletePosts } from '../ajax-requests';
import { Message} from "../ajax-requests"
import  "./style.css";


function Posts ({ posts, token, }){
    
    const [searchTerm, setSearchTerm]= useState('');
    const [postsList, setPosts] = useState(posts);

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
   const filteredDisplay = searchTerm.length ? filteredPosts : postsList.filter(post => postMatches(post, searchTerm));

   function postMatches ( post, searchTerm ) {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch
   }
const deletePost= async ( postIdToDelete) =>{
    console.log('postIdToDelete: ', postIdToDelete);
        const response = await fetch(`${BASE_URL}/posts/${postIdToDelete}`,{
method: 'DELETE',
        }
    );
    const data = await response.json();
    console.log('data', data);
    if (data){
        const newPosts = posts.filter(post => post.id !== postIdToDelete);
        setPosts(newPosts);
    }
    }

   return (

<>
                    <form
                       onSubmit={(event) => event.preventDefault()}>
                       <input type="text"
                       placeholder=" Search " 
                       className="searchbar"
                        value={searchTerm}
                        onChange={(event)=> setSearchTerm(event.target.value)}
                       />
                       </form>
                       <>
                       
                      
                       </>

                       {filteredDisplay.map((post) => (
        <Fragment key={post._id}>
          {post.isAuthor ? (
            <>
              <p>{post.title}</p>
              
              <button className="deleteButton" onClick={()=> deletePost(token, postIdToDelete)}>Delete</button>
              <Link to={`/update-post/${post._id}`} ><button>Edit Post</button></Link>
            </>
          ) : (
            <>
              <p>{post.title}</p>
              {!post.isAuthor  !== post.author.ID && (
              <>
              <input type="text" placeholder='Send Message '/>
              <button className ="messageBtn" onClick = {()=> Message(token, post)}> Message</button>
            </>
         
          )}
          </>
          
          )}
<button className= "viewSinglePost" > 
<Link to = {`/view-post/${post._id}`} > View Post </Link> {''} </button>


        </Fragment>
      ))}
    </>
  );
}

export default Posts;