var search = document.querySelector(".search"),
	label = document.querySelector("label");
search.onclick = function(){
	label.style.display = "none";
};
search.onblur = function(){
	if(search.value == ""){
		label.style.display = "block";
	}
};