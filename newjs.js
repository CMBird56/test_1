window.onload = function(){
	$("#majorDiv").accordion();
	getData();

function getData(){

	$.get("xml.xml", function(result){
		var tel = result.getElementsByTagName("phone")[0];
		var name = result.getElementsByTagName("name")[0];
		var rezult = "telefon: " + tel.firstChild.nodeValue + " ime: " + name.firstChild.nodeValue ;

		$("#nestoDrugo").append(rezult);
	});
}

};