import React from "react";
import ReactDOM from "react-dom";
import Post from "./components/post";
import AddPost from "./components/addPost";

import "./styles.css";

class App extends React.Component {
  state = {
    username: "Ahmedullah",
    posts: [
      {
        body: "This is my post.",
        username: "Saad Farhan"
      },
      {
        body: "This is my post.",
        username: "Ahsan khan"
      }
    ]
  };

  addpost = (body, username) => {
    const newPost = {
      body,
      username
    };
    console.log(newPost);
    this.setState({ posts: [...this.state.posts, newPost] });
  };

  render() {
    return (
      <div>
        <AddPost
          username={this.state.username}
          onClick={this.addpost}
          props={this.state.posts}
        />
        {this.state.posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
