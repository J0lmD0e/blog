import React from "react";

export default class Add extends React.Component {
  state = {
    body: "",
    username: this.props.username,
    posts: [this.props.posts]
  };

  handleBody = e => {
    this.setState({ body: e.target.value });
  };

  addPost = () => {
    this.props.onClick(this.state.body, this.state.username);
    this.setState({ body: "" });
  };

  render() {
    return (
      <div>
        <p>{this.state.username}</p>
        <input
          type="text"
          placeholder="Whats on your mind."
          value={this.state.body}
          onChange={this.handleBody}
        />
        <button type="submit" onClick={this.addPost}>
          write
        </button>
      </div>
    );
  }
}
