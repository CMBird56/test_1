var provera = prompt("1+1=?");
if(provera == 2){
var newList = document.createElement("li");

var newListText = document.createTextNode("This is a bonus for those smarter than apes");

newList.appendChild(newListText);

document.getElementById("list").appendChild(newList);
}else{ alert("Something did't load properly!")}
/////////////////////////////////////
var myImage = document.getElementById("lol");

var imageArray = ["images/test picture.png","images/Searches.png","images/User Folder.png", "images/Videos.png" ];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,1000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};



//////////////////////////////////////////////////////////////

/*var banana;
var promena = prompt("If you have 2 cakes and you eat one, how many trees you have left?");
if(promena == 5) {
	promena *= 4 ;
}else{
	promena -= 4 ;
}

alert(promena +" is love, " + promena + " is life");

	for (var i = 0; i < 2 ; i++) {
	alert("Hello number " + i) ;
};


function pereca (x, y){
	var rerna = x*y;
	return rerna;
}

banana = pereca(5,4);
alert(banana);				


var cikopiko = Array();
cikopiko[0] = "sunasce";
var pikociko = [2,4,6,8];
alert(cikopiko[0]);
alert(pikociko[3]);

// kada koristimo + znak i jedan od clanova je string, cela operacija ce biti konkatenacija, a ne zbir
// moze se ispraviti sa funkcijom number() koja tretira string kao broj ako je broj

var titlovi = { ime: "ZORAN"};

alert(titlovi.ime);

*/