function svis(){
	var search = document.getElementById('search');
	if (search.style.visibility == "visible")
		search.style.visibility = "hidden";
	else
		search.style.visibility = "visible";
}

function mine(){
	if (canvas.style.visibility == "visible")
		canvas.style.visibility = "hidden";
	else
		canvas.style.visibility = "visible";
}