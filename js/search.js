//We are SO sad


 function setUp(){

	document.getelementbyid("searchsubmit").onclick = function(){
		location.href="./searchresults.html";
		var div = document.createelement("div");
		div.classname = "huge";
		div.innertext = "look at me";
		document.appendchild(div);
	};
}