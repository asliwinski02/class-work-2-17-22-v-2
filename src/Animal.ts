import display from "./display";

abstract class Animal {
  private currentEnergyPercent: number;
  private currentWeight: number;

  constructor(weight: number) {
    this.currentEnergyPercent = 100;
    this.currentWeight = weight;
  }
  eat(): void {
    this.currentEnergyPercent = 100;
    display("YUUUMMM");
  }
  sleep(): void {}
  poop(): void {}
  swim(): void {
    display("Does", this.toString(), "really swim?");
  }

  get weight(): number {
    return this.currentWeight;
  }

  abstract move(): void;

  get energy(): number {}

  toString(): string {
    return "animal";
  }
}

export default Animal;
