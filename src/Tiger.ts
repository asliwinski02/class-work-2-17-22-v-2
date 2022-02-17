import Animal from "./Animal";
import display from "./display";

class Tiger extends Animal {
  constructor(weight: number) {
    super(weight);
  }
  eat() {
    super.eat();
    display("DEVOUR!!");
  }
  run() {
    display("That aardvark...Run forrest run");
  }

  toString(): string {
    return "tiger";
  }
}

export default Tiger;
