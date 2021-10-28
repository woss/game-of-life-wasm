import { Universe } from "hello-wasm-pack";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();
console.log(pre);
const renderLoop = () => {
  setTimeout(() => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
  }, 500);
};
requestAnimationFrame(renderLoop);
