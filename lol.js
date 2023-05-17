/* all variables */
let h1Td = document.getElementById("h1");
let totalId = document.getElementById("total");


/* music */
let audio = document.getElementById("audio");     /* трек 1 */
let audio_2 = document.getElementById("audio_2"); /* трек 2 */
let audio_3 = document.getElementById("audio_3"); /* трек 3 */

let Volume_plass = document.getElementById("plass");
let Volume_minus = document.getElementById("minus");
let button = document.getElementById("button");
let Next = document.getElementById("Next");


/* music */
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


/* Authors */
let Autor_Backround = document.getElementById("Autor_Backround");
let Autor_img_2 = document.getElementById("Autor_img_2");
let Autor_button = document.getElementById("Autor_button");
let Autors_TXT = document.getElementById("Autors_TXT");
let Autor_store = document.getElementById("Autor_store");


/* Popup window */
let PopUp_Window = document.getElementById("PopUp_Window");
let PopUp_Button = document.getElementById("PopUp_Button");
let Price_TXT = document.getElementById("Price_TXT");


/* upgrade */
let upgradeId = document.getElementById("upgrade");
let upgrade_2Id = document.getElementById("upgrade_2");
let upgrade_3Id = document.getElementById("upgrade_3");


let flag_2 = true;


/* item value */
let numberr = 1; /* number of clicks per click */
let counter = 0; /* amount of clicks */
let price = 100; /* cost level up */
let price_2 = 10;/* auto click cost */
let price_3 = 1000;/*  */
let Auto_Count = 0; /* number of auto clicks */
let numeric = 0.5; /* how much one auto clicker will click */
let numberrr = 1;


let base_price_1 = price; /* base price 1*/
let base_price_2 = price_2; /* base price 2*/
let base_price_3 = price_3; /* base price 3*/


/* functions */
/* main button click function */
function clicker() {
 counter += numberr;
 /* change the content of the variable */
 h1Td.textContent = "Clicks made: " + counter;
}


/* put the value 4900*/.
/* page preloader*/
window.onload = function () {
 document.body.classList.add('loaded_hiding');
 window.setTimeout(function () {
  document.body.classList.add('loaded');
  document.body.classList.remove('loaded_hiding');
 }, 4700);
}


/* music louder /*
function Plasss() {
 Volume_plass.addEventListener("click", function() {
  audio.volume += 0.1;
  audio_2.volume += 0.1;
  audio_3.volume += 0.1;
 });
}


/* quieter */
function Minuss() {
 Volume_minus.addEventListener("click", function() {
  audio.volume -= 0.1;
  audio_2.volume -= 0.1;
  audio_3.volume -= 0.1;
 });
}

var item = 0;
/* next music */
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
 /* click event */
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
   if (confirm("Are you sure you want to zero your progress ?") == true) {
    counter = 0; /* сумма кликов */
    price = base_price_1; /* cost level up */
    price_2 = base_price_2;/* auto click cost */
    price_3 = base_price_3;/* auto clicker enhancement */
    
    priceId.textContent = " Level Up ↑ : " + price;
    price_2Id.textContent = " Auto Clicker : " + price_2;    
    price_3Id.textContent = "Upgrade Cliker ↑ : " + price_3;
    



    Auto_Count = 0; /* number of auto clicks */
    numeric = 0.5; /* How much will one auto clicker click */
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

 /* the button that closes everything in the store */
function back_button() {
 /* click event */
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


 /* authors tab */
function Autors() {
 /* click event */
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

 /* the button that closes the authors tab */
function cross() {
 /* click event */
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


/* auto clicker function */
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
 /* click event */
 upgrade_3Id.addEventListener("click", function() {
 
 if (counter >= price_3) {
   counter -= price_3;   
   numberrr += 1;   
   price_3 = Math.trunc(base_price_3 * 1.15 ** numberrr); /* doubling the price */
   h1Td.textContent = "Clicks made: " + counter;
   price_3Id.textContent = "Upgrade Cliker ↑ : " + price_3;
 } else {
	  let MONEY_3 = price_3 - counter;
	  PopUp(MONEY_3);
  }
 });
}


function buy() {
 /* click event */
 upgradeId.addEventListener("click", function() {

  /* Check for lack of clicks */
 if (counter >= price) {
    /* increase per click by 1 */
   numberr += 1; 
    /* add to the main counter */
   totalId.textContent = "Clicks per click : " + numberr; 
   
    /* subtract the amount from the number of clicks */
   counter -= price;   
   /* multiply the cost by 1.15 */
   price = Math.trunc(base_price_1 * 1.15 ** numberr);
   /* show how many clicks we have now */
   h1Td.textContent = "Clicks made: " + Math.trunc(counter);
   /* We show you how much the improvements are worth now */
   priceId.textContent = " Level Up ↑ : " + price;
  
  } else {
	  let MONEY = price - counter;
	  PopUp(MONEY);
  }
 });
}


function buy_2() {
 /* click event */
 upgrade_2Id.addEventListener("click", function() {
 
 if (counter >= price_2) {
   counter -= price_2;   
   Auto_Count += 1;   
   price_2 = Math.trunc(base_price_2 * 1.30 ** Auto_Count); /* increase the price by half and remove the fractions */
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


 /* sound for the button 
 ps: I just brazenly copied it from the net because I didn't know how to do it even approximately */
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


/* function call */
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

