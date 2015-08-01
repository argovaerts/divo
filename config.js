myFunction(myArray);

function myFunction(arr) {
	
	var out = '<table class="striped responsive-table"><thead><tr><th>Nr.</th><th>Location</th><th>Date</th><th>Time</th><th>Dive time</th><th>Depth</th><th>Buddy&#39;s</th><th>Comments</th></tr></thead>';
	var i;

	for(i = arr.length-1; i >= 0; i--) {
		j = i+1;
		out += "<tr><td>" +
		j +
		"</td><td>" +
		arr[i].place +
		"</td><td>" +
		arr[i].datum +
		"</td><td>" +
		arr[i].timeIn +
		"</td><td>" +
		arr[i].time +
		"</td><td>" +
		arr[i].depth +
		"</td><td>" +
		arr[i].buddys +
		"</td><td>" +
		arr[i].info +
		"</td></tr>";
	}
	out += "</table>";
	document.getElementById("lines").innerHTML = out;
};

myConFu(myConfig);

function myConFu(con) {
	document.getElementById("title").innerHTML = con[0].firstname + "'s log";
	document.getElementById("diver").innerHTML = con[0].firstname + " " + con[0].lastname;
	document.getElementById("divernsite").innerHTML = "<a href=" + con[0].website + ">" + con[0].firstname + " " + con[0].lastname + "</a>";
	document.getElementById("links").innerHTML = "<li><a class='grey-text text-lighten-3' href=" + con[0].link1url + ">" + con[0].link1name + "</a></li>" + "<li><a class='grey-text text-lighten-3' href=" + con[0].link2url + ">" + con[0].link2name + "</a></li>" + "<li><a class='grey-text text-lighten-3' href=" + con[0].link3url + ">" + con[0].link3name + "</a></li>";
	document.getElementById("copyright").innerHTML = con[0].copyright;
}