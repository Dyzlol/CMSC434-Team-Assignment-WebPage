#####Project Title: Neighbor to Neighbor
######Group Website Project - Web tool for helping those in poverty in the Greater DC area find resources which might help them.


##Authors:
- Amelia Bateman
- Michelle Cody
- Zifan Xiao
- Tony Young


##Application Description:
Neighbor to Neighbor is an information aggregator, housing information about resources for people in poverty in the greater DC area. The information is crowdsourced from members of the community, creating a sense of unity and philanthropy. Users can use the search feature to find resources via search query and category filters, plus organization or results via relevance or distance. Users can also add new information to the database using a simple web form.

##To Run Code:
- Clone the repository
- Open index.html in a browser to navigate to the home page

##Pages
- index.html: home page
- style.css: all CSS styles added in web development, plus some from the original template
- search.html and search.js: the html page and code for the search page
- searchResults.html and searchResults.js: the html page and code for the search results page. This page contains the fake data, the templates for the regular and expanded search results (which are created dynamically using pure JavaScript), and the search algorithms (to be customized)
- newInfoForm.html: the information addition html page. The logic of storing new information is done using PHP and forms
- processInput.php: the PHP for processing the new information from newInfoForm.html, then storing it in an XML file (unused due to fake data)
- about.html: simple text about the organization, found via the top right "About" button
- submitted.html: simple text confirming new information submission and prompting for another submission or to return to index.html

##Sources
- Template and styles from http://templated.co/
- Information about JavaScript templating from http://www.ezineasp.net/post/Javascript-Create-New-Div-HTML-Element-Dynamically.aspx
- Logo created via http://logotypemaker.com/

##TODO:
- Link to actual social media sites in footer
- Remove fake JSON data and replace with XML read from a server
- Change cookie-based search to instead send messages between pages via POST requests
- Implement passesSearch() in searchResults.js, which takes in data of a single organization/event and returns true only if the data is deemed relevant to the search query and/or categories entered by the user
- Implement map functionality in expanded search result, which currently uses a screenshot of a single google map


##Bugs:
- Chrome does not support cookies as used in this webpage. However, the cookies are used to hook up fake data and will not be needed once modifications are made to support real data.
