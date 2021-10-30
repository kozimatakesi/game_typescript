import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { Task } from './Types';
import './App.css';

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

const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <TaskInput setTasks={setTasks} tasks={tasks} />
          <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default ToDo;
