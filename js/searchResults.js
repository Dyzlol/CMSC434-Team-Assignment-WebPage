
function searchResultsOnLoad(){
	console.log(window.sessionStorage);
	
	var searchTerm = getCookie("searchTerm");
	document.getElementById("putStuffHere").innerText = "Initial Change";
	document.getElementById("putStuffHere").innerText = searchTerm;
	
	
	var searchTerm = sessionStorage['searchTerm'];
	// if (searchTerm === "a"){
		// document.getElementById("putStuffHere").innerText = sessionStorage['searchTerm'];
		// document.getElementById("putStuffHere").innerText = "How did this happen?";
	// } else{
		// document.getElementById("putStuffHere").innerText = "Initial Change";
	// }
}

function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i = 0; i <ca.length; i++) {
         var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
     }
     return "";
 } 