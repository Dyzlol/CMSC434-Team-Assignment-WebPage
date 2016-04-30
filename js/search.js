//We are SO sad


 function searchOnLoad(){

 
	document.getElementById("searchSubmit").onclick = function(){
		//Set cookie with string of search term, for use in search results logic
		document.cookie = "searchTerm="+ document.getElementById("searchEventName").value;
		
		//Set true/false cookies for each category
		var checkBoxes = [$("#categoryFood").is(":checked"), $("#categoryShelter").is(":checked"), $("#categoryHealth").is(":checked"),
		 $("#categorySkills").is(":checked"), $("#categoryJobs").is(":checked"), $("#categoryOther").is(":checked")];
		document.cookie = "food="+checkBoxes[0];
		document.cookie = "shelter="+checkBoxes[1];
		document.cookie = "health="+checkBoxes[2];
		document.cookie = "skills="+checkBoxes[3];
		document.cookie = "jobs="+checkBoxes[4];
		document.cookie = "other="+checkBoxes[5];
		
		//Navigate to search results
		location.href="./searchResults.html";
	};
	
	
}