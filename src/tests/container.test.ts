import { describe, it } from "vitest";
import type { VERSION } from "phaser";
// import { Phaser } from "phaser/dist/phaser.esm.js";

describe("Phaser.VERSION", () => {
  it("can log it to console", () => {
    // console.log("phaser version:", VERSION);
    console.log("phaser version again:", Phaser.VERSION);
  });
});

// describe("container", () => {
//   describe("addItem(item)", () => {
//     it("should change item.width to match container.width", () => {
//       const container = new Container({ width: 200 });
//       const item = new Item({ width: 900 });

//       container.addItem(item);

//       expect(item.width).toBe(200);
//     });
//   });
// });
