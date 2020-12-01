var coinsField = document.getElementById('coinsTextField');
var remainingCoins = document.getElementById('remainingCoins');
var historyLabel = document.getElementById("history");
var imagesArray = ["aguacate.png", "ajo.png", "cebolla.png", "pepino.png", "puerro.png", "tomate.png", "zanahoria.png"];
// var imagesArray2 = ["aguacate.png", "ajo.png", "cebolla.png", "pepino.png", "puerro.png", "tomate.png", "zanahoria.png"];
// var imagesArray3 = ["aguacate.png", "ajo.png", "cebolla.png", "pepino.png", "puerro.png", "tomate.png", "zanahoria.png"];


var spinBox1 = document.getElementById('spinBox1');
var spinBox2 = document.getElementById('spinBox2');
var spinBox3 = document.getElementById('spinBox3');
var lastIndex1 = 0;
var lastIndex2 = 0;
var lastIndex3 = 0;
var history1 = "";
var spinResult = document.getElementById('spinResult');

var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);
var randomNumber3 = Math.floor(Math.random() * 7);

spinBox1.src = "assets/img/"+ imagesArray[randomNumber1];
spinBox2.src = "assets/img/"+ imagesArray[randomNumber2];
spinBox3.src = "assets/img/"+ imagesArray[randomNumber3];

var count = 0;
function spin(){
	// returns a random integer from 0 to 6
	var randomNumber1 = Math.floor(Math.random() * 7);
	var randomNumber2 = Math.floor(Math.random() * 7);
	var randomNumber3 = Math.floor(Math.random() * 7);

	spinBox1.src = "assets/img/"+ imagesArray[randomNumber1];
	spinBox2.src = "assets/img/"+ imagesArray[randomNumber2];
	spinBox3.src = "assets/img/"+ imagesArray[randomNumber3];
	
	if(count < 15){
		count++;
		setTimeout(spin, 120);
	}else{
		console.log("Loop exit!");
		lastIndex1 = randomNumber1;
		lastIndex2 = randomNumber2;
		lastIndex3 = randomNumber3;
		count = 0;
	}
}

function toggleDialogVisibility(elemName){
    var dialogBox = document.getElementById(elemName);
    
    if(coinsField.value == ""){

    }else{
    	document.getElementById('controllers').style.visibility='visible';
    	document.getElementById('slotsContainer').style.visibility='visible';
    	remainingCoins.innerHTML = coinsField.value;
    	dialogBox.style.visibility = "hidden";	
    }
}

// function generateResult(x,y){
// 	remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + x;
// 	history1 += y+", +"+x+" coins<br>";
// 	spinResult.innerHTML = y+", +"+x+" coins";
// }

// zanahoria ->    6 6 6     = 10
// zanahoria -> 6 6          = 4
// except zanahoria -> ? ?   = 2
// zanahoria -> 6            = 1
// except zanahoria -> ? ? ? = 5
// zanahoria -> ? ? 6        = 3
function writeResult(){
	if(lastIndex1 == 6 && lastIndex2 == 6 && lastIndex3 == 6){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 10;
		history1 += "Three Carrots, +10 coins<br>";
		spinResult.innerHTML = "Three Carrots, +10 coins<br>";
	}else if((lastIndex1 == 6 && lastIndex2 == 6) || (lastIndex1 == 6 && lastIndex3 == 6) || (lastIndex2 == 6 && lastIndex3 == 6)){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 4;
		history1 += "Two Carrots, +4 coins<br>";
		spinResult.innerHTML = "Two Carrots, +4 coins<br>";
	}else if( ((lastIndex1 == lastIndex2) && lastIndex3 == 6) || ((lastIndex2 == lastIndex3) && lastIndex1 == 6) || ((lastIndex1 == lastIndex3) && lastIndex2 == 6) ){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 3;
		history1 += "Two Identical Vegitables one carrots , +3 coins<br>";
		spinResult.innerHTML = "Two Identical Vegitables one carrots , +3 coins<br>";
	}else if( lastIndex1 == 6 || lastIndex2 == 6 || lastIndex3 == 6 ){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 1;
		history1 += "One Carrots , +1 coins<br>";
		spinResult.innerHTML = "One Carrots , +1 coins<br>";
	}else if((lastIndex1 != 6 && lastIndex2 != 6 && lastIndex3 != 6) && (lastIndex1 == lastIndex2 && lastIndex2 == lastIndex3)){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 5;
		history1 += "Three Identical Vegitables other than carrots , +5 coins<br>";
		spinResult.innerHTML = "Three Identical Vegitables other than carrots , +5 coins<br>";
	}else if( ((lastIndex1 == lastIndex2) && lastIndex1 != 6) || ((lastIndex2 == lastIndex3) && lastIndex3 != 6) || ((lastIndex1 == lastIndex3) && lastIndex1 != 6) ){
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) + 2;
		history1 += "Two Identical vegitables other than carrots , +2 coins<br>";
		spinResult.innerHTML = "Two Identical vegitables other than carrots , +2 coins<br>";
	}
	console.log(history1);
	historyLabel.innerHTML = history1;
}

function performThrow(){
	// CONDITIONS
	
	
	if (parseInt(remainingCoins.innerHTML) > 0) {
		// lastIndex1
		// lastIndex2
		// lastIndex3
		spin();
		remainingCoins.innerHTML = parseInt(remainingCoins.innerHTML) - 1;
		setTimeout(writeResult, 2000);
	}else{
		alert("You are out of coins!");
	}
}

