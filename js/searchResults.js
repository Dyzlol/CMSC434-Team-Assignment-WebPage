
function searchResultsOnLoad(){
	var searchTerm = getCookie("searchTerm");
	document.getElementById("putStuffHere").innerText = "Initial Change";
	document.getElementById("putStuffHere").innerText = searchTerm;
	
	document.getElementById("resultsBox").innerText = "results go here";
	
	
	
	// var xmldoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
	// xmldoc.load("./HCIdataApril24.xml");
    // console.log("made it");
	// var data = xmlToJson(xmldoc);
	// document.getElementById("resultsBox").innerText = data;
	
	// console.log("hi");
	// var data = xmlToJson(./HCIdataApril24.xml);
	// console.log(data);
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