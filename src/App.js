import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [like, SetLike] = useState(0);
  const [val, SetVal] = useState("No text here");
  const [list, SetList] = useState([]);
  const [current, SetCurrent] = useState("");
  const [done, setDone] = useState(false);

  let addItem = () => {
    SetList([
      ...list,
      {
        id: list.length + 1,
        name: current,
        isDone: false,
        isShow: true,
      },
    ]);
  };

  const strikeStyle = {
    textDecoration: done ? "line-through" : "none",
  }

  let strike = (id) => {
    let itemIndex = list.findIndex((obj) => obj.id === id);
    list[itemIndex].isDone=true;
    // SetDone(!done)
    SetList([...list]);
  };

  let del = (id) => {
    let indexItem = list.findIndex((obj) => obj.id === id);
    list[indexItem].isShow = false;
    SetList([...list]);
  };
  

  return (
    <div className="App">
      {/* <div>
        <h1>{like}</h1>
        <button onClick={() => SetLike(like + 1)}>Click</button>
      </div> */}
      <div>
        <input type="text" onChange={(e) => SetCurrent(e.target.value)}></input>
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        {/* <label>{val}</label> */}
        <ul>
          {list.map((item) => {
            return (
              <li
                className={item.isShow ? "block" : "none"}
                // style={{
                //   textDecoration: item.isDone ? 'line-through' : 'none'
                // }}
                style={strikeStyle}
              >
                
                {item.name} -
                <button onClick={() => setDone(!done)}>Strike</button> -
                <button onClick={() => del(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
