// フロア（エレベータ動作域）のElementを取得
const floor: any = new Array(5);
  floor[0] = document.getElementById('floor1');
  floor[1] = document.getElementById('floor2');
  floor[2] = document.getElementById('floor3');
  floor[3] = document.getElementById('floor4');
  floor[4] = document.getElementById('floor5');

// 現在地を示すフロアライトのElementを取得
const light: any = new Array(5);
  light[0] = document.getElementById('light1');
  light[1] = document.getElementById('light2');
  light[2] = document.getElementById('light3');
  light[3] = document.getElementById('light4');
  light[4] = document.getElementById('light5');

// 上昇ボタンのElementを取得
const up: any = new Array(5);
  up[0] = document.getElementById('up1');
  up[1] = document.getElementById('up2');
  up[2] = document.getElementById('up3');
  up[3] = document.getElementById('up4');
  up[4] = document.getElementById('up5');

// 下降ボタンのElementを取得
const down: any = new Array(5);
  down[0] = document.getElementById('down1');
  down[1] = document.getElementById('down2');
  down[2] = document.getElementById('down3');
  down[3] = document.getElementById('down4');
  down[4] = document.getElementById('down5');

// 全体のデフォルトカラー設定
const defaultColor: string | number = "#CCCCCC";

// 現在地を示すカラー設定
const currentFloorColor: string | number = "blue";
const currentLightColor: string | number = "red";
const currentBtnColor: string | number = "yellow";

// エレベータがフロアを移動している時のカラー設定
const moveFloorColor : string | number = "yellow";

// エレベータが停止している階の初期値
let stayFloor: number = 1;
let active: number = 1;

// ボタンをクリックした時、色をつける
function addColor(ch: number, uBtn: any, dBtn: any) {
  // 選択フロアに色をつける
  light[ch].style.backgroundColor = currentLightColor;
  if(uBtn !== "") {
    up[uBtn].style.backgroundColor = currentBtnColor;
  } else if(dBtn !== "") {
    down[dBtn].style.backgroundColor = currentBtnColor;
  } else {
    console.log("addColorで予測しない動きをしています。");
  }
}


// フロアを強制的にデフォルトカラーに戻す
function reColor() {
  // 各DOMの値を設定
  const l = 5; 
  for(let i = 0; i < l; i++) {
    floor[i].style.backgroundColor = defaultColor;
    light[i].style.backgroundColor = defaultColor;
    up[i].style.backgroundColor = defaultColor;
    down[i].style.backgroundColor = defaultColor;
  active = 0;
 }
}

// 1階のフロアから移動する
async function moveUp0() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[1].style.backgroundColor = defaultColor;
      floor[0].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[0].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[0].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[1].style.backgroundColor = defaultColor;
      floor[0].style.backgroundColor = currentFloorColor;
      active = 1;
  }
  stayFloor = 1;
}

// 2階のフロアから移動する
async function moveUp1() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } 
  stayFloor = 2;
}

async function moveDown1() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      active = 1;
  } 
  stayFloor = 2;
}

// 3階のフロアから移動する
async function moveUp2() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  }
  stayFloor = 3;
}

async function moveDown2() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      active = 1;
  }
  stayFloor = 3;
}

// 4階のフロアから移動する
async function moveUp3() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;  
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1; 
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  }
  stayFloor = 4;
} 

async function moveDown3() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    active = 1;
  } else {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      active = 1;
  }
  stayFloor = 4;
} 

// 5階のフロアから移動する
async function moveDown4() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[0].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[0].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 2) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 3) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      active = 1;
  } else if(stayFloor === 4) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      active = 1;
  } else {
    floor[4].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    active = 1;
  }
  stayFloor = 5;
}

// 各フロアのボタンイベントのクラス
class BtnE {
  clickBtn(btn: any, num2: any, num3: any, num4: any, func: any) {
    btn.addEventListener('click', () => {
      if(active === 1) {
        reColor();
        addColor(num2, num3, num4);
        func();
      }
    });
  }
}

const btn = new BtnE();

// 1階
btn.clickBtn(up[0], 0, 0, "", moveUp0);

// 2階
btn.clickBtn(up[1], 1, 1, "", moveUp1);
btn.clickBtn(down[1], 1, "", 1, moveDown1);

// 3階
btn.clickBtn(up[2], 2, 2, "", moveUp2);
btn.clickBtn(down[2], 2, "", 2, moveDown2);

// 4階
btn.clickBtn(up[3], 3, 3, "", moveUp3);
btn.clickBtn(down[3], 3, "", 3, moveDown3);

// 5階
btn.clickBtn(down[4], 4, "", 4, moveDown4);
