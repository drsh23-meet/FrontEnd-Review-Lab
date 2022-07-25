//				var button = document.getElementById("color_change");
//				var body = document.getElementById("body");
//				button.addeventlistner('click',pressing);
//				function pressing(){
//					if (body.style.background !=='#90EE90'){
//						body.style.background='#90EE90';
//						}
//					else if (body.style.background !=='yellow'){
//						body.style.background='yellow';
//					}
//				}



function changeBackgroundColor(color){
	if (document.body.style.backgroundColor !== "blue"){
		document.body.style.backgroundColor = "blue";
	}
	else {
		document.body.style.backgroundColor = "yellow";
	}

}