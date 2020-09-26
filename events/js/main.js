// make Eventlist

var txt = "";
var curtime = new Date().getTime()
var current = 0;
var upcoming = 0;
events.forEach(function(val) {
	if (!val.start) {
		val.start = Infinity;
	}
	if (!val.end) {
		val.end = Infinity;
	}
	if (!val.color) {
		val.color = "#f2f2f2";
	}
});
events.sort((a,b) => (a.end > b.end) ? 1 : ((b.end > a.end) ? -1 : 0));
for (i = 0; i < events.length; i++) {
	txt = "";
	var diff = events[i].end - curtime;
	if (diff < 0) {
		events.splice(i,1);
		i--;
		continue;
	}
	if (events[i].start - curtime >= 0 ) {
		continue;
	}
	current++;
	txt += '<div class="card mb-3" style="background:' + events[i].color + '"><div class="card-body" ' + "onclick='window.open(" + '"' + events[i].url + '"' + ")'>" + '<div class="row"><div class="col-9 mb-2"><div class="box h-100 d-flex justify-content-end flex-column"><h4 class="card-title">' + events[i].de + '</h4><p class="card-text">';

	if (events[i].end != Infinity) {
		txt += 'bis ' + new Date(events[i].end).toLocaleString() + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text">endet in ' + DiffString(diff) + '</p></div></div></div></div></div>'; 
	}
	else {
		txt += 'Enddatum unbekannt</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text"></p></div></div></div></div></div>'; 
	}
	document.getElementById("current").innerHTML += txt; 
	events.splice(i,1);
	i--;
}

events.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0));
for (i = 0; i < events.length; i++) {
	txt = "";
	upcoming++;
	txt += '<div class="card mb-3" style="background:' + events[i].color + '"><div class="card-body" ' + "onclick='window.open(" + '"' + events[i].url + '"' + ")'>" + '<div class="row"><div class="col-9 mb-2"><div class="box h-100 d-flex justify-content-end flex-column"><h4 class="card-title">' + events[i].de + '</h4><p class="card-text">';
	if (events[i].start != Infinity) {
		txt += 'ab ' + new Date(events[i].start).toLocaleString() + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text">startet in ' + DiffString(events[i].start - curtime) + '</p></div></div></div></div></div>'; 
	}
	else {
		txt += 'Startdatum unbekannt</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text"></p></div></div></div></div></div>'; 
	}
	document.getElementById("upcoming").innerHTML += txt;
}

if (current == 0) {
	document.getElementById("current").innerHTML += "Keine aktuellen Events :(<br><br>"; 
}	

if (upcoming == 0) {
	document.getElementById("upcoming").innerHTML += "Keine bevorstehenden Events :(<br><br>"; 
}

function DiffString(difference) {
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);

    var diff = "";
	if (daysDifference > 0) {
		diff += daysDifference + 'd ';
	}
	if (hoursDifference > 0 || diff != "") {
		diff += hoursDifference + 'h '
	}
	diff += minutesDifference + 'm ';

	return diff;
}