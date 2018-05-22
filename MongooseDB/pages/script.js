function initXHR(x, value) {
	console.log(x); 
	if (x == 'welcome') {
        document.getElementById("welcome").style.display = "block";
        document.getElementById("lobby").style.display = "none";
        document.getElementById("login").style.display = "none";
	}
	else if (x == 'login') {
        populateListsView(x);
		//retrieveActiveListsFromServer('/app/list/', 'lists');
		document.getElementById("welcome").style.display = "none";
        document.getElementById("lobby").style.display = "none";
		document.getElementById("login").style.display = "block";
	}
	else if (x == 'lobby') {
		//retrieveActiveListsFromServer('/app/list/' + value, 'chats');
        document.getElementById("welcome").style.display = "none";
        document.getElementById("lobby").style.display = "block";
        document.getElementById("login").style.display = "none";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("lists").style.display = "none";
		document.getElementById("gList").style.display = "none";
	}
}

function goToLobby() {
	initXHR('lobby', null);

}

function retrieveActiveListsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
				populateListsView(returnValues);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populateListsView(url) {
	var element = document.getElementById(url);
	var newElement = "<div class=\"col-lg-12 text-center\"><label for=\"uname\"><b>Username</b></label>";
	newElement += "    <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\n" +
        "    <br><br>\n" +
        "    <!-- Password Box-->\n" +
        "    <label for=\"pword\"><b>Password</b></label>\n" +
        "    <input type=\"text\" placeholder=\"Enter Password\" name=\"pword\" required>\n" +
        "\n" + " <button onclick=\"goToLobby()\">Sign in</button>"
        "    <p>Don't have an account? <a href=\"/register.html\">Register here</a></p></div>";

	element.innerHTML = newElement;
}


//JQuery based function
function populateListItems(elementId, list) {
	var listItems = list.tasks;
	var newElement = "";

	for (var i = 0; i < listItems.length; i++) {
		newElement += "<tr>";
		newElement += "<td>" + listItems[i].description + "</td>";
		newElement += "<td><span class=\"badge\">" + listItems[i].shared + "</span></td>";
		newElement += "<td>";
		newElement += "<div class=\"input-group\">";
		newElement += "<span class=\"input-group-addon\" style=\"border-style:none;\">";
		newElement += "<input type=\"checkbox\">";
		newElement += "</span>";
		newElement += "</div>";
		newElement += "</td>";
		newElement += "</tr>";
	}
	$("#" + elementId).append(newElement);
}
