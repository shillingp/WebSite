/*jshint browser: true, lastsemic: true, devel: true */
/*global $, document,    navCheck,fetchData */

var eventData = fetchData("resources/eventData.json"),
	jsonKeys = Object.keys(eventData),
	eventMenu = document.getElementById("eventMenu");

function createArticles() {
	for (var i = 0; i < jsonKeys.length; i++) {
		var article = document.createElement("article");
		article.id = jsonKeys[i];
		article.onclick = function() { navCheck(this);};
		eventMenu.appendChild(article);
	}
	eventMenu.firstChild.className = "navSel";
	fillContent();
}

function fillContent() {
	for (var i = 0; i < jsonKeys.length; i++) {
		var eventId = eventData[jsonKeys[i]],
			eventContent = {title: document.createElement("h3"),
							comment: document.createElement("p"),
							time: document.createElement("time")};
		eventContent.title.textContent = eventId.name;
		eventContent.comment.textContent = eventId.detail;
		eventContent.time.innerHTML = eventId.date + "<br>" + eventId.time;
		populateMenu(eventContent, i);
	}
}
function populateMenu(content, iter) {
	eventMenu.children[iter].appendChild(content.title);
	eventMenu.children[iter].appendChild(content.comment);
	eventMenu.children[iter].appendChild(content.time);
}
createArticles();