import { useState } from 'react';
import Form from './components/js-components/Form.js';
import List from './components/js-components/List.js';
import ResetButton from './components/js-components/ResetButton.js';
import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [completedCount, setCompletedCount] = useState(0);
    if (posts.length > 0 && count != 0)
        document.querySelector('.App__text').innerHTML = `${count} ToDo's!`;
    if (posts.length > 0 && count == 0)
        document.querySelector('.App__text').innerHTML = 'ToDo List is Empty';
    return (
        <div className="App">
            <h1 className="App__title">ToDo App</h1>
            <Form posts={posts} setPosts={setPosts} count={count} setCount={setCount}/>
            <List posts={posts} count={count} setCount={setCount} 
            completedCount={completedCount} setCompletedCount={setCompletedCount}/>
            <p className="App__text">ToDo List is Empty</p>
            <p className="App__completed-count">{completedCount} completed</p>
            <ResetButton count={count} setCount={setCount} 
                completedCount={completedCount} setCompletedCount={setCompletedCount}/>
        </div>
  );
}

export default App;
