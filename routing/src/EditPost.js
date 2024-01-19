import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,editTitle,editBody,setEditBody,setEditTitle,handleEdit}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString()=== id);

  useEffect(()=>{
    if(post){
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  },[post, setEditTitle,setEditBody])

  return (
    <main className='NewPost'>
      {editTitle && 
      <>
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor="postTitle">Title:</label>
          <input
              id='postTile'
              type="text"
              placeholder='Enter the title'
              required
              value={editTitle}
              onChange={(e)=>setEditTitle(e.target.value)} 
          />
          <label htmlFor="postBody">Post:</label>
          <textarea 
              id="PostBody"
              required
              value={editBody}
              onChange={(e)=>setEditBody(e.target.value)} 
          />
          <button type='submit' onClick={()=>handleEdit(post.id)}>Sumbit</button>
          </form>
      </>}
    </main>
  )
}

export default EditPost