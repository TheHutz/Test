function insertText() {
	document.getElementById("newContent").innerHTML= " Some new text: <br> Fagget <br>"
}
function calculate(){
	var t = widthBox.value;
	// Read from the textboxses
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lenghtBox").value;
	var h = document.getElementById("heightBox").value;
	// Convert to float
	w = parseFloat(w);
	h = parseFloat(h);
	l = parseFloat(l);
	var result = w * h * l;
	document.getElementById("result").innerHTML = result;
}
function multiplication(){
	document.getElementById("mult-tb").innerHTML="";
	var f = document.getElementById("factor").value;
	for(var i=1;i<=10;i++){
		var res=f*i;
		document.getElementById("mult-tb").innerHTML+= res+"<br/>";
	}
}

