var a = "mno" , c = "lik", d = "lica", e = "izu", f = "doda", g = "pak" ; 
var b = "clanci_mnozina", h = "pak1", i = "hran", j = "hrana", l = "mnozina";
var k = "mnozina1" ;

// kada budes usao jos malo u materiju za parametre umesto ovih hiljadu var-a sam izvuci iz teksta potrebne div tagove

function preparPage(a, b){

	document.getElementById(a).onclick = function(){
if(document.getElementById(a).checked){
	document.getElementById(b).style.display = "block";

}else {
	document.getElementById(b).style.display = "none";

}
	};
	document.getElementById(b).style.display = "none";
}


window.onload = function () {
	preparPage(a,b);
	preparPage(c,d);
	preparPage(e,f);
	preparPage(g,h);
	preparPage(i,j);
	preparPage(k,l);
	/*$("h2").click(function(){
	$(this).fadeOut(2000);
}); */
};

