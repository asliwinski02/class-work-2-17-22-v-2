import Animal from "./Animal";
import display from "./display";

class Duck extends Animal {
  constructor(weight: number) {
    super(weight);
  }
  eat() {
    super.eat();
    display("MUNCH!!");
  }
  swim() {
    display("swimming");
  }

  toString() {
    return "duck";
  }
}

export default Duck;
