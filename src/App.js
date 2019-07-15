import React, {Component} from 'react';
import './App.css';
import List1 from './components/List1';
import List2 from './components/List2';

class  App extends Component {
  state = {
    posts: [
      {id: 1, name: 'post 1', liked: false},
      {id: 2, name: 'post 2', liked: false},
      {id: 3, name: 'post 3', liked: false}
    ]
  }

  handleLike = (id) => {
    const posts = [...this.state.posts];
    let post = posts.find(item => item.id === id);
    post.liked = !post.liked;
    this.setState({posts});
  }
  
 render() {
  return (
    <div className="app">
     <List1 posts={this.state.posts} handleLike={this.handleLike}/>
     <List2 posts={this.state.posts} handleLike={this.handleLike}/>
    </div>
  );
 }
}

export default App;
