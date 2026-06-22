import React from "react";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <h1>GenZ</h1>

      <nav>
        <a href="/">Posts</a>{" "}
        <a href="/users">Users</a>{" "}
        <a href="/notifications">Notifications</a>{" "}
        <a href="/addpost">Add Post</a>
      </nav>

      <br />

      <input id="postTitle" placeholder="Post Title" />

      <textarea
        id="postContent"
        placeholder="Post Content"
      ></textarea>

      <select id="postAuthor">
        <option>User 1</option>
        <option>User 2</option>
      </select>

      <button className="button">Add Post</button>

      <div className="posts-list">
        <div>
          <button className="button">View Post</button>
        </div>

        <div>
          <button className="button">View Post</button>
        </div>
      </div>

      <div className="post">
        <h2 id="postTitle">Sample Post</h2>
        <p id="postContent">Sample Content</p>
        <button className="button">Edit</button>
      </div>

      <button className="button">Refresh Notifications</button>
    </div>
  );
};

export default App;
