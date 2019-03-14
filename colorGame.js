var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn")

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];



	// add click event listeners to squares
	squares[i].addEventListener("click",function(){
	// grab the color of the picked square and compare it with the pickeColor
		var clickedColor=this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!!!";
			changeColors(clickedColor);
			reset.textContent="play again";
			

			
			h1.style.backgroundColor=pickedColor;

		}
		else{
			//fade out that sqaure box
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again!!";
		}

	})

}
reset.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor=pickColor();
	//chnage colorDisplay
	colorDisplay.textContent=pickedColor;
	//chnage colors of all the squares
	for(var i=0;i<squares.length;i++){
	
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";	
	messageDisplay.textContent=null;
	
});


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");	
	numSquares=3;

	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
}
	for(var i=3;i<6;i++)
		squares[i].style.display="none";

});


hardBtn.addEventListener("click",function(){
		hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;	
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
	squares[i].style.display="block";
}	
});



//this function changes the color of all the squares to the color of the correct square when it's selected
function changeColors(color){
				for(var i=0;i<squares.length;i++){
				squares[i].style.backgroundColor=color;
			}
}
//Math.random() selects a number b/w 0 and 1(excluding 1)
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add 'num' random colors to the array
	for(var i=0;i<num;i++){
		//get random color and push them into the array 
		arr[i]=randomColors();

	}
	//return the array
	return arr;
}

//declaring a function which will generate the random colors
function randomColors(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g=Math.floor(Math.random()*256);
	//pick a " " from 0-255
	var b=Math.floor(Math.random()*256);
	// target is to return "rgb(r, g, b)"
	return "rgb(" + r + "," +" " +g +"," +" "+ b +")";
}