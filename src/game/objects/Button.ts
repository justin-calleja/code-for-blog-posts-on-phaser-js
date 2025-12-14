import { Input, type Scene } from "phaser";
import { defaultBtn, hoverBtn, pressedBtn } from "../../assetKeys";
import type { TypedEventEmitter } from "../../types";

export type SupportedEvents = {
  "click-even": [];
  myevent: [number, string];
};

export class Button extends Phaser.GameObjects.Image {
  count = 0;

  declare emit: TypedEventEmitter<SupportedEvents>["emit"];
  // @ts-ignore
  declare on: TypedEventEmitter<SupportedEvents>["on"] &
    Phaser.GameObjects.Image["on"];

  constructor(public scene: Scene, public x: number, public y: number) {
    super(scene, x, y, defaultBtn);

    this.setInteractive();

    this.on(Input.Events.GAMEOBJECT_POINTER_OVER, this.onPointerOver, this);
    this.on(Input.Events.GAMEOBJECT_POINTER_OUT, this.onPointerOut, this);
    this.on(Input.Events.GAMEOBJECT_POINTER_DOWN, this.onPointerDown, this);
    this.on(Input.Events.GAMEOBJECT_POINTER_UP, this.onPointerUp, this);
  }

  protected onPointerOver() {
    this.setTexture(hoverBtn);
  }

  protected onPointerOut() {
    this.setTexture(defaultBtn);
  }

  protected onPointerDown() {
    this.count++;

    if (this.count % 2 === 0) {
      this.emit("click-even");
    }

    if (this.count % 3 === 0) {
      this.emit("myevent", this.count, `Clicked ${this.count} times`);
    }

    this.setTexture(pressedBtn);
  }

  protected onPointerUp() {
    this.setTexture(hoverBtn);
  }
}
