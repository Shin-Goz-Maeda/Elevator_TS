// フロア（エレベータ動作域）のElementを取得
export const floor: any = new Array(5);
  floor[1] = document.getElementById('floor1');
  floor[2] = document.getElementById('floor2');
  floor[3] = document.getElementById('floor3');
  floor[4] = document.getElementById('floor4');
  floor[5] = document.getElementById('floor5');

// 現在地を示すフロアライトのElementを取得
export const light: any = new Array(5);
  light[1] = document.getElementById('light1');
  light[2] = document.getElementById('light2');
  light[3] = document.getElementById('light3');
  light[4] = document.getElementById('light4');
  light[5] = document.getElementById('light5');

// 上昇ボタンのElementを取得
export const up: any = new Array(4);
  up[1] = document.getElementById('up1');
  up[2] = document.getElementById('up2');
  up[3] = document.getElementById('up3');
  up[4] = document.getElementById('up4');

// 下降ボタンのElementを取得
export const down: any = new Array(4);
  down[2] = document.getElementById('down2');
  down[3] = document.getElementById('down3');
  down[4] = document.getElementById('down4');
  down[5] = document.getElementById('down5');

// 全体のデフォルトカラー設定
export const defaultColor: string | number = "#CCCCCC";

// 現在地を示すカラー設定
export const currentFloorColor: string | number = "blue";
export const currentLightColor: string | number = "red";
export const currentBtnColor: string | number = "yellow";

// エレベータがフロアを移動している時のカラー設定
export const moveFloorColor : string | number = "yellow";

// エレベータが停止している階の初期値
export let stayFloor: number = 1;
export let activate: number = 1;

// ボタンをクリックした時、色をつける
export function addColor(ch: number, uBtn: any, dBtn: any) {
  // 選択フロアに色をつける
  light[ch].style.backgroundColor = currentLightColor;
  if(uBtn != "") {
    up[uBtn].style.backgroundColor = currentBtnColor;
  } else if(dBtn != "") {
    down[dBtn].style.backgroundColor = currentBtnColor;
  } else {
    console.log("addColorで予測しない動きをしています。");
  }
}

// フロアを強制的にデフォルトカラーに戻す
export function reColor() {
  floor[1].style.backgroundColor = defaultColor;
  floor[2].style.backgroundColor = defaultColor;
  floor[3].style.backgroundColor = defaultColor;
  floor[4].style.backgroundColor = defaultColor;
  floor[5].style.backgroundColor = defaultColor;

  light[1].style.backgroundColor = defaultColor;
  light[2].style.backgroundColor = defaultColor;
  light[3].style.backgroundColor = defaultColor;
  light[4].style.backgroundColor = defaultColor;
  light[5].style.backgroundColor = defaultColor;

  up[1].style.backgroundColor = defaultColor;
  up[2].style.backgroundColor = defaultColor;
  up[3].style.backgroundColor = defaultColor;
  up[4].style.backgroundColor = defaultColor;

  down[2].style.backgroundColor = defaultColor;
  down[3].style.backgroundColor = defaultColor;
  down[4].style.backgroundColor = defaultColor;
  down[5].style.backgroundColor = defaultColor;

  activate = 0;
}

// function reColor() {
//   let i = 0;
//   while(i <= floor.length, light.length, up.length, down.length) {
//     floor[i].style.backgroundColor = defaultColor;
//     light[i].style.backgroundColor = defaultColor;
//     up[i].style.backgroundColor = defaultColor;
//     down[i].style.backgroundColor = defaultColor;
//     i++;
//   }
// }

// 1階のフロアから移動する
export async function moveUp1() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[1].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
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
      activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[5].style.backgroundColor = defaultColor;
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
      activate = 1;
  }
  stayFloor = 1;
}

// 2階のフロアから移動する
export async function moveUp2() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } 
  stayFloor = 2;
}

export async function moveDown2() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = currentFloorColor;
      activate = 1;
  } 
  stayFloor = 2;
}

// 3階のフロアから移動する
export async function moveUp3() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  }
  stayFloor = 3;
}

export async function moveDown3() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます");
    activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1);   
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = currentFloorColor;
      activate = 1;
  }
  stayFloor = 3;
}

// 4階のフロアから移動する
export async function moveUp4() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
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
      activate = 1; 
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  }
  stayFloor = 4;
} 

export async function moveDown4() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
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
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    activate = 1;
  } else {
    floor[5].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[5].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = currentFloorColor;
      activate = 1;
  }
  stayFloor = 4;
} 

// 5階のフロアから移動する
export async function moveDown5() {
  const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000));
  if(stayFloor === 1) {
    floor[1].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[1].style.backgroundColor = defaultColor;
      floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[5].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 2) {
    floor[2].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[2].style.backgroundColor = defaultColor;
      floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[5].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 3) {
    floor[3].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[3].style.backgroundColor = defaultColor;
      floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[5].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else if(stayFloor === 4) {
    floor[4].style.backgroundColor = moveFloorColor;
    await sleep(1); 
      floor[4].style.backgroundColor = defaultColor;
      floor[5].style.backgroundColor = currentFloorColor;
      activate = 1;
  } else {
    floor[5].style.backgroundColor = currentFloorColor;
    console.log("ドアが開きます。");
    activate = 1;
  }
  stayFloor = 5;
}

