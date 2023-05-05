import React from 'react';

const Message = (prop) => {
    const {message } = prop;
    return <Message>
        <title>
<h2>{message.post.title} </h2>

</title>
<content>
    <p>From: </p>{message.user.userName}
    <p>Message: </p>{message.content}
</content>
    </Message>
   
}

export default Message;