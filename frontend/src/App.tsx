import React from "react";
import Counter from "./features/counter/Counter";
import Editor from "./components/editor/Editor";

const App = (): JSX.Element => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Editor/>
    </div>
  );
}

export default App;
