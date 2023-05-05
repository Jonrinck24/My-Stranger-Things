 const COHORT_NAME = '2301-ftb-et-web-pt'
 const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
 

export const registerUser = async (user) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user
        }),
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      
      return result;
    } catch (err) {
      console.error(err);
    }
};

export const login = async (user) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, 
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  export const myData = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
   
      return result;
    } catch (err) {
      console.error(err);
    }
  };




export const fetchPosts = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/`,{
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${token}`
        }
      });


      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };

 export const makePost = async (post, token) => {

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post
        }),
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  };
  export const updatePost = async (postId, token, updatedPost) => {

    try {
      
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: updatedPost,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  

 export const deletePosts = async (token,  postIdToDelete) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postIdToDelete}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

   export const Message = async ( postId, token ) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/messages/${postId}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content: " "
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }