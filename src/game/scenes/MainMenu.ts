import { Button } from "../objects/Button";

export class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    const button = new Button(this, 512, 384);
    this.add.existing(button);

    button.on("click-even", () => {
      console.log("in MainMenu - clicked even times...");
    });

    button.on("myevent", (count, message) => {
      console.log(`in MainMenu - ${count}: ${message}`);
    });
  }
}
