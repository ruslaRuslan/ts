import './App.css';
import Button from './Button';

function App() {
  return (
    <Button onClick={()=>{
      console.log('heyyy');
      
    } } 
    text="go out "
    bgColor="green"
    />
  );
}

export default App;
