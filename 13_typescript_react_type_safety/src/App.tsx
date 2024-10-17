import './App.css';
import { Person, Country } from './Components/Person';

function App() {

  const getAge = (name: string) => {
    return 99;
  }

  console.log(getAge("")); //Cant pass number as arguement.

  return (
    <div className="App">
      <Person 
        name="Adithya"
        email="abr@gmail.com"
        age={21}
        isMarried={false}
        friends={["Cat 1", "Cat 2", "Cat 3"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
