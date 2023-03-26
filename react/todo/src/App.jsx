import { useState } from "react";
import reactLogo from "./assets/react.svg";
import TodoList from "./TodoList";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return <TodoList />;
}

export default App;
