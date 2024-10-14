
import './App.css';

function App() {
  // const name = <h1>Adithya</h1>;
  // const age = <h1>21</h1>;
  // const email = <h1>adithya@gmail.com</h1>;

  // const userDetails = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  
  return (
    <div className="App">
      {/* {userDetails} */}
      {/* <User/>     Component is used here. We use component within </> */}

      <User name='Adithya' age={21} email='adithya@gmail.com'/>
      <User name='Adithya 2' age={21} email='adithya2@gmail.com'/>
      <User name='Adithya 3' age={21} email='adithya3@gmail.com'/>
    </div>
  );
}

// Representation of Props
/*const props = {
  name: 'Adithya',
  age: 21,
  email: 'adithya@gmail.com'
}*/

// Here User is an component. Component name starts with Capital letter
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
