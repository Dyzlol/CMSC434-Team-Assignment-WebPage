//We are SO sad


 function searchOnLoad(){

	document.getElementById("searchSubmit").onclick = function(){
		location.href="./searchResults.html";
		sessionStorage.setItem('searchTerm', document.getElementById("searchEventName").value);
	};
}