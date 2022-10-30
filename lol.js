/* все переменные */
let h1Td = document.getElementById("h1");
let totalId = document.getElementById("total");


/* музыка */
let audio = document.getElementById("audio");     /* трек 1 */
let audio_2 = document.getElementById("audio_2"); /* трек 2 */
let audio_3 = document.getElementById("audio_3"); /* трек 3 */

let Volume_plass = document.getElementById("plass");
let Volume_minus = document.getElementById("minus");
let button = document.getElementById("button");
let Next = document.getElementById("Next");


/* магазин */
let storeId = document.getElementById("store");
let store_2Id = document.getElementById("store_2");
let store_3Id = document.getElementById("store_3");

let shopId = document.getElementById("Shop");
let priceId = document.getElementById("price");
let price_2Id = document.getElementById("price_2");
let price_3Id = document.getElementById("price_3");

let background = document.getElementById("background");
let element = document.getElementById("element");
let Blink_All = document.getElementById("Blink_All");
let button_back = document.getElementById("back");
let Auto_Click = document.getElementById("Auto_click"); 
let reset_button = document.getElementById("reset_button");  


/* Авторы */
let Autor_Backround = document.getElementById("Autor_Backround");
let Autor_img_2 = document.getElementById("Autor_img_2");
let Autor_button = document.getElementById("Autor_button");
let Autors_TXT = document.getElementById("Autors_TXT");
let Autor_store = document.getElementById("Autor_store");


/* ПопАп окно */
let PopUp_Window = document.getElementById("PopUp_Window");
let PopUp_Button = document.getElementById("PopUp_Button");
let Price_TXT = document.getElementById("Price_TXT");


/* апгрейд */
let upgradeId = document.getElementById("upgrade");
let upgrade_2Id = document.getElementById("upgrade_2");
let upgrade_3Id = document.getElementById("upgrade_3");


let flag_2 = true;


/* стоимость вещей */
let numberr = 1; /* количество кликов за клик */
let counter = 0; /* сумма кликов */
let price = 100; /* стоимость level up */
let price_2 = 10;/* стоимость авто клика */
let price_3 = 1000;/*  */
let Auto_Count = 0; /* количество авто кликов */
let numeric = 0.5; /* сколько будет кликать 1 авто кликер */
let numberrr = 1;


let base_price_1 = price; /* базовая цена 1*/
let base_price_2 = price_2; /* базовая цена 2*/
let base_price_3 = price_3; /* базовая цена 3*/


/* функции */
/* функция клика на глав кнопку */
function clicker() {
 counter += numberr;
 /* изменение контента переменной */
 h1Td.textContent = "Clicks made: " + counter;
}


/* поставить значение 4900*/
/* preloader странички*/
window.onload = function () {
 document.body.classList.add('loaded_hiding');
 window.setTimeout(function () {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
 }, 4700);
}


/* музыка громче*/
function Plasss() {
 Volume_plass.addEventListener("click", function() {
  audio.volume += 0.1;
  audio_2.volume += 0.1;
  audio_3.volume += 0.1;
 });
}


/* тише */
function Minuss() {
 Volume_minus.addEventListener("click", function() {
  audio.volume -= 0.1;
  audio_2.volume -= 0.1;
  audio_3.volume -= 0.1;
 });
}

var item = 0;
/* след музыка */
function __Next__() {
 Next.addEventListener("click", function() {  
  item += 1;

  if(item == 1) {
   audio.play();
   audio_2.pause();
   audio_3.pause();  
   
  } else if(item == 2) {
   audio.pause();
   audio_2.play();
   audio_3.pause();
   
  } else if(item == 3) {
   audio.pause();  
   audio_2.pause();  
   audio_3.play();  
   
  } else if(item > 3) {
   item = 0;
   __Next__();
  } 

 });
}


function shop() {
 /* ивент по нажатию клика на кнопку */
 shopId.addEventListener("click", function() {
  storeId.style.display="inline"; 	
  store_2Id.style.display="inline"; 
  store_3Id.style.display="inline"; 
  element.classList.add("blur");    
  background.style.display="inline"; 
  button_back.style.display="inline";
  Autor_store.style.display="inline";
  reset_button.style.display="inline";
 });
}

function reset() {
  if (counter >= 10000) {
   if (confirm("Вы точно хотите обнулировать прогресс ?") == true) {
    counter = 0; /* сумма кликов */
    price = base_price_1; /* стоимость level up */
    price_2 = base_price_2;/* стоимость авто клика */
    price_3 = base_price_3;/* усиление автокликера */
    
    priceId.textContent = " Level Up ↑ : " + price;
    price_2Id.textContent = " Auto Clicker : " + price_2;    
    price_3Id.textContent = "Upgrade Cliker ↑ : " + price_3;
    



    Auto_Count = 0; /* количество авто кликов */
    numeric = 0.5; /* сколько будет кликать 1 авто кликер */
    numberrr = 1;
    numberr = 1;
    flag_2 = false;

    h1Td.textContent = "Clicks made: " + 0;
    click_per_second.textContent = "Clicks per second : " + 0;
    Auto_Click.textContent =  "You have Auto_Click : " + 0;
    totalId.textContent = "Clicks per click : " + 1; 
   }
  } else {
   let MONEY_reset = 10000 - counter;
   PopUp(MONEY_reset);
  }
}

 /* кнопка каторая закрывает всё в магазиине */
function back_button() {
 /* ивент по нажатию клика на кнопку */
 button_back.addEventListener("click", function() {
  storeId.style.display="none"; 	
  store_2Id.style.display="none";
  store_3Id.style.display="none";   
  element.classList.remove("blur");    
  background.style.display="none"; 
  button_back.style.display="none";
  Autor_store.style.display="none";
  PopUp_Window.style.display="none";
  PopUp_Button.style.display="none";
  Price_TXT.style.display="none";
  Autor_Backround.style.display="none";
  Autor_img_2.style.display="none";
  Autors_TXT.style.display="none";
  reset_button.style.display="none";
 });
}


 /* вкладка авторы */
function Autors() {
 /* ивент по нажатию клика на кнопку */
 Autor_store.addEventListener("click", function() {
  Autor_button.style.display="inline";
  Autor_Backround.style.display="inline";
  Autor_img_2.style.display="inline";
  Autors_TXT.style.display="inline";
  PopUp_Window.style.display="none";
  PopUp_Button.style.display="none";
  Price_TXT.style.display="none";

 });
}

 /* кнопка каторая закрывает вкладку авторы */
function cross() {
 /* ивент по нажатию клика на кнопку */
 Autor_button.addEventListener("click", function() {
    Autor_button.style.display="none";
    Autor_Backround.style.display="none";
	  Autor_img_2.style.display="none";
	  Autors_TXT.style.display="none";
 });
}


function PopUp(money) {
  Price_TXT.textContent = "You are lacking : " + money;  
  PopUp_Window.style.display="inline";
  PopUp_Button.style.display="inline";
  Price_TXT.style.display="inline";
  Autor_button.style.display="none";
  Autor_Backround.style.display="none";
  Autor_img_2.style.display="none";
  Autors_TXT.style.display="none";
  
  PopUp_Button.addEventListener("click", function() {
   PopUp_Window.style.display="none";
   PopUp_Button.style.display="none";
   Price_TXT.style.display="none";
 });
}


/* функция авто кликера */
function Auto_clicker() {
 for (let i = 0; i < 1; i++) {
  if (flag_2 == true) {
  counter += numeric * numberrr;
  click_per_second.textContent = "Clicks per second : " + numeric * numberrr;;
  h1Td.textContent = "Clicks made: " + counter;
  } else {
    break;
  }
 }
}


function buy_3() {
 /* ивент по нажатию клика на кнопку */
 upgrade_3Id.addEventListener("click", function() {
 
 if (counter >= price_3) {
   counter -= price_3;   
   numberrr += 1;   
   price_3 = Math.trunc(base_price_3 * 1.15 ** numberrr); /* увеличиваем цену в 2раза */
   h1Td.textContent = "Clicks made: " + counter;
   price_3Id.textContent = "Upgrade Cliker ↑ : " + price_3;
 } else {
	  let MONEY_3 = price_3 - counter;
	  PopUp(MONEY_3);
  }
 });
}


function buy() {
 /* ивент по нажатию клика на кнопку */
 upgradeId.addEventListener("click", function() {

  /* проверка на нехватку кликов */
 if (counter >= price) {
    /* увеличиваем за клик на 1 */
   numberr += 1; 
    /* добавляем  к глав счётчику */
   totalId.textContent = "Clicks per click : " + numberr; 
   
    /* отнимаем сумму от кол-во кликов */
   counter -= price;   
   /* умножаем стоимость на 1.15 */
   price = Math.trunc(base_price_1 * 1.15 ** numberr);
   /* показываем сколько у нас сейчас кликов */
   h1Td.textContent = "Clicks made: " + Math.trunc(counter);
   /* показываем визиально сколько стоят сейчас улучшение */
   priceId.textContent = " Level Up ↑ : " + price;
  
  } else {
	  let MONEY = price - counter;
	  PopUp(MONEY);
  }
 });
}


function buy_2() {
 /* ивент по нажатию клика на кнопку */
 upgrade_2Id.addEventListener("click", function() {
 
 if (counter >= price_2) {
   counter -= price_2;   
   Auto_Count += 1;   
   price_2 = Math.trunc(base_price_2 * 1.30 ** Auto_Count); /* увеличиваем цену в половину раз и убираем дроби */
   h1Td.textContent = "Clicks made: " + counter;
   price_2Id.textContent = " Auto Clicker : " + price_2;    

   Auto_Click.textContent =  "You have Auto_Click : " + Auto_Count;
   if (Auto_Count != 1) {
    numeric += 0.5;  
	  click_per_second.textContent = "Clicks per second : " + numeric * numberrr;
   } else {
    flag_2 = true;	  
    setInterval(Auto_clicker, 1000);
	  click_per_second.textContent = "Clicks per second : " + numeric * numberrr;
   }
 } else {
	  let MONEY_2 = price_2 - counter;
	  PopUp(MONEY_2);
  }
 });
}


 /* звук для кнопки 
 ps: просто нагло скопировал с энета потому-что не знал как это сделать даже примерно */
function setupSynth() {
 window.synth = new Tone.Synth({
  oscillator: {
  type: 'sine',
  modulationFrequency: 0.5
 },
  envelope: {
  attack: 0,
  decay: 0.3,
  sustain: 0,
  release: 0.1,
   }
 }).toMaster();
}


function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  window.synth.triggerAttackRelease(590, '9n');
}

button.addEventListener('touchstart', function(e) {
  e.stopPropagation();
  e.preventDefault();
  boopMe();
});
button.addEventListener('mousedown', boopMe);


/* вызов функции */
shop();
buy();
buy_2();
buy_3();
Minuss();
Plasss();
back_button();
cross();
Autors();
__Next__();

