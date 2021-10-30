import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './components/Types';
import About from './components/About';

const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつやで',
    done: false,
  },
  {
    id: 1,
    title: 'はじめにやるやつ',
    done: true,
  },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <TaskInput setTasks={setTasks} tasks={tasks} />
          <TaskList setTasks={setTasks} tasks={tasks} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
