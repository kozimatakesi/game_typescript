import React, {
  FC,
  Dispatch,
  useState,
  SetStateAction,
  ChangeEvent,
} from 'react';
import { Task } from './Types';

type Props = {
  setTasks: Dispatch<SetStateAction<Task[]>>;
  tasks: Task[];
};

const TaskInput: FC<Props> = ({ setTasks, tasks }) => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [count, setCount] = useState<number>(tasks.length + 1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleSubmit = () => {
    setCount(count + 1);

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false,
    };

    setTasks([newTask, ...tasks]);
    setInputTitle('');
  };

  return (
    <div>
      <div className="inputForm">
        <div className="inner">
          <input
            type="text"
            className="input"
            value={inputTitle}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn is-primary"
          >
            追加
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
