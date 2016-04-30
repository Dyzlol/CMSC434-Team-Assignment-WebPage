
function searchResultsOnLoad(){
	var searchTerm = getCookie("searchTerm");
	document.getElementById("putStuffHere").innerText = "Initial Change";
	document.getElementById("putStuffHere").innerText = searchTerm;
	
	document.getElementById("resultsBox").innerText = "Sorry, it seems we don't have any results for that search.";
	
	//var json = {"Event": [{"ID": "1", "Name": "Bob's Shelter", "Categories": { "Category": "Shelter" }, "Description": "This is a description", "StreetAddress": "8301 Baltimore Ave College Park MD, 20740", "Distance": "0.3", "Date": "5/20/2016", "Time": "10am", "OpenNow": "True"}]}
	var json = {"Event":[{"ID":"1","Name":"Bob's Shelter","Categories":{"Category":"Shelter"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"8301 Baltimore Ave College Park MD, 20740","Distance":"0.3","Date":"5/20/2016","Time":"10am","OpenNow":"True"},{"ID":"2","Name":"Caring Arms","Categories":{"Category":["Shelter","Food"]},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"7423 Baltimore Ave College Park, MD 20740","Distance":"0.7","Date":"5/18/2016","Time":"6pm","OpenNow":"False"},{"ID":"3","Name":"Sarah's Hope","Categories":{"Category":["Shelter","Food"]},"Description":"This is a desription","Image":"","Latitude":"","Longitude":"","StreetAddress":"5331 Baltimore Ave, Hyattsville MD, 20781","Distance":"2.5","Date":"5/21/2016","Time":"9am","OpenNow":"True"},{"ID":"4","Name":"Stepping Stone Shelter","Categories":{"Category":"Shelter"},"Description":"","Image":"","Latitude":"","Longitude":"","StreetAddress":"3621 Campus Drive College Park, MD 20740","Distance":"1.1","Date":"5/19/2016","Time":"","OpenNow":"True"},{"ID":"5","Name":"Denny's Brunch","Categories":{"Category":"Food"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"8424 Baltimore Ave College Park, MD 20740","Distance":"0.5","Date":"5/19/2016","Time":"12pm","OpenNow":"True"},{"ID":"7","Name":"Georgia's Kitchen","Categories":{"Category":"Food"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"4511 Knox Road College Park, MD 20740","Distance":"0.8","Date":"5/22/2016","Time":"6am","OpenNow":"True"},{"ID":"8","Name":"Brunch on Us","Categories":{"Category":"Food"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"4954 Lakeland Road College Park, MD 20740","Distance":"0.5","Date":"5/21/2016","Time":"10am","OpenNow":"False"},{"ID":"9","Name":"Doc in the Box","Categories":{"Category":"Health"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"4701 Melbourne Plaza College Park, MD 20740","Distance":"0.3","Date":"","Time":"","OpenNow":"True"},{"ID":"10","Name":"Patient First","Categories":{"Category":"Health"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"8900 Baltimore Ave College Park, MD 20740","Distance":"0.9","Date":"5/24/2016","Time":"8am","OpenNow":"True"},{"ID":"11","Name":"Job Skills Workshop","Categories":{"Category":["Skills","Job"]},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"8680 Baltimore Ave College Park, MD 20740","Distance":"2.0","Date":"5/23/2016","Time":"1pm","OpenNow":"True"},{"ID":"12","Name":"Alcoholics Anonymous","Categories":{"Category":"Skills"},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"8150 Baltimore Ave College Park, MD 20740","Distance":"0.2","Date":"5/20/2016","Time":"6pm","OpenNow":"True"},{"ID":"13","Name":"UMD Career Center","Categories":{"Category":["Skills","Job"]},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"4130 Campus Drive College Park, MD 20740","Distance":"0.4","Date":"5/18","Time":"5pm","OpenNow":"False"},{"ID":"14","Name":"Awesome Shelter","Categories":{"Category":["Shelter","Food","Health","Skills","Job"]},"Description":"This is a description","Image":"","Latitude":"","Longitude":"","StreetAddress":"1985 Corporal Frank Scott Drive College Park, MD 20740","Distance":"1.5","Date":"5/18/2016","Time":"11am","OpenNow":"True"}]};
	
	for(var i = 0; i < json.Event.length; i++) {
		if(i==0){document.getElementById("resultsBox").innerText="";} //If there are any results, remove default text
		var obj = json.Event[i];
		makeTemplate(obj);
	}
	
	// var xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
	// xmldoc.load("./HCIdataApril24.xml");
    // console.log("made it");
	// var data = xmlToJson(xmldoc);
	// document.getElementById("resultsBox").innerText = data;
	
	// console.log("hi");
	// var data = xmlToJson(./HCIdataApril24.xml);
	// console.log(data);
}

function makeTemplate(obj){
	
	var div = document.createElement("div");
	div.className = "resultTemplate clear";
	
	var topRow = document.createElement("div");
	topRow.className = "topRow";
	var name = document.createElement("p");
	name.innerText = obj.Name;
	name.className = "header floatLeft";
	topRow.appendChild(name);
	var dist = document.createElement("p");
	dist.innerText = obj.Distance + " miles";
	dist.className = "floatRight";
	topRow.appendChild(dist);
	
	var fixFloat = document.createElement("div");
	fixFloat.className = "clear";
	
	var midRow = document.createElement("div");
	midRow.innerText = makeCategoryString(obj.Categories);
	midRow.className = "midRow";
	
	var bottomRow = document.createElement("div");
	bottomRow.className = "";
	var description = document.createElement("p");
	description.innerText = obj.Description; //todo: change this to something else (?), make sure it doesn't overflow, etc
	description.className = "floatLeft";
	bottomRow.appendChild(description);
	var rightArrow = document.createElement("p");
	rightArrow.innerHTML = "&#8680";
	rightArrow.className = "rightArrow hover floatRight";
	bottomRow.appendChild(rightArrow);
	
	var fixFloat2 = document.createElement("div");
	fixFloat2.className = "clear";
	
	// var fixFloat3 = document.createElement("div");
	// fixFloat3.className = "clearResult";
	
	//div.appendChild(fixFloat3);
	div.appendChild(topRow);
	div.appendChild(fixFloat);
	div.appendChild(midRow);
	div.appendChild(bottomRow);
	div.appendChild(fixFloat2);
	
	document.getElementById("resultsBox").appendChild(div);
}

function makeCategoryString(categories){
	console.log(categories.Category);
	var str = "Services offered: ";
	//If there are multiple categories, concatenate them in a comma-separated string
	//This is necessary because json thinks Category is just a string if there's only one category, but an array is there are multiple
	if(categories.Category[0].length > 1){
		len = categories.Category.length;
		for(var i = 0; i < len-1; i++) {
			str = str + categories.Category[i] + ", ";
		}
		str = str + categories.Category[len-1];
		return str;
	} else { //only one category, return it
		return str + categories.Category;
	}
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
 

// Changes XML to JSON
xmlToJson = function(xml) {
    var obj = {};
    if (xml.nodeType == 1) {                
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { 
        obj = xml.nodeValue;
    }            
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}