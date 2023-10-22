import React from 'react';
import '../assets/css/post.css'

const Post = () => {
  let users = [
    { 
      name: 'Marina Valente', 
      avatar: 'https://i.pravatar.cc/150?img=3', 
      typeUser:"Pro Member",
      UserPost:'Hello Everyone!',
      ImgPosted:"",
      posttopic :" Welcome to the Cosplayers Group Forum!",
      postforum:"Cosplayers Group Forum",
      dataPosted:'1 year ago' 
    },
    { 
      name: 'Marina Valente', 
      avatar: 'https://i.pravatar.cc/150?img=3', 
      typeUser:"Pro Member",
      UserPost:'This is my picture!',
      posttopic :"",
      postforum:"",
      ImgPosted:"https://i.pravatar.cc/150?img=3",
      dataPosted:'2 year ago' 
    },];
  return (
    <>
    {users.map((user) => (
      <div className="post">
        <div className="post-header">
          <div className="post-author">
            <img src={user.avatar} alt="FD" />
            <p>
            <span className="post-author-name">{user.name}</span>
            <span className="post-author-badge">{user.typeUser} </  span>
            <span>replied to the topic</span>
            <span className="post-topic">{user.posttopic}</span>
            <span> in the forum</span>
            <span className="post-forum">{user.postforum}</span>
            <br></br>
            <span className="post-time">{user.dataPosted}</span>
            </p>
          </div>
        </div>
        <div className="post-content">
          <p>{user.UserPost}</p>
          {user.ImgPosted ? <img src={user.ImgPosted} alt="FD" /> : null}
        </div>
        <hr/>
        <div className="post-footer row" >
          <div className="post-reactions col-2">
          <span >😂</span>
          <span className='pl-2'>1</span>
          </div>
          <div className='col-5'></div>
          <div className="post-comments col-3">
            <span className='font-weight-bold'>0 Comments</span>
          </div>
          <div className="post-shares col-2">
            <span className='font-weight-bold'>0 Shares</span>
          </div>
        </div>
      </div>))}
    </>
  );
};

export default Post;
