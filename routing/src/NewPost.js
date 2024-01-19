import React from 'react'

const NewPost = ({postTitle,setPostTitle,postBody,setPostBody,handelSubmit}) => {
  return (
    <main className='NewPost'>
    <h2>New Post</h2>
    <form className='newPostForm' onSubmit={handelSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
            id='postTile'
            type="text"
            placeholder='Enter the title'
            required
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)} 
        />
        <label htmlFor="postBody">Post:</label>
        <textarea 
            id="PostBody"
            required
            value={postBody}
            onChange={(e)=>setPostBody(e.target.value)} 
        />
        <button type='submit'>Sumbit</button>

    </form>
  </main>
  )
}

export default NewPost



/* const NewPost = ({postTitle,setPostTitle,postBody,setPostBody,handelSubmit}) => {
  <main className='NewPost'>
    <h2>New Post</h2>
    <form className='newPostForm' onSubmit={handelSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
            id='postTile'
            type="text"
            placeholder='Enter the title'
            required
            value={postTitle}
            onChange={(e)=>setPostTitle(e.target.value)} 
        />
        <label htmlFor="postBody">Post:</label>
        <textarea 
            id="PostBody"
            required
            value={postBody}
            onChange={(e)=>setPostBody(e.target.value)} 
        />
        <button type='submit'>Sumbit</button>

    </form>
  </main>
}

export default NewPost */