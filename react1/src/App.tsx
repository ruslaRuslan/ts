import axios from "axios";
import "./App.css";
import Button from "./Button";
import { useEffect } from "react";
interface User {
  id: number;
  username: string;
}

function App() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(({ data }: { data: User[] }) => {
        data.forEach((element) => {
          console.log(element.username);
          
        });
      });
  }, []);
  return (
    <Button
      onClick={() => {
        console.log("heyyy");
      }}
      text="go out "
      bgColor="green"
    />
  );
}

export default App;
