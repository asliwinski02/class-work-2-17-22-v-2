import "./styles.css";
import { useEffect } from "react";
import Display from "./Display";
import display from "./display";
import Animal from "./Animal";
import Duck from "./Duck";
import Tiger from "./Tiger";

export default function App() {
  useEffect(() => {
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey", "there");
    const a = new Animal(52);
    a.eat();
    display(a.weight);
    display("\nSwitch to Duck:\n");
    const d = new Duck(14);
    d.eat();
    d.swim();
    display("\nSwitch to Tiger:\n");
    const t = new Tiger(52);
    t.run();
    t.swim();
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
