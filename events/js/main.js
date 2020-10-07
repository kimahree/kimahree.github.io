// make Eventlist
var evt_txt_de = ["bis ",
"endet in ",
"Enddatum unbekannt",
"ab ",
"startet in ",
"Startdatum unbekannt",
"Keine aktuellen Events",
"Keine bevorstehenden Events"
];

var evt_txt_en = ["until ",
"ends in ",
"Unknown end date",
"from ",
"starts in ",
"Unknown start date",
"No current events",
"No upcoming events"
];

createEventlist("de");

function createEventlist(lang) {
	var txt = "";
	var curtime = new Date().getTime();
	var current = 0;
	var upcoming = 0;
	document.getElementById("current").innerHTML = ""; 
	document.getElementById("upcoming").innerHTML = ""; 
	eventlist = events.slice();	
	var nestmigrate = 1601510400000;
	var nestmigct = 124;
	while (nestmigrate < curtime) {
		nestmigrate += 1209600000;
		nestmigct++
	}
	eventlist.push({"de":"Nesterwechsel #"+nestmigct,"en":"Nest migration #"+nestmigct,"start":nestmigrate,"color":"#ffe6cc","url":"https://pogo.berlin/exraids/nester.html"});
	eventlist.forEach(function(val) {
		if (!val.start) {
			val.start = (!val.end)?Infinity:0;
		}
		if (!val.end) {
			val.end = Infinity;
		}
		if (!val.color) {
			val.color = "#f2f2f2";
		}
	});
    eventlist.sort((a,b) => (a.end > b.end) ? 1 : ((b.end > a.end) ? -1 : 0));
	for (i = 0; i < eventlist.length; i++) {
		txt = "";
		var diff = eventlist[i].end - curtime;
		if (diff < 0) {
			eventlist.splice(i,1);
			i--;
			continue;
		}
		if (eventlist[i].start - curtime >= 0 ) {
			continue;
		}
		current++;
		txt += '<div class="card mb-3" style="background:' + eventlist[i].color + '"><div class="card-body" ' + "onclick='window.open(" + '"' + eventlist[i].url + '"' + ")'>" + '<div class="row"><div class="col-9 mb-2"><div class="box h-100 d-flex justify-content-end flex-column"><h4 class="card-title">' + eval("eventlist[i]."+lang) + '</h4><p class="card-text">';

		if (eventlist[i].end != Infinity) {
			txt += eval("evt_txt_"+lang+"[0]") + new Date(eventlist[i].end).toLocaleString() + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text">' + eval("evt_txt_"+lang+"[1]") + DiffString(diff) + '</p></div></div></div></div></div>'; 
		}
		else {
			txt += eval("evt_txt_"+lang+"[2]") + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text"></p></div></div></div></div></div>'; 
		}
		document.getElementById("current").innerHTML += txt; 
		eventlist.splice(i,1);
		i--;
	}

    eventlist.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0));
	for (i = 0; i < eventlist.length; i++) {
		txt = "";
		upcoming++;
		txt += '<div class="card mb-3" style="background:' + eventlist[i].color + '"><div class="card-body" ' + "onclick='window.open(" + '"' + eventlist[i].url + '"' + ")'>" + '<div class="row"><div class="col-9 mb-2"><div class="box h-100 d-flex justify-content-end flex-column"><h4 class="card-title">' +  eval("eventlist[i]."+lang) + '</h4><p class="card-text">';
		if (eventlist[i].start != Infinity) {
			txt += eval("evt_txt_"+lang+"[3]") + new Date(eventlist[i].start).toLocaleString() + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text">' + eval("evt_txt_"+lang+"[4]") + DiffString(eventlist[i].start - curtime) + '</p></div></div></div></div></div>'; 
		}
		else {
			txt += eval("evt_txt_"+lang+"[5]") + '</p></div></div><div class="col-3"><div class="box h-100 d-flex justify-content-center flex-column"><p class="card-text"></p></div></div></div></div></div>'; 
		}
		document.getElementById("upcoming").innerHTML += txt;
	}

	if (current == 0) {
		document.getElementById("current").innerHTML += eval("evt_txt_"+lang+"[6]") + " :(<br><br>"; 
	}	

	if (upcoming == 0) {
		document.getElementById("upcoming").innerHTML += eval("evt_txt_"+lang+"[7]") + " :(<br><br>"; 
	}
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