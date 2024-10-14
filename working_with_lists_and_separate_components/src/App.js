import './App.css';
import { User } from './User'

function App() {
  // const names = ["Adithya", "Adithya 2", "Adithya 3", "Adithya 4"];

  // return (
  //   <div className="App">
  //     {names.map((name, key) => {
  //       return <h1 key={key} >{name}</h1>; 
  //       //Here key is used to prevent the console from displaying the warning.
  //     })}
  //   </div>
  // );

  const users = [
    { id: 1, name: "Adithya", age: 20 },
    { id: 2, name: "Doraemon", age: 12 },
    { id: 3, name: "Shinchan", age: 5 }
  ]

  return (
    <div className="App">
      {users.map((user, key) => {
        return <User key={key} id={user.id} name={user.name} age={user.age} />
      })}
    </div>
  );
}

export default App;