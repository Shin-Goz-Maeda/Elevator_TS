import {up} from "./index.js";
import {down} from "./index.js";
import {activate} from "./index.js";
import {reColor} from "./index.js";
import {addColor} from "./index.js";
import {moveUp1} from "./index.js";
import {moveUp2} from "./index.js";
import {moveUp3} from "./index.js";
import {moveUp4} from "./index.js";
import {moveDown2} from "./index.js";
import {moveDown3} from "./index.js";
import {moveDown4} from "./index.js";
import {moveDown5} from "./index.js";

// クリックイベント
up[1].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(1, 1, "");
    moveUp1();
  }
});

up[2].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(2, 2, "");
    moveUp2();
  }
});

up[3].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(3, 3, "");
    moveUp3();
  }
});

up[4].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(4, 4, "");
    moveUp4();
  }
});

down[2].addEventListener('click', async () => {
  if(activate === 1) {
    reColor();
    addColor(2, "", 2);
    moveDown2();
  }
});

down[3].addEventListener('click', async () => {
  if(activate === 1) {
    reColor();
    addColor(3, "", 3);
    moveDown3();
  }
});

down[4].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(4, "", 4);
    moveDown4();
  }
});

down[5].addEventListener('click', () => {
  if(activate === 1) {
    reColor();
    addColor(5, "", 5);
    moveDown5();
  }
});