var t5multi = 0;
var tMindex = 0;
var t5index = 0;
var t4index = 0;
var t3index = 0;
var t2index = 0;
var t1index = 0;
var tcindex = 0;
var t1 = 0;
var t2 = 0;
var t3 = 0;
var t4 = 0;
var t5 = 0;
var tM = 0;	

var hatchtimer = 60;
var raidtimer = 45;
var t5over = 0;

var starttimer = new Date(14400000 + hatchtimer * 60000);
var endtimer = new Date(67500000 + hatchtimer * 60000);

var remoteenabled = 1;
var secret = 0;

var txtid = ["txt_beta","txt_mainlink","txt_lang","txt_gym","txt_hatch","txt_start","txt_player","txt_remote","txt_instr","txt_button","txt_button2","txt_multi","txt_chgym","txt_cre_close","txt_cl_close","txt_reg_close","txt_boq_intro","txt_boq_generate","txt_evt_current","txt_evt_upcoming","txt_hide_gbl"];

var txt_de = ["Achtung, dies ist die Beta Seite. Funktionen sind eventuell beeinträchtigt und fehlerhaft.",
"Zur Hauptseite",
"Sprache:",
"Arena:",
"Schlüpfzeit/Restzeit:",
"Startzeit:",
"Spieler vor Ort:",
"Fern-Spieler:",
'Drücke auf "Start!", überprüfe deine Angaben und drücke dann auf "In WhatsApp posten".<br>',
"In WhatsApp posten",
"In Telegram posten",
'Um einen Multiraid zu posten, ändere jetzt die Angaben oben für den nächsten Raid und drücke dann auf "Multiraid!". Wiederhole dies, bis alle Raids eingetragen sind.<br>',
"Wähle eine Arena aus.",
"Schließen",
"Schließen",
"Schließen",
'Auf dieser Seite kannst du für <a href="https://www.bookofquests.de/">Book of Quests</a> einen Link erstellen, bei dem nur bestimmte Pokémon/Items auf der Karte angezeigt werden. Klicke dazu alle gewünschten Pokémon/Items an und drücke dann auf "Link erstellen!".<br>Um einen Negativfilter zu erstellen, klicke das Pokémon/Item zweimal an.',
"Link erstellen!",
"Aktuelle Events",
"Bevorstehende Events",
"Keine GBL"
];

var txt_en = ["Attention, you're currently on the beta page. Functionality might be compromised and bugged.",
"To the main site",
"Language:",
"Gym:",
"Hatch time/time remaining:",
"Start time:",
"Local players:",
"Remote players:",
'Press "Start!", check your data and then press "Post in WhatsApp".<br>',
"Post in WhatsApp",
"Post in Telegram",
'To post a Multiraid, change the data above for the next raid and then press "Multiraid!". Repeat until all raids have been added.<br>',
"Choose a gym.",
"Close",
"Close",
"Close",
'On this site you can generate a link to <a href="https://www.bookofquests.de/">Book of Quests</a>, which will only show certain Pokémon/items on the map. Click all the Pokémon/items you want to see and then press "Generate Link!".<br>Click a Pokémon/item twice to generate a negative filter.',
"Generate Link!",
"Current events",
"Upcoming events",
"Hide GBL"
];

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

var hatchwarn = 0;
var startwarn = 0;
var raidwarn = 0;
var tg_warn = 0;

var warn_de =["",
"Raids schlüpfen nicht vor " + starttimer.toTimeString().substr(0,5) + " Uhr.",
"Raids schlüpfen nicht nach " + endtimer.toTimeString().substr(0,5) + " Uhr.",
"Dieser Raid ist bereits abgelaufen.",
"Die Startzeit kann nicht in der Vergangenheit liegen.",
"Die Startzeit muss innerhalb von " + raidtimer + " Minuten nach der Schlüpfzeit sein.",
"Der Raidboss hat weniger als 5 Minuten Restzeit bei dieser Startzeit.",
"Die Startzeit kann nicht vor der Schlüpfzeit sein.",
"Du hast die maximale Anzahl an Raids für einen Multiraid erreicht.",
"Bitte wähle eine Arena aus.",
"Die Schlüpfzeit kann nicht mehr als " + hatchtimer + " Minuten in der Zukunft liegen.",
"Bitte geb eine Uhrzeit ein.",
'Das Ei ist noch nicht ausgeschlüpft, bitte wähle bei Raid die "Ei"-Option aus.',
'Das 5er Ei ist noch nicht ausgeschlüpft, bitte wähle bei Raid "5er Ei" aus.',
"Fehler beim Einlesen der Daten",
"Bitte geb eine passende Startzeit ein.",
"Es können nur maximal 10 Spieler aus der Ferne teilnehmen.",
"Bitte trage jeden Account bei Fernspielern einzeln ein."
];

var warn_en =["",
"Raids do not hatch before " + starttimer.toTimeString().substr(0,5) + ".",
"Raids do not hatch after " + endtimer.toTimeString().substr(0,5) + ".",
"This raid has already expired.",
"The start time cannot be in the past.",
"The start time has to be within " + raidtimer + " minutes after the hatch time.",
"There will be less than 5 minutes remaining at this start time.",
"You cannot start a raid before it hatches.",
"You have reached the maximum amount of raids for a multiraid.",
"Please choose a gym.",
"The hatch time must be within " + hatchtimer + " minutes from now.",
"Please enter a time.",
'The egg has not hatched yet, so please choose the "egg" option as raid.',
'The Tier 5 egg has not hatched yet, so please choose "Tier 5 egg" as raid.',
"Failed to parse the input",
"Please enter a valid start time.",
"Only a maximum of 10 remote players can join a single raid.",
"Please enter each account at remote players seperately."
];

var multi = 0;

var raid_de = [];
var raid_en = [];
var tg_gymedit = [];
var tg_gymnew = [];

var pokemon = [
{"dex":1,"name":"Bisasam","en":"Bulbasaur","getshiny":true},
{"dex":2,"name":"Bisaknosp","en":"Ivysaur","evolved":true},
{"dex":3,"name":"Bisaflor","en":"Venusaur","evolved":true,"getshiny":true},
{"dex":4,"name":"Glumanda","en":"Charmander","getshiny":true},
{"dex":5,"name":"Glutexo","en":"Charmeleon","evolved":true},
{"dex":6,"name":"Glurak","en":"Charizard","evolved":true,"getshiny":true},
{"dex":7,"name":"Schiggy","en":"Squirtle","getshiny":true},
{"dex":8,"name":"Schillok","en":"Wartortle","evolved":true},
{"dex":9,"name":"Turtok","en":"Blastoise","evolved":true,"getshiny":true},
{"dex":10,"name":"Raupy","en":"Caterpie","getshiny":true},
{"dex":11,"name":"Safcon","en":"Metapod","evolved":true},
{"dex":12,"name":"Smettbo","en":"Butterfree","evolved":true,"getshiny":true},
{"dex":13,"name":"Hornliu","en":"Weedle","getshiny":true},
{"dex":14,"name":"Kokuna","en":"Kakuna","evolved":true},
{"dex":15,"name":"Bibor","en":"Beedrill","evolved":true,"getshiny":true},
{"dex":16,"name":"Taubsi","en":"Pidgey","getshiny":true},
{"dex":17,"name":"Tauboga","en":"Pidgeotto","evolved":true},
{"dex":18,"name":"Tauboss","en":"Pidgeot","evolved":true,"getshiny":true},
{"dex":19,"name":"Rattfratz","en":"Rattata","getshiny":true},
{"dex":"19A","name":"Alola-Rattfratz","en":"Alolan Rattata","alolan":true,"getshiny":true},
{"dex":20,"name":"Rattikarl","en":"Raticate","evolved":true},
{"dex":"20A","name":"Alola-Rattikarl","en":"Alolan Raticate","alolan":true,"evolved":true},
{"dex":21,"name":"Habitak","en":"Spearow","getshiny":true},
{"dex":22,"name":"Ibitak","en":"Fearow","evolved":true},
{"dex":23,"name":"Rettan","en":"Ekans","getshiny":true},
{"dex":24,"name":"Arbok","evolved":true},
{"dex":25,"name":"Pikachu","getshiny":true},
{"dex":26,"name":"Raichu","evolved":true},
{"dex":"26A","name":"Alola-Raichu","en":"Alolan Raichu","alolan":true,"evolved":true,"getshiny":true},
{"dex":27,"name":"Sandan","en":"Sandshrew","getshiny":true},
{"dex":"27A","name":"Alola-Sandan","en":"Alolan Sandshrew","alolan":true,"getshiny":true},
{"dex":28,"name":"Sandamer","en":"Sandslash","evolved":true},
{"dex":"28A","name":"Alola-Sandamer","en":"Alolan Sandslash","alolan":true,"evolved":true},
{"dex":29,"name":"Nidoran♀","getshiny":true},
{"dex":30,"name":"Nidorina","evolved":true},
{"dex":31,"name":"Nidoqueen","evolved":true},
{"dex":32,"name":"Nidoran♂","getshiny":true},
{"dex":33,"name":"Nidorino","evolved":true},
{"dex":34,"name":"Nidoking","evolved":true},
{"dex":35,"name":"Piepi","en":"Clefairy","getshiny":true},
{"dex":36,"name":"Pixi","en":"Clefable","evolved":true},
{"dex":37,"name":"Vulpix","getshiny":true},
{"dex":"37A","name":"Alola-Vulpix","en":"Alolan Vulpix","alolan":true,"getshiny":true},
{"dex":38,"name":"Vulnona","en":"Ninetales","evolved":true},
{"dex":"38A","name":"Alola-Vulnona","en":"Alolan Ninetales","alolan":true,"evolved":true},
{"dex":39,"name":"Pummeluff","en":"Jigglypuff","getshiny":true},
{"dex":40,"name":"Knuddeluff","en":"Wigglytuff","evolved":true},
{"dex":41,"name":"Zubat","getshiny":true},
{"dex":42,"name":"Golbat","evolved":true,"getshiny":true},
{"dex":43,"name":"Myrapla","en":"Oddish","getshiny":true},
{"dex":44,"name":"Duflor","en":"Gloom","evolved":true,"getshiny":true},
{"dex":45,"name":"Giflor","en":"Vileplume","evolved":true},
{"dex":46,"name":"Paras","getshiny":true},
{"dex":47,"name":"Parasek","en":"Parasect","evolved":true},
{"dex":48,"name":"Bluzuk","en":"Venonat","getshiny":true},
{"dex":49,"name":"Omot","en":"Venomoth","evolved":true},
{"dex":50,"name":"Digda","en":"Diglett","getshiny":true},
{"dex":"50A","name":"Alola-Digda","en":"Alolan Diglett","alolan":true,"getshiny":true},
{"dex":51,"name":"Digdri","en":"Dugtrio","evolved":true},
{"dex":"51A","name":"Alola-Digdri","en":"Alolan Dugtrio","alolan":true,"evolved":true},
{"dex":52,"name":"Mauzi","en":"Meowth","getshiny":true},
{"dex":"52A","name":"Alola-Mauzi","en":"Alolan Meowth","alolan":true,"getshiny":true},
{"dex":"52G","name":"Galar-Mauzi","en":"Galarian Meowth","galarian":true,"getshiny":true},
{"dex":53,"name":"Snobilikat","en":"Persian","evolved":true},
{"dex":"53A","name":"Alola-Snobilikat","en":"Alolan Persian","alolan":true,"evolved":true},
{"dex":54,"name":"Enton","en":"Psyduck","getshiny":true},
{"dex":55,"name":"Entoron","en":"Golduck","evolved":true},
{"dex":56,"name":"Menki","en":"Mankey","getshiny":true},
{"dex":57,"name":"Rasaff","en":"Primeape","evolved":true},
{"dex":58,"name":"Fukano","en":"Growlithe","getshiny":true},
{"dex":"58H","name":"Hisui-Fukano","en":"Hisuian Growlithe","hisuian":true},
{"dex":59,"name":"Arkani","en":"Arcanine","evolved":true,"getshiny":true},
{"dex":"59H","name":"Hisui-Arkani","en":"Hisuian Arcanine","hisuian":true,"evolved":true},
{"dex":60,"name":"Quapsel","en":"Poliwag","getshiny":true},
{"dex":61,"name":"Quaputzi","en":"Poliwhirl","evolved":true,"getshiny":true},
{"dex":62,"name":"Quappo","en":"Poliwrath","evolved":true},
{"dex":63,"name":"Abra","getshiny":true},
{"dex":64,"name":"Kadabra","evolved":true},
{"dex":65,"name":"Simsala","en":"Alakazam","evolved":true,"getshiny":true},
{"dex":66,"name":"Machollo","en":"Machop","getshiny":true},
{"dex":67,"name":"Maschock","en":"Machoke","evolved":true},
{"dex":68,"name":"Machomei","en":"Machamp","evolved":true},
{"dex":69,"name":"Knofensa","en":"Bellsprout","getshiny":true},
{"dex":70,"name":"Ultrigaria","en":"Weepinbell","evolved":true},
{"dex":71,"name":"Sarzenia","en":"Victreebel","evolved":true},
{"dex":72,"name":"Tentacha","en":"Tentacool","getshiny":true},
{"dex":73,"name":"Tentoxa","en":"Tentacruel","evolved":true},
{"dex":74,"name":"Kleinstein","en":"Geodude","getshiny":true},
{"dex":"74A","name":"Alola-Kleinstein","en":"Alolan Geodude","alolan":true,"getshiny":true},
{"dex":75,"name":"Georok","en":"Graveler","evolved":true},
{"dex":"75A","name":"Alola-Georok","en":"Alolan Graveler","alolan":true,"evolved":true},
{"dex":76,"name":"Geowaz","en":"Golem","evolved":true},
{"dex":"76A","name":"Alola-Geowaz","en":"Alolan Golem","alolan":true,"evolved":true},
{"dex":77,"name":"Ponita","en":"Ponyta","getshiny":true},
{"dex":"77G","name":"Galar-Ponita","en":"Galarian Ponyta","galarian":true,"getshiny":true},
{"dex":78,"name":"Gallopa","en":"Rapidash","evolved":true},
{"dex":"78G","name":"Galar-Gallopa","en":"Galarian Rapidash","evolved":true,"galarian":true},
{"dex":79,"name":"Flegmon","en":"Slowpoke","getshiny":true},
{"dex":"79G","name":"Galar-Flegmon","en":"Galarian Slowpoke","galarian":true},
{"dex":80,"name":"Lahmus","en":"Slowbro","evolved":true,"getshiny":true},
{"dex":"80G","name":"Galar-Lahmus","en":"Galarian Slowbro","evolved":true,"galarian":true},
{"dex":81,"name":"Magnetilo","en":"Magnemite","getshiny":true},
{"dex":82,"name":"Magneton","evolved":true},
{"dex":83,"name":"Porenta","en":"Farfetch'd","regional":true,"getshiny":true},
{"dex":"83G","name":"Galar-Porenta","en":"Galarian Farfetch'd","galarian":true,"getshiny":true},
{"dex":84,"name":"Dodu","en":"Doduo","getshiny":true},
{"dex":85,"name":"Dodri","en":"Dodrio","evolved":true},
{"dex":86,"name":"Jurob","en":"Seel","getshiny":true},
{"dex":87,"name":"Jugong","en":"Dewgong","evolved":true},
{"dex":88,"name":"Sleima","en":"Grimer","getshiny":true},
{"dex":"88A","name":"Alola-Sleima","en":"Alolan Grimer","alolan":true,"getshiny":true},
{"dex":89,"name":"Sleimok","en":"Muk","evolved":true},
{"dex":"89A","name":"Alola-Sleimok","en":"Alolan Muk","alolan":true,"evolved":true},
{"dex":90,"name":"Muschas","en":"Shellder","getshiny":true},
{"dex":91,"name":"Austos","en":"Cloyster","evolved":true},
{"dex":92,"name":"Nebulak","en":"Gastly"},
{"dex":93,"name":"Alpollo","en":"Haunter","evolved":true,"getshiny":true},
{"dex":94,"name":"Gengar","evolved":true,"getshiny":true},
{"dex":95,"name":"Onix","getshiny":true},
{"dex":96,"name":"Traumato","en":"Drowzee","getshiny":true},
{"dex":97,"name":"Hypno","evolved":true},
{"dex":98,"name":"Krabby","getshiny":true},
{"dex":99,"name":"Kingler","evolved":true},
{"dex":100,"name":"Voltobal","en":"Voltorb","getshiny":true},
{"dex":"100H","name":"Hisui-Voltobal","en":"Hisuian Voltorb","hisuian":true},
{"dex":101,"name":"Lektrobal","en":"Electrode","evolved":true},
{"dex":"101H","name":"Hisui-Lektrobal","en":"Hisuian Electrode","hisuian":true,"evolved":true},
{"dex":102,"name":"Owei","en":"Exeggcute","getshiny":true},
{"dex":103,"name":"Kokowei","en":"Exeggutor","evolved":true},
{"dex":"103A","name":"Alola-Kokowei","en":"Alolan Exeggutor","alolan":true,"evolved":true,"getshiny":true},
{"dex":104,"name":"Tragosso","en":"Cubone","getshiny":true},
{"dex":105,"name":"Knogga","en":"Marowak","evolved":true},
{"dex":"105A","name":"Alola-Knogga","en":"Alolan Marowak","alolan":true,"evolved":true,"getshiny":true},
{"dex":106,"name":"Kicklee","en":"Hitmonlee","getshiny":true},
{"dex":107,"name":"Nockchan","en":"Hitmonchan","getshiny":true},
{"dex":108,"name":"Schlurp","en":"Lickitung","getshiny":true},
{"dex":109,"name":"Smogon","en":"Koffing","getshiny":true},
{"dex":110,"name":"Smogmog","en":"Weezing","evolved":true},
{"dex":"110G","name":"Galar-Smogmog","en":"Galarian Weezing","evolved":true,"galarian":true,"getshiny":true},
{"dex":111,"name":"Rihorn","en":"Rhyhorn","getshiny":true},
{"dex":112,"name":"Rizeros","en":"Rhydon","evolved":true},
{"dex":113,"name":"Chaneira","en":"Chansey","getshiny":true},
{"dex":114,"name":"Tangela","getshiny":true},
{"dex":115,"name":"Kangama","en":"Kangaskhan","regional":true,"getshiny":true},
{"dex":116,"name":"Seeper","en":"Horsea","getshiny":true},
{"dex":117,"name":"Seedra","en":"Seadra","evolved":true,"getshiny":true},
{"dex":118,"name":"Goldini","en":"Goldeen","getshiny":true},
{"dex":119,"name":"Golking","en":"Seaking","evolved":true},
{"dex":120,"name":"Sterndu","en":"Staryu","getshiny":true},
{"dex":121,"name":"Starmie","evolved":true},
{"dex":122,"name":"Pantimos","en":"Mr. Mime","regional":true,"getshiny":true},
{"dex":"122G","name":"Galar-Pantimos","en":"Galarian Mr. Mime","galarian":true},
{"dex":123,"name":"Sichlor","en":"Scyther","getshiny":true},
{"dex":124,"name":"Rossana","en":"Jynx","getshiny":true},
{"dex":125,"name":"Elektek","en":"Electabuzz","getshiny":true},
{"dex":126,"name":"Magmar","getshiny":true},
{"dex":127,"name":"Pinsir","getshiny":true},
{"dex":128,"name":"Tauros","regional":true,"getshiny":true},
{"dex":129,"name":"Karpador","en":"Magikarp","getshiny":true},
{"dex":130,"name":"Garados","en":"Gyarados","evolved":true,"getshiny":true},
{"dex":131,"name":"Lapras","getshiny":true},
{"dex":132,"name":"Ditto","getshiny":true},
{"dex":133,"name":"Evoli","en":"Eevee","getshiny":true},
{"dex":134,"name":"Aquana","en":"Vaporeon","evolved":true},
{"dex":135,"name":"Blitza","en":"Jolteon","evolved":true},
{"dex":136,"name":"Flamara","en":"Flareon","evolved":true},
{"dex":137,"name":"Porygon","getshiny":true},
{"dex":138,"name":"Amonitas","en":"Omanyte","getshiny":true},
{"dex":139,"name":"Amoroso","en":"Omastar","evolved":true},
{"dex":140,"name":"Kabuto","getshiny":true},
{"dex":141,"name":"Kabutops","evolved":true},
{"dex":142,"name":"Aerodactyl","getshiny":true},
{"dex":143,"name":"Relaxo","en":"Snorlax","getshiny":true},
{"dex":144,"name":"Arktos","en":"Articuno","legendary":true,"getshiny":true},
{"dex":"144G","name":"Galar-Arktos","en":"Galarian Articuno","legendary":true,"galarian":true},
{"dex":145,"name":"Zapdos","legendary":true,"getshiny":true},
{"dex":"145G","name":"Galar-Zapdos","en":"Galarian Zapdos","legendary":true,"galarian":true},
{"dex":146,"name":"Lavados","en":"Moltres","legendary":true,"getshiny":true},
{"dex":"146G","name":"Galar-Lavados","en":"Galarian Moltres","legendary":true,"galarian":true},
{"dex":147,"name":"Dratini","getshiny":true},
{"dex":148,"name":"Dragonir","en":"Dragonair","evolved":true},
{"dex":149,"name":"Dragoran","en":"Dragonite","evolved":true},
{"dex":150,"name":"Mewtu","en":"Mewtwo","legendary":true,"getshiny":true},
{"dex":"150R","name":"Mewtu (Rüstung)","de":"Mewtu in Rüstung","en":"Armored Mewtwo","legendary":true},
{"dex":151,"name":"Mew","mythical":true},
{"dex":152,"name":"Endivie","en":"Chikorita","getshiny":true},
{"dex":153,"name":"Lorblatt","en":"Bayleef","evolved":true},
{"dex":154,"name":"Meganie","en":"Meganium","evolved":true},
{"dex":155,"name":"Feurigel","en":"Cyndaquil","getshiny":true},
{"dex":156,"name":"Igelavar","en":"Quilava","evolved":true},
{"dex":157,"name":"Tornupto","en":"Typhlosion","evolved":true},
{"dex":"157H","name":"Hisui-Tornupto","en":"Hisuian Typhlosion","hisuian":true,"evolved":true},
{"dex":158,"name":"Karnimani","en":"Totodile","getshiny":true},
{"dex":159,"name":"Tyracroc","en":"Croconaw","evolved":true},
{"dex":160,"name":"Impergator","en":"Feraligatr","evolved":true},
{"dex":161,"name":"Wiesor","en":"Sentret","getshiny":true},
{"dex":162,"name":"Wiesenior","en":"Furret","evolved":true},
{"dex":163,"name":"Hoothoot","getshiny":true},
{"dex":164,"name":"Noctuh","en":"Noctowl","evolved":true},
{"dex":165,"name":"Ledyba","getshiny":true},
{"dex":166,"name":"Ledian","evolved":true},
{"dex":167,"name":"Webarak","en":"Spinarak","getshiny":true},
{"dex":168,"name":"Ariados","evolved":true},
{"dex":169,"name":"Iksbat","en":"Crobat","evolved":true},
{"dex":170,"name":"Lampi","en":"Chinchou","getshiny":true},
{"dex":171,"name":"Lanturn","evolved":true},
{"dex":172,"name":"Pichu","baby":true,"getshiny":true},
{"dex":173,"name":"Pii","en":"Cleffa","baby":true,"getshiny":true},
{"dex":174,"name":"Fluffeluff","en":"Igglybuff","baby":true,"getshiny":true},
{"dex":175,"name":"Togepi","baby":true,"getshiny":true},
{"dex":176,"name":"Togetic","getshiny":true},
{"dex":177,"name":"Natu","getshiny":true},
{"dex":178,"name":"Xatu","evolved":true},
{"dex":179,"name":"Voltilamm","en":"Mareep","getshiny":true},
{"dex":180,"name":"Waaty","en":"Flaaffy","evolved":true},
{"dex":181,"name":"Ampharos","evolved":true,"getshiny":true},
{"dex":182,"name":"Blubella","en":"Bellossom","evolved":true},
{"dex":183,"name":"Marill","getshiny":true},
{"dex":184,"name":"Azumarill","evolved":true},
{"dex":185,"name":"Mogelbaum","en":"Sudowoodo","getshiny":true},
{"dex":186,"name":"Quaxo","en":"Politoed","evolved":true},
{"dex":187,"name":"Hoppspross","en":"Hoppip","getshiny":true},
{"dex":188,"name":"Hubelupf","en":"Skiploom","evolved":true},
{"dex":189,"name":"Papungha","en":"Jumpluff","evolved":true},
{"dex":190,"name":"Griffel","en":"Aipom","getshiny":true},
{"dex":191,"name":"Sonnkern","en":"Sunkern","getshiny":true},
{"dex":192,"name":"Sonnflora","en":"Sunflora","evolved":true},
{"dex":193,"name":"Yanma","getshiny":true},
{"dex":194,"name":"Felino","en":"Wooper","getshiny":true},
{"dex":195,"name":"Morlord","en":"Quagsire","evolved":true},
{"dex":196,"name":"Psiana","en":"Espeon","evolved":true,"getshiny":true},
{"dex":197,"name":"Nachtara","en":"Umbreon","evolved":true,"getshiny":true},
{"dex":198,"name":"Kramurx","en":"Murkrow","getshiny":true},
{"dex":199,"name":"Laschoking","en":"Slowking","evolved":true},
{"dex":"199G","name":"Galar-Laschoking","en":"Galarian Slowking","evolved":true,"galarian":true},
{"dex":200,"name":"Traunfugil","en":"Misdreavus","getshiny":true},
{"dex":201,"name":"Icognito","en":"Unown"},
{"dex":"201A","name":"Icognito A","en":"Unown A"},
{"dex":"201B","name":"Icognito B","en":"Unown B"},
{"dex":"201C","name":"Icognito C","en":"Unown C"},
{"dex":"201D","name":"Icognito D","en":"Unown D"},
{"dex":"201E","name":"Icognito E","en":"Unown E"},
{"dex":"201F","name":"Icognito F","en":"Unown F"},
{"dex":"201G","name":"Icognito G","en":"Unown G"},
{"dex":"201H","name":"Icognito H","en":"Unown H"},
{"dex":"201I","name":"Icognito I","en":"Unown I"},
{"dex":"201J","name":"Icognito J","en":"Unown J"},
{"dex":"201K","name":"Icognito K","en":"Unown K"},
{"dex":"201L","name":"Icognito L","en":"Unown L"},
{"dex":"201M","name":"Icognito M","en":"Unown M"},
{"dex":"201N","name":"Icognito N","en":"Unown N"},
{"dex":"201O","name":"Icognito O","en":"Unown O"},
{"dex":"201P","name":"Icognito P","en":"Unown P"},
{"dex":"201Q","name":"Icognito Q","en":"Unown Q"},
{"dex":"201R","name":"Icognito R","en":"Unown R"},
{"dex":"201S","name":"Icognito S","en":"Unown S"},
{"dex":"201T","name":"Icognito T","en":"Unown T"},
{"dex":"201U","name":"Icognito U","en":"Unown U"},
{"dex":"201V","name":"Icognito V","en":"Unown V"},
{"dex":"201W","name":"Icognito W","en":"Unown W"},
{"dex":"201X","name":"Icognito X","en":"Unown X"},
{"dex":"201Y","name":"Icognito Y","en":"Unown Y"},
{"dex":"201Z","name":"Icognito Z","en":"Unown Z"},
{"dex":"201Em","name":"Icognito !","en":"Unown !"},
{"dex":"201Qm","name":"Icognito ?","en":"Unown ?"},
{"dex":202,"name":"Woingenau","en":"Wobbuffet","getshiny":true},
{"dex":203,"name":"Girafarig","getshiny":true},
{"dex":204,"name":"Tannza","en":"Pineco","getshiny":true},
{"dex":205,"name":"Forstellka","en":"Forretress","evolved":true},
{"dex":206,"name":"Dummisel","en":"Dunsparce","getshiny":true},
{"dex":207,"name":"Skorgla","en":"Gligar","getshiny":true},
{"dex":208,"name":"Stahlos","en":"Steelix","evolved":true,"getshiny":true},
{"dex":209,"name":"Snubbull","getshiny":true},
{"dex":210,"name":"Granbull","evolved":true},
{"dex":211,"name":"Baldorfish","en":"Qwilfish","getshiny":true},
{"dex":"211H","name":"Hisui-Baldorfish","en":"Hisuian Qwilfish","hisuian":true},
{"dex":212,"name":"Scherox","en":"Scizor","evolved":true,"getshiny":true},
{"dex":213,"name":"Pottrott","en":"Shuckle","getshiny":true},
{"dex":214,"name":"Skaraborn","en":"Heracross","regional":true,"getshiny":true},
{"dex":215,"name":"Sniebel","en":"Sneasel","getshiny":true},
{"dex":"215H","name":"Hisui-Sniebel","en":"Hisuian Sneasel","hisuian":true},
{"dex":216,"name":"Teddiursa","getshiny":true},
{"dex":217,"name":"Ursaring","evolved":true},
{"dex":218,"name":"Schneckmag","en":"Slugma","getshiny":true},
{"dex":219,"name":"Magcargo","evolved":true},
{"dex":220,"name":"Quiekel","en":"Swinub","getshiny":true},
{"dex":221,"name":"Keifel","en":"Piloswine","evolved":true},
{"dex":222,"name":"Corasonn","en":"Corsola","regional":true,"getshiny":true},
{"dex":"222G","name":"Galar-Corasonn","en":"Galarian Corsola","regional":true,"galarian":true},
{"dex":223,"name":"Remoraid","getshiny":true},
{"dex":224,"name":"Octillery","evolved":true},
{"dex":225,"name":"Botogel","en":"Delibird","getshiny":true},
{"dex":226,"name":"Mantax","en":"Mantine","getshiny":true},
{"dex":227,"name":"Panzaeron","en":"Skarmory","getshiny":true},
{"dex":228,"name":"Hunduster","en":"Houndour","getshiny":true},
{"dex":229,"name":"Hundemon","en":"Houndoom","evolved":true,"getshiny":true},
{"dex":230,"name":"Seedraking","en":"Kingdra","evolved":true},
{"dex":231,"name":"Phanpy","getshiny":true},
{"dex":232,"name":"Donphan","evolved":true},
{"dex":233,"name":"Porygon2","evolved":true},
{"dex":234,"name":"Damhirplex","en":"Stantler","getshiny":true},
{"dex":235,"name":"Farbeagle","en":"Smeargle"},
{"dex":236,"name":"Rabauz","en":"Tyrogue","baby":true,"getshiny":true},
{"dex":237,"name":"Kapoera","en":"Hitmontop","getshiny":true},
{"dex":238,"name":"Kussila","en":"Smoochum","baby":true,"getshiny":true},
{"dex":239,"name":"Elekid","baby":true,"getshiny":true},
{"dex":240,"name":"Magby","baby":true,"getshiny":true},
{"dex":241,"name":"Miltank","getshiny":true},
{"dex":242,"name":"Heiteira","en":"Blissey","evolved":true},
{"dex":243,"name":"Raikou","legendary":true,"getshiny":true},
{"dex":244,"name":"Entei","legendary":true,"getshiny":true},
{"dex":245,"name":"Suicune","legendary":true,"getshiny":true},
{"dex":246,"name":"Larvitar","getshiny":true},
{"dex":247,"name":"Pupitar","evolved":true},
{"dex":248,"name":"Despotar","en":"Tyranitar","evolved":true},
{"dex":249,"name":"Lugia","legendary":true,"getshiny":true},
{"dex":250,"name":"Ho-Oh","legendary":true,"getshiny":true},
{"dex":251,"name":"Celebi","mythical":true},
{"dex":252,"name":"Geckarbor","en":"Treecko","getshiny":true},
{"dex":253,"name":"Reptain","en":"Grovyle","evolved":true},
{"dex":254,"name":"Gewaldro","en":"Sceptile","evolved":true},
{"dex":255,"name":"Flemmli","en":"Torchic","getshiny":true},
{"dex":256,"name":"Jungglut","en":"Combusken","evolved":true},
{"dex":257,"name":"Lohgock","en":"Blaziken","evolved":true},
{"dex":258,"name":"Hydropi","en":"Mudkip","getshiny":true},
{"dex":259,"name":"Moorabbel","en":"Marshtomp","evolved":true},
{"dex":260,"name":"Sumpex","en":"Swampert","evolved":true},
{"dex":261,"name":"Fiffyen","en":"Poochyena","getshiny":true},
{"dex":262,"name":"Magnayen","en":"Mightyena","evolved":true},
{"dex":263,"name":"Zigzachs","en":"Zigzagoon","getshiny":true},
{"dex":"263G","name":"Galar-Zigzachs","en":"Galarian Zigzagoon","galarian":true,"getshiny":true},
{"dex":264,"name":"Geradaks","en":"Linoone","evolved":true},
{"dex":"264G","name":"Galar-Geradaks","en":"Galarian Linoone","evolved":true,"galarian":true},
{"dex":265,"name":"Waumpel","en":"Wurmple","getshiny":true},
{"dex":266,"name":"Schaloko","en":"Silcoon","evolved":true},
{"dex":267,"name":"Papinella","en":"Beautifly","evolved":true},
{"dex":268,"name":"Panekon","en":"Cascoon","evolved":true},
{"dex":269,"name":"Pudox","en":"Dustox","evolved":true},
{"dex":270,"name":"Loturzel","en":"Lotad","getshiny":true},
{"dex":271,"name":"Lombrero","en":"Lombre","evolved":true},
{"dex":272,"name":"Kappalores","en":"Ludicolo","evolved":true},
{"dex":273,"name":"Samurzel","en":"Seedot","getshiny":true},
{"dex":274,"name":"Blanas","en":"Nuzleaf","evolved":true},
{"dex":275,"name":"Tengulist","en":"Shiftry","evolved":true},
{"dex":276,"name":"Schwalbini","en":"Taillow","getshiny":true},
{"dex":277,"name":"Schwalboss","en":"Swellow","evolved":true},
{"dex":278,"name":"Wingull","getshiny":true},
{"dex":279,"name":"Pelipper","evolved":true},
{"dex":280,"name":"Trasla","en":"Ralts", "getshiny":true},
{"dex":281,"name":"Kirlia","evolved":true,"getshiny":true},
{"dex":282,"name":"Guardevoir","en":"Gardevoir","evolved":true},
{"dex":283,"name":"Gehweiher","en":"Surskit"},
{"dex":284,"name":"Maskeregen","en":"Masquerain","evolved":true},
{"dex":285,"name":"Knilz","en":"Shroomish","getshiny":true},
{"dex":286,"name":"Kapilz","en":"Breloom","evolved":true},
{"dex":287,"name":"Bummelz","en":"Slakoth","getshiny":true},
{"dex":288,"name":"Muntier","en":"Vigoroth","evolved":true},
{"dex":289,"name":"Letarking","en":"Slaking","evolved":true},
{"dex":290,"name":"Nincada","getshiny":true},
{"dex":291,"name":"Ninjask","evolved":true},
{"dex":292,"name":"Ninjatom","en":"Shedinja","evolved":true},
{"dex":293,"name":"Flurmel","en":"Whismur","getshiny":true},
{"dex":294,"name":"Krakeelo","en":"Loudred","evolved":true},
{"dex":295,"name":"Krawumms","en":"Exploud","evolved":true},
{"dex":296,"name":"Makuhita","getshiny":true},
{"dex":297,"name":"Hariyama","evolved":true},
{"dex":298,"name":"Azurill","baby":true,"getshiny":true},
{"dex":299,"name":"Nasgnet","en":"Nosepass","getshiny":true},
{"dex":300,"name":"Eneco","en":"Skitty","getshiny":true},
{"dex":301,"name":"Enecoro","en":"Delcatty","evolved":true},
{"dex":302,"name":"Zobiris","en":"Sableye","getshiny":true},
{"dex":303,"name":"Flunkifer","en":"Mawile","getshiny":true},
{"dex":304,"name":"Stollunior","en":"Aron","getshiny":true},
{"dex":305,"name":"Stollrak","en":"Lairon","evolved":true},
{"dex":306,"name":"Stolloss","en":"Aggron","evolved":true,"getshiny":true},
{"dex":307,"name":"Meditie","en":"Meditite","getshiny":true},
{"dex":308,"name":"Meditalis","en":"Medicham","evolved":true},
{"dex":309,"name":"Frizelbliz","en":"Electrike","getshiny":true},
{"dex":310,"name":"Voltenso","en":"Manectric","evolved":true,"getshiny":true},
{"dex":311,"name":"Plusle","getshiny":true},
{"dex":312,"name":"Minun","getshiny":true},
{"dex":313,"name":"Volbeat","regional":true,"getshiny":true},
{"dex":314,"name":"Illumise","regional":true,"getshiny":true},
{"dex":315,"name":"Roselia","getshiny":true},
{"dex":316,"name":"Schluppuck","en":"Gulpin"},
{"dex":317,"name":"Schlukwech","en":"Swalot","evolved":true},
{"dex":318,"name":"Kanivanha","en":"Carvanha","getshiny":true},
{"dex":319,"name":"Tohaido","en":"Sharpedo","evolved":true},
{"dex":320,"name":"Wailmer","getshiny":true},
{"dex":321,"name":"Wailord","evolved":true},
{"dex":322,"name":"Camaub","en":"Numel","getshiny":true},
{"dex":323,"name":"Camerupt","evolved":true},
{"dex":324,"name":"Qurtel","en":"Torkoal","regional":true},
{"dex":325,"name":"Spoink","getshiny":true},
{"dex":326,"name":"Groink","en":"Grumpig","evolved":true},
{"dex":327,"name":"Pandir","en":"Spinda","getshiny":true},
{"dex":328,"name":"Knacklion","en":"Trapinch","getshiny":true},
{"dex":329,"name":"Vibrava","evolved":true},
{"dex":330,"name":"Libelldra","en":"Flygon","evolved":true},
{"dex":331,"name":"Tuska","en":"Cacnea"},
{"dex":332,"name":"Noktuska","en":"Cacturne","evolved":true},
{"dex":333,"name":"Wablu","en":"Swablu","getshiny":true},
{"dex":334,"name":"Altaria","evolved":true,"getshiny":true},
{"dex":335,"name":"Sengo","en":"Zangoose","regional":true,"getshiny":true},
{"dex":336,"name":"Vipitis","en":"Seviper","regional":true,"getshiny":true},
{"dex":337,"name":"Lunastein","en":"Lunatone","regional":true,"getshiny":true},
{"dex":338,"name":"Sonnfel","en":"Solrock","regional":true,"getshiny":true},
{"dex":339,"name":"Schmerbe","en":"Barboach","getshiny":true},
{"dex":340,"name":"Welsar","en":"Whiscash","evolved":true},
{"dex":341,"name":"Krebscorps","en":"Corphish","getshiny":true},
{"dex":342,"name":"Krebutack","en":"Crawdaunt","evolved":true},
{"dex":343,"name":"Puppance","en":"Baltoy","getshiny":true},
{"dex":344,"name":"Lepumentas","en":"Claydol","evolved":true},
{"dex":345,"name":"Liliep","en":"Lileep","getshiny":true},
{"dex":346,"name":"Wielie","en":"Cradily","evolved":true},
{"dex":347,"name":"Anorith","getshiny":true},
{"dex":348,"name":"Armaldo","evolved":true},
{"dex":349,"name":"Barschwa","en":"Feebas","getshiny":true},
{"dex":350,"name":"Milotic","evolved":true},
{"dex":351,"name":"Formeo","en":"Castform","getshiny":true},
{"dex":"351I","name":"Formeo (Schnee)","de":"Formeo (Schneeform)","en":"Castform (Snowy Form)"},
{"dex":"351R","name":"Formeo (Regen)","de":"Formeo (Regenform)","en":"Castform (Rainy Form)","getshiny":true},
{"dex":"351S","name":"Formeo (Sonne)","de":"Formeo (Sonnenform)","en":"Castform (Sunny Form)"},
{"dex":352,"name":"Kecleon"},
{"dex":353,"name":"Shuppet","getshiny":true},
{"dex":354,"name":"Banette","evolved":true},
{"dex":355,"name":"Zwirrlicht","en":"Duskull","getshiny":true},
{"dex":356,"name":"Zwirrklop","en":"Dusclops","evolved":true},
{"dex":357,"name":"Tropius","regional":true},
{"dex":358,"name":"Palimpalim","en":"Chimecho","getshiny":true},
{"dex":359,"name":"Absol","getshiny":true},
{"dex":360,"name":"Isso","en":"Wynaut","baby":true,"getshiny":true},
{"dex":361,"name":"Schneppke","en":"Snorunt","getshiny":true},
{"dex":362,"name":"Firnontor","en":"Glalie","evolved":true},
{"dex":363,"name":"Seemops","en":"Spheal","getshiny":true},
{"dex":364,"name":"Seejong","en":"Sealeo","evolved":true},
{"dex":365,"name":"Walraisa","en":"Walrein","evolved":true},
{"dex":366,"name":"Perlu","en":"Clamperl","getshiny":true},
{"dex":367,"name":"Aalabyss","en":"Huntail","evolved":true},
{"dex":368,"name":"Saganabyss","en":"Gorebyss","evolved":true},
{"dex":369,"name":"Relicanth","regional":true},
{"dex":370,"name":"Liebiskus","en":"Luvdisc","getshiny":true},
{"dex":371,"name":"Kindwurm","en":"Bagon","getshiny":true},
{"dex":372,"name":"Draschel","en":"Shelgon","evolved":true},
{"dex":373,"name":"Brutalanda","en":"Salamence","evolved":true},
{"dex":374,"name":"Tanhel","en":"Beldum","getshiny":true},
{"dex":375,"name":"Metang","evolved":true},
{"dex":376,"name":"Metagross","evolved":true},
{"dex":377,"name":"Regirock","legendary":true,"getshiny":true},
{"dex":378,"name":"Regice","legendary":true,"getshiny":true},
{"dex":379,"name":"Registeel","legendary":true,"getshiny":true},
{"dex":380,"name":"Latias","legendary":true,"getshiny":true},
{"dex":381,"name":"Latios","legendary":true,"getshiny":true},
{"dex":382,"name":"Kyogre","legendary":true,"getshiny":true},
{"dex":383,"name":"Groudon","legendary":true,"getshiny":true},
{"dex":384,"name":"Rayquaza","legendary":true,"getshiny":true},
{"dex":385,"name":"Jirachi","mythical":true},
{"dex":386,"name":"Deoxys (Normal)","de":"Deoxys (Normalform)","en":"Deoxys (Normal Forme)","mythical":true,"getshiny":true},
{"dex":"386A","name":"Deoxys (Angriff)","de":"Deoxys (Angriffsform)","en":"Deoxys (Attack Forme)","mythical":true,"getshiny":true},
{"dex":"386D","name":"Deoxys (Verteidigung)","de":"Deoxys (Verteidigungsform)","en":"Deoxys (Defense Forme)","mythical":true,"getshiny":true},
{"dex":"386S","name":"Deoxys (Initiative)","de":"Deoxys (Initiativeform)","en":"Deoxys (Speed Forme)","mythical":true,"getshiny":true},
{"dex":387,"name":"Chelast","en":"Turtwig","getshiny":true},
{"dex":388,"name":"Chelcarain","en":"Grotle","evolved":true},
{"dex":389,"name":"Chelterrar","en":"Torterra","evolved":true},
{"dex":390,"name":"Panflam","en":"Chimchar","getshiny":true},
{"dex":391,"name":"Panpyro","en":"Monferno","evolved":true},
{"dex":392,"name":"Panferno","en":"Infernape","evolved":true},
{"dex":393,"name":"Plinfa","en":"Piplup","getshiny":true},
{"dex":394,"name":"Pliprin","en":"Prinplup","evolved":true},
{"dex":395,"name":"Impoleon","en":"Empoleon","evolved":true},
{"dex":396,"name":"Staralili","en":"Starly","getshiny":true},
{"dex":397,"name":"Staravia","evolved":true},
{"dex":398,"name":"Staraptor","evolved":true},
{"dex":399,"name":"Bidiza","en":"Bidoof","getshiny":true},
{"dex":400,"name":"Bidifas","en":"Bibarel","evolved":true},
{"dex":401,"name":"Zirpurze","en":"Kricketot","getshiny":true},
{"dex":402,"name":"Zirpeise","en":"Kricketune","evolved":true},
{"dex":403,"name":"Sheinux","en":"Shinx","getshiny":true},
{"dex":404,"name":"Luxio","evolved":true},
{"dex":405,"name":"Luxtra","en":"Luxray","evolved":true},
{"dex":406,"name":"Knospi","en":"Budew","baby":true,"getshiny":true},
{"dex":407,"name":"Roserade","evolved":true},
{"dex":408,"name":"Koknodon","en":"Cranidos","getshiny":true},
{"dex":409,"name":"Rameidon","en":"Rampardos","evolved":true},
{"dex":410,"name":"Schilterus","en":"Shieldon","getshiny":true},
{"dex":411,"name":"Bollterus","en":"Bastiodon","evolved":true},
{"dex":412,"name":"Burmy (Pflanze)","de":"Burmy (Pflanzenumhang)","en":"Burmy (Plant Cloak)","getshiny":true},
{"dex":"412S","name":"Burmy (Sand)","de":"Burmy (Sandumhang)","en":"Burmy (Sandy Cloak)","getshiny":true},
{"dex":"412T","name":"Burmy (Lumpen)","de":"Burmy (Lumpenumhang)","en":"Burmy (Trash Cloak)","getshiny":true},
{"dex":413,"name":"Burmadame (Pflanze)","de":"Burmadame (Pflanzenumhang)","en":"Wormadam (Plant Cloak)","evolved":true},
{"dex":"413S","name":"Burmadame (Sand)","de":"Burmadame (Sandumhang)","en":"Wormadam (Sandy Cloak)","evolved":true},
{"dex":"413T","name":"Burmadame (Lumpen)","de":"Burmadame (Lumpenumhang)","en":"Wormadam (Trash Cloak)","evolved":true},
{"dex":414,"name":"Moterpel","en":"Mothim","evolved":true},
{"dex":415,"name":"Wadribie","en":"Combee","getshiny":true},
{"dex":416,"name":"Honweisel","en":"Vespiquen","evolved":true},
{"dex":417,"name":"Pachirisu","regional":true},
{"dex":418,"name":"Bamelin","en":"Buizel","getshiny":true},
{"dex":419,"name":"Bojelin","en":"Floatzel","evolved":true},
{"dex":420,"name":"Kikugi","en":"Cherubi","getshiny":true},
{"dex":421,"name":"Kinoso (Bewölkt)","de":"Kinoso (Wolkenform)","en":"Cherrim (Overcast Form)","evolved":true},
{"dex":"421S","name":"Kinoso (Sonne)","de":"Kinoso (Sonnenform)","en":"Cherrim (Sunshine Form)","evolved":true},
{"dex":422,"name":"Schalellos","en":"Shellos"},
{"dex":"422W","name":"Schalellos (West)","de":"Schalellos (Westliches Meer)","en":"Shellos (West Sea)","regional":true},
{"dex":"422E","name":"Schalellos (Ost)","de":"Schalellos (Östliches Meer)","en":"Shellos (East Sea)","regional":true},
{"dex":423,"name":"Gastrodon","evolved":true},
{"dex":424,"name":"Ambidiffel","en":"Ambipom","evolved":true},
{"dex":425,"name":"Driftlon","en":"Drifloon","getshiny":true},
{"dex":426,"name":"Drifzepeli","en":"Drifblim","evolved":true,"getshiny":true},
{"dex":427,"name":"Haspiror","en":"Buneary","getshiny":true},
{"dex":428,"name":"Schlapor","en":"Lopunny","evolved":true,"getshiny":true},
{"dex":429,"name":"Traunmagil","en":"Mismagius","evolved":true},
{"dex":430,"name":"Kramshef","en":"Honchkrow","evolved":true},
{"dex":431,"name":"Charmian","en":"Glameow","getshiny":true},
{"dex":432,"name":"Shnurgarst","en":"Purugly","evolved":true},
{"dex":433,"name":"Klingplim","en":"Chingling","baby":true},
{"dex":434,"name":"Skunkapuh","en":"Stunky"},
{"dex":435,"name":"Skuntank","evolved":true},
{"dex":436,"name":"Bronzel","en":"Bronzor","getshiny":true},
{"dex":437,"name":"Bronzong","evolved":true},
{"dex":438,"name":"Mobai","en":"Bonsly","baby":true,"getshiny":true},
{"dex":439,"name":"Pantimimi","en":"Mime Jr.","baby":true,"regional":true,"getshiny":true},
{"dex":440,"name":"Wonneira","en":"Happiny","baby":true,"getshiny":true},
{"dex":441,"name":"Plaudagei","en":"Chatot","regional":true},
{"dex":442,"name":"Kryppuk","en":"Spiritomb","getshiny":true},
{"dex":443,"name":"Kaumalat","en":"Gible","getshiny":true},
{"dex":444,"name":"Knarksel","en":"Gabite","evolved":true},
{"dex":445,"name":"Knakrack","en":"Garchomp","evolved":true},
{"dex":446,"name":"Mampfaxo","en":"Munchlax","baby":true},
{"dex":447,"name":"Riolu","baby":true,"getshiny":true},
{"dex":448,"name":"Lucario"},
{"dex":449,"name":"Hippopotas","getshiny":true},
{"dex":450,"name":"Hippoterus","en":"Hippowdon","evolved":true},
{"dex":451,"name":"Pionskora","en":"Skorupi","getshiny":true},
{"dex":452,"name":"Piondragi","en":"Drapion","evolved":true},
{"dex":453,"name":"Glibunkel","en":"Croagunk","getshiny":true},
{"dex":454,"name":"Toxiquak","en":"Toxicroak","evolved":true},
{"dex":455,"name":"Venuflibis","en":"Carnivine","regional":true},
{"dex":456,"name":"Finneon"},
{"dex":457,"name":"Lumineon","evolved":true},
{"dex":458,"name":"Mantirps","en":"Mantyke","baby":true},
{"dex":459,"name":"Shnebedeck","en":"Snover","getshiny":true},
{"dex":460,"name":"Rexblisar","en":"Abomasnow","evolved":true,"getshiny":true},
{"dex":461,"name":"Snibunna","en":"Weavile","evolved":true},
{"dex":462,"name":"Magnezone","evolved":true},
{"dex":463,"name":"Schlurplek","en":"Lickilicky","evolved":true},
{"dex":464,"name":"Rihornior","en":"Rhyperior","evolved":true},
{"dex":465,"name":"Tangoloss","en":"Tangrowth","evolved":true},
{"dex":466,"name":"Elevoltek","en":"Electivire","evolved":true},
{"dex":467,"name":"Magbrant","en":"Magmortar","evolved":true},
{"dex":468,"name":"Togekiss","evolved":true},
{"dex":469,"name":"Yanmega","evolved":true},
{"dex":470,"name":"Folipurba","en":"Leafeon","evolved":true},
{"dex":471,"name":"Glaziola","en":"Glaceon","evolved":true,"getshiny":true},
{"dex":472,"name":"Skorgro","en":"Gliscor","evolved":true},
{"dex":473,"name":"Mamutel","en":"Mamoswine","evolved":true},
{"dex":474,"name":"Porygon-Z","evolved":true},
{"dex":475,"name":"Galagladi","en":"Gallade","evolved":true},
{"dex":476,"name":"Voluminas","en":"Probopass","evolved":true},
{"dex":477,"name":"Zwirrfinst","en":"Dusknoir","evolved":true},
{"dex":478,"name":"Frosdedje","en":"Froslass","evolved":true},
{"dex":479,"name":"Rotom"},
{"dex":"479F","name":"Rotom (Wirbel)","de":"Wirbel-Rotom","en":"Fan Rotom","legendary":true},
{"dex":"479H","name":"Rotom (Hitze)","de":"Hitze-Rotom","en":"Heat Rotom","legendary":true},
{"dex":"479I","name":"Rotom (Frost)","de":"Frost-Rotom","en":"Frost Rotom","legendary":true},
{"dex":"479M","name":"Rotom (Schneid)","de":"Schneid-Rotom","en":"Mow Rotom","legendary":true},
{"dex":"479W","name":"Rotom (Wasch)","de":"Wasch-Rotom","en":"Wash Rotom","legendary":true},
{"dex":480,"name":"Selfe","en":"Uxie","legendary":true,"regional":true,"getshiny":true},
{"dex":481,"name":"Vesprit","en":"Mesprit","legendary":true,"regional":true,"getshiny":true},
{"dex":482,"name":"Tobutz","en":"Azelf","legendary":true,"regional":true,"getshiny":true},
{"dex":483,"name":"Dialga","legendary":true,"getshiny":true},
{"dex":"483O","name":"Dialga (Urform)","en":"Dialga (Origin Forme)","legendary":true},
{"dex":484,"name":"Palkia","legendary":true,"getshiny":true},
{"dex":"484O","name":"Palkia (Urform)","en":"Palkia (Origin Forme)","legendary":true},
{"dex":485,"name":"Heatran","legendary":true,"getshiny":true},
{"dex":486,"name":"Regigigas","legendary":true,"getshiny":true},
{"dex":487,"name":"Giratina","de":"Giratina (Wandelform)","en":"Giratina (Altered Forme)","legendary":true,"getshiny":true},
{"dex":"487O","name":"Giratina (Urform)","de":"Giratina (Urform)","en":"Giratina (Origin Forme)","legendary":true,"getshiny":true},
{"dex":488,"name":"Cresselia","legendary":true,"getshiny":true},
{"dex":489,"name":"Phione","mythical":true},
{"dex":490,"name":"Manaphy","mythical":true},
{"dex":491,"name":"Darkrai","mythical":true,"getshiny":true},
{"dex":492,"name":"Shaymin (Land)","de":"Shaymin (Landform)","en":"Shaymin (Land Forme)","mythical":true},
{"dex":"492S","name":"Shaymin (Zenit)","de":"Shaymin (Zenitform)","en":"Shaymin (Sky Forme)","mythical":true},
{"dex":493,"name":"Arceus (Normal)","en":"Arceus (Normal type)","mythical":true},
{"dex":"493Fg","name":"Arceus (Kampf)","en":"Arceus (Fighting type)","mythical":true},
{"dex":"493Fl","name":"Arceus (Flug)","en":"Arceus (Flying type)","mythical":true},
{"dex":"493Po","name":"Arceus (Gift)","en":"Arceus (Poison type)","mythical":true},
{"dex":"493Gn","name":"Arceus (Boden)","en":"Arceus (Ground type)","mythical":true},
{"dex":"493Ro","name":"Arceus (Gestein)","en":"Arceus (Rock type)","mythical":true},
{"dex":"493Bu","name":"Arceus (Käfer)","en":"Arceus (Bug type)","mythical":true},
{"dex":"493Gh","name":"Arceus (Geist)","en":"Arceus (Ghost type)","mythical":true},
{"dex":"493St","name":"Arceus (Stahl)","en":"Arceus (Steel type)","mythical":true},
{"dex":"493Fi","name":"Arceus (Feuer)","en":"Arceus (Fire type)","mythical":true},
{"dex":"493Wa","name":"Arceus (Wasser)","en":"Arceus (Water type)","mythical":true},
{"dex":"493Gr","name":"Arceus (Pflanze)","en":"Arceus (Grass type)","mythical":true},
{"dex":"493El","name":"Arceus (Elektro)","en":"Arceus (Electric type)","mythical":true},
{"dex":"493Ps","name":"Arceus (Psycho)","en":"Arceus (Psychic type)","mythical":true},
{"dex":"493Ic","name":"Arceus (Eis)","en":"Arceus (Ice type)","mythical":true},
{"dex":"493Dr","name":"Arceus (Drache)","en":"Arceus (Dragon type)","mythical":true},
{"dex":"493Da","name":"Arceus (Unlicht)","en":"Arceus (Dark type)","mythical":true},
{"dex":"493Fa","name":"Arceus (Fee)","en":"Arceus (Fairy type)","mythical":true},
{"dex":494,"name":"Victini","mythical":true},
{"dex":495,"name":"Serpifeu","en":"Snivy","getshiny":true},
{"dex":496,"name":"Efoserp","en":"Servine","evolved":true},
{"dex":497,"name":"Serpiroyal","en":"Serperior","evolved":true},
{"dex":498,"name":"Floink","en":"Tepig","getshiny":true},
{"dex":499,"name":"Ferkokel","en":"Pignite","evolved":true},
{"dex":500,"name":"Flambirex","en":"Emboar","evolved":true},
{"dex":501,"name":"Ottaro","en":"Oshawott","getshiny":true},
{"dex":502,"name":"Zwottronin","en":"Dewott","evolved":true},
{"dex":503,"name":"Admurai","en":"Samurott","evolved":true},
{"dex":"503H","name":"Hisui-Admurai","en":"Hisuian Samurott","hisuian":true,"evolved":true},
{"dex":504,"name":"Nagelotz","en":"Patrat","getshiny":true},
{"dex":505,"name":"Kukmarda","en":"Watchog","evolved":true},
{"dex":506,"name":"Yorkleff","en":"Lillipup","getshiny":true},
{"dex":507,"name":"Terribark","en":"Herdier","evolved":true},
{"dex":508,"name":"Bissbark","en":"Stoutland","evolved":true},
{"dex":509,"name":"Felilou","en":"Purrloin"},
{"dex":510,"name":"Kleoparda","en":"Liepard","evolved":true},
{"dex":511,"name":"Vegimak","en":"Pansage","regional":true,"getshiny":true},
{"dex":512,"name":"Vegichita","en":"Simisage","evolved":true,"regional":true},
{"dex":513,"name":"Grillmak","en":"Pansear","regional":true,"getshiny":true},
{"dex":514,"name":"Grillchita","en":"Simisear","evolved":true,"regional":true},
{"dex":515,"name":"Sodamak","en":"Panpour","regional":true,"getshiny":true},
{"dex":516,"name":"Sodachita","en":"Simipour","evolved":true,"regional":true},
{"dex":517,"name":"Somniam","en":"Munna","getshiny":true},
{"dex":518,"name":"Somnivora","en":"Musharna","evolved":true},
{"dex":519,"name":"Dusselgurr","en":"Pidove","getshiny":true},
{"dex":520,"name":"Navitaub","en":"Tranquill","evolved":true},
{"dex":521,"name":"Fasasnob","en":"Unfezant","evolved":true},
{"dex":522,"name":"Elezeba","en":"Blitzle","getshiny":true},
{"dex":523,"name":"Zebritz","en":"Zebstrika","evolved":true},
{"dex":524,"name":"Kiesling","en":"Roggenrola","getshiny":true},
{"dex":525,"name":"Sedimantur","en":"Boldore","evolved":true},
{"dex":526,"name":"Brockoloss","en":"Gigalith","evolved":true},
{"dex":527,"name":"Fleknoil","en":"Woobat","getshiny":true},
{"dex":528,"name":"Fletiamo","en":"Swoobat","evolved":true},
{"dex":529,"name":"Rotomurf","en":"Drilbur"},
{"dex":530,"name":"Stalobor","en":"Excadrill","evolved":true},
{"dex":531,"name":"Ohrdoch","en":"Audino","getshiny":true},
{"dex":532,"name":"Praktibalk","en":"Timburr","getshiny":true},
{"dex":533,"name":"Strepoli","en":"Gurdurr","evolved":true},
{"dex":534,"name":"Meistagrif","en":"Conkeldurr","evolved":true},
{"dex":535,"name":"Schallquap","en":"Tympole","getshiny":true},
{"dex":536,"name":"Mebrana","en":"Palpitoad","evolved":true},
{"dex":537,"name":"Branawarz","en":"Seismitoad","evolved":true},
{"dex":538,"name":"Jiutesto","en":"Throh","regional":true,"getshiny":true},
{"dex":539,"name":"Karadonis","en":"Sawk","regional":true,"getshiny":true},
{"dex":540,"name":"Strawickl","en":"Sewaddle"},
{"dex":541,"name":"Folikon","en":"Swadloon","evolved":true},
{"dex":542,"name":"Matrifol","en":"Leavanny","evolved":true},
{"dex":543,"name":"Toxiped","en":"Venipede","getshiny":true},
{"dex":544,"name":"Rollum","en":"Whirlipede","evolved":true},
{"dex":545,"name":"Cerapendra","en":"Scolipede","evolved":true},
{"dex":546,"name":"Waumboll","en":"Cottonee","getshiny":true},
{"dex":547,"name":"Elfun","en":"Whimsicott","evolved":true},
{"dex":548,"name":"Lilminip","en":"Petilil"},
{"dex":549,"name":"Dressella","en":"Lilligant","evolved":true},
{"dex":"549H","name":"Hisui-Dressella","en":"Hisuian Lilligant","hisuian":true,"evolved":true},
{"dex":550,"name":"Barschuft (Rotlinig)","de":"Barschuft (Rotlinige Form)","en":"Basculin (Red-Striped Form)","regional":true},
{"dex":"550B","name":"Barschuft (Blaulinig)","de":"Barschuft (Blaulinige Form)","en":"Basculin (Blue-Striped Form)","regional":true},
{"dex":"550W","name":"Barschuft (Weißlinig)","de":"Barschuft (Weißlinige Form)","en":"Basculin (White-Striped Form)","hisuian":true},
{"dex":551,"name":"Ganovil","en":"Sandile"},
{"dex":552,"name":"Rokkaiman","en":"Krokorok","evolved":true},
{"dex":553,"name":"Rabigator","en":"Krookodile","evolved":true},
{"dex":554,"name":"Flampion","en":"Darumaka","getshiny":true},
{"dex":"554G","name":"Galar-Flampion","en":"Galarian Darumaka","galarian":true,"getshiny":true},
{"dex":555,"name":"Flampivian","en":"Darmanitan","evolved":true},
{"dex":"555G","name":"Galar-Flampivian","en":"Galarian Darmanitan","evolved":true,"galarian":true},
{"dex":"555Z","name":"Flampivian (Trance)","de":"Flampivian (Trance-Modus)","en":"Darmanitan (Zen Mode)","evolved":true},
{"dex":"555GZ","name":"Galar-Flampivian (Trance)","de":"Galar-Flampivian (Trance-Modus)","en":"Galarian Darmanitan (Zen Mode)","evolved":true,"galarian":true},
{"dex":556,"name":"Maracamba","en":"Maractus","regional":true},
{"dex":557,"name":"Lithomith","en":"Dwebble","getshiny":true},
{"dex":558,"name":"Castellith","en":"Crustle","evolved":true},
{"dex":559,"name":"Zurrokex","en":"Scraggy"},
{"dex":560,"name":"Irokex","en":"Scrafty","evolved":true},
{"dex":561,"name":"Symvolara","en":"Sigilyph","regional":true},
{"dex":562,"name":"Makabaja","en":"Yamask","getshiny":true},
{"dex":"562G","name":"Galar-Makabaja","en":"Galarian Yamask","galarian":true},
{"dex":563,"name":"Echnatoll","en":"Cofagrigus","evolved":true},
{"dex":564,"name":"Galapaflos","en":"Tirtouga","getshiny":true},
{"dex":565,"name":"Karippas","en":"Carracosta","evolved":true},
{"dex":566,"name":"Flapteryx","en":"Archen","getshiny":true},
{"dex":567,"name":"Aeropteryx","en":"Archeops","evolved":true},
{"dex":568,"name":"Unratütox","en":"Trubbish","getshiny":true},
{"dex":569,"name":"Deponitox","en":"Garbodor","evolved":true},
{"dex":570,"name":"Zorua"},
{"dex":"570H","name":"Hisui-Zorua","en":"Hisuian Zorua","hisuian":true},
{"dex":571,"name":"Zoroark","evolved":true},
{"dex":"571H","name":"Hisui-Zoroark","en":"Hisuian Zoroark","hisuian":true,"evolved":true},
{"dex":572,"name":"Picochilla","en":"Minccino","getshiny":true},
{"dex":573,"name":"Chillabell","en":"Cinccino","evolved":true},
{"dex":574,"name":"Mollimorba","en":"Gothita"},
{"dex":575,"name":"Hypnomorba","en":"Gothorita","evolved":true},
{"dex":576,"name":"Morbitesse","en":"Gothitelle","evolved":true},
{"dex":577,"name":"Monozyto","en":"Solosis"},
{"dex":578,"name":"Mitodos","en":"Duosion","evolved":true},
{"dex":579,"name":"Zytomega","en":"Reuniclus","evolved":true},
{"dex":580,"name":"Piccolente","en":"Ducklett"},
{"dex":581,"name":"Swaroness","en":"Swanna","evolved":true},
{"dex":582,"name":"Gelatini","en":"Vanillite"},
{"dex":583,"name":"Gelatroppo","en":"Vanillish","evolved":true},
{"dex":584,"name":"Gelatwino","en":"Vanilluxe","evolved":true},
{"dex":585,"name":"Sesokitz (Frühling)","de":"Sesokitz (Frühlingsform)","en":"Deerling (Spring Form)"},
{"dex":"585S","name":"Sesokitz (Sommer)","de":"Sesokitz (Sommerform)","en":"Deerling (Summer Form)"},
{"dex":"585A","name":"Sesokitz (Herbst)","de":"Sesokitz (Herbstform)","en":"Deerling (Autumn Form)"},
{"dex":"585W","name":"Sesokitz (Winter)","de":"Sesokitz (Winterform)","en":"Deerling (Winter Form)"},
{"dex":586,"name":"Kronjuwild (Frühling)","de":"Kronjuwild (Frühlingsform)","en":"Sawsbuck (Spring Form)","evolved":true},
{"dex":"586S","name":"Kronjuwild (Sommer)","de":"Kronjuwild (Sommerform)","en":"Sawsbuck (Summer Form)","evolved":true},
{"dex":"586A","name":"Kronjuwild (Herbst)","de":"Kronjuwild (Herbstform)","en":"Sawsbuck (Autumn Form)","evolved":true},
{"dex":"586W","name":"Kronjuwild (Winter)","de":"Kronjuwild (Winterform)","en":"Sawsbuck (Winter Form)","evolved":true},
{"dex":587,"name":"Emolga"},
{"dex":588,"name":"Laukaps","en":"Karrablast","getshiny":true},
{"dex":589,"name":"Cavalanzas","en":"Escavalier","evolved":true},
{"dex":590,"name":"Tarnpignon","en":"Foongus","getshiny":true},
{"dex":591,"name":"Hutsassa","en":"Amoonguss","evolved":true},
{"dex":592,"name":"Quabbel","en":"Frillish"},
{"dex":593,"name":"Apoquallyp","en":"Jellicent","evolved":true},
{"dex":594,"name":"Mamolida","en":"Alomomola","getshiny":true},
{"dex":595,"name":"Wattzapf","en":"Joltik"},
{"dex":596,"name":"Voltula","en":"Galvantula","evolved":true},
{"dex":597,"name":"Kastadur","en":"Ferroseed","getshiny":true},
{"dex":598,"name":"Tentantel","en":"Ferrothorn","evolved":true},
{"dex":599,"name":"Klikk","en":"Klink","getshiny":true},
{"dex":600,"name":"Kliklak","en":"Klang","evolved":true},
{"dex":601,"name":"Klikdiklak","en":"Klinklang","evolved":true},
{"dex":602,"name":"Zapplardin","en":"Tynamo"},
{"dex":603,"name":"Zapplalek","en":"Eelektrik","evolved":true},
{"dex":604,"name":"Zapplarang","en":"Eelektross","evolved":true},
{"dex":605,"name":"Pygraulon","en":"Elgyem","getshiny":true},
{"dex":606,"name":"Megalon","en":"Beheeyem","evolved":true},
{"dex":607,"name":"Lichtel","en":"Litwick"},
{"dex":608,"name":"Laternecto","en":"Lampent","evolved":true},
{"dex":609,"name":"Skelabra","en":"Chandelure","evolved":true},
{"dex":610,"name":"Milza","en":"Axew","getshiny":true},
{"dex":611,"name":"Sharfax","en":"Fraxure","evolved":true},
{"dex":612,"name":"Maxax","en":"Haxorus","evolved":true},
{"dex":613,"name":"Petznief","en":"Cubchoo","getshiny":true},
{"dex":614,"name":"Siberio","en":"Beartic","evolved":true},
{"dex":615,"name":"Frigometri","en":"Cryogonal"},
{"dex":616,"name":"Schnuthelm","en":"Shelmet","getshiny":true},
{"dex":617,"name":"Hydragil","en":"Accelgor","evolved":true},
{"dex":618,"name":"Flunschlik","en":"Stunfisk"},
{"dex":"618G","name":"Galar-Flunschlik","en":"Galarian Stunfisk","galarian":true,"getshiny":true},
{"dex":619,"name":"Lin-Fu","en":"Mienfoo"},
{"dex":620,"name":"Wie-Shu","en":"Mienshao","evolved":true},
{"dex":621,"name":"Shardrago","en":"Druddigon","getshiny":true},
{"dex":622,"name":"Golbit","en":"Golett"},
{"dex":623,"name":"Golgantes","en":"Golurk","evolved":true},
{"dex":624,"name":"Gladiantri","en":"Pawniard"},
{"dex":625,"name":"Caesurio","en":"Bisharp","evolved":true},
{"dex":626,"name":"Bisofank","en":"Bouffalant","regional":true},
{"dex":627,"name":"Geronimatz","en":"Rufflet","getshiny":true},
{"dex":628,"name":"Washakwil","en":"Braviary","evolved":true},
{"dex":"628H","name":"Hisui-Washakwil","en":"Hisuian Braviary","evolved":true,"hisuian":true,"getshiny":true},
{"dex":629,"name":"Skallyk","en":"Vullaby","getshiny":true},
{"dex":630,"name":"Grypheldis","en":"Mandibuzz","evolved":true},
{"dex":631,"name":"Furnifraß","en":"Heatmor","regional":true,"getshiny":true},
{"dex":632,"name":"Fermicula","en":"Durant","regional":true,"getshiny":true},
{"dex":633,"name":"Kapuno","en":"Deino","getshiny":true},
{"dex":634,"name":"Duodino","en":"Zweilous","evolved":true},
{"dex":635,"name":"Trikephalo","en":"Hydreigon","evolved":true},
{"dex":636,"name":"Ignivor","en":"Larvesta"},
{"dex":637,"name":"Ramoth","en":"Volcarona","evolved":true},
{"dex":638,"name":"Kobalium","en":"Cobalion","legendary":true,"getshiny":true},
{"dex":639,"name":"Terrakium","en":"Terrakion","legendary":true,"getshiny":true},
{"dex":640,"name":"Viridium","en":"Virizion","legendary":true,"getshiny":true},
{"dex":641,"name":"Boreos (Inkarnation)","de":"Boreos (Inkarnationsform)","en":"Tornadus (Incarnate Forme)","legendary":true,"getshiny":true},
{"dex":"641T","name":"Boreos (Tiergeist)","de":"Boreos (Tiergeistform)","en":"Tornadus (Therian Forme)","legendary":true,"getshiny":true},
{"dex":642,"name":"Voltolos (Inkarnation)","de":"Voltolos (Inkarnationsform)","en":"Thundurus (Incarnate Forme)","legendary":true,"getshiny":true},
{"dex":"642T","name":"Voltolos (Tiergeist)","de":"Voltolos (Tiergeistform)","en":"Thundurus (Therian Forme)","legendary":true,"getshiny":true},
{"dex":643,"name":"Reshiram","legendary":true,"getshiny":true},
{"dex":644,"name":"Zekrom","legendary":true,"getshiny":true},
{"dex":645,"name":"Demeteros (Inkarnation)","de":"Demeteros (Inkarnationsform)","en":"Landorus (Incarnate Forme)","legendary":true,"getshiny":true},
{"dex":"645T","name":"Demeteros (Tiergeist)","de":"Demeteros (Tiergeistform)","en":"Landorus (Therian Forme)","legendary":true,"getshiny":true},
{"dex":646,"name":"Kyurem","legendary":true,"getshiny":true},
{"dex":"646B","name":"Schwarzes Kyurem","de":"Schwarzes Kyurem","en":"Black Kyurem","legendary":true},
{"dex":"646W","name":"Weißes Kyurem","de":"Weißes Kyurem","en":"White Kyurem","legendary":true},
{"dex":647,"name":"Keldeo (Standard)","de":"Keldeo (Standardform)","en":"Keldeo (Ordinary Form)","mythical":true},
{"dex":"647R","name":"Keldeo (Resolut)","de":"Keldeo (Resolutform)","en":"Keldeo (Resolute Form)","mythical":true},
{"dex":648,"name":"Meloetta (Gesang)","de":"Meloetta (Gesangsform)","en":"Meloetta (Aria Forme)","mythical":true},
{"dex":"648P","name":"Meloetta (Tanz)","de":"Meloetta (Tanzform)","en":"Meloetta (Pirouette Forme)","mythical":true},
{"dex":649,"name":"Genesect","mythical":true,"getshiny":true},
{"dex":"649B","name":"Genesect (Flammenmodul)","de":"Genesect mit Flammenmodul","en":"Genesect with Burn Drive","mythical":true},
{"dex":"649C","name":"Genesect (Eismodul)","de":"Genesect mit Gefriermodul","en":"Genesect with Chill Drive","mythical":true},
{"dex":"649D","name":"Genesect (Aquamodul)","de":"Genesect mit Aquamodul","en":"Genesect with Douse Drive","mythical":true},
{"dex":"649S","name":"Genesect (Blitzmodul)","de":"Genesect mit Blitzmodul","en":"Genesect with Shock Drive","mythical":true},
{"dex":650,"name":"Igamaro","en":"Chespin"},
{"dex":651,"name":"Igastarnish","en":"Quilladin","evolved":true},
{"dex":652,"name":"Brigaron","en":"Chesnaught","evolved":true},
{"dex":653,"name":"Fynx","en":"Fennekin"},
{"dex":654,"name":"Rutena","en":"Braixen","evolved":true},
{"dex":655,"name":"Fennexis","en":"Delphox","evolved":true},
{"dex":656,"name":"Froxy","en":"Froakie"},
{"dex":657,"name":"Amphizel","en":"Frogadier","evolved":true},
{"dex":658,"name":"Quajutsu","en":"Greninja","evolved":true},
{"dex":"658A","name":"Ash-Quajutsu","en":"Ash-Greninja","evolved":true},
{"dex":659,"name":"Scoppel","en":"Bunnelby","getshiny":true},
{"dex":660,"name":"Grebbit","en":"Diggersby","evolved":true},
{"dex":661,"name":"Dartiri","en":"Fletchling","getshiny":true},
{"dex":662,"name":"Dartignis","en":"Fletchinder","evolved":true},
{"dex":663,"name":"Fiaro","en":"Talonflame","evolved":true},
{"dex":664,"name":"Purmel","en":"Scatterbug"},
{"dex":665,"name":"Puponcho","en":"Spewpa","evolved":true},
{"dex":666,"name":"Vivillon","evolved":true},
{"dex":667,"name":"Leufeo","en":"Litleo","getshiny":true},
{"dex":668,"name":"Pyroleo","en":"Pyroar","evolved":true},
{"dex":669,"name":"Flabébé"},
{"dex":670,"name":"Floette","evolved":true},
{"dex":"670E","name":"Floette (Ewigblütler)","en":"Floette (Eternal Flower)","legendary":true},
{"dex":671,"name":"Florges","evolved":true},
{"dex":672,"name":"Mähikel","en":"Skiddo"},
{"dex":673,"name":"Chevrumm","en":"Gogoat","evolved":true},
{"dex":674,"name":"Pam-Pam","en":"Pancham"},
{"dex":675,"name":"Pandagro","en":"Pangoro","evolved":true},
{"dex":676,"name":"Coiffwaff","en":"Furfrou"},
{"dex":677,"name":"Psiau","en":"Espurr","getshiny":true},
{"dex":678,"name":"Psiaugon","en":"Meowstic","evolved":true},
{"dex":679,"name":"Gramokles","en":"Honedge"},
{"dex":680,"name":"Duokles","en":"Doublade","evolved":true},
{"dex":681,"name":"Durengard (Schild)","de":"Durengard (Schildform)","en":"Aegislash (Shield Forme)","evolved":true},
{"dex":"681B","name":"Durengard (Klinge)","de":"Durengard (Klingenform)","en":"Aegislash (Blade Forme)","evolved":true},
{"dex":682,"name":"Parfi","en":"Spritzee"},
{"dex":683,"name":"Parfinesse","en":"Aromatisse","evolved":true},
{"dex":684,"name":"Flauschling","en":"Swirlix","getshiny":true},
{"dex":685,"name":"Sabbaione","en":"Slurpuff","evolved":true},
{"dex":686,"name":"Iscalar","en":"Inkay","getshiny":true},
{"dex":687,"name":"Calamanero","en":"Malamar","evolved":true},
{"dex":688,"name":"Bithora","en":"Binacle","getshiny":true},
{"dex":689,"name":"Thanathora","en":"Barbaracle","evolved":true},
{"dex":690,"name":"Algitt","en":"Skrelp"},
{"dex":691,"name":"Tandrak","en":"Dragalge","evolved":true},
{"dex":692,"name":"Scampisto","en":"Clauncher"},
{"dex":693,"name":"Wummer","en":"Clawitzer","evolved":true},
{"dex":694,"name":"Eguana","en":"Helioptile"},
{"dex":695,"name":"Elezard","en":"Heliolisk","evolved":true},
{"dex":696,"name":"Balgoras","en":"Tyrunt"},
{"dex":697,"name":"Monargoras","en":"Tyrantrum","evolved":true},
{"dex":698,"name":"Amarino","en":"Amaura"},
{"dex":699,"name":"Amagarga","en":"Aurorus","evolved":true},
{"dex":700,"name":"Feelinara","en":"Sylveon","evolved":true},
{"dex":701,"name":"Resladero","en":"Hawlucha"},
{"dex":702,"name":"Dedenne"},
{"dex":703,"name":"Rocara","en":"Carbink"},
{"dex":704,"name":"Viscora","en":"Goomy"},
{"dex":705,"name":"Viscargot","en":"Sliggoo","evolved":true},
{"dex":"705H","name":"Hisui-Viscargot","en":"Hisuian Sliggoo","hisuian":true,"evolved":true},
{"dex":706,"name":"Viscogon","en":"Goodra","evolved":true},
{"dex":"706H","name":"Hisui-Viscogon","en":"Hisuian Goodra","hisuian":true,"evolved":true},
{"dex":707,"name":"Clavion","en":"Klefki","regional":true},
{"dex":708,"name":"Paragoni","en":"Phantump"},
{"dex":709,"name":"Trombork","en":"Trevenant","evolved":true},
{"dex":710,"name":"Irrbis (M)","de":"Irrbis (Größe M)","en":"Pumpkaboo (Average Size)"},
{"dex":"710S","name":"Irrbis (S)","de":"Irrbis (Größe S)","en":"Pumpkaboo (Small Size)"},
{"dex":"710L","name":"Irrbis (L)","de":"Irrbis (Größe L)","en":"Pumpkaboo (Large Size)"},
{"dex":"710X","name":"Irrbis (XL)","de":"Irrbis (Größe XL)","en":"Pumpkaboo (Super Size)"},
{"dex":711,"name":"Pumpdjinn (M)","de":"Pumpdjinn (Größe M)","en":"Gourgeist (Average Size)","evolved":true},
{"dex":"711S","name":"Pumpdjinn (S)","de":"Pumpdjinn (Größe S)","en":"Gourgeist (Small Size)","evolved":true},
{"dex":"711L","name":"Pumpdjinn (L)","de":"Pumpdjinn (Größe L)","en":"Gourgeist (Large Size)","evolved":true},
{"dex":"711X","name":"Pumpdjinn (XL)","de":"Pumpdjinn (Größe XL)","en":"Gourgeist (Super Size)","evolved":true},
{"dex":712,"name":"Arktip","en":"Bergmite"},
{"dex":713,"name":"Arktilas","en":"Avalugg","evolved":true},
{"dex":"713H","name":"Hisui-Arktilas","en":"Hisuian Avalugg","hisuian":true,"evolved":true},
{"dex":714,"name":"eF-eM","en":"Noibat"},
{"dex":715,"name":"UHaFnir","en":"Noivern","evolved":true},
{"dex":716,"name":"Xerneas","legendary":true},
{"dex":717,"name":"Yveltal","legendary":true},
{"dex":718,"name":"Zygarde","de":"50%-Zygarde","en":"Zygarde 50% Forme","legendary":true},
{"dex":"718T","name":"Zygarde (10%)","de":"10%-Zygarde","en":"Zygarde 10% Forme","legendary":true},
{"dex":"718C","name":"Zygarde (Optimum)","de":"Optimum-Zygarde","en":"Zygarde Complete Forme","legendary":true},
{"dex":719,"name":"Diancie","mythical":true},
{"dex":720,"name":"Hoopa (Gebannt)","de":"Gebanntes Hoopa","en":"Hoopa Confined","mythical":true},
{"dex":"720U","name":"Hoopa (Entfesselt)","de":"Entfesseltes Hoopa","en":"Hoopa Unbound","mythical":true},
{"dex":721,"name":"Volcanion","mythical":true},
{"dex":"3M","name":"Mega-Bisaflor","en":"Mega Venusaur","evolved":true,"mega":true},
{"dex":"6X","name":"Mega-Glurak X","en":"Mega Charizard X","evolved":true,"mega":true},
{"dex":"6Y","name":"Mega-Glurak Y","en":"Mega Charizard Y","evolved":true,"mega":true},
{"dex":"9M","name":"Mega-Turtok","en":"Mega Blastoise","evolved":true,"mega":true},
{"dex":"15M","name":"Mega-Bibor","en":"Mega Beedrill","evolved":true,"mega":true},
{"dex":"18M","name":"Mega-Tauboss","en":"Mega Pidgeot","evolved":true,"mega":true},
{"dex":"65M","name":"Mega-Simsala","en":"Mega Alakazam","evolved":true,"mega":true},
{"dex":"80M","name":"Mega-Lahmus","en":"Mega Slowbro","evolved":true,"mega":true},
{"dex":"94M","name":"Mega-Gengar","en":"Mega Gengar","evolved":true,"mega":true},
{"dex":"115M","name":"Mega-Kangama","en":"Mega Kangaskhan","mega":true},
{"dex":"127M","name":"Mega-Pinsir","en":"Mega Pinsir","mega":true},
{"dex":"130M","name":"Mega-Garados","en":"Mega Gyarados","evolved":true,"mega":true},
{"dex":"142M","name":"Mega-Aerodactyl","en":"Mega Aerodactyl","mega":true},
{"dex":"150X","name":"Mega-Mewtu X","en":"Mega Mewtwo X","mega":true},
{"dex":"150Y","name":"Mega-Mewtu Y","en":"Mega Mewtwo Y","mega":true},
{"dex":"181M","name":"Mega-Ampharos","en":"Mega Ampharos","evolved":true,"mega":true},
{"dex":"208M","name":"Mega-Stahlos","en":"Mega Steelix","evolved":true,"mega":true},
{"dex":"212M","name":"Mega-Scherox","en":"Mega Scizor","evolved":true,"mega":true},
{"dex":"214M","name":"Mega-Skaraborn","en":"Mega Heracross","evolved":true,"mega":true},
{"dex":"229M","name":"Mega-Hundemon","en":"Mega Houndoom","evolved":true,"mega":true},
{"dex":"248M","name":"Mega-Despotar","en":"Mega Tyranitar","evolved":true,"mega":true},
{"dex":"254M","name":"Mega-Gewaldro","en":"Mega Sceptile","evolved":true,"mega":true},
{"dex":"257M","name":"Mega-Lohgock","en":"Mega Blaziken","evolved":true,"mega":true},
{"dex":"260M","name":"Mega-Sumpex","en":"Mega Swampert","evolved":true,"mega":true},
{"dex":"282M","name":"Mega-Guardevoir","en":"Mega Gardevoir","evolved":true,"mega":true},
{"dex":"302M","name":"Mega-Zobiris","en":"Mega Sableye","mega":true},
{"dex":"303M","name":"Mega-Flunkifer","en":"Mega Mawile","mega":true},
{"dex":"306M","name":"Mega-Stolloss","en":"Mega Aggron","evolved":true,"mega":true},
{"dex":"308M","name":"Mega-Meditalis","en":"Mega Medicham","evolved":true,"mega":true},
{"dex":"310M","name":"Mega-Voltenso","en":"Mega Manectric","evolved":true,"mega":true},
{"dex":"319M","name":"Mega-Tohaido","en":"Mega Sharpedo","evolved":true,"mega":true},
{"dex":"323M","name":"Mega-Camerupt","en":"Mega Camerupt","evolved":true,"mega":true},
{"dex":"334M","name":"Mega-Altaria","en":"Mega Altaria","evolved":true,"mega":true},
{"dex":"354M","name":"Mega-Banette","en":"Mega Banette","evolved":true,"mega":true},
{"dex":"359M","name":"Mega-Absol","en":"Mega Absol","mega":true},
{"dex":"362M","name":"Mega-Firnontor","en":"Mega Glalie","evolved":true,"mega":true},
{"dex":"373M","name":"Mega-Brutalanda","en":"Mega Salamence","evolved":true,"mega":true},
{"dex":"376M","name":"Mega-Metagross","en":"Mega Metagross","evolved":true,"mega":true},
{"dex":"380M","name":"Mega-Latias","en":"Mega Latias","legendary":true,"mega":true},
{"dex":"381M","name":"Mega-Latios","en":"Mega Latios","legendary":true,"mega":true},
{"dex":"382P","name":"Proto-Kyogre","en":"Primal Kyogre","legendary":true,"mega":true},
{"dex":"383P","name":"Proto-Groudon","en":"Primal Groudon","legendary":true,"mega":true},
{"dex":"384M","name":"Mega-Rayquaza","en":"Mega Rayquaza","legendary":true,"mega":true},
{"dex":"428M","name":"Mega-Schlapor","en":"Mega Lopunny","evolved":true,"mega":true},
{"dex":"445M","name":"Mega-Knakrack","en":"Mega Garchomp","evolved":true,"mega":true},
{"dex":"448M","name":"Mega-Lucario","en":"Mega Lucario","evolved":true,"mega":true},
{"dex":"460M","name":"Mega-Rexblisar","en":"Mega Abomasnow","evolved":true,"mega":true},
{"dex":"475M","name":"Mega-Galagladi","en":"Mega Gallade","evolved":true,"mega":true},
{"dex":"531M","name":"Mega-Ohrdoch","en":"Mega Audino","mega":true},
{"dex":"719M","name":"Mega-Diancie","en":"Mega Diancie","mythical":true,"mega":true},
{"dex":722,"name":"Bauz","en":"Rowlet"},
{"dex":723,"name":"Arboretoss","en":"Dartrix","evolved":true},
{"dex":724,"name":"Silvarro","en":"Decidueye","evolved":true},
{"dex":"724H","name":"Hisui-Silvarro","en":"Hisuian Decidueye","hisuian":true,"evolved":true},
{"dex":725,"name":"Flamiau","en":"Litten"},
{"dex":726,"name":"Miezunder","en":"Torracat","evolved":true},
{"dex":727,"name":"Fuegro","en":"Incineroar","evolved":true},
{"dex":728,"name":"Robball","en":"Popplio"},
{"dex":729,"name":"Marikeck","en":"Brionne","evolved":true},
{"dex":730,"name":"Primarene","en":"Primarina","evolved":true},
{"dex":731,"name":"Peppeck","en":"Pikipek"},
{"dex":732,"name":"Trompeck","en":"Trumbeak","evolved":true},
{"dex":733,"name":"Tukanon","en":"Toucannon","evolved":true},
{"dex":734,"name":"Mangunior","en":"Yungoos","getshiny":true},
{"dex":735,"name":"Manguspektor","en":"Gumshoos","evolved":true},
{"dex":736,"name":"Mabula","en":"Grubbin"},
{"dex":737,"name":"Akkup","en":"Charjabug","evolved":true},
{"dex":738,"name":"Donarion","en":"Vikavolt","evolved":true},
{"dex":739,"name":"Krabbox","en":"Crabrawler"},
{"dex":740,"name":"Krawell","en":"Crabominable","evolved":true},
{"dex":741,"name":"Choreogel (Flamenco)","de":"Choreogel (Flamenco-Stil)","en":"Oricorio (Baile Style)","regional":true},
{"dex":"741M","name":"Choreogel (Cheerleading)","de":"Choreogel (Cheerleading-Stil)","en":"Oricorio (Pom-Pom Style)","regional":true},
{"dex":"741P","name":"Choreogel (Hula)","de":"Choreogel (Hula-Stil)","en":"Oricorio (Pa'u Style)","regional":true},
{"dex":"741S","name":"Choreogel (Buyo)","de":"Choreogel (Buyo-Stil)","en":"Oricorio (Sensu Style)","regional":true},
{"dex":742,"name":"Wommel","en":"Cutiefly"},
{"dex":743,"name":"Bandelby","en":"Ribombee","evolved":true},
{"dex":744,"name":"Wuffels","en":"Rockruff","getshiny":true},
{"dex":745,"name":"Wolwerock (Tag)","de":"Wolwerock (Tagform)","en":"Lycanroc (Midday Form)","evolved":true},
{"dex":"745N","name":"Wolwerock (Nacht)","de":"Wolwerock (Nachtform)","en":"Lycanroc (Midnight Form)","evolved":true},
{"dex":"745D","name":"Wolwerock (Zwielicht)","de":"Wolwerock (Zwielichtform)","en":"Lycanroc (Dusk Form)","evolved":true},
{"dex":746,"name":"Lusardin (Einzel)","de":"Lusardin (Einzelform)","en":"Wishiwashi (Solo Form)"},
{"dex":"746S","name":"Lusardin (Schwarm)","de":"Lusardin (Schwarmform)","en":"Wishiwashi (School Form)"},
{"dex":747,"name":"Garstella","en":"Mareanie"},
{"dex":748,"name":"Aggrostella","en":"Toxapex","evolved":true},
{"dex":749,"name":"Pampuli","en":"Mudbray"},
{"dex":750,"name":"Pampross","en":"Mudsdale","evolved":true},
{"dex":751,"name":"Araqua","en":"Dewpider"},
{"dex":752,"name":"Aranestro","en":"Araquanid","evolved":true},
{"dex":753,"name":"Imantis","en":"Fomantis"},
{"dex":754,"name":"Mantidea","en":"Lurantis","evolved":true},
{"dex":755,"name":"Bubungus","en":"Morelull"},
{"dex":756,"name":"Lamellux","en":"Shiinotic","evolved":true},
{"dex":757,"name":"Molunk","en":"Salandit"},
{"dex":758,"name":"Amfira","en":"Salazzle","evolved":true},
{"dex":759,"name":"Velursi","en":"Stufful","getshiny":true},
{"dex":760,"name":"Kosturso","en":"Bewear","evolved":true},
{"dex":761,"name":"Frubberl","en":"Bounsweet"},
{"dex":762,"name":"Frubaila","en":"Steenee","evolved":true},
{"dex":763,"name":"Fruyal","en":"Tsareena","evolved":true},
{"dex":764,"name":"Curelei","en":"Comfey","regional":true},
{"dex":765,"name":"Kommandutan","en":"Oranguru"},
{"dex":766,"name":"Quartermak","en":"Passimian"},
{"dex":767,"name":"Reißlaus","en":"Wimpod"},
{"dex":768,"name":"Tectass","en":"Golisopod","evolved":true},
{"dex":769,"name":"Sankabuh","en":"Sandygast"},
{"dex":770,"name":"Colossand","en":"Palossand","evolved":true},
{"dex":771,"name":"Gufa","en":"Pyukumuku"},
{"dex":772,"name":"Typ:Null","en":"Type: Null","legendary":true},
{"dex":773,"name":"Amigento","en":"Silvally","legendary":true,"evolved":true},
{"dex":774,"name":"Meteno (Meteor)","de":"Meteno (Meteorform)","en":"Minior (Meteor Form)"},
{"dex":"774C","name":"Meteno (Kern)","en":"Minior (Core)"},
{"dex":775,"name":"Koalelu","en":"Komala"},
{"dex":776,"name":"Tortunator","en":"Turtonator"},
{"dex":777,"name":"Togedemaru"},
{"dex":778,"name":"Mimigma","en":"Mimikyu"},
{"dex":779,"name":"Knirfish","en":"Bruxish"},
{"dex":780,"name":"Sen-Long","en":"Drampa"},
{"dex":781,"name":"Moruda","en":"Dhelmise"},
{"dex":782,"name":"Miniras","en":"Jangmo-o"},
{"dex":783,"name":"Mediras","en":"Hakamo-o","evolved":true},
{"dex":784,"name":"Grandiras","en":"Kommo-o","evolved":true},
{"dex":785,"name":"Kapu-Riki","en":"Tapu Koko","legendary":true},
{"dex":786,"name":"Kapu-Fala","en":"Tapu Lele","legendary":true},
{"dex":787,"name":"Kapu-Toro","en":"Tapu Bulu","legendary":true},
{"dex":788,"name":"Kapu-Kime","en":"Tapu Fini","legendary":true},
{"dex":789,"name":"Cosmog","legendary":true},
{"dex":790,"name":"Cosmovum","en":"Cosmoem","legendary":true,"evolved":true},
{"dex":791,"name":"Solgaleo","legendary":true,"evolved":true},
{"dex":792,"name":"Lunala","legendary":true,"evolved":true},
{"dex":793,"name":"Anego","en":"Nihilego","ultrabeast":true},
{"dex":794,"name":"Masskito","en":"Buzzwole","ultrabeast":true},
{"dex":795,"name":"Schabelle","en":"Pheromosa","ultrabeast":true},
{"dex":796,"name":"Voltriant","en":"Xurkitree","ultrabeast":true},
{"dex":797,"name":"Kaguron","en":"Celesteela","ultrabeast":true,"regional":true},
{"dex":798,"name":"Katagami","en":"Kartana","ultrabeast":true,"regional":true},
{"dex":799,"name":"Schlingking","en":"Guzzlord","ultrabeast":true},
{"dex":800,"name":"Necrozma","legendary":true},
{"dex":"800M","name":"Necrozma (Abendmähne)","en":"Dusk Mane Necrozma","legendary":true},
{"dex":"800W","name":"Necrozma (Morgenschwingen)","en":"Dawn Wings Necrozma","legendary":true},
{"dex":"800U","name":"Ultra-Necrozma","en":"Ultra Necrozma","legendary":true},
{"dex":801,"name":"Magearna","mythical":true},
{"dex":802,"name":"Marshadow","mythical":true},
{"dex":803,"name":"Venicro","en":"Poipole","ultrabeast":true},
{"dex":804,"name":"Agoyon","en":"Naganadel","ultrabeast":true,"evolved":true},
{"dex":805,"name":"Muramura","en":"Stakataka","ultrabeast":true},
{"dex":806,"name":"Kopplosio","en":"Blacephalon","ultrabeast":true},
{"dex":807,"name":"Zeraora","mythical":true},
{"dex":808,"name":"Meltan","mythical":true},
{"dex":809,"name":"Melmetal","mythical":true,"evolved":true},
{"dex":810,"name":"Chimpep","en":"Grookey"},
{"dex":811,"name":"Chimstix","en":"Thwackey","evolved":true},
{"dex":812,"name":"Gortrom","en":"Rillaboom","evolved":true},
{"dex":813,"name":"Hopplo","en":"Scorbunny"},
{"dex":814,"name":"Kickerlo","en":"Raboot","evolved":true},
{"dex":815,"name":"Liberlo","en":"Cinderace","evolved":true},
{"dex":816,"name":"Memmeon","en":"Sobble"},
{"dex":817,"name":"Phlegleon","en":"Drizzile","evolved":true},
{"dex":818,"name":"Intelleon","en":"Inteleon","evolved":true},
{"dex":819,"name":"Raffel","en":"Skwovet"},
{"dex":820,"name":"Schlaraffel","en":"Greedent","evolved":true},
{"dex":821,"name":"Meikro","en":"Rookidee"},
{"dex":822,"name":"Kranoviz","en":"Corvisquire","evolved":true},
{"dex":823,"name":"Krarmor","en":"Corviknight","evolved":true},
{"dex":824,"name":"Sensect","en":"Blipbug"},
{"dex":825,"name":"Keradar","en":"Dottler","evolved":true},
{"dex":826,"name":"Maritellit","en":"Orbeetle","evolved":true},
{"dex":827,"name":"Kleptifux","en":"Nickit"},
{"dex":828,"name":"Gaunux","en":"Thievul","evolved":true},
{"dex":829,"name":"Cottini","en":"Gossifleur"},
{"dex":830,"name":"Cottomi","en":"Eldegoss","evolved":true},
{"dex":831,"name":"Wolly","en":"Wooloo"},
{"dex":832,"name":"Zwollock","en":"Dubwool","evolved":true},
{"dex":833,"name":"Kamehaps","en":"Chewtle"},
{"dex":834,"name":"Kamalm","en":"Drednaw","evolved":true},
{"dex":835,"name":"Voldi","en":"Yamper"},
{"dex":836,"name":"Bellektro","en":"Boltund","evolved":true},
{"dex":837,"name":"Klonkett","en":"Rolycoly"},
{"dex":838,"name":"Wagong","en":"Carkol","evolved":true},
{"dex":839,"name":"Montecarbo","en":"Coalossal","evolved":true},
{"dex":840,"name":"Knapfel","en":"Applin"},
{"dex":841,"name":"Drapfel","en":"Flapple","evolved":true},
{"dex":842,"name":"Schlapfel","en":"Appletun","evolved":true},
{"dex":843,"name":"Salanga","en":"Silicobra"},
{"dex":844,"name":"Sanaconda","en":"Sandaconda","evolved":true},
{"dex":845,"name":"Urgl","en":"Cramorant"},
{"dex":846,"name":"Pikuda","en":"Arrokuda"},
{"dex":847,"name":"Barrakiefa","en":"Barraskewda","evolved":true},
{"dex":848,"name":"Toxel"},
{"dex":849,"name":"Riffex","en":"Toxtricity","evolved":true},
{"dex":850,"name":"Thermopod","en":"Sizzlipede"},
{"dex":851,"name":"Infernopod","en":"Centiskorch","evolved":true},
{"dex":852,"name":"Klopptopus","en":"Clobbopus"},
{"dex":853,"name":"Kaocto","en":"Grapploct","evolved":true},
{"dex":854,"name":"Fatalitee","en":"Sinistea"},
{"dex":855,"name":"Mortipot","en":"Polteageist","evolved":true},
{"dex":856,"name":"Brimova","en":"Hatenna"},
{"dex":857,"name":"Brimano","en":"Hattrem","evolved":true},
{"dex":858,"name":"Silembrim","en":"Hatterene","evolved":true},
{"dex":859,"name":"Bähmon","en":"Impidimp"},
{"dex":860,"name":"Pelzebub","en":"Morgrem","evolved":true},
{"dex":861,"name":"Olangaar","en":"Grimmsnarl","evolved":true},
{"dex":862,"name":"Barrikadax","en":"Obstagoon","evolved":true},
{"dex":863,"name":"Mauzinger","en":"Perrserker","evolved":true},
{"dex":864,"name":"Gorgasonn","en":"Cursola","regional":true,"evolved":true},
{"dex":865,"name":"Lauchzelot","en":"Sirfetch'd","evolved":true},
{"dex":866,"name":"Pantifrost","en":"Mr. Rime","evolved":true},
{"dex":867,"name":"Oghnatoll","en":"Runerigus","evolved":true},
{"dex":868,"name":"Hokumil","en":"Milcery"},
{"dex":869,"name":"Pokusan","en":"Alcremie","evolved":true},
{"dex":870,"name":"Legios","en":"Falinks"},
{"dex":871,"name":"Britzigel","en":"Pincurchin"},
{"dex":872,"name":"Snomnom","en":"Snom"},
{"dex":873,"name":"Mottineva","en":"Frosmoth","evolved":true},
{"dex":874,"name":"Humanolith","en":"Stonjourner"},
{"dex":875,"name":"Kubuin (Tiefkühlkopf)","en":"Eiscue (Ice Face)"},
{"dex":"875N","name":"Kubuin (Wohlfühlkopf)","en":"Eiscue (Noice Face)"},
{"dex":876,"name":"Servol","en":"Indeedee"},
{"dex":877,"name":"Morpeko"},
{"dex":878,"name":"Kupfanti","en":"Cufant"},
{"dex":879,"name":"Patinaraja","en":"Copperajah","evolved":true},
{"dex":880,"name":"Lectragon","en":"Dracozolt"},
{"dex":881,"name":"Lecryodon","en":"Arctozolt"},
{"dex":882,"name":"Pescragon","en":"Dracovish"},
{"dex":883,"name":"Pescryodon","en":"Arctovish"},
{"dex":884,"name":"Duraludon"},
{"dex":885,"name":"Grolldra","en":"Dreepy"},
{"dex":886,"name":"Phandra","en":"Drakloak","evolved":true},
{"dex":887,"name":"Katapuldra","en":"Dragapult","evolved":true},
{"dex":888,"name":"Zacian (Krieger)","de":"Zacian (Heldenhafter Krieger)","en":"Zacian (Hero of Many Battles)","legendary":true},
{"dex":"888C","name":"Zacian (König)","de":"Zacian (König des Schwertes)","en":"Zacian (Crowned Sword)","legendary":true},
{"dex":889,"name":"Zamazenta (Krieger)","de":"Zamazenta (Heldenhafter Krieger)","en":"Zamazenta (Hero of Many Battles)","legendary":true},
{"dex":"889C","name":"Zamazenta (König)","de":"Zamazenta (König des Schildes)","en":"Zamazenta (Crowned Shield)","legendary":true},
{"dex":890,"name":"Endynalos","en":"Eternatus","legendary":true},
{"dex":891,"name":"Dakuma","en":"Kubfu","legendary":true},
{"dex":892,"name":"Wulaosu (Fokussierter Stil)","en":"Urshifu (Single Strike Style)","legendary":true,"evolved":true},
{"dex":"892R","name":"Wulaosu (Fließender Stil)","en":"Urshifu (Rapid Strike Style)","legendary":true,"evolved":true},
{"dex":893,"name":"Zarude","mythical":true},
{"dex":"893D","name":"Papa Zarude","en":"Dada Zarude","mythical":true},
{"dex":894,"name":"Regieleki","legendary":true},
{"dex":895,"name":"Regidrago","legendary":true},
{"dex":896,"name":"Polaross","en":"Glastrier","legendary":true},
{"dex":897,"name":"Phantoross","en":"Spectrier","legendary":true},
{"dex":898,"name":"Coronospa","en":"Calyrex","legendary":true},
{"dex":"898I","name":"Coronospa (Schimmelreiter)","en":"Calyrex (Ice Rider)","legendary":true},
{"dex":"898S","name":"Coronospa (Rappenreiter)","en":"Calyrex (Shadow Rider)","legendary":true},
{"dex":"6G","name":"Gigadynamax-Glurak","en":"Gigantamax Charizard","evolved":true,"gigantamax":true},
{"dex":"12G","name":"Gigadynamax-Smettbo","en":"Gigantamax Butterfree","evolved":true,"gigantamax":true},
{"dex":"25G","name":"Gigadynamax-Pikachu","en":"Gigantamax Pikachu","gigantamax":true},
{"dex":"52GM","name":"Gigadynamax-Mauzi","en":"Gigantamax Meowth","gigantamax":true},
{"dex":"68G","name":"Gigadynamax-Machomei","en":"Gigantamax Machamp","evolved":true,"gigantamax":true},
{"dex":"94G","name":"Gigadynamax-Gengar","en":"Gigantamax Gengar","evolved":true,"gigantamax":true},
{"dex":"99G","name":"Gigadynamax-Kingler","en":"Gigantamax Kingler","evolved":true,"gigantamax":true},
{"dex":"131G","name":"Gigadynamax-Lapras","en":"Gigantamax Lapras","gigantamax":true},
{"dex":"133G","name":"Gigadynamax-Evoli","en":"Gigantamax Eevee","gigantamax":true},
{"dex":"143G","name":"Gigadynamax-Relaxo","en":"Gigantamax Snorlax","gigantamax":true},
{"dex":"569G","name":"Gigadynamax-Deponitox","en":"Gigantamax Garbodor","evolved":true,"gigantamax":true},
{"dex":"809G","name":"Gigadynamax-Melmetal","en":"Gigantamax Melmetal","mythical":true,"evolved":true,"gigantamax":true},
{"dex":"823G","name":"Gigadynamax-Krarmor","en":"Gigantamax Corviknight","evolved":true,"gigantamax":true},
{"dex":"826G","name":"Gigadynamax-Maritellit","en":"Gigantamax Orbeetle","evolved":true,"gigantamax":true},
{"dex":"834G","name":"Gigadynamax-Kamalm","en":"Gigantamax Drednaw","evolved":true,"gigantamax":true},
{"dex":"839G","name":"Gigadynamax-Montecarbo","en":"Gigantamax Coalossal","evolved":true,"gigantamax":true},
{"dex":"841G","name":"Gigadynamax-Drapfel","en":"Gigantamax Flapple","evolved":true,"gigantamax":true},
{"dex":"842G","name":"Gigadynamax-Schlapfel","en":"Gigantamax Appletun","evolved":true,"gigantamax":true},
{"dex":"844G","name":"Gigadynamax-Sanaconda","en":"Gigantamax Sandaconda","evolved":true,"gigantamax":true},
{"dex":"849G","name":"Gigadynamax-Riffex","en":"Gigantamax Toxtricity","evolved":true,"gigantamax":true},
{"dex":"851G","name":"Gigadynamax-Infernopod","en":"Gigantamax Centiskorch","evolved":true,"gigantamax":true},
{"dex":"858G","name":"Gigadynamax-Silembrim","en":"Gigantamax Hatterene","evolved":true,"gigantamax":true},
{"dex":"861G","name":"Gigadynamax-Olangaar","en":"Gigantamax Grimmsnarl","evolved":true,"gigantamax":true},
{"dex":"869G","name":"Gigadynamax-Pokusan","en":"Gigantamax Alcremie","evolved":true,"gigantamax":true},
{"dex":"879G","name":"Gigadynamax-Patinaraja","en":"Gigantamax Copperajah","evolved":true,"gigantamax":true},
{"dex":"884G","name":"Gigadynamax-Duraludon","en":"Gigantamax Duraludon","gigantamax":true},
{"dex":"890E","name":"Unendynamax-Endynalos","en":"Eternamax Eternatus","legendary":true,"gigantamax":true},
{"dex":"892G","name":"Gigadynamax-Wulaosu (Fokussierter Stil)","en":"Gigantamax Urshifu (Single Strike Style)","legendary":true,"evolved":true,"gigantamax":true},
{"dex":"892RG","name":"Gigadynamax-Wulaosu (Fließender Stil)","en":"Gigantamax Urshifu (Rapid Strike Style)","legendary":true,"evolved":true,"gigantamax":true},
{"dex":899,"name":"Damythir","en":"Wyrdeer","evolved":true},
{"dex":900,"name":"Axantor","en":"Kleavor","evolved":true},
{"dex":901,"name":"Ursaluna","en":"Ursaluna","evolved":true},
{"dex":902,"name":"Salmagnis","en":"Basculegion","evolved":true},
{"dex":903,"name":"Snieboss","en":"Sneasler","evolved":true},
{"dex":904,"name":"Myriador","en":"Overqwil","evolved":true},
{"dex":905,"name":"Cupidos (Inkarnation)","de":"Cupidos (Inkarnationsform)","en":"Enamorus (Incarnate Forme)","legendary":true},
{"dex":"905T","name":"Cupidos (Tiergeist)","de":"Cupidos (Tiergeistform)","en":"Enamorus (Therian Forme)","legendary":true}
];

var items = [
{"id":"PB","name":"Pokéball","en":"Poké Ball"},
{"id":"SB","name":"Superball","en":"Great Ball"},
{"id":"UB","name":"Hyperball","en":"Ultra Ball"},
{"id":"RB","name":"Himmihbeere","en":"Razz Berry"},
{"id":"IB","name":"Sananabeere","en":"Pinap Berry"},
{"id":"NB","name":"Nanabbeere","en":"Nanab Berry"},
{"id":"GR","name":"Goldene Himmihbeere","en":"Golden Razz Berry"},
{"id":"SIB","name":"Silberne Sananabeere","en":"Silver Pinap Berry"},
{"id":"RC","name":"Sonderbonbon","en":"Rare Candy"},
{"id":"CT","name":"Lade-TM","en":"Charge TM"},
{"id":"QT","name":"Sofort-TM","en":"Quick TM"},
{"id":"DU","name":"Sternenstaub","en":"Stardust"},
{"id":"DU:1000","name":"Sternenstaub (1000+)","en":"Stardust (1000+)"},
{"id":"RE","name":"Beleber","en":"Revive"},
{"id":"MR","name":"Top-Beleber","en":"Max Revive"},
{"id":"PO","name":"Trank","en":"Potion"},
{"id":"SP","name":"Supertrank","en":"Super Potion"},
{"id":"HP","name":"Hypertrank","en":"Hyper Potion"},
{"id":"MP","name":"Top-Trank","en":"Max Potion"},
{"id":"EE","name":"Entwicklungsitems","en":"Evolution Items"},
{"id":"SE","name":"Sonnenstein","en":"Sun Stone"},
{"id":"KE","name":"King-Stein","en":"King's Rock"},
{"id":"ME","name":"Metallmantel","en":"Metal Coat"},
{"id":"DE","name":"Drachenhaut","en":"Dragon Scale"},
{"id":"UE","name":"Upgrade","en":"Up-Grade"},
{"id":"LG","name":"Gletscher-Lockmodul","en":"Glacial Lure Module"},
{"id":"LMO","name":"Moos-Lockmodul","en":"Mossy Lure Module"},
{"id":"LMA","name":"Magnet-Lockmodul","en":"Magnetic Lure Module"},
{"id":"LR","name":"Regen-Lockmodul","en":"Rainy Lure Module"},
{"id":"SIE","name":"Sinnoh-Stein","en":"Sinnoh Stone"},
{"id":"EIE","name":"Einall-Stein","en":"Unova Stone"},
{"id":"MEG","name":"Mega-Energie","en":"Mega Energy"},
{"id":"BON","name":"Bonbon","en":"Candy"}
];

var specialfilter = [
{"id":"P","name":"Alle Begegnungen","en":"All encounters"},
{"id":"S","name":"Alle möglichen Shiny Begegnungen","en":"All potential Shiny encounters"}
];

var raids = {};

var raidjson = [
{"start":1663056000000,"tier4":["65M"],"tier5":[798]},
{"start":1663315200000,"tier4":["306M"],"tier5":[798]},
{"start":1664265600000,"tier4":["428M"],"tier5":[717]}
];

var quests = [1,4,7,25,"26A",37,60,64,95,100,125,129,133,138,140,142,147,152,155,158,170,179,185,187,193,198,202,206,209,226,252,255,258,280,309,311,312,327,343,345,347,371,374,436,443,449,459,595,618,659,702];
var quests_event = [81,204,299,529,597,777];
var legacy = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,"19A",23,25,26,"26A",27,"27A",28,29,30,31,32,33,34,35,36,37,"37A",38,39,40,41,42,43,44,46,47,48,50,"50A",51,52,"52A","52G",53,54,55,56,58,59,60,61,63,64,66,67,69,70,72,73,74,"74A",75,77,"77G",79,"79G",80,81,"83G",84,85,86,87,88,"88A",89,90,92,93,95,96,97,98,100,102,103,"103A",104,105,"105A",106,107,108,109,111,112,113,114,117,118,120,121,123,124,125,126,127,129,131,132,133,135,136,137,138,140,142,143,147,149,152,153,155,156,158,163,164,165,167,170,171,176,177,179,182,183,184,185,187,188,190,191,193,194,196,197,198,200,202,203,204,206,207,209,213,215,216,218,219,220,223,224,225,226,227,228,231,232,234,238,241,246,252,255,256,258,259,261,263,"263G",265,266,268,270,273,274,276,277,278,280,285,286,287,289,290,293,294,296,299,300,302,303,304,307,309,310,311,312,313,314,315,316,317,318,320,322,325,327,328,329,331,333,335,336,337,338,339,341,343,345,347,349,351,"351I","351R","351S",353,355,358,359,361,362,363,366,370,371,374,387,390,391,393,396,399,401,403,408,410,412,"412S","412T",415,418,420,"421S",422,425,426,427,431,434,436,442,443,449,451,453,459,495,498,501,504,506,509,519,522,524,527,529,531,535,536,540,543,546,548,554,"554G",557,559,562,"562G",564,566,568,572,574,580,582,587,588,590,592,594,595,597,599,602,605,607,613,615,616,618,"618G",621,622,627,629,633,650,653,656,659,661,667,676,677,682,684,686,688,690,692,694,696,698,702,708,722,725,728,731,734,736,741,751,753,759,767,777,819,831,870];

var changelogjson = {
    "items": [
		{"ver":"1.11.25","date":"16.09.2022","change":["New Shiny: Aggron","Change Raid Bosses (Test your Mettle)","Quests: Add Magnemite, Pineco, Nosepass, Drilbur, Ferroseed, Togedemaru"]},
		{"ver":"1.11.24","date":"13.09.2022","change":["Change Raid Bosses (Debut of Kartana)"]},
		{"ver":"1.11.23","date":"12.09.2022","change":["Quests: Remove Hypno, Chimecho, Elgyem"]},
		{"ver":"1.11.22","date":"06.09.2022","change":["New Shinies: Alakazam, Elgyem","Change Raid Bosses (Psychic Spectacular)","Quests: Add Hypno, Chimecho, Elgyem"]},
		{"ver":"1.11.21","date":"03.09.2022","change":["New Shiny: Inkay"]},
		{"ver":"1.11.20","date":"01.09.2022","change":["Quests: Add Pikachu, Alolan Raichu, Kadabra, Voltorb, Electabuzz, Chinchou, Mareep, Wobbuffet, Electrike, Plusle, Minun, Baltoy, Bronzor, Joltik, Dedenne","Quests: Remove Sandshrew, Oddish, Geodude, Marowak, Rhyhorn, Sunkern, Gligar, Teddiursa, Donphan, Spheal, Pidove, Roggenrola, Litleo"]},
		{"ver":"1.11.19","date":"27.08.2022","change":["New Shiny: Munna","Change Raid Bosses (Pokémon GO Fest 2022 Finale)","Disabled some raid checks"]},
		{"ver":"1.11.18","date":"25.08.2022","change":["Change Raid Bosses (Return of Mega Ampharos)"]},
		{"ver":"1.11.17","date":"24.08.2022","change":["Change Raid Bosses (End of Pokémon World Championships 2022 Event)","Quests: Remove Pikachu, Galarian Zigzagoon, Galarian Stunfisk, Fletchling","Add raid schedule for Pokémon GO Fest Finale"]},
		{"ver":"1.11.16","date":"18.08.2022","change":["Change Raid Bosses (Pokémon World Championships 2022 Event)","Quests: Add Pikachu, Galarian Zigzagoon, Galarian Stunfisk, Fletchling"]},
		{"ver":"1.11.15","date":"16.08.2022","change":["Quests: Remove Caterpie, Weedle, Paras, Venonat, Ledyba, Spinarak, Silcoon, Cascoon, Nincada, Volbeat, Illumise, Kricketot, Burmy (all Cloaks), Combee, Sewaddle, Venipede, Dwebble, Karrablast, Shelmet, Grubbin, Dewpider, Wimpod"]},
		{"ver":"1.11.14","date":"10.08.2022","change":["New Shinies: Scizor, Venipede","Change Raid Bosses (Bug Out!)","Quests: Add Caterpie, Weedle, Paras, Venonat, Ledyba, Spinarak, Silcoon, Cascoon, Nincada, Volbeat, Illumise, Kricketot, Burmy (all Cloaks), Combee, Sewaddle, Venipede, Dwebble, Karrablast, Shelmet, Grubbin, Dewpider, Wimpod"]},
		{"ver":"1.11.13","date":"05.08.2022","change":["New Shinies: Pansage, Swirlix"]},
		{"ver":"1.11.12","date":"03.08.2022","change":["Change Raid Bosses (End of Hisui event)","Quests: Remove Clefairy, Paras, Psyduck, Magnemite, Sneasel, Remoraid, Shinx, Burmy (all Cloaks), Oshawott, Petilil, Rowlet"]},
		{"ver":"1.11.11","date":"01.08.2022","change":["Quests: Add Sandshrew, Oddish, Geodude, Marowak, Rhyhorn, Sunkern, Gligar, Teddiursa, Donphan, Spheal, Pidove, Roggenrola, Litleo","Quests: Remove Zubat, Meowth, Persian, Abra, Chansey, Hoothoot, Togetic, Natu, Aipom, Girafarig, Wingull, Wailmer, Glameow, Stunky, Cottonee"]},
		{"ver":"1.11.10","date":"31.07.2022","change":["New Shiny: Hisuian Braviary","Change Raid Bosses (Return of Palkia)"]},
		{"ver":"1.11.9","date":"27.07.2022","change":["Preparation for August Raids","Quests: Add Clefairy, Paras, Psyduck, Magnemite, Sneasel, Remoraid, Shinx, Burmy (all Cloaks), Oshawott, Petilil, Rowlet"]},
		{"ver":"1.11.8","date":"22.07.2022","change":["New Shinies: Combee, Panpour","Change Raid Bosses (Return of Dialga)"]},
		{"ver":"1.11.7","date":"17.07.2022","change":["New Shiny: Starly"]},
		{"ver":"1.11.6","date":"14.07.2022","change":["Change Raid Bosses (Return of Moltres)"]},
		{"ver":"1.11.5","date":"13.07.2022","change":["Change Raid Bosses (End of Anniversary Event)","Quests: Remove Pikachu, Turtwig, Chimchar, Piplup, Snivy, Tepig, Oshawott, Chespin, Fennekin, Froakie, Rowlet, Litten, Popplio"]},
		{"ver":"1.11.4","date":"04.07.2022","change":["Change Raid Bosses (Anniversary Event)","Quests: Add Pikachu, Turtwig, Chimchar, Piplup, Snivy, Tepig, Oshawott, Chespin, Fennekin, Froakie, Rowlet, Litten, Popplio"]},
		{"ver":"1.11.3","date":"01.07.2022","change":["New Shinys: Pansear, Foongus","Change Raid Bosses (GO Fest Berlin Special Raids)","Quests: Add Zubat, Meowth, Persian, Abra, Chansey, Hoothoot, Togetic, Natu, Aipom, Girafarig, Wingull, Glameow, Stunky, Cottonee","Quests: Remove Venonat, Diglett, Alolan Diglett, Geodude, Graveler, Grimer, Cubone, Hitmonlee, Hitmonchan, Rhyhorn, Chinchou, Swinub, Phanpy, Larvitar, Trapinch, Baltoy, Joltik"]},
		{"ver":"1.11.2","date":"30.06.2022","change":["Preparation for July raids","Quests: Remove Ivysaur, Venusaur, Charmeleon, Charizard, Wartortle, Blastoise, Pikachu, Snorlax, Dragonite, Slaking, Wimpod"]},
		{"ver":"1.11.1","date":"16.06.2022","change":["Quests: Add Ivysaur, Venusaur, Charmeleon, Charizard, Wartortle, Blastoise, Pikachu, Snorlax, Dragonite, Slaking, Wimpod"]},
		{"ver":"1.11","date":"12.06.2022","change":["Preparation for special post-Deino CD raids","Events: Add option to hide all GBL events","Quests: Remove Cranidos, Shieldon, Tirtouga, Archen, Tyrunt, Amaura"]},
		{"ver":"1.10.86","date":"07.06.2022","change":["New Shinies: Tirtouga, Archen","Change Raid Bosses (Adventure Week)", "Quests: Add Cranidos, Shieldon, Tirtouga, Archen, Tyrunt, Amaura"]},
		{"ver":"1.10.85","date":"06.06.2022","change":["Change Raid Bosses (End of GO Fest 2022)"]},
		{"ver":"1.10.84","date":"05.06.2022","change":["Change Raid Bosses (Debut of Nihilego)"]},
		{"ver":"1.10.83","date":"04.06.2022","change":["Change Raid Bosses (GO Fest 2022)","New Shinies: Shroomish, Numel, Karrablast, Axew, Shelmet"]},
		{"ver":"1.10.82","date":"02.06.2022","change":["Quests: Add Venonat, Diglett, Alolan Diglett, Geodude, Graveler, Grimer, Cubone, Hitmonlee, Hitmonchan, Rhyhorn, Chinchou, Swinub, Phanpy, Larvitar, Trapinch, Baltoy, Joltik","Quests: Remove Pikachu, Jigglypuff, Machop, Exeggcute, Ledyba, Spinarak, Misdreavus, Remoraid, Zigzagoon, Carvanha, Shuppet, Duskull, Lillipup, Klink"]},
		{"ver":"1.10.81","date":"31.05.2022","change":["Change Raid Bosses","Quests: Remove Rowlet, Litten, Popplio, Pikipek, Yungoos"]},
		{"ver":"1.10.80","date":"25.05.2022","change":["Change Raid Bosses","Quests: Add Rowlet, Litten, Popplio, Pikipek, Yungoos"]},
		{"ver":"1.10.79","date":"20.05.2022","change":["Quests: Remove Lapras, Marill, Wailmer, Luvdisc, Binacle, Dewpider"]},
		{"ver":"1.10.78","date":"13.05.2022","change":["New Shiny: Corphish"]},
		{"ver":"1.10.77","date":"12.05.2022","change":["New Shiny: Binacle","Quests: Add Lapras, Marill, Wailmer, Luvdisc, Binacle, Dewpider"]},
		{"ver":"1.10.76","date":"10.05.2022","change":["Change Raid Bosses (Debut of Tapu Fini)"]},
		{"ver":"1.10.76","date":"08.05.2022","change":["Quests: Remove Doduo, Swablu, Emolga"]},
		{"ver":"1.10.75","date":"03.05.2022","change":["Change Raid Bosses (Debut of Mega Latias/Latios)","Quests: Add Doduo, Swablu, Emolga"]},
		{"ver":"1.10.74","date":"01.05.2022","change":["Quests: Add Pikachu, Jigglypuff, Machop, Exeggcute, Ledyba, Spinarak, Misdreavus, Remoraid, Zigzagoon, Carvanha, Shuppet, Duskull, Lillipup, Klink","Quests: Remove Caterpie, Weedle, Rattata, Alolan Rattata, Paras, Marill, Skarmory, Wailmer, Shinx, Combee, Croagunk, Cottonee, Karrablast, Shelmet"]},
		{"ver":"1.10.73","date":"29.04.2022","change":["Change Raid Bosses (Debut of Mega Kangaskhan)","Scheduled all known raid bosses in May"]},
		{"ver":"1.10.72","date":"26.04.2022","change":["New Shiny: Therian Forme Landorus","Change Raid Bosses (Return of Therian Forme Landorus)"]},
		{"ver":"1.10.71","date":"25.04.2022","change":["Quests: Remove Turtwig, Cherubi, Snivy, Trubbish, Chespin, Phantump"]},
		{"ver":"1.10.70","date":"23.04.2022","change":["New Shiny: Stufful"]},
		{"ver":"1.10.69","date":"20.04.2022","change":["New Shiny: Cherubi","Quests: Add Turtwig, Cherubi, Snivy, Trubbish, Chespin, Phantump","Updated code for planned raid boss changes"]},
		{"ver":"1.10.68","date":"18.04.2022","change":["Quests: Remove Pikachu, Chansey, Buneary"]},
		{"ver":"1.10.67","date":"12.04.2022","change":["Change Raid Bosses (Spring into Spring event)","Quests: Add Pikachu, Chansey, Buneary"]},
		{"ver":"1.10.66","date":"08.04.2022","change":["Quests: Remove Sneasel, Scraggy"]},
		{"ver":"1.10.65","date":"05.04.2022","change":["New Shiny: Therian Forme Thundurus","Change Raid Bosses (Return of Therian Forme Thundurus)"]},
		{"ver":"1.10.64","date":"03.04.2022","change":["Quests: Add Sneasel, Scraggy"]},
		{"ver":"1.10.63","date":"01.04.2022","change":["Quests: Add Caterpie, Weedle, Rattata, Alolan Rattata, Paras, Marill, Skarmory, Shinx, Combee, Croagunk, Karrablast, Shelmet","Quests: Remove Diglett, Psyduck, Mankey, Abra, Machop, Drowzee, Alolan Exeggutor, Ledyba, Spinarak, Wooper, Larvitar, Makuhita, Nosepass, Bidoof, Petilil, Rufflet, Fletchling"]},
		{"ver":"1.10.62","date":"29.03.2022","change":["Quests: Remove Caterpie, Paras, Parasect, Exeggcute, Sunkern, Wurmple, Seedot, Ferroseed, Fomantis"]},
		{"ver":"1.10.61","date":"22.03.2022","change":["New Shiny: Cottonee","Change Raid Bosses (Lush Jungle Event)","Quests: Add Caterpie, Paras, Parasect, Exeggcute, Sunkern, Wurmple, Seedot, Ferroseed, Fomantis"]},
		{"ver":"1.10.60","date":"20.03.2022","change":["Quests: Remove Alolan Grimer, Castform (all Forms), Burmy (all Cloaks), Oricorio"]},
		{"ver":"1.10.59","date":"15.03.2022","change":["New Shiny: Tornadus (Therian Forme)","Change Raid Bosses (Festival of Colors)","Quests: Add Alolan Grimer, Castform (all Forms), Burmy (all Cloaks), Oricorio"]},
		{"ver":"1.10.58","date":"09.03.2022","change":["Quests: Remove Pikipek, Yungoos"]},
		{"ver":"1.10.57","date":"02.03.2022","change":["Quests: Add Diglett, Psyduck, Mankey, Abra, Machop, Drowzee, Alolan Exeggutor, Ledyba, Spinarak, Wooper, Larvitar, Makuhita, Nosepass, Wailmer, Bidoof, Cottonee, Petilil, Rufflet, Fletchling","Quests: Remove Pidgey, Spearow, Nidorina, Nidorino, Oddish, Paras, Bellsprout, Doduo, Krabby, Tangela, Staryu, Skarmory, Seedot, Slakoth, Meditite, Corphish, Woobat, Dwebble, Alomomola, Ferroseed, Spritzee, Swirlix"]},
		{"ver":"1.10.56","date":"01.03.2022","change":["New Shinies: Yungoos, Rockruff","Change Raid Bosses (Welcome to Alola)","Quests: Add Pikipek, Yungoos"]},
		{"ver":"1.10.55","date":"26.02.2022","change":["New Shinies: Golbat, Gloom, Poliwhirl, Seadra, Girafarig, Corsola, Remoraid, Mantine, Phanpy, Tyrogue, Hitmontop","Temporary Shinies: Unown G, J, O, R, T, U, Smeargle","Change Raid Bosses (Pokémon GO Tour: Johto)"]},
		{"ver":"1.10.54","date":"25.02.2022","change":["New Shiny: Speed Forme Deoxys","Change Raid Bosses (Return of Speed Forme Deoxys)"]},
		{"ver":"1.10.53","date":"22.02.2022","change":["New Shiny: Defense Forme Deoxys","Change Raid Bosses (Return of Defense Forme Deoxys)"]},
		{"ver":"1.10.52","date":"19.02.2022","change":["New Shiny: Attack Forme Deoxys","Change Raid Bosses (Return of Attack Forme Deoxys)"]},
		{"ver":"1.10.51","date":"16.02.2022","change":["Change Raid Bosses (Return of Deoxys)"]},
		{"ver":"1.10.50","date":"15.02.2022","change":["Quests: Remove Pikachu, Luvdisc, Frillish, Alomomola"]},
		{"ver":"1.10.49","date":"12.02.2022","change":["New Shiny: Hoppip"]},
		{"ver":"1.10.48","date":"10.02.2022","change":["Quests: Add Pikachu, Luvdisc, Frillish, Alomomola"]},
		{"ver":"1.10.47","date":"09.02.2022","change":["Change Raid Bosses (Return of Registeel)"]},
		{"ver":"1.10.46","date":"08.02.2022","change":["Quests: Remove Alolan Meowth, Galarian Meowth, Darumaka, Litleo, Espurr"]},
		{"ver":"1.10.45","date":"02.02.2022","change":["Quests: Add Pidgey, Spearow, Nidorina, Nidorino, Oddish, Paras, Bellsprout, Doduo, Krabby, Tangela, Staryu, Skarmory, Seedot, Meditite, Corphish, Woobat, Dwebble, Alomomola, Ferroseed, Spritzee, Swirlix","Quests: Remove Shellder, Rhyhorn, Chansey, Lapras, Snorlax, Pineco, Miltank, Wurmple, Slakoth, Bidoof, Burmy (all Cloaks)"]},
		{"ver":"1.10.44","date":"01.02.2022","change":["New Shinies: Litleo, Espurr","Change Raid Bosses (Return of Regirock)","Quests: Add Alolan Meowth, Galarian Meowth, Darumaka, Litleo, Espurr","Quests: Remove Magnemite, Alolan Grimer, Voltorb, Electrike, Joltik, Trubbish, Emolga, Helioptile"]},
		{"ver":"1.10.43","date":"30.01.2022","change":["Add new Pokémon and Hisuian Forms","Quests: Remove Ekans, Skorupi, Croagunk"]},
		{"ver":"1.10.42","date":"24.01.2022","change":["Change Raid Bosses (Return of Regice)"]},
		{"ver":"1.10.41","date":"24.01.2022","change":["Quests: Add Ekans, Skorupi, Croagunk"]},
		{"ver":"1.10.40","date":"19.01.2022","change":["Quests: Add Magnemite, Alolan Grimer, Voltorb, Electrike, Joltik, Trubbish, Emolga, Helioptile"]},
		{"ver":"1.10.39","date":"15.01.2022","change":["Change Raid Bosses (Debut of Shock Module Genesect)"]},
        {"ver":"1.10.38","date":"13.01.2022","change":["Quests: Remove Alolan Geodude, Slugma, Mawile"]},
        {"ver":"1.10.37","date":"07.01.2022","change":["New Shiny: Slugma","Change Raid Bosses (Mountains of Power)","Quests: Add Alolan Geodude, Slugma, Mawile"]},
        {"ver":"1.10.36","date":"04.01.2022","change":["Quests: Remove Slowpoke, Hoothoot"]},
        {"ver":"1.10.35","date":"01.01.2022","change":["Quests: Add Shellder, Rhyhorn, Chansey, Lapras, Snorlax, Pineco, Miltank, Wurmple, Slakoth, Bidoof, Burmy (all Cloaks)","Quests: Remove Alolan Vulpix, Jigglypuff, Meowth, Psyduck, Seadra, Sneasel, Delibird, Swablu, Spheal, Lillipup, Minccino, Foongus"]},
        {"ver":"1.10.34","date":"31.12.2021","change":["New Shiny: Hoothoot","Quests: Add Slowpoke, Hoothoot","Quests: Remove Pikachu, Swinub, Stantler, Galarian Darumaka, Cubchoo"]},
        {"ver":"1.10.33","date":"23.12.2021","change":["New Shiny: Galarian Darumaka","Change Raid Bosses (Holidays 2021 - Part 2)","Quests: Add Galarian Darumaka","Quests: Remove Cryogonal"]},
        {"ver":"1.10.32","date":"16.12.2021","change":["New Shinies: Spheal, Glaceon, Kyurem","Change Raid Bosses (Holidays 2021 - Part 1)","Quests: Add Pikachu, Swinub, Stantler, Cubchoo, Cryogonal"]},
        {"ver":"1.10.31","date":"12.12.2021","change":["Quests: Remove Druddigon, Deino"]},
        {"ver":"1.10.30","date":"07.12.2021","change":["New Shiny: Druddigon","Quests: Add Druddigon, Deino"]},
        {"ver":"1.10.29","date":"01.12.2021","change":["Quests: Add Alolan Vulpix, Jigglypuff, Meowth, Psyduck, Seadra, Sneasel, Delibird, Swablu, Spheal, Lillipup, Minccino, Foongus","Quests: Remove Ninetales, Machoke, Slowpoke, Magnemite, Lickitung, Chansey, Chinchou, Misdreavus, Baltoy, Shieldon, Woobat, Joltik"]},
        {"ver":"1.10.28","date":"01.12.2021","change":["New Shinys: Steelix, Reshiram, Zekrom","Change Raid Bosses (Return of Reshiram and Zekrom)"]},
        {"ver":"1.10.27","date":"26.11.2021","change":["Added timed changes to Raid Bosses for special Raid Hours"]},
        {"ver":"1.10.26","date":"21.11.2021","change":["Quests: Remove Larvitar, Turtwig, Chimchar, Piplup, Shinx, Cranidos, Burmy (Plant Cloak), Burmy (Trash Cloak)"]},
        {"ver":"1.10.25","date":"21.11.2021","change":["Quests: Add Shinx"]},
        {"ver":"1.10.24","date":"18.11.2021","change":["Quests: Add Larvitar, Cranidos, Burmy (Plant Cloak)","Quests: Remove Burmy (Sandy Cloak)"]},
        {"ver":"1.10.23","date":"16.11.2021","change":["Change Raid Bosses (Brillant Diamond & Shining Pearl)","Quests: Add Turtwig, Chimchar, Piplup, Burmy (Sandy Cloak), Burmy (Trash Cloak)"]},
        {"ver":"1.10.22","date":"14.11.2021","change":["Quests: Remove Electabuzz, Magmar, Electrike, Blitzle, Darumaka, Vullaby, Litleo, Dedenne"]},
        {"ver":"1.10.21","date":"12.11.2021","change":['[Gesundbrunnen] Remove Gyms "Der blaue Bus" and "Stolperstein Paul Kuchenbäcker"']},
        {"ver":"1.10.20","date":"09.11.2021","change":["New Shiny: Vullaby","Quests: Add Vullaby"]},
        {"ver":"1.10.19","date":"05.11.2021","change":["Change Raid Bosses (Return of the Swords of Justice)","Quests: Add Electabuzz, Magmar, Electrike, Blitzle, Darumaka, Litleo, Dedenne"]},
        {"ver":"1.10.18","date":"02.11.2021","change":["Quests: Remove Cubone, Alolan Marowak, Sunkern, Roselia"]},
        {"ver":"1.10.17","date":"02.11.2021","change":["New Shiny: Umbreon","Quests: Add Ninetales, Machoke, Slowpoke, Magnemite, Lickitung, Chansey, Chinchou, Misdreavus, Baltoy, Shieldon, Woobat, Joltik","Quests: Remove Alolan Grimer, Gastly, Scyther, Pinsir, Hoothoot, Spinarak, Houndour, Poochyena, Sableye, Shuppet, Spritomb, Dwebble, Karrablast, Litwick"]},
        {"ver":"1.10.16","date":"01.11.2021","change":["Quests: Add Cubone, Alolan Marowak, Sunkern, Roselia","Quests: Remove Pikachu, Duskull, Piplup, Drifblim, Yamask, Galarian Yamask"]},
        {"ver":"1.10.15","date":"30.10.2021","change":['[Gesundbrunnen] Add new Gyms "Der blaue Bus" and "Stolperstein Paul Kuchenbäcker"']},
        {"ver":"1.10.14","date":"22.10.2021","change":["Change Raid Bosses (Return of Darkrai)","Quests: Add Duskull, Yamask","Quests: Remove Zubat, Drowzee, Woobat, Gothita"]},
        {"ver":"1.10.13","date":"15.10.2021","change":["New Shinies: Spinarak, Drifblim","Quests: Add Pikachu, Zubat, Drowzee, Piplup, Drifblim, Woobat, Galarian Yamask, Gothita"]},
        {"ver":"1.10.12","date":"12.10.2021","change":["Change Raid Bosses (Return of Altered Form Giratina)"]},
        {"ver":"1.10.11","date":"10.10.2021","change":["Quests: Remove Diglett, Exeggcute, Pidove, Audino, Rufflet"]},
        {"ver":"1.10.10","date":"02.10.2021","change":["Quests: Add Alolan Grimer, Gastly, Scyther, Pinsir, Hoothoot, Spinarak, Houndour, Poochyena, Sableye, Shuppet, Spritomb, Karrablast, Litwick","Quests: Remove Rattata, Alolan Rattata, Ekans, Meowth, Slowpoke, Koffing, Natu, Marill, Larvitar, Lotad, Seedot, Skitty, Mawile, Aron"]},
        {"ver":"1.10.9","date":"01.10.2021","change":["Change Raid Bosses (Secrets of the Jungle)","Quests: Add Diglett, Exeggcute, Pidove, Audino, Dwebble, Rufflet"]},
        {"ver":"1.10.8","date":"28.09.2021","change":["Quests: Remove Sneasel, Blitzle, Frillish, Furfrou"]},
        {"ver":"1.10.7","date":"21.09.2021","change":["New Shinies: Butterfree, Kirlia, Blitzle","Quests: Add Sneasel, Blitzle, Frillish, Furfrou"]},
        {"ver":"1.10.6","date":"19.09.2021","change":["New Shiny: Oshawott"]},
        {"ver":"1.10.5","date":"14.09.2021","change":["New Shinies: Uxie, Mesprit, Azelf","Change Raid Bosses (Return of the Lake Trio)","Quests: Remove Abra, Drowzee, Ralts, Woobat, Inkay"]},
        {"ver":"1.10.4","date":"08.09.2021","change":["Quests: Add Abra, Drowzee, Ralts, Woobat, Inkay"]},
        {"ver":"1.10.3","date":"02.09.2021","change":["New Shinies: Ditto, Espeon","Quests: Add Rattata, Alolan Rattata, Ekans, Meowth, Slowpoke, Koffing, Natu, Marill, Larvitar, Lotad, Seedot, Skitty, Mawile, Aron","Quests: Remove Clefairy, Psyduck, Poliwhirl, Geodude, Alolan Geodude, Rhyhorn, Snorlax, Wooper, Swinub, Roselia, Feebas, Skorupi, Roggenrola"]},
        {"ver":"1.10.2","date":"01.09.2021","change":["Change Raid Bosses (Return of Lugia)","Quests: Remove Galarian Farfetch'd, Skwovet, Wooloo, Falinks"]},
        {"ver":"1.10.1","date":"26.08.2021","change":["Change Raid Bosses (GO Fest 2021 Ultra Bonus Part 3 - Zamazenta)"]},
        {"ver":"1.10","date":"20.08.2021","change":["Add all Gen 7 and Gen 8 Pokémon","New Shinies: Galarian Meowth, Galarian Farfetch'd, Galarian Weezing, Galarian Stunfisk","Change Raid Bosses (GO Fest 2021 Ultra Bonus Part 3)","Quests: Add Galarian Farfetch'd, Skwovet, Wooloo, Falinks","Quests: Remove Staryu, Lunatone, Solrock, Shellos"]},
        {"ver":"1.9.100","date":"06.08.2021","change":["New Shinies: Heracross, Palkia","Change Raid Bosses (GO Fest 2021 Ultra Bonus Part 2)","Quests: Add Staryu, Lunatone, Solrock, Shellos","Quests: Remove Cranidos, Shieldon"]},
        {"ver":"1.9.99","date":"02.08.2021","change":["Add Shellos forms","Quests: Add Clefairy, Psyduck, Poliwhirl, Geodude, Alolan Geodude, Rhyhorn, Snorlax, Wooper, Swinub, Roselia, Feebas, Skorupi, Roggenrola","Quests: Remove Metapod, Kakuna, Jigglypuff, Machoke, Alolan Exeggutor, Gligar, Wurmple, Shroomish, Whismur, Absol, Bidoof, Kricketot, Audino, Tympole"]},
        {"ver":"1.9.98","date":"23.07.2021","change":["New Shinies: Cranidos, Shieldon, Dialga","Temporary Shiny: Unown U","Change Raid Bosses (GO Fest 2021 Ultra Bonus Part 1)","Quests: Add Cranidos, Shieldon"]},
        {"ver":"1.9.97","date":"18.07.2021","change":["Change Raid Bosses (End of Pokémon GO Fest 2021)","Quests: Remove Deino, Pikachu"]},
        {"ver":"1.9.96","date":"18.07.2021","change":["Change Raid Bosses (Pokémon GO Fest 2021 - Day 2)","Temporarily disabled certain raid limitation","Quests: Add Deino","Quests: Remove Chimecho"]},
        {"ver":"1.9.95","date":"17.07.2021","change":["New Shinys: Whismur, Chimecho, Audino, Tympole, Throh, Sawk","Change Raid Bosses (Pokémon GO Fest 2021)","Quests: Add Pikachu, Chimecho"]},
        {"ver":"1.9.94","date":"16.07.2021","change":["Change Raid Boss (Return of Mewtwo)","Quests: Remove Turtwig, Chimchar, Piplup, Snivy, Tepig, Oshawott, Chespin, Fennekin, Froakie"]},
        {"ver":"1.9.93","date":"06.07.2021","change":["New Shiny: Darumaka","Temporary Shiny: Meltan","Quests: Add Turtwig, Chimchar, Piplup, Snivy, Tepig, Oshawott, Chespin, Fennekin, Froakie"]},
        {"ver":"1.9.92","date":"03.07.2021","change":["New Shiny: Tepig"]},
        {"ver":"1.9.91","date":"02.07.2021","change":["Quests: Add Metapod, Kakuna, Jigglypuff, Machoke, Alolan Exeggutor, Gligar, Wurmple, Shroomish, Whismur, Absol, Bidoof, Kricketot, Audino, Tympole", "Quests: Remove Mankey, Graveler, Magnemite, Galarian Farfetch'd, Hitmonlee, Hitmonchan, Chinchou, Pineco, Makuhita, Meditite, Electrike","Small fixes"]},
        {"ver":"1.9.90","date":"01.07.2021","change":["Change Raid Bosses (End of Bidoof Day)","Quests: Remove Bidoof"]},
        {"ver":"1.9.89","date":"01.07.2021","change":["Change Raid Bosses (Bidoof Day)"]},
        {"ver":"1.9.88","date":"25.06.2021","change":["New Shiny: Bidoof","Quests: Add Bidoof"]},
		{"ver":"1.9.87","date":"20.06.2021","change":["Remove Tier 3 Raids","Change Raid Bosses (End of Solstice 2021)","Quests: Remove Lunatone, Solrock"]},
		{"ver":"1.9.86","date":"13.06.2021","change":["New Shiny: Regigigas","Change Raid Bosses (Solstice 2021)","Quests: Add Lunatone, Solrock"]},
		{"ver":"1.9.85","date":"13.06.2021","change":["Change Raid Bosses (End of A Very Slow Discovery)","Quests: Remove Slowpoke, Galarian Slowpoke, Shellder, Slakoth, Gulpin"]},
		{"ver":"1.9.84","date":"08.06.2021","change":["New Shiny: Slowbro","Change Raid Bosses (A Very Slow Discovery)","Quests: Add Slowpoke, Galarian Slowpoke, Shellder, Slakoth, Gulpin"]},
		{"ver":"1.9.83","date":"02.06.2021","change":["Quests: Add Mankey, Graveler, Magnemite, Galarian Farfetch'd, Hitmonlee, Hitmonchan, Chinchou, Pineco, Makuhita, Meditite, Electrike","Quests: Remove Weedle, Pidgeotto, Clefairy, Jigglypuff, Scyther, Hoothoot, Marill, Drilbur","Remove Covid message"]},
		{"ver":"1.9.82","date":"01.06.2021","change":["Change Raid Bosses (Return of the Regis)","Quests: Add Chikorita, Cyndaquil, Totodile, Sudowoodo, Hoppip, Yanma, Murkrow, Dunsparce, Mantine, Treecko, Torchic, Mudkip, Ralts, Bagon, Hippopotas, Snover, Stunfisk, Bunnelby","Quests: Remove Gastly, Voltorb, Wurmple"]},
		{"ver":"1.9.81","date":"31.05.2021","change":["Quests: Remove Clefairy, Espeon, Umbreon, Galarian Zigzagoon"]},
		{"ver":"1.9.80","date":"25.05.2021","change":["New Shiny: Galarian Zigzagoon","Change Raid Bosses (Luminous Legends Y - Part 2)","Quests: Add Clefairy, Espeon, Umbreon","Quests: Remove Alolan Meowth, Murkrow, Houndour, Skorupi, Purrloin, Scraggy, Spritzee, Swirlix"]},
		{"ver":"1.9.79","date":"18.05.2021","change":["Change Raid Bosses (Luminous Legends Y)","Quests: Add Alolan Meowth, Murkrow, Houndour, Galarian Zigzagoon, Skorupi, Purrloin, Scraggy","Quests: Remove Galarian Ponyta"]},
		{"ver":"1.9.78","date":"15.05.2021","change":["New Shiny: Altaria","Change Raid Bosses (Debut of Mega Altaria)"]},
		{"ver":"1.9.77","date":"11.05.2021","change":["New Shiny: Galarian Ponyta"]},
		{"ver":"1.9.76","date":"04.05.2021","change":["Change Raid Bosses (Luminous Legends X)","Quests: Add Galarian Ponyta, Spritzee, Swirlix"]},
		{"ver":"1.9.75","date":"02.05.2021","change":["Change Raid Bosses (End of New Pokémon Snap Celebration)","Quests: Remove Alolan Vulpix, Dodrio, Lapras, Wooper, Mantine, Skarmory, Wurmple, Croagunk, Stunfisk"]},
		{"ver":"1.9.74","date":"01.05.2021","change":["Quests: Add Weedle, Pidgeotto, Clefairy, Jigglypuff, Scyther, Hoothoot, Marill, Snubbull, Beldum, Drilbur","Quests: Remove Nidoran♀, Nidoran♂, Oddish, Bellsprout, Cubone, Chikorita, Loudred, Stunky, Ferroseed, Bunnelby"]},
		{"ver":"1.9.73","date":"29.04.2021","change":["Change Raid Bosses (New Pokémon Snap Celebration)","Quests: Add Alolan Vulpix, Dodrio, Lapras, Wooper, Mantine, Skarmory, Wurmple, Croagunk, Stunfisk","Temporary Shiny: Smeargle"]},
		{"ver":"1.9.72","date":"27.04.2021","change":["Change Raid Bosses (Return of the Incarnate Forces of Nature)"]},
		{"ver":"1.9.71","date":"26.04.2021","change":["Change Raid Bosses (End of Sustainability Week)","Quests: Remove Spheal, Sewaddle, Ducklett, Cottonee, Chespin, Binacle"]},
		{"ver":"1.9.70","date":"20.04.2021","change":["New Shiny: Trubbish","Change Raid Bosses (Sustainability Week)","Quests: Add Spheal, Sewaddle, Ducklett, Cottonee, Chespin, Binacle"]},
		{"ver":"1.9.69","date":"18.04.2021","change":["Change Raid Bosses (End of Rivals Week)","Quests: Remove Hitmonlee, Hitmonchan, Zangoose, Seviper, Skrelp, Clauncher"]},
		{"ver":"1.9.68","date":"13.04.2021","change":["Change Raid Bosses (Rivals Week)","Quests: Add Hitmonlee, Hitmonchan, Zangoose, Seviper, Skrelp, Clauncher"]},
		{"ver":"1.9.67","date":"09.04.2021","change":["Change Raid Bosses (End of Spring Event)","Quests: Remove Pikachu, Chansey, Azumarill, Buneary, Rufflet"]},
		{"ver":"1.9.66","date":"04.04.2021","change":["New Shinies: Bunnelby, Lopunny","Change Raid Bosses (Spring Event & Mega Lopunny Debut)","Quests: Add Pikachu, Chansey, Azumarill, Buneary, Rufflet"]},
		{"ver":"1.9.65","date":"01.04.2021","change":["Quests: Add Nidoran♀, Nidoran♂, Oddish, Bellsprout, Cubone, Chikorita, Loudred, Stunky, Ferroseed, Bunnelby","Quests: Remove Alolan Grimer, Porygon, Ledyba, Skiploom, Yanma, Swinub, Larvitar, Nuzleaf, Swellow, Electrike, Ducklett"]},
		{"ver":"1.9.64","date":"30.03.2021","change":["Change Raid Bosses (Debut of Therian Forme Tornadus)"]},
		{"ver":"1.9.63","date":"29.03.2021","change":["Quests: Remove Swablu, Castform (Rainy Form), Tympole"]},
		{"ver":"1.9.62","date":"27.03.2021","change":["Change Raid Boss (End of Rayquaza Special Weekend)"]},
		{"ver":"1.9.61","date":"27.03.2021","change":["Change Raid Boss (Rayquaza Special Weekend)"]},
		{"ver":"1.9.60","date":"26.03.2021","change":["Fix Castform in Quests"]},
		{"ver":"1.9.59","date":"24.03.2021","change":["New Shiny: Castform (Rainy Form)","Change Raid Bosses (Weather Week)","Quests: Add Swablu, Castform (Rainy Form), Tympole"]},
		{"ver":"1.9.58","date":"22.03.2021","change":["Change Raid Bosses (End of Charge Up! Event)","Quests: Remove Pikachu, Joltik, Tynamo"]},
		{"ver":"1.9.57","date":"16.03.2021","change":["New Shiny: Manectric","Change Raid Bosses (Charge Up! Event & Mega Manectric debut)","Quests: Add Pikachu, Joltik, Tynamo"]},
		{"ver":"1.9.56","date":"14.03.2021","change":["Change Raid Bosses (End of Searching for Legends Event)","Quests: Remove Skarmory, Nosepass, Shieldon, Roggenrola","Fix Nest migration time"]},
		{"ver":"1.9.55","date":"11.03.2021","change":["New Shiny: Thundurus (Incarnate Forme)","Change Raid Boss (Return of Thundurus)"]},
		{"ver":"1.9.54","date":"09.03.2021","change":["New Shiny: Nosepass","Change Raid Bosses (Searching for Legends Event)","Quests: Add Skarmory, Nosepass, Shieldon, Roggenrola","Remove several Gen 1 shinys, which colud never be shiny in the wild despite Niantic saying so"]},
		{"ver":"1.9.53","date":"06.03.2021","change":["New Shinies: Tornadus (Incarnate Forme), Fletchling","Change Raid Bosses (Return of Tornadus)"]},
		{"ver":"1.9.52","date":"02.03.2021","change":["Quests: Add Alolan Grimer, Porygon, Ledyba, Skiploom, Yanma, Swinub, Larvitar, Wurmple, Nuzleaf, Swellow, Electrike, Ducklett","Quests: Remove Ekans, Abra, Machop, Geodude, Magnemite, Cubone, Hitmonlee, Hitmonchan, Koffing, Gligar, Teddiursa, Roselia, Spoink, Snivy, Tepig, Oshawott"]},
		{"ver":"1.9.51","date":"01.03.2021","change":["New Shinies: Arcanine, Landorus (Incarnate Forme)","Change Raid Bosses (Return of Landorus)"]},
		{"ver":"1.9.50","date":"27.02.2021","change":["Quests: Remove Nidoran♀, Nidoran♂, Clefairy, Jigglypuff, Zubat, Venonat, Diglett, Doduo, Snorlax"]},
		{"ver":"1.9.49","date":"24.02.2021","change":["Change Raid Bosses (Mr. Mime added)"]},
		{"ver":"1.9.48","date":"21.02.2021","change":["Change Raid Bosses (Kanto Celebration)","Quests: Add Nidoran♀, Nidoran♂, Clefairy, Jigglypuff, Zubat, Venonat, Diglett, Doduo","Quests: Remove Lickitung, Tangela, Lapras"]},
		{"ver":"1.9.47","date":"20.02.2021","change":["New Shinies: Spearow, Paras, Hitmonlee, Hitmonchan, Snorlax","Change Raid Bosses (Pokémon GO Tour - Kanto)","Re-enable Tier 4 Raids temporarily","Quests: Add Lickitung, Tangela, Lapras, Snorlax"]},
		{"ver":"1.9.46","date":"19.02.2021","change":["Change Raid Bosses (End of Valentine's Day Event)","Quests: Remove Ralts, Volbeat, Illumise, Alomomola"]},
		{"ver":"1.9.45","date":"14.02.2021","change":["Enable local raids again","New Shiny: Alomomola","Change Raid Bosses (Valentine's Day Event)","Quests: Add Ralts, Volbeat, Illumise, Alomomola","Quests: Remove Meowth, Alolan Meowth, Galarian Meowth, Miltank, Meditite"]},
		{"ver":"1.9.44","date":"09.02.2021","change":["New Shiny: Gyarados","Change Raid Bosses (Lunar New Year & Mega Gyarados Debut)","Quests: Add Meowth, Alolan Meowth, Galarian Meowth, Miltank, Meditite"]},
		{"ver":"1.9.43","date":"08.02.2021","change":["Change Raid Bosses (End of Rocket Event)"]},
		{"ver":"1.9.42","date":"07.02.2021","change":["Quests: Remove Nidoran♀, Nidoran♂, Umbreon, Misdreavus"]},
		{"ver":"1.9.41","date":"04.02.2021","change":["Change Raid Bosses (Return of Suicune)"]},
		{"ver":"1.9.40","date":"02.02.2021","change":["Change Raid Bosses (Team GO Rocket Celebration)","Quests: Add Ekans, Nidoran♀, Nidoran♂, Abra,  Machop, Geodude, Magnemite, Cubone, Hitmonlee, Hitmonchan, Koffing, Umbreon, Misdreavus, Gligar, Teddiursa, Roselia, Spoink, Snivy, Tepig, Oshawott","Quests: Remove Jigglypuff, Exeggutor, Seadra, Scyther, Marill, Swinub, Makuhita, Meditite, Lillipup, Litwick"]},
		{"ver":"1.9.39","date":"31.01.2021","change":["Quests: Remove Chikorita, Cyndaquil, Totodile, Chinchou, Mareep, Sudowoodo, Miltank"]},
		{"ver":"1.9.38","date":"31.01.2021","change":["Change Raid Bosses (Return of Raikou)"]},
		{"ver":"1.9.37","date":"26.01.2021","change":["New Shiny: Miltank","Change Raid Bosses (Johto Celebration)","Quests: Add Chikorita, Cyndaquil, Totodile, Chinchou, Mareep, Sudowoodo, Miltank"]},
		{"ver":"1.9.36","date":"24.01.2021","change":["Quests: Remove Treecko, Torchic, Mudkip, Aron, Plusle, Minun, Wailmer"]},
		{"ver":"1.9.35","date":"19.01.2021","change":["New Shiny: Ampharos","Change Raid Bosses (Hoenn Celebration)","Quests: Add Treecko, Torchic, Mudkip, Aron, Plusle, Minun, Wailmer"]},
		{"ver":"1.9.34","date":"17.01.2021","change":["Quests: Remove Turtwig, Chimchar, Piplup, Cranidos, Shieldon, Buizel"]},
		{"ver":"1.9.33","date":"12.01.2021","change":["New Shiny: Buizel","Change Raid Bosses (Sinnoh Celebration)","Quests: Add Turtwig, Chimchar, Piplup, Cranidos, Shieldon, Buizel"]},
		{"ver":"1.9.32","date":"10.01.2021","change":["Quests: Remove Snivy, Tepig, Oshawott, Ferroseed"]},
		{"ver":"1.9.31","date":"04.01.2021","change":["New Shiny: Snivy","Change Raid Bosses (Unova Celebration)","Quests: Add Snivy, Tepig, Oshawott, Ferroseed","Quests: Remove Pikachu, Slowpoke"]},
		{"ver":"1.9.30","date":"01.01.2021","change":["Change Raid Bosses (Return of Ho-Oh)","Quests: Add Jigglypuff, Exeggutor, Seadra, Scyther, Marill, Swinub, Makuhita, Meditite, Lillipup, Litwick","Quests: Remove Alolan Sandshrew, Growlithe, Ponyta, Flareon, Cyndaquil, Sneasel, Houndour, Torchic, Snorunt, Spheal, Chimchar, Gible, Snover, Tepig"]},
		{"ver":"1.9.29","date":"31.12.2020","change":["Change Raid Bosses (New Year's Event)","Quests: Add Pikachu, Slowpoke","Quests: Remove Alolan Vulpix, Delibird, Vanillite, Cryogonal"]},
		{"ver":"1.9.28","date":"28.12.2020","change":["Change Raid Bosses (End of Regice weekend)"]},
		{"ver":"1.9.27","date":"26.12.2020","change":["Change Raid Bosses (Return of Regice)"]},
		{"ver":"1.9.26","date":"22.12.2020","change":["New Shiny: Jynx","Change Raid Bosses (Holidays 2020)","Quests: Add Alolan Vulpix, Delibird, Vanillite, Cryogonal"]},
		{"ver":"1.9.25","date":"21.12.2020","change":["Change Raid Bosses (End of Registeel weekend)"]},
		{"ver":"1.9.24","date":"19.12.2020","change":["Change Raid Bosses (Return of Registeel)"]},
		{"ver":"1.9.23","date":"18.12.2020","change":["New Shiny: Cubchoo","Change Raid Bosses (End of Movie Event)"]},
		{"ver":"1.9.22","date":"16.12.2020","change":["Temporarily hide local players input due to lockdown"]},
		{"ver":"1.9.21","date":"14.12.2020","change":["New Shiny: Rufflet","Change Raid Bosses (Pokémon the Movie - Secrets of the Jungle Celebration)"]},
		{"ver":"1.9.20","date":"12.12.2020","change":["Change Raid Bosses (Community Day Weekend & Regirock)"]},
		{"ver":"1.9.19","date":"11.12.2020","change":["New Shiny: Wooper"]},
		{"ver":"1.9.18","date":"08.12.2020","change":["Quests: Remove Bunnelby, Fletchling, Litleo"]},
		{"ver":"1.9.17","date":"01.12.2020","change":["New Shiny: Abomasnow","Change Raid Bosses (Kyurem and Generation 6)","Quests: Add Alolan Sandshrew, Growlithe, Ponyta, Flareon, Cyndaquil, Sneasel, Houndour, Torchic, Snorunt, Spheal, Chimchar, Gible, Snover, Tepig, Bunnelby, Fletchling, Litleo","Quests: Remove Clefairy, Jigglypuff, Seadra, Snubbull, Larvitar, Ralts, Mawile, Vibrava, Bagon, Cottonee"]},
		{"ver":"1.9.16","date":"30.11.2020","change":["Quests: Remove Goldeen, Turtwig, Chimchar, Piplup, Starly, Bronzor"]},
		{"ver":"1.9.15","date":"27.11.2020","change":['[Gesundbrunnen] Add new gym "Kunstwerk Paul Pfarr"']},
		{"ver":"1.9.14","date":"24.11.2020","change":["New Shiny: Goldeen","Change Raid Bosses (Lake Legends Event)","Quests: Add Goldeen, Turtwig, Chimchar, Piplup, Starly, Bronzor"]},
		{"ver":"1.9.13","date":"23.11.2020","change":["Quests: Remove Nidoran♀, Nidoran♂, Slowpoke, Beldum"]},
		{"ver":"1.9.12","date":"17.11.2020","change":["New Shiny: Slowpoke","New temporary Shiny: Meltan","Change Raid Bosses (Pokémon HOME Event)","Quests: Add Nidoran♀, Nidoran♂, Slowpoke, Beldum"]},
		{"ver":"1.9.11","date":"15.11.2020","change":["New Shiny: Electabuzz"]},
		{"ver":"1.9.10","date":"12.11.2020","change":["Change Raid Bosses (End of Animation Week 2020)"]},
		{"ver":"1.9.9","date":"07.11.2020","change":["New Shiny: Ferroseed"]},
		{"ver":"1.9.8","date":"05.11.2020","change":["Change Raid Bosses (Animation Week 2020)"]},
		{"ver":"1.9.7","date":"01.11.2020","change":["Change Raid Bosses (End of Halloween Event)","Quests: Remove Cubone, Spiritomb, Yamask"]},
		{"ver":"1.9.6","date":"01.11.2020","change":["Add Covid notice","Quests: Add Clefairy, Jigglypuff, Seadra, Snubbull, Ralts, Mawile, Vibrava, Bagon, Cottonee","Quests: Remove Alolan Rattata, Haunter, Murkrow, Misdreavus, Sableye, Shuppet, Duskull, Drifloon, Stunky, Yamask, Litwick"]},
		{"ver":"1.9.5","date":"24.10.2020","change":["New Shinies: Gengar, Spiritomb","Change Raid Bosses (Halloween 2020)","Quests: Add Cubone, Spiritomb"]},
		{"ver":"1.9.4","date":"20.10.2020","change":["Change Raid Bosses (End of Autumn Event)"]},
		{"ver":"1.9.3","date":"12.10.2020","change":["Change Raid Bosses (Autumn Event Part 2)"]},
		{"ver":"1.9.2","date":"12.10.2020","change":["Change order of raids"]},
		{"ver":"1.9.1","date":"10.10.2020","change":["Add line to visually seperate multiraids","[Marzahn] Fix major bug, which prevented creating raids"]},
		{"ver":"1.9","date":"09.10.2020","change":["[Gesundbrunnen] Seperate local from remote raiders in GUI","New Shiny: Giratina (Origin Forme)","Change Raid Bosses (Return of Giratina Origin Forme)"]},
		{"ver":"1.8.7","date":"09.10.2020","change":["New Shiny: Vulpix","Change Raid Bosses (Autumn Event)"]},
		{"ver":"1.8.6","date":"09.10.2020","change":["Change Raid Bosses (End of Longchamp Collaboration Event)","Quests: Remove Smoochum"]},
		{"ver":"1.8.5","date":"07.10.2020","change":["Add Nest Migration to Events tab",'[Gesundbrunnen] Add EX-Raid tag for "Golden Globe"']},
		{"ver":"1.8.4","date":"03.10.2020","change":["Change Raid Bosses (Return of Moltres)"]},
		{"ver":"1.8.3","date":"02.10.2020","change":["New Shiny: Kricketot","Change Raid Bosses (Longchamp Collaboration Event)","Quests: Add Smoochum"]},
		{"ver":"1.8.2","date":"01.10.2020","change":["New Shiny: Houndoom","Quests: Add Alolan Rattata, Haunter, Murkrow, Misdreavus, Sableye, Shuppet, Duskull, Drifloon, Stunky, Yamask, Litwick","Quests: Remove Abra, Slowpoke, Drowzee, Exeggcute, Natu, Wobbuffet, Ralts, Baltoy, Beldum, Bronzor, Woobat"]},
		{"ver":"1.8.1","date":"29.09.2020","change":["Change Raid Bosses (Mega Houndoom)","Quests: Remove Doduo"]},
		{"ver":"1.8","date":"27.09.2020","change":["New Events Tab","Update dependencies and modify code","Only use jsdelivr.com for dependencies","Fix translation bug"]},
		{"ver":"1.7.10","date":"25.09.2020","change":["Change Raid Bosses (Return of Zapdos)"]},
		{"ver":"1.7.9","date":"22.09.2020","change":["New Shiny: Doduo","Change Raid Bosses (Mega Evolution Buddy Event)","Quests: Add Doduo"]},
		{"ver":"1.7.8","date":"20.09.2020","change":["New Shiny: Porygon"]},
		{"ver":"1.7.7","date":"18.09.2020","change":["Change Raid Bosses (Return of Articuno)","New Shiny: Pidgeot"]},
		{"ver":"1.7.6","date":"17.09.2020","change":["Quests: Remove Ledyba"]},
		{"ver":"1.7.5","date":"15.09.2020","change":['[Gesundbrunnen] Add new gym "Golden Globe"']},
		{"ver":"1.7.4","date":"11.09.2020","change":["New Shiny: Ledyba","Change Raid Bosses (Return of Cresselia)","Quests: Add Ledyba"]},
		{"ver":"1.7.3","date":"08.09.2020","change":["Quests: Remove Chansey, Lotad, Cranidos"]},
		{"ver":"1.7.2","date":"01.09.2020","change":["Quests: Add Mega Energy","Quests: Add Abra, Slowpoke, Drowzee, Exeggcute, Natu, Wobbuffet, Ralts, Baltoy, Beldum, Bronzor, Woobat","Quests: Remove Poliwhirl, Machop, Hitmonlee, Hitmonchan, Combusken, Shroomish, Makuhita, Meditite, Monferno, Buneary, Croagunk"]},
		{"ver":"1.7.1","date":"31.08.2020","change":["Quests: Add Chansey, Lotad, Cranidos"]},
		{"ver":"1.7","date":"27.08.2020","change":["Add support for Mega Raids","Add all Mega Pokémon","Add all Generation 6 Pokémon","New Shinies: Venusaur, Charizard, Blastoise, Beedrill"]},
		{"ver":"1.6.9","date":"27.08.2020","change":["Change Raid Bosses (Removal of Tier 2 and 4 raids)"]},
		{"ver":"1.6.8","date":"23.08.2020","change":["Quests: Remove Mankey"]},
		{"ver":"1.6.7","date":"21.08.2020","change":["Change Raid Bosses (Return of Heatran)","Quests: Remove Patrat, Lillipup, Purrloin, Pidove, Roggenrola, Drilbur"]},
		{"ver":"1.6.6","date":"14.08.2020","change":["New Shinies: Roggenrola, Genesect","Change Raid Bosses (Ultra Unlock: Unova Week)","Quests: Add Patrat, Lillipup, Purrloin, Pidove, Roggenrola, Drilbur","Quests: Remove Staryu, Baltoy"]},
		{"ver":"1.6.5","date":"07.08.2020","change":["New Shinies: Staryu, Deoxys (Normal)","Temporary Shiny: Unown U, L, T, R, A","Change Raid Bosses (Ultra Unlock: Enigma Week)","Quests: Add Staryu, Baltoy","Quests: Remove Bagon"]},
		{"ver":"1.6.4","date":"01.08.2020","change":["Quests: Add Mankey, Poliwhirl, Machop, Hitmonlee, Hitmonchan, Combusken, Shroomish, Makuhita, Meditite, Monferno, Buneary, Croagunk","Quests: Remove Alolan Geodude, Graveler, Rhydon, Sudowoodo, Shuckle, Nosepass, Aron, Dwebble, Stunfisk"]},
		{"ver":"1.6.3","date":"31.07.2020","change":["New Shiny: Deino","Change Raid Bosses (Ultra Unlock: Dragon Week)","Quests: Add Bagon"]},
		{"ver":"1.6.2","date":"27.07.2020","change":["Change Raid Bosses (End of Pokémon GO Fest 2020)"]},
		{"ver":"1.6.1","date":"26.07.2020","change":["Change Raid Bosses (Pokémon GO Fest 2020 - Day 2)"]},
		{"ver":"1.6","date":"25.07.2020","change":["Add Custom Raid Boss option","Add support for Tier 1-3 raids for future events","Add all Unown forms","New Shinies: Jigglypuff, Tangela, Qwilfish, Woobat, Heatmor, Durant","Temporary Shiny: Unown G, O","Change Raid Bosses (Pokémon GO Fest 2020 - Day 1)"]},
		{"ver":"1.5.41","date":"23.07.2020","change":["Change Raid Bosses (End of Summer event)","Quests: Remove Bellsprout, Slowpoke, Shellder, Snorlax, Slakoth, Clamperl, Petilil"]},
		{"ver":"1.5.40","date":"17.07.2020","change":["New Shiny: Bellsprout","Change Raid Bosses (Summer event)","Quests: Add Bellsprout, Slowpoke, Shellder, Snorlax, Slakoth, Clamperl, Petilil"]},
		{"ver":"1.5.39","date":"16.07.2020","change":["Change Raid Bosses (End of Team GO Rocket takeover event)",]},
		{"ver":"1.5.38","date":"10.07.2020","change":["Change Raid Bosses once again (Team GO Rocket takeover event)",]},
		{"ver":"1.5.37","date":"08.07.2020","change":["Change Raid Bosses one more time (End of Fourth-anniversary event)","Quests: Remove Pidgey, Natu, Hoppip, Murkrow, Gligar, Skarmory, Taillow, Swablu, Starly, Drifloon, Pidove"]},
		{"ver":"1.5.36","date":"07.07.2020","change":["Change Raid Bosses once more (Unova's legendary elite: Kyurem)",]},
		{"ver":"1.5.35","date":"06.07.2020","change":["Change Raid Bosses again",]},
		{"ver":"1.5.34","date":"06.07.2020","change":["Change Raid Bosses (End of Ho-Oh Special Raid Weekend)",'[Gesundbrunnen] Add EX-Raid tag for "Laughing Sun"']},
		{"ver":"1.5.33","date":"03.07.2020","change":["New Shiny: Pidove","Change Raid Bosses (Fourth-anniversary Event)","Quests: Add Pidgey, Natu, Hoppip, Murkrow, Gligar, Skarmory, Taillow, Swablu, Starly, Drifloon, Pidove"]},
		{"ver":"1.5.32","date":"01.07.2020","change":["Change Raid Bosses (End of Bug Out Event)","Quests: Add Alolan Geodude, Graveler, Rhydon, Sudowoodo, Shuckle, Nosepass, Aron","Quests: Remove Sandslash, Diglett, Cubone, Rhyhorn, Scyther, Wooper, Pineco, Swinub, Marshtomp, Numel, Barboach, Burmy, Hippopotas, Drilbur, Palpitoad, Karrablast, Shelmet"]},
		{"ver":"1.5.31","date":"26.06.2020","change":["New Shiny: Dwebbble","Change Raid Bosses (Bug Out Event)","Quests: Add Scyther, Pineco, Burmy, Dwebble, Karrablast, Shelmet"]},
		{"ver":"1.5.30","date":"24.06.2020","change":["Change Raid Bosses (End of Solstice Event 2020)","Quests: Remove Clefairy, Alolan Vulpix, Sunkern, Lunatone, Solrock"]},
		{"ver":"1.5.29","date":"20.06.2020","change":["New Shiny: Weedle"]},
		{"ver":"1.5.28","date":"19.06.2020","change":["New Shiny: Clefairy","Change Raid Bosses (Solstice Event 2020)","Quests: Add Clefairy, Alolan Vulpix, Sunkern, Lunatone, Solrock"]},
		{"ver":"1.5.27","date":"16.06.2020","change":["Change Raid Bosses (Unova's legendary elite: Zekrom)"]},
		{"ver":"1.5.26","date":"15.06.2020","change":["Change Raid Bosses (End of Latios/Latias Special Raid Weekend)"]},
		{"ver":"1.5.25","date":"12.06.2020","change":["Change Raid Bosses (Latios/Latias Special Raid Weekend)"]},
		{"ver":"1.5.24","date":"02.06.2020","change":["Quests: Add Sandslash, Diglett, Cubone, Rhyhorn, Wooper, Swinub, Marshtomp, Numel, Barboach, Hippopotas, Drilbur, Palpitoad","Quests: Remove Raichu, Alolan Geodude, Magnemite, Electabuzz, Jolteon, Lanturn, Mareep, Electrike, Blitzle, Joltik"]},
		{"ver":"1.5.23","date":"29.05.2020","change":["Change Raid Bosses (End of Throwback Challenge)","Quests: Remove Turtwig, Chimchar, Piplup, Starly, Shieldon, Buneary, Glameow, Croagunk","Add all remaining Galar forms and their evolutions"]},
		{"ver":"1.5.22","date":"26.05.2020","change":["Change Raid Bosses (Unova's legendary elite: Reshiram)"]},
		{"ver":"1.5.21","date":"24.05.2020","change":["New Shiny: Seedot"]},
		{"ver":"1.5.20","date":"22.05.2020","change":["Change Raid Bosses (Throwback Challenge: Sinnoh)","New Shiny: Glameow","Quests: Add Turtwig, Chimchar, Piplup, Starly, Shieldon, Buneary, Glameow, Croagunk","Quests: Remove Treecko, Combusken, Marshtomp, Lotad, Swellow, Ralts, Skitty, Corphish, Snorunt","Add timed message for maintenance on June 1"]},
		{"ver":"1.5.19","date":"19.05.2020","change":["Change Raid Bosses (Terrakion's return)","New Shiny: Terrakion"]},
		{"ver":"1.5.18","date":"15.05.2020","change":["Change Raid Bosses (Throwback Challenge: Hoenn)","New Shiny: Skitty","Quests: Add Treecko, Combusken, Marshtomp, Lotad, Swellow, Ralts, Skitty, Corphish, Snorunt","Quests: Remove Bayleef, Quilava, Totodile, Noctowl, Aipom, Pineco, Dunsparce, Phanpy"]},
		{"ver":"1.5.17","date":"12.05.2020","change":["Change Raid Bosses (Remote Raid Celebration: Virizion)","New Shiny: Virizion"]},
		{"ver":"1.5.16","date":"08.05.2020","change":["Change Raid Bosses (Throwback Challenge: Johto)","New Shinies: Voltorb, Dunsparce","Quests: Add Bayleef, Quilava, Totodile, Noctowl, Aipom, Pineco, Dunsparce, Phanpy","Quests: Remove Butterfree, Pikachu, Mankey, Venonat, Muk, Krabby","Add Galarian Farfetch'd and Sirfetch'd"]},
		{"ver":"1.5.15","date":"05.05.2020","change":["Change Raid Bosses (Remote Raid Celebration: Giratina)"]},
		{"ver":"1.5.14","date":"01.05.2020","change":['Quests: Mark Event Quests with "⏱"',"Quests: Add Raichu, Alolan Geodude, Magnemite, Electabuzz, Jolteon, Lanturn, Mareep, Electrike, Blitzle, Joltik","Quests: Remove Parasect, Alolan Diglett, Magmar, Bayleef, Bellossom, Pineco, Magcargo, Lotad, Shroomish, Cacnea Burmy (Plant Cloak)"]},
		{"ver":"1.5.13","date":"01.05.2020","change":["Add new Galar Pokémon","New Shiny: Venonat","Change Raid Bosses (Throwback Challenge: Kanto)","Quests: Add Butterfree, Pikachu, Mankey, Venonat, Muk, Krabby"]},
		{"ver":"1.5.12","date":"30.04.2020","change":["Enable BoQ again"]},
		{"ver":"1.5.11","date":"28.04.2020","change":["Change Raid Bosses (Remote Raid Celebration: Darkrai)"]},
		{"ver":"1.5.10","date":"27.04.2020","change":["Change Raid Bosses (End of Buddy Up Event)","Quests: Remove Alolan Meowth, Volbeat, Illumise, Woobat"]},
		{"ver":"1.5.9","date":"27.04.2020","change":["Enable raids again, after remote raids were released"]},
		{"ver":"1.5.8","date":"25.04.2020","change":["New Shiny: Abra"]},
		{"ver":"1.5.7","date":"21.04.2020","change":['[Marzahn] Add new gym "Interkultureller Garten Marzahn e.V."','[Marzahn] Change name of gym "Brunnen (Glambecker Ring)" to "Brunnen am Ahrensfelder Berg"']},
		{"ver":"1.5.6","date":"21.04.2020","change":["New Shinies: Chinchou, Wobbuffet, Volbeat, Illumise","Quests: Add Alolan Meowth, Volbeat, Illumise, Woobat","Change Raid Bosses (Buddy Up Event)"]},
		{"ver":"1.5.5","date":"17.04.2020","change":['Add new gym "Laughing Sun"']},
		{"ver":"1.5.4","date":"16.04.2020","change":["Quests: Remove Alolan Exeggutor, Chansey, Azumarill, Audino"]},
		{"ver":"1.5.3","date":"09.04.2020","change":["New Shinies: Exeggcute, Marill","Quests: Add Alolan Exeggutor, Chansey, Azumarill, Audino"]},
		{"ver":"1.5.2","date":"08.04.2020","change":["Quests: Remove Sudowoodo, Croagunk","Change Raid Bosses (End of Tricky Pokémon Event)"]},
		{"ver":"1.5.1","date":"02.04.2020","change":["Quests: Add Parasect, Alolan Diglett, Magmar, Bayleef, Bellossom, Pineco, Magcargo, Lotad, Shroomish, Cacnea, Burmy (Plant)","Quests: Remove Gloom, Diglett, Mankey, Growlithe, Tangela, Pinsir, Hoppip, Sunkern, Gligar, Torchic, Cherrim"]},		
		{"ver":"1.5","date":"01.04.2020","change":['Change domain to "berlin-raids.tk"',"Move Gesundbrunnen to subpage","New Shinies: Sudowoodo, Croagunk","Quests: Add Sudowoodo, Croagunk, Stunfisk","Change Raid Bosses (Landorus's debut & Tricky Pokémon Event)"]},
		{"ver":"1.4.53","date":"31.03.2020","change":["Quests: Remove Slowbro, Wobbuffet, Baltoy","Change Raid Bosses (End of Psychic Spectacular)"]},
		{"ver":"1.4.52","date":"27.03.2020","change":["New Shinies: Teddiursa, Baltoy","Quests: Add Slowbro, Wobbuffet, Baltoy","Change Raid Bosses (Psychic Spectacular)"]},
		{"ver":"1.4.51","date":"25.03.2020","change":['[Gesundbrunnen] Add EX-Raid tag for "Spinnennetz Spielplatz" and "Phantom der Lichtburg"',"Quests: Remove Machop, Exeggcute, Chansey, Jynx, Electabuzz, Magmar"]},
		{"ver":"1.4.50","date":"24.03.2020","change":["Change Raid Bosses (End of Genesect Event)"]},
		{"ver":"1.4.49","date":"22.03.2020","change":["Completely disable all functions due to new regulations"]},
		{"ver":"1.4.48","date":"21.03.2020","change":["Disable BoQ Link until further notice","Add COVID-19 notice"]},
		{"ver":"1.4.47","date":"20.03.2020","change":["New Shiny: Nincada","Change Raid Bosses (Genesect Special Research event)"]},
		{"ver":"1.4.46","date":"18.03.2020","change":["New Shiny: Cobalion","Change Raid Bosses (Cobalion's return)"]},
		{"ver":"1.4.45","date":"17.03.2020","change":["Change Raid Bosses (End of GO Battle League Celebration)"]},
		{"ver":"1.4.44","date":"13.03.2020","change":["New Shiny: Timburr","Change Raid Bosses (Giratina Special Raid Weekend)"]},
		{"ver":"1.4.43","date":"06.03.2020","change":["Change Raid Bosses (GO Battle League Preparation Event)","Adjust Raid end time"]},
		{"ver":"1.4.42","date":"06.03.2020","change":["New Shinies: Skorupi, Darkrai","Change Raid Bosses (Team GO Rocket Takeover)"]},
		{"ver":"1.4.41","date":"03.03.2020","change":["Change Raid Bosses (Thundurus's Debut)"]},
		{"ver":"1.4.40","date":"02.03.2020","change":['[Gesundbrunnen] Add new Gym: "Brunnen: Tanz auf dem Vulkan"',"Quests: Add Bulbasaur, Charmander, Squirtle, Gloom, Diglett, Growlithe, Tangela, Pinsir, Hoppip, Sunkern, Gligar, Torchic, Cherrim","Quests: Remove Pikachu, Clefairy, Alolan Vulpix, Jigglypuff, Zubat, Alolan Meowth, Marill, Espeon, Umbreon, Ralts, Roselia, Feebas"]},
		{"ver":"1.4.39","date":"25.02.2020","change":["Change Raid Bosses (Pokémon Day Event)","Quests: Remove Bulbasaur, Charmander, Squirtle"]},
		{"ver":"1.4.38","date":"22.02.2020","change":["New Shiny: Rhyhorn"]},
		{"ver":"1.4.37","date":"18.02.2020","change":["Quests: Remove Lickitung, Cherubi, Alomomola","Change Raid Bosses (End of Valentine's Day Event)"]},
		{"ver":"1.4.36","date":"15.02.2020","change":["New Shiny: Lickitung"]},
		{"ver":"1.4.35","date":"14.02.2020","change":["New Shinies: Chansey, Happiny","Quests: Add Lickitung, Cherubi, Alomomola","Change Raid Bosses (Valentine's Day Event)"]},
		{"ver":"1.4.34","date":"11.02.2020","change":["Quests: Remove Cranidos, Combee, Hippopotas","Change Raid Bosses (End of Sinnoh Celebration)"]},
		{"ver":"1.4.33","date":"07.02.2020","change":["New Shinies: Hippopotas, Riolu","Quests: Add Cranidos, Combee, Hippopotas","Change Raid Bosses (Sinnoh Celebration)"]},
		{"ver":"1.4.32","date":"04.02.2020","change":["Change Raid Bosses (Tornadus's Debut)"]},
		{"ver":"1.4.31","date":"03.02.2020","change":["Change Raid Bosses (End of Lunar New Year Event)"]},
		{"ver":"1.4.30","date":"02.02.2020","change":["New Shiny: Minccino","Quests: Add Pikachu, Clefairy, Jigglypuff, Zubat, Alolan Meowth, Marill, Espeon, Umbreon. Ralts, Roselia, Feebas","Quests: Remove Dewgong, Shellder, Sneasel, Swinub, Stantler, Lotad, Snorunt, Glalie, Clamperl, Snover, Cubchoo"]},
		{"ver":"1.4.29","date":"27.01.2020","change":["Change Raid Bosses (Remove Latios & Latias)"]},
		{"ver":"1.4.28","date":"24.01.2020","change":["Change Raid Bosses (Latios & Latias Special Weekend)","New Shiny Encounters: Magmar, Gyarados"]},
		{"ver":"1.4.27","date":"22.01.2020","change":["Quests: Add Alolan Vulpix again"]},
		{"ver":"1.4.26","date":"10.01.2020","change":["Quests: Remove Alolan Vulpix"]},
		{"ver":"1.4.25","date":"07.01.2020","change":["New Shiny: Heatran","Change Raid Bosses (Heatran's Return)","Update dependencies"]},
		{"ver":"1.4.24","date":"02.01.2020","change":["Change Raid Bosses (End of Christmas Event)","Quests: Add Alolan Vulpix, Dewgong, Shellder, Stantler, Lotad, Glalie, Clamperl","Quests: Remove Pikachu, Sandshrew, Ponyta, Doduo, Seel, Drowzee, Cubone, Scyther, Lapras, Natu, Marill, Hoppip, Poochyena, Zigzagoon, Makuhita, Sableye, Electrike, Gulpin, Spoink, Buneary, Bronzor"]},
		{"ver":"1.4.23","date":"28.12.2019","change":["Remove Regice from raids"]},
		{"ver":"1.4.22","date":"28.12.2019","change":["Change Raid Bosses (Regice Raid Day)"]},
		{"ver":"1.4.21","date":"24.12.2019","change":["New Shinies: Stantler, Snover","Quests: Add Pikachu, Lapras, Snover, Cubchoo","Change Raid Bosses (Christmas 2019)"]},
		{"ver":"1.4.20","date":"20.12.2019","change":["Change Raid Bosses (Ho-Oh and Lugia Special Weekend)"]},
		{"ver":"1.4.19","date":"17.12.2019","change":['[Marzahn] Change name of gym "Man" to "Statue am Ahrensfelder Berg"']},
		{"ver":"1.4.18","date":"17.12.2019","change":["Change Raid Bosses (Virizion's Debut)"]},
		{"ver":"1.4.17","date":"16.12.2019","change":["New Shiny: Gible"]},
		{"ver":"1.4.16","date":"12.12.2019","change":["Quests: Remove Clamperl, Burmy","Change Raid Bosses (End of Evolution Event)"]},
		{"ver":"1.4.15","date":"07.12.2019","change":['[Gesundbrunnen] Add new gym "Schönwalder Straßenbrücke"']},
		{"ver":"1.4.14","date":"06.12.2019","change":["[BoQ] Fix wrong id for Sinnoh Stone and Unova Stone"]},
		{"ver":"1.4.13","date":"05.12.2019","change":["New Shiny: Burmy","Quests: Add Clamperl, Burmy, Sinnoh Stone, Unova Stone","Change Raid Bosses (Evolution Event)"]},
		{"ver":"1.4.12","date":"02.12.2019","change":["Quests: Remove Nidoran♀, Nidorina, Nidoqueen, Nidoran♂, Nidorino, Nidoking, Dugtrio, Dodrio"]},
		{"ver":"1.4.11","date":"28.11.2019","change":['[Gesundbrunnen] Add EX-Raid tag for "Mosaik Kompass"']},
		{"ver":"1.4.10","date":"28.11.2019","change":["Quests: Add Nidoran♀, Nidorina, Nidoqueen, Nidoran♂, Nidorino, Nidoking, Dugtrio, Dodrio"]},
		{"ver":"1.4.9","date":"26.11.2019","change":["Quests: Remove Tentacool","Change Raid Bosses (Terrakion's debut)"]},
		{"ver":"1.4.8","date":"19.11.2019","change":["New Shiny: Tentacool","Quests: Add Tentacool","Change Raid Bosses (Super effective week)"]},
		{"ver":"1.4.7","date":"16.11.2019","change":['[Gesundbrunnen] Add new gym "Mosaik Kompass"','Fix bug when hatch time is empty']},
		{"ver":"1.4.6","date":"16.11.2019","change":["Add Galar forms","New Shiny: Chimchar","Change Raid Bosses (Add Galarian Weezing)"]},
		{"ver":"1.4.5","date":"15.11.2019","change":["Change Raid Bosses (End of Team GO Rocket Disruption)"]},
		{"ver":"1.4.4","date":"08.11.2019","change":["Change Raid Bosses (Team GO Rocket Disruption)"]},
		{"ver":"1.4.3","date":"08.11.2019","change":["New Shiny: Meowth"]},
		{"ver":"1.4.2","date":"07.11.2019","change":['[Marzahn] Add new gym "Spielplatz - Havemannstr 🎠"','[Marzahn] Remove gym "Sport Frei"']},
		{"ver":"1.4.1","date":"06.11.2019","change":['[Gesundbrunnen] Add new gym "Phantom der Lichtburg"']},
		{"ver":"1.4","date":"02.11.2019","change":["Hatch time can now also use remaining time of an active raid to calculate the hatch time","Change Raid Bosses (Cobalion's Debut)","Minor text fixes"]},
		{"ver":"1.3.18","date":"01.11.2019","change":["New Shinies: Skarmory, Regirock, Regice, Registeel","Change Raid Bosses (A Colossal Discovery)","Quests: Remove Yamask, Golett","Quests: Add Eevee"]},
		{"ver":"1.3.17","date":"14.10.2019","change":['[Marzahn] Add new gyms "Griechische Statue" and "Kinder - Grundschule an der Geissenweide"','[Marzahn] Remove gym "Peter Pan Grundschule"']},
		{"ver":"1.3.16","date":"17.10.2019","change":["New Shiny: Yamask","Change Raid Bosses (Halloween 2019)","Quests: Add Yamask, Golett"]},
		{"ver":"1.3.15","date":"14.10.2019","change":['[Marzahn] Add new gym "Klettern am Boschpoler Platz','[Marzahn] Remove indicators for EX-Raid gyms due to nearly all gyms being Ex-Raid gyms']},
		{"ver":"1.3.14","date":"12.10.2019","change":["New Shiny: Trapinch"]},
		{"ver":"1.3.13","date":"11.10.2019","change":["[Gesundbrunnen] Add new EX-Raid gyms","[Gesundbrunnen] Change indicator for EX-Raid gyms"]},
		{"ver":"1.3.12","date":"03.10.2019","change":["New Shiny: Oddish"]},
		{"ver":"1.3.11","date":"01.10.2019","change":["Quests: Remove Lapras, Nosepass, Zangoose, Seviper"]},
		{"ver":"1.3.10","date":"26.09.2019","change":["New Shinies: Zangoose, Seviper, Mime Jr.","Quests: Add Lapras, Nosepass, Zangoose, Seviper"]},
		{"ver":"1.3.9","date":"23.09.2019","change":["New Shiny: Giratina","Change Raid Bosses (Return of Giratina)"]},
		{"ver":"1.3.8","date":"20.09.2019","change":["New Shiny: Yanma"]},
		{"ver":"1.3.7","date":"16.09.2019","change":["New Shinies: Mewtwo, Patrat, Lillipup, Klink","Change Raid Bosses (Ultra Bonus Week 3 - UNOVA!)"]},
		{"ver":"1.3.6","date":"15.09.2019","change":["New Shiny: Turtwig","Add missing Pokémon forms"]},
		{"ver":"1.3.5","date":"09.09.2019","change":["New Shinies: Farfetch'd, Kangaskhan, Mr. Mime, Tauros",'Change Raid Bosses (Ultra Bonus Week 2)']},
		{"ver":"1.3.4","date":"04.09.2019","change":['Make raid timers adjustable for future changes']},
		{"ver":"1.3.3","date":"02.09.2019","change":['New Shinies: Sentret, Gligar','Change Raid Bosses (Ultra Bonus Week 1)']},
		{"ver":"1.3.2","date":"01.09.2019","change":['New Shiny: Electrike','New Quests (September Breakthrough Change)','Add filter to only show 1000 or more Stardust rewards']},
		{"ver":"1.3.1","date":"30.08.2019","change":['Quests: Remove Blastoise, Krabby, Azumarill, Carvanha, Barboach, Clamperl','Change Raid Bosses (End of Water Festival 2019)']},
		{"ver":"1.3","date":"23.08.2019","change":['New Shinies: Barboach, Carvanha','Quests: Add Blastoise, Krabby, Azumarill, Carvanha, Barboach, Clamperl','Change Raid Bosses (Water Festival 2019)','Initial Support for multiple messengers','Prepare for upcoming Unova release']},
		{"ver":"1.2.17","date":"17.08.2019","change":['New Shiny: Suicune']},
		{"ver":"1.2.16","date":"12.08.2019","change":['Quests: Remove Taillow, Lotad, Swablu, Snorunt']},
		{"ver":"1.2.15","date":"06.08.2019","change":['New Shinies: Poliwag, Bonsly','Quests: Add Taillow, Lotad, Swablu, Snorunt']},
		{"ver":"1.2.14","date":"03.08.2019","change":['New Shiny: Ralts']},
		{"ver":"1.2.13","date":"31.07.2019","change":['New Shiny: Rayquaza','Change Raid Bosses (Return of Rayquaza)']},
		{"ver":"1.2.12","date":"26.07.2019","change":['New Shinies: Ekans, Koffing, Sneasel, Zubat','Change Raid Bosses (Team GO Rocket Invasion)']},
		{"ver":"1.2.11","date":"21.07.2019","change":['New Shiny: Mudkip','Replace more broken Google Maps links']},
		{"ver":"1.2.10","date":"14.07.2019","change":['New Shiny: Entei']},
		{"ver":"1.2.9","date":"10.07.2019","change":['Change Raid Bosses (Armored Mewtwo)','Replace broken Google Maps links']},
		{"ver":"1.2.8","date":"07.07.2019","change":['Quests: Remove Nidoran♂, Magnemite, Scyther and Feebas']},
		{"ver":"1.2.7","date":"05.07.2019","change":['BoQ Link: Adjusting for filter changes']},
		{"ver":"1.2.6","date":"04.07.2019","change":['New Shiny: Nidoran♂','Quests: Add Nidoran♂, Magnemite, Scyther and Feebas']},
		{"ver":"1.2.5","date":"01.07.2019","change":['New Shiny: Spinda']},
		{"ver":"1.2.4","date":"29.06.2019","change":['Add regions list','New Shiny: Raikou']},
		{"ver":"1.2.3","date":"28.06.2019","change":['Add support for Alolan forms in BoQ','New Shinies: Alolan Rattata, Alolan Sandshrew, Alolan Vulpix, Alolan Diglett, Alolan Meowth, Alolan Geodude, Alolan Grimer, Alolan Exeggutor']},
		{"ver":"1.2.2","date":"27.06.2019","change":['Change Raid Bosses (Return of Groudon)']},
		{"ver":"1.2.1","date":"23.06.2019","change":['[Marzahn] Add new Gym: "Skulptur am Barnim Platz"']},
		{"ver":"1.2","date":"18.06.2019","change":['New Region: <a href="http://marzahn-raids.tk/" target="_blank">Marzahn</a>',"Change Raid Bosses (Return of Kyogre)"]},
		{"ver":"1.1.7","date":"13.06.2019","change":["New Shiny: Horsea"]},
		{"ver":"1.1.6","date":"11.06.2019","change":["Load gyms seperately to prepare for subsites","Change Raid Bosses (End of Adventure Week)","Quests: Remove Cranidos & Shieldon"]},
		{"ver":"1.1.5","date":"08.06.2019","change":["Sort raid bosses alphabetically when changing language","New Shiny: Slakoth"]},
		{"ver":"1.1.4","date":"05.06.2019","change":["Fix bug where deselecting multiple negative filters caused incorrect filter combinations"]},
		{"ver":"1.1.3","date":"04.06.2019","change":["Change Raid Bosses (Adventure Week)","New Shinies: Anorith, Lileep & Onix","New Quests: Cranidos & Shieldon","Fix bug when switching language back to German"]},
		{"ver":"1.1.2","date":"02.06.2019","change":["BoQ Link: Add new filter options","BoQ Link: Add an indicator for potential shiny Pokemon"]},
		{"ver":"1.1.1","date":"29.05.2019","change":["Change Raid Bosses (End of Extraordinary Raid Week)","Quests: Remove Absol and Bronzor"]},
		{"ver":"1.1","date":"27.05.2019","change":["New Subpage: Book of Quests Link Generator","Load scripts from external file","Add TinySort dependency","Change Raid Bosses (Cresselia's Return)"]},
		{"ver":"1.0.15","date":"21.05.2019","change":["Change Raid Bosses (Extraordinary Raid Week)"]},
		{"ver":"1.0.14","date":"17.05.2019","change":["Change Raid Bosses (End of Detective Pikachu Event)","Fix bug when start and hatch time is empty"]},
		{"ver":"1.0.13","date":"08.05.2019","change":["Change Raid Bosses (Detective Pikachu Event)","Fix bug when hatch time is empty"]},
		{"ver":"1.0.12","date":"02.05.2019","change":["Change Raid Bosses (Lake Trio Arrival)"]},
		{"ver":"1.0.11","date":"01.05.2019","change":["Update Bootstrap-select to fix bug on iOS","Force reload after 12 hours to fix caching issues","Load changelog from JSON and only show the first 4 entries"]},
		{"ver":"1.0.10","date":"29.04.2019","change":["Change Raid Bosses (Earth Day Event)"]},
		{"ver":"1.0.9","date":"23.04.2019","change":["Remove Latios"]},
		{"ver":"1.0.8","date":"20.04.2019","change":['Add new gym "Stone Snake"']},
		{"ver":"1.0.7","date":"15.04.2019","change":["Add Latios","Load Raids and Gyms from JSON"]},
		{"ver":"1.0.6","date":"10.04.2019","change":["Change Raid Bosses (End of Bug Event)"]},
		{"ver":"1.0.5","date":"08.04.2019","change":["Add a warning, when you try to schedule a raid without entering a start time."]},
		{"ver":"1.0.4","date":"05.04.2019","change":['Add new gym "Caritas Berlin"',"Adjust Raid end time again"]},
		{"ver":"1.0.3","date":"02.04.2019","change":["Change Raid Bosses (Giratina Origin Form, Start of Bug Event)"]},
		{"ver":"1.0.2","date":"01.04.2019","change":["Adjust Raid end time"]},
		{"ver":"1.0.1","date":"31.03.2019","change":["Fix Daylight Savings / Timezone Bug"]},
		{"ver":"1.0","date":"29.03.2019","change":["Initial Release"]}
	]
};

var forms = ["19A","20A","26A","27A","28A","37A","38A","50A","51A","52A","53A","74A","75A","76A","88A","89A","103A","105A","150R","351I","351R","351S","386A","386D","386S","412S","412T","413S","413T","421S","479F","479H","479I","479M","479W","487O","492S","550B","555Z","641T","642T","645T","646B","646W","648P"];
var hidden = 1;
var sel_q = [];

var orignest = [1,4,7,25,35,37,43,54,58,60,63,66,72,77,81,84,86,90,92,95,100,102,104,111,116,123,124,125,126,127,129,138,140,152,155,158,170,185,190,193,200,202,203,206,209,211,213,215,216,220,226,227,231,234,252,255,258,261,273,278,283,285,296,299,300,302,307,309,311,312,318,320,322,325,333,341,343,345,347,353,355,370,387,390,393,399,401,427,434,449,453,495,498,501,504,506,509,522,590];
var oldnest = orignest.slice();
var newnest = oldnest.slice();


function init() {
	// Change Covid message to maintenance message
    /*var timenow = new Date().getTime()
	if (timenow > 1661551200000 && timenow < 1661616000000) {
		$('#covid').attr("class","alert alert-success alert-dismissible fade show");
		$('#covid > strong').html("<i>Raid-Zeitplan für Pokémon GO Fest Finale:</i><br><br>10:00-12:00 - Schabelle<br>12:00-14:00 - Masskito<br>14:00-16:00 - Voltriant<br>16:00-18:00 - alle 4");
	    $('#covid').removeAttr("hidden");
	}*/


	// change Raids after certain time
	
	var timenow = new Date().getTime();
	for (i=0; i < raidjson.length; i++) {
		if (timenow > raidjson[i].start) {
			raids = raidjson[i];
		}
	}

	// make Raids
	var txt = "";
	t1 = 0;
	t2 = 0;
	t3 = 0;
	t4 = 0;
	t5 = 0;
	tM = 0;	
	try {
		tM = raids.tierM.length;
	} catch {}
	if (tM > 0) {
		txt += '<optgroup id="tM" label="Mega-Raids"><option ';
		if (tM == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="Mega-Raid" style="font-style:italic">Mega-Raid Ei</option>';
		raid_de.push("Mega-Raid Ei");
		raid_en.push("Mega Raid Egg");
		for (i = 0; i < tM; i++) {
			var rp = getPkmnByDex(raids.tierM[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}
	try {
		t5 = raids.tier5.length;
	} catch {}
	if (t5 > 0) {
		txt += '<optgroup id="t5" label="5er"><option ';
		if (t5 == 1 || t5over == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="5er" style="font-style:italic">5er Ei</option>';
		raid_de.push("5er Ei");
		raid_en.push("Tier 5 Egg");
		for (i = 0; i < t5; i++) {
			var rp = getPkmnByDex(raids.tier5[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}
	try { 
		t4 = raids.tier4.length; 
	} catch {}
	if (t4 > 0) {
		txt += '<optgroup id="t4" label="Mega-Raids"><option ';
		if (t4 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="Mega-Raid" style="font-style:italic">Mega-Raid Ei</option>';
		raid_de.push("Mega-Raid Ei");
		raid_en.push("Mega Raid Egg");
		for (i = 0; i < t4; i++) {
			var rp = getPkmnByDex(raids.tier4[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}
	try { 
		t3 = raids.tier3.length; 
	} catch {}
	if (t3 > 0) {
		txt += '<optgroup id="t3" label="3er"><option ';
		if (t3 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="3er" style="font-style:italic">3er Ei</option>';
		raid_de.push("3er Ei");
		raid_en.push("Tier 3 Egg");
		for (i = 0; i < t3; i++) {
			var rp = getPkmnByDex(raids.tier3[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}
	try { 
		t2 = raids.tier2.length; 
	} catch {}
	if (t2 > 0) {
		txt += '<optgroup id="t2" label="Spezial-4er"><option ';
		if (t2 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="4er" style="font-style:italic">4er Ei</option>';
		raid_de.push("4er Ei");
		raid_en.push("Tier 4 Egg");
		for (i = 0; i < t2; i++) {
			var rp = getPkmnByDex(raids.tier2[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}	
	try { 
		t1 = raids.tier1.length; 
	} catch {}
	if (t1 > 0) {
		txt += '<optgroup id="t1" label="1er"><option ';
		if (t1 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="1er" style="font-style:italic">1er Ei</option>';
		raid_de.push("1er Ei");
		raid_en.push("Tier 1 Egg");
		for (i = 0; i < t1; i++) {
			var rp = getPkmnByDex(raids.tier1[i])[0];
			var d = (rp.de) ? rp.de:rp.name;
			var e = (rp.en) ? rp.en:rp.name;
			txt += '<option value="' + rp.name + '">' + d + '</option>';
			raid_de.push(d);
			raid_en.push(e);
		}
		txt += '</optgroup>'
	}	
	if (!txt) {
		txt = '<option selected disabled value="" style="font-style:italic">Keine Raids verfügbar.</option>';
		raid_de.push("Keine Raids verfügbar.");
		raid_en.push("No raids available.")
	} else {
		txt += '<optgroup><option value="custom">Anderer Raidboss</option></optgroup>'
		raid_de.push("Anderer Raidboss");
		raid_en.push("Custom Raid Boss");
	}
	document.getElementById("raid").innerHTML = txt;
	
	if (t5 > 1 && t5over == 0) {
		t5multi = 1;
	}
	tMindex = (tM) ? 1:0;
	t5index = (t5) ? tM+1:0;
	t4index = (t4) ? tM+t5+2:0;
	t3index = (t3) ? tM+t5+t4+3:0;
	t2index = (t2) ? tM+t5+t4+t3+4:0;
	t1index = (t1) ? tM+t5+t4+t3+t2+5:0;
	tcindex = tM+t5+t4+t3+t2+t1+6;

	if (!tM) {
		t5index--;
		t4index--;
		t3index--;
		t2index--;
		t1index--;
		tcindex--;
	}

	if (!t5) {
		t4index--;
		t3index--;
		t2index--;
		t1index--;
		tcindex--;
	}

	if (!t4) {
		t3index--;
		t2index--;
		t1index--;
		tcindex--;
	}	

	if (!t3) {
		t2index--;
		t1index--;
		tcindex--;
	}

	if (!t2) {
		t1index--;
		tcindex--;
	}

	if (!t1) {
		tcindex--;
	}

	// make Gym list
	
	var txt = "";
	for (i = 0; i < gymjson.gyms.length ; i++) {
		txt += "<option value='" + gymjson.gyms[i].value + "'";
		if (gymjson.gyms[i].token || gymjson.gyms[i].ex) {
			txt += ' data-tokens="';
			txt += (gymjson.gyms[i].token) ? gymjson.gyms[i].token:"";
			txt += (gymjson.gyms[i].ex) ? ' ex raid arena gym"':'"';
		}
		if (gymjson.gyms[i].hidden) {
			txt += " hidden";
		}
		txt += '>' + gymjson.gyms[i].value;
		txt += (gymjson.gyms[i].ex) ? ' (EX)':"";
		txt += '</option>';
		if (gymjson.gyms[i].tg) {
			tg_gymedit.push(gymjson.gyms[i].tg);
			tg_gymnew.push(gymjson.gyms[i].value);
		}	
	}
	txt += '<option id="txt_chgym" value="" disabled selected hidden>Wähle eine Arena aus.</option>'
	document.getElementById("gym").innerHTML = txt;
	
	// make Changelog and add version to credits
	
	txt = "";
	for (i = 0; i < changelogjson.items.length; i++) {
		txt += "v" + changelogjson.items[i].ver + " (" + changelogjson.items[i].date +")";
		if (i == 0) {
			document.getElementById("credits-ver").innerHTML = txt;
		}
		txt += "<ul>";
		for (j=0; j < changelogjson.items[i].change.length; j++) {
			txt += "<li>" + changelogjson.items[i].change[j] + "</li>";
		}
		txt += "</ul>";
		if (i == 3) {
			txt += '<div id="changelog-txt-more" class="collapse">'
		}
	}
	txt += '</div><button id="changelog-expand" type="button" class="btn btn-primary" data-toggle="collapse" data-target="#changelog-txt-more" onclick="deleteElement(this)">Show entire Changelog</button>'
	
	document.getElementById("changelog-txt").innerHTML = txt;
	
	// make Nestlist
	/*
	buildNestlist("old");
	buildNestlist("new");
	
	txt = "";
	for (var i = 0; i < pokemon.length ; i++) {
		if (!pokemon[i].evolved && !pokemon[i].legendary && !pokemon[i].mythical && !pokemon[i].baby && !pokemon[i].alolan && !pokemon[i].mega && !pokemon[i].ultrabeast && !pokemon[i].galarian && !pokemon[i].gigantamax) {
			txt += "<option value=" + pokemon[i].dex + ">" + pokemon[i].name + "</option>";
		}
	}
	document.getElementById("old").innerHTML = txt;
	document.getElementById("new").innerHTML = txt;
	*/
	// init BoQ

	txt = "";
	for (i = 0; i < specialfilter.length; i++) {
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="buttonSpecial' + i + '" value="' + specialfilter[i].id + '">' + specialfilter[i].name + '</button>';
	}
	document.getElementById("specialpoke").innerHTML = txt;
	
	txt = "";
	for (i = 0; i < quests.length ; i++) {
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + i + '" value=' + quests[i] + '>' + getPkmnByDex(quests[i])[0].name; 
		txt += ((getPkmnByDex(quests[i])[0].getshiny)?"✨":"") + '</button>';
		var idx = legacy.indexOf(quests[i]);
		if (idx >= 0) {
			legacy.splice(idx,1);
		}
	}
	for (i = 0; i < quests_event.length ; i++) {
		var i2 = i + quests.length;
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + i2 + '" value=' + quests_event[i] + '>' + getPkmnByDex(quests_event[i])[0].name; 
		txt += ((getPkmnByDex(quests_event[i])[0].getshiny)?"✨":"") + '⏱</button>';
		var idx = legacy.indexOf(quests[i]);
		if (idx >= 0) {
			legacy.splice(idx,1);
		}
	}
	document.getElementById("pokelist").innerHTML = txt;
	
	tinysort("#pokelist > button");

	txt = "";
	for (i = 0; i < items.length; i++) {
		var j = i + quests.length + quests_event.length;
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + j + '" value="' + items[i].id + '">' + items[i].name + '</button>';
	}
	document.getElementById("itemlist").innerHTML = txt;

	tinysort("#itemlist > button");

	txt = "";
	for (i = 0; i < legacy.length ; i++) {
		var k = i + quests.length + items.length + quests_event.length;
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + k + '" value=' + legacy[i] + '>' + getPkmnByDex(legacy[i])[0].name;
		txt += ((getPkmnByDex(legacy[i])[0].getshiny)?"✨":"") + '</button>';
	}
	document.getElementById("legacylist").innerHTML = txt;

	tinysort("#legacylist > button");
	
	$('.selectpicker').selectpicker('refresh');

	// make Eventlist
	createEventlist("de");

}

function createEventlist(lang) {
	var txt = "";
	var curtime = new Date().getTime();
	var current = 0;
	var upcoming = 0;
	document.getElementById("current").innerHTML = ""; 
	document.getElementById("upcoming").innerHTML = ""; 
	eventlist = events.slice();
	var nestmigrate = 1617235200000;
	var nestmigct = 137;
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

	hideGBL();
}

function generateRaid(raidtext) {
  document.getElementById("ex").innerHTML = "";
  // document.getElementById("but").innerHTML = "";

  var text = raidtext;
  var gym = document.getElementById("gym").value;
  
  if (!gym) {
    raidwarn = 9;
	if (getLang() == "de") {
		document.getElementById("raidwarn").innerHTML = warn_de[9];
	}
	if (getLang() == "en") {
		document.getElementById("raidwarn").innerHTML = warn_en[9];
	}
	if (raidtext == "" && !document.getElementById("addRaid").getAttributeNode("hidden")) {
	    var hid3 = document.createAttribute("hidden");
		document.getElementById("addRaid").setAttributeNode(hid3);
	}
	return;
  }
  
  var raid = document.getElementById("raid").value;
  var time = document.getElementById("time").value;
  var start = document.getElementById("start").value;

  var end = new Date("Jan 01 1970 "+time);
  if ((end.getTime() - end.getTimezoneOffset()*60000) < raidtimer*60000 && time != "") {
	end = new Date(new Date().getTime()+end.getTime()-end.getTimezoneOffset()*60000-raidtimer*60000);
    time = end.toTimeString().substr(0,5);
  }

  var diff = (new Date("Jan 01 1970 "+start).getTime() - new Date("Jan 01 1970 "+time).getTime()) / 60000;

  end.setMinutes(end.getMinutes()+raidtimer);
  end = end.toTimeString().substr(0,5);
  var player = document.getElementById("player").value;
  try {
	var remote = document.getElementById("remote").value;
  } catch {
	var remote = "";
  }
  player = player.replace(/\n/g,"<br>");
  remote = remote.replace(/\n/g,"<br>");
  
  if (player && (!start || (startwarn != 0 && startwarn != 6) ) ) {
	raidwarn = 15;
	if (getLang() == "de") {
		document.getElementById("raidwarn").innerHTML = warn_de[15];
	}
	if (getLang() == "en") {
		document.getElementById("raidwarn").innerHTML = warn_en[15];
	}
	if (raidtext == "" && !document.getElementById("addRaid").getAttributeNode("hidden")) {
	    var hid3 = document.createAttribute("hidden");
		document.getElementById("addRaid").setAttributeNode(hid3);
	}
	return;
  }

  var remcheck = remote.match(/<br>/g);
  if (remcheck == null) {
	remcheck = "";
	}

  if (remote && (remcheck.length >= 10) ) {
	raidwarn = 16;
	if (getLang() == "de") {
		document.getElementById("raidwarn").innerHTML = warn_de[16];
	}
	if (getLang() == "en") {
		document.getElementById("raidwarn").innerHTML = warn_en[16];
	}
	if (raidtext == "" && !document.getElementById("addRaid").getAttributeNode("hidden")) {
	    var hid3 = document.createAttribute("hidden");
		document.getElementById("addRaid").setAttributeNode(hid3);
	}
	return;
  }
  
/*  if (remote && (remote.match(/\+[0-9]/g) != null) ) {
	raidwarn = 17;
	if (getLang() == "de") {
		document.getElementById("raidwarn").innerHTML = warn_de[17];
	}
	if (getLang() == "en") {
		document.getElementById("raidwarn").innerHTML = warn_en[17];
	}
	if (raidtext == "" && !document.getElementById("addRaid").getAttributeNode("hidden")) {
	    var hid3 = document.createAttribute("hidden");
		document.getElementById("addRaid").setAttributeNode(hid3);
	}
	return;
  } */

  if (raidtext == "") { 
	multi = 1;
	var hid = document.getElementById("addRaid").getAttributeNode("hidden");
	if (hid) {
		document.getElementById("addRaid").removeAttributeNode(hid);
	}
	var hid1 = document.getElementById("txt_multi").getAttributeNode("hidden");
	if (hid1) {
		document.getElementById("txt_multi").removeAttributeNode(hid1);
	}
	if (!document.getElementById("txt_instr").getAttributeNode("hidden")) {
		var hid2 = document.createAttribute("hidden");
		document.getElementById("txt_instr").setAttributeNode(hid2);
	}
  } else if (region == "Marzahn") {
	text += "<br>"
  }
  
  if (multi == 2) {
	text = "🚨 <b>DOPPELRAID</b> 🚨<br>" + text;
  }
  
  if (multi == 3) {
	text = text.replace("DOPPELRAID","TRIPLERAID");
  }
  
  if (multi == 4) {
	text = text.replace("🚨 <b>TRIPLERAID</b> 🚨","🚂 <b>RAID-TRAIN</b> 🚂");
  }
  
  if (multi == 7) {
	text = text.replace("RAID-TRAIN","CRAZY RAID-TRAIN");
  }
  
  if (region == "Gesundbrunnen" || region == "Wedding") {
  
	text += "<b>" + raid + " " + gym;

	if (gymjson.gyms[document.getElementById("gym").selectedIndex].ex) {
		text += " (EX)";
	}

	text += "</b> "

	if (time) {
		text += "(🐣" + time + ")";
	}
	
	text += "<br>" + gymjson.gyms[document.getElementById("gym").selectedIndex].map;
	
	if (t3index <= 0 || document.getElementById("raid").selectedIndex <= t3index || start != "") {
		text += "<br><br><b>Start:</b> " + start;
		/*if ((diff <= raidtimer && diff >= 0 && time != "") || (time == "" && start != "") || startwarn == 11) {
			text += start;
		} else {
			text += "?";
		}*/
	}
	text += "<br><br>📍 <b>vor Ort</b><br>" + player;

	if (remoteenabled == 1) {
		text += "<br><br>🏠 <b>Fern</b> <i>(Limit 10!)</i><br>" + remote;
	}

	text += "<br>"
  }
  
  if (region == "Marzahn") {
	  if (raid == "4er" || raid == "5er") {
		  raid += " RAID";
	  }
	  text += "<b>" + raid.toUpperCase() + "</b><br><br><b>Arena:</b> " + gym + "<br><br>";
	  
	  if (gymjson.gyms[$("#gym").prop("selectedIndex")].ex) {
		  text += "<b>Ex-Raid Arena</b><br><br>";
	  }
	  
	  text += "<b>Standort:</b> " + gymjson.gyms[$("#gym").prop("selectedIndex")].map;

	  if (time) {
		text += "<br><br><b>Schlüpft:</b> " + time;
	  }

	  if (t3index <= 0 || $("#raid").prop("selectedIndex") <= t3index || start != "") {
		text += "<br><br><b>Startzeit:</b> ";
		if ((diff <= raidtimer && diff >= 0 && time != "") || (time == "" && start != "") || startwarn == 11) {
			text += start;
		} else {
			text += "?";
		}
	  }
	  
	  if (time) {
		text += "<br><br><b>Raid Ende:</b> " + end;
	  }

	  text += "<br><br><b>Teilnehmer:</b><br>" + player;
  }

  var exc = document.createAttribute("class");
  exc.value = "m-3 p-2 border rounded bg-light text-break";
  document.getElementById("ex").setAttributeNode(exc);

  document.getElementById("ex").innerHTML = text;
  
  var text2 = text.replace(/<br>/g,"\n");
  text2 = text2.replace(/<b>/g,"*");
  text2 = text2.replace(/<\/b>/g,"*");
  text2 = text2.replace(/<i>/g,"_");
  text2 = text2.replace(/<\/i>/g,"_");
  
  var n = encodeURIComponent(text2);
  $("#txt_button").attr("onclick", "window.open('https://api.whatsapp.com/send?text=" + n + "')");
  
  // n = n.replace(/\*/g,"**");
  // n = n.replace("%0A","&text=");
  // $("#txt_button2").attr("onclick", "window.open('https://t.me/share/url?url=" + n + "')"); 

  $("#but").show();

  if (raidwarn != 0) {
	raidwarn = 0;
	document.getElementById("raidwarn").innerHTML = "";
  }
}

function addRaid() {
  multi++;
  var ol = document.getElementById("ex").innerHTML;
  var old = ol + "<br>------------------------------------------------------------<br>";
  generateRaid(old);
  if (raidwarn != 0) {
	multi--;
	document.getElementById("ex").innerHTML = ol;
  }
  if (multi >= 10) {
	raidwarn = 8;
	var dsbl = document.createAttribute("hidden");
	dsbl.value = true;
	document.getElementById("addRaid").setAttributeNode(dsbl);
	if (getLang() == "de") {
		document.getElementById("raidwarn").innerHTML = warn_de[8];
	}
	if (getLang() == "en") {
		document.getElementById("raidwarn").innerHTML = warn_en[8];
	}
  }
}

function checkTime() {
  var now = new Date();
  var now2 = new Date(now.toDateString());
  var ti = document.getElementById("time").value;
  var st = document.getElementById("start").value;
  var ra = document.getElementById("raid").selectedIndex;
  var hat = new Date("Jan 01 1970 "+ti);
  var sta = new Date("Jan 01 1970 "+st);
  now -= now.getTimezoneOffset()*60000;
  now2 -= now2.getTimezoneOffset()*60000;
  hat = hat.getTime() - hat.getTimezoneOffset()*60000;
  sta = sta.getTime() - sta.getTimezoneOffset()*60000;

  now2 = now - now2;

  if (hat < raidtimer * 60000) {
	hat = hat + now2 - raidtimer*60000;
  } 
  
  if (ti) {
	var hat2 = hat - now2;
	ti = ti.substr(0,1)
	if (ti != "0" && ti != "1" && ti != "2") {
		hatchwarn = 11; // keine Uhrzeit
		document.getElementById("time").value = null;
	} else if (hat < (18000000 + hatchtimer*60000)) {
		hatchwarn = 1; // vor (5:00 + hatchtimer)
	} else if (hat > (78300000 + hatchtimer*60000)) {
		hatchwarn = 2; /* // nach (21:45 + hatchtimer)
	} else if (hat2 < -(raidtimer*60000)) {
		hatchwarn = 3; // Raid abgelaufen
	} else if (hat2 > hatchtimer*60000) {
		hatchwarn = 10; // Schlüpft zu weit in der Zukunft
	} else if (hat2 > 0 && (ra != t5index && ra != t4index && ra != t3index && ra != t2index && ra != t1index && ra != tcindex && ra != 0) && (ra != t5index+1 || t5multi) && (ra != tMindex || tM != 1) && (ra != t4index+1 || t4 != 1)) {
		hatchwarn = 12; // Ei noch nicht geschlüpft
	} else if (t5multi && hat2 > 0 && ra > t5index && ra < t4index) {
		hatchwarn = 13; // 5er noch nicht geschlüpft (wenn mehr als 1 5er) */
	} else {
		hatchwarn = 0;
	}
	
	if (getLang() == "de") {
	document.getElementById("timeh").innerHTML = warn_de[hatchwarn];
	}
	if (getLang() == "en") {
	document.getElementById("timeh").innerHTML = warn_en[hatchwarn];
	}
  }
  
  if (st) {
	var now3 = sta - now2;
	hat = (ti != "") ? sta - hat:0;
	
	var ste = document.createAttribute("class");
	ste.value = "form-text text-danger";
	
	st = st.substr(0,1)
	if (st != "0" && st != "1" && st != "2") {
		startwarn = 11;	// keine Uhrzeit
	} else if (now3 < 0) {
		startwarn = 4;  /* // Startzeit in der Vergangenheit 
	} else if (hat >= (raidtimer*60000)) {
		startwarn = 5;  // Startzeit nicht innerhalb raidtimer
	} else if (hat > (raidtimer*60000)-300000) {
		ste.value = "form-text text-muted";
		startwarn = 6;  // Startzeit 5 Minuten vor Ende */
	} else if (hat < 0) {
		startwarn = 7;  // Startzeit vor Schlüpfzeit
	} else {
		startwarn = 0;
	}
	
	if (getLang() == "de") {
		document.getElementById("starth").innerHTML = warn_de[startwarn];
	}
	if (getLang() == "en") {
		document.getElementById("starth").innerHTML = warn_en[startwarn];
	}
	document.getElementById("starth").setAttributeNode(ste);
  } 

  if (hatchwarn == 0 && startwarn == 0) {
	$("#warn").hide();
  } else {
	$("#warn").show();
  }
}

function checkGym(ext) {
  return ext == this;
}

function changeLang() {
  var i
  if (getLang() == "de") {
	for (i = 0; i < txtid.length; i++) {
		try {
			document.getElementById(txtid[i]).innerHTML = txt_de[i];
		} catch {}
	}
	
	$("#raid>optgroup>option, #tc").text(function(i,origText){
		return raid_de[raid_en.indexOf(origText)];
	});
	
	document.getElementById("timeh").innerHTML = warn_de[hatchwarn];
	document.getElementById("starth").innerHTML = warn_de[startwarn];
	document.getElementById("raidwarn").innerHTML = warn_de[raidwarn];
	// document.getElementById("tg_warn").innerHTML = warn_de[tg_warn];

	$("#pokelist button, #legacylist button").text(function(i, origText){
		var evt;
		if (origText[origText.length-1] == "⏱") {
			origText = origText.substr(0,origText.length-1);
			evt = 1;
		}
		var s;
		if (origText[origText.length-1] == "✨") {
			origText = origText.substr(0,origText.length-1);
			s = 1;
		}
		var newText = (getPkmnEng(origText)) ? getPkmnEng(origText).name:origText;
		newText += s?"✨":"";
		newText += evt?"⏱":"";
		return newText;
	});

	$("#itemlist button").text(function(i, origText){
		return getItemEng(origText).name;
	});
	
	$("#specialpoke button").text(function(i, origText){
		return getSpecialEng(origText).name;
	});

	tinysort("#pokelist button");
	tinysort("#itemlist button");	
	tinysort("#legacylist button");	
	
	if (tMindex > 0) { tinysort("#tM>option:not(:first-child)"); }
	if (t5index >= 0) { tinysort("#t5>option:not(:first-child)"); }
	if (t4index >= 0) { tinysort("#t4>option:not(:first-child)"); }
	if (t3index >= 0) { tinysort("#t3>option:not(:first-child)"); }
	if (t2index >= 0) { tinysort("#t2>option:not(:first-child)"); }
	if (t1index >= 0) { tinysort("#t1>option:not(:first-child)"); }

	createEventlist("de");
	
	$('.selectpicker').selectpicker('refresh');
  }
  if (getLang() == "en") {
	for (i = 0; i < txtid.length; i++) {
		try {
			document.getElementById(txtid[i]).innerHTML = txt_en[i];
		} catch {}
	}
	
	$("#raid>optgroup>option, #tc").text(function(i,origText){
		return raid_en[raid_de.indexOf(origText)];
	});
	
	document.getElementById("timeh").innerHTML = warn_en[hatchwarn];
	document.getElementById("starth").innerHTML = warn_en[startwarn];
	document.getElementById("raidwarn").innerHTML = warn_en[raidwarn];
	// document.getElementById("tg_warn").innerHTML = warn_en[tg_warn];

	$("#pokelist button, #legacylist button").text(function(i, origText){
		var evt;
		if (origText[origText.length-1] == "⏱") {
			origText = origText.substr(0,origText.length-1);
			evt = 1;
		}
		var s;
		if (origText[origText.length-1] == "✨") {
			origText = origText.substr(0,origText.length-1);
			s = 1;
		}
		var newText = (getPkmn(origText).en) ? getPkmn(origText).en:origText;
		newText += s?"✨":"";
		newText += evt?"⏱":"";
		return newText;
	});

	$("#itemlist button").text(function(i, origText){
		return getItem(origText).en;
	});
	
	$("#specialpoke button").text(function(i, origText){
		return getSpecial(origText).en;
	});

	tinysort("#pokelist button");
	tinysort("#itemlist button");	
	tinysort("#legacylist button");	
	
	if (tMindex > 0) { tinysort("#tM>option:not(:first-child)"); }
	if (t5index >= 0) { tinysort("#t5>option:not(:first-child)"); }
	if (t4index >= 0) { tinysort("#t4>option:not(:first-child)"); }
	if (t3index >= 0) { tinysort("#t3>option:not(:first-child)"); }
	if (t2index >= 0) { tinysort("#t2>option:not(:first-child)"); }
	if (t1index >= 0) { tinysort("#t1>option:not(:first-child)"); }
	
	createEventlist("en");

	$('.selectpicker').selectpicker('refresh');

  }
}

function getLang() {
	return document.getElementById("lang").value;
}

function TierCheck() {
	var ind = document.getElementById("raid").selectedIndex;
	if (ind == tcindex) {
		var nr = document.getElementById("raid");
		var custom
		var cl = getLang()
		if (cl == "de") {
			custom = prompt("Gib den Namen des Raidboss ein.",getPkmnByDex(Math.ceil(Math.random()*721))[0].name)
		} else {
			custom = prompt("Enter the name of the raid boss.",getPkmnByDex(Math.ceil(Math.random()*721))[0].name)
		}
		try {
			custom = custom.replace(/<.+?>/g,"");
		} catch {}
		if (custom != null && custom != "") {
			nr.remove(tcindex);
			var nc = document.createElement("option");
			nc.text = cl=="de" ? "Anderer Raidboss ("+custom+")" : "Custom Raid Boss ("+custom+")";
			raid_de.pop();
			raid_de.push("Anderer Raidboss ("+custom+")");
			raid_en.pop();
			raid_en.push("Custom Raid Boss ("+custom+")");
			nc.setAttribute("id","tc")
			nc.setAttribute("value",custom);
			nr.add(nc,tcindex);
			nr.value = custom;
			$('#raid.selectpicker').selectpicker('refresh');
		} else {
			$('#raid.selectpicker').selectpicker('val',$("#raid>optgroup>option:nth-child(1)").val());
		}
		
	}
	if (hatchwarn == 12 && (ind == t4index || ind == t3index || ind == t2index || ind == t1index || ind === 0 || (!t5multi && ind == t5index+1))) {
		hatchwarn = 0;
		document.getElementById("timeh").innerHTML = "";
	}
	if (ind > 0 && document.getElementById("time").value) {
		if (ind != t5index+1 || t5multi) {
			checkTime();
		}
	}
	if (t5multi) {
		if (hatchwarn == 13 && (ind === 0 || ind == t4index)) {
			hatchwarn = 0;
			document.getElementById("timeh").innerHTML = "";
		}
		if (ind > t5index && ind < t4index && document.getElementById("time").value) {
			checkTime();
		}
	}
	if (remoteenabled == 1 && ind == t2index+1) {
		document.getElementById("remote").disabled = true;
		document.getElementById("remote").placeholder = "Kein Fernraid möglich! / No remote raid possible!"; 
		remoteenabled = 0;
	} else if (remoteenabled == 0 && ind != t2index+1) {
		document.getElementById("remote").disabled = false;
		document.getElementById("remote").placeholder = ""; 
		remoteenabled = 1;
	}
}

function pasteTelegram() {
	var tele = document.getElementById("tg_paste").value
	var arr = tele.split("\n");
	var txt = "";
	var del = 0;
	var st_m = ""; 
	var c_m = "";
	var i_m = 0; 
	var p_m = "";
	for (i=0; i < arr.length; i++) {
		item = arr[i];
		if (item == "" || item.includes("Spieler") || item.includes("EX-RAID") || item.includes("[0]")) {
			// check for certain terms to identify and delete empty lines, extra players, Ex-Raid tag & empty start times
			arr.splice(i,1);
			i--;
				
		} else if (item.includes("WP-Range:")) {
			// delete WP-Range and the two following lines
			arr.splice(i,3);
			i = i-3;

		} else if (i == 0 && item.includes("👤")) {
			// if this is the first not-empty line: get Raidboss and either get hatch time or calculate depending on post format
			var line = arr[i].split(" ");
			var g = 1;
			document.getElementById("raid").value = line[g];
			g++;
			if (line[g] == "Ei") { g++ }
			if (line[g] == "bis") {	
				g++;
				var hatchtime = new Date(new Date("Jan 01 1970 "+line[g])- 2700000);
				hatchtime = hatchtime.getHours() + ":" + hatchtime.getMinutes();
			} else {
				hatchtime = line[g];
			}
			document.getElementById("time").value = hatchtime;
			
		} else if (item.includes("Arena:")) {
			// check for gym term, then extract gym name and modify it
			var tg_gym = arr[i].substring(8,arr[i].length-2);
			var tg_gi = tg_gymedit.findIndex(checkGym,tg_gym);
			if (tg_gi >= 0) {
				document.getElementById("gym").value = tg_gymnew[tg_gi];
			} else {
				document.getElementById("gym").value = tg_gym;
			}
			
		} else if (item.includes("#")) {
			// check for # as this indicates the start times, extract time and number of participants
			del = 0;
			var starttime = arr[i].substr(2,5);
			var c = arr[i].substr(9,2);
			if (c[1] == "]") {
				c = "0"+c[0]; // we are comparing strings, so we have to make e.g. "9" into "09"
			}
			if (st_m) { // check if there are more than one start times
				if (c_m >= c) {
					// former start time has more or equal participants,  so delete the current start time and mark participants for deletion
					del = 1;
					arr.splice(i,1);
					i--;
				} else {
					// former start time has less participants, so delete the former start time and their participants
					for (j=i_m; j < i; i--) {
						console.log("Array:"+j+" deleting old line: " + arr[j]);
						arr.splice(j,1);
					}
				}
			}
			if (del == 0 || i == i_m) {
				st_m = starttime;
				c_m = c;
				i_m = i;
				p_m = "";
			}
		} else if (item.includes("└")) {
			if (del == 1) {
				// Player is marked for deletion, so delete them
				arr.splice(i,1);
				i--;
			} else {
				// delete Telegram username, then add (Telegram) and put it into the player list
				item = item.replace(/\s\(@\w+\)/,"");
				p_m += item.substr(2)+" (Telegram)\n";
			}
		}
		
	}
	

	document.getElementById("start").value = st_m;
	document.getElementById("player").value = p_m;

	$('.selectpicker').selectpicker('refresh');
	
	generateRaid("");
	
	if (raidwarn == 9) {
		tg_warn = 14;
		if (getLang() == "de") {
			document.getElementById("tg_warn").innerHTML = warn_de[tg_warn];
		}
		if (getLang() == "en") {
			document.getElementById("tg_warn").innerHTML = warn_en[tg_warn];
		}
	} else if (tg_warn == 14) {
		tg_warn = 0;
		document.getElementById("tg_warn").innerHTML = "";
	}
	
	var output = document.getElementById("tg_output");
	while (output.hasChildNodes()) {
		output.removeChild(output.firstChild);
	}
	
	if (tg_warn == 0) {
	var cln1 = document.getElementById("ex").cloneNode(true);
	document.getElementById("tg_output").appendChild(cln1);
	
	var cln2 = document.getElementById("but").cloneNode(true);
	document.getElementById("tg_output").appendChild(cln2);
	}
}

function createChecklist(){
	var cl_h1 = document.createAttribute("hidden");
	document.getElementById("cl_paste").setAttributeNode(cl_h1);
	var cl_h2 = document.createAttribute("hidden");
	document.getElementById("cl_start").setAttributeNode(cl_h2);	
	var cl_h3 = document.getElementById("cl_output").getAttributeNode("hidden");
	document.getElementById("cl_output").removeAttributeNode(cl_h3);	
	var cl = document.getElementById("cl_paste").value.split("\n");
	document.getElementById("cl_v").value = cl[0];
	for (i=1; i < cl.length; i++) {
		var cln = document.getElementById("cl_b").cloneNode(true);
		cln.getElementsByTagName("input").cl_v.value = cl[i];
		document.getElementById("cl_output").appendChild(cln);
	}
}

function deletePlayer(pla){
	pla.parentNode.parentNode.parentNode.removeChild(pla.parentNode.parentNode);
}

function deleteElement(ele){
	ele.parentNode.removeChild(ele);
}

$(document).ready(function(){
    $('input.timepicker').timepicker({});
});

$(document).ready(function() {
	$("#boq").on('click', '.btn-outline-secondary', function(){
		$(this).removeClass("btn-outline-secondary").addClass("btn-primary");
		sel_q.push($(this).attr("value"));
		sel_q.sort();
	});   
});

$(document).ready(function() {
	$("#boq").on('click', '.btn-primary', function(){
		$(this).removeClass("btn-primary").addClass("btn-danger");
		sel_q.splice(sel_q.indexOf($(this).attr("value")),1);
		sel_q.push("-" + $(this).attr("value"));
		sel_q.sort();
	});   
});

$(document).ready(function() {
	$("#boq").on('click', '.btn-danger', function(){
		$(this).removeClass("btn-danger").addClass("btn-outline-secondary");
		sel_q.splice(sel_q.indexOf("-" + $(this).attr("value")),1);
	});   
});

$('.timepicker').timepicker({
    timeFormat: 'HH:mm',
    interval: 5,
    defaultTime: '',
	startTime: new Date(),
    dynamic: false,
    dropdown: false,
    scrollbar: false,
	change: checkTime,
});

function buildNestlist(type) {
  var nest = eval(type + "nest");
  var txt = "";  
  for (var i = 0; i < nest.length ; i++) {
    var pk = getPkmnByDex(nest[i])[0].name;
	txt += "<tr><td>" + pk + "</td></tr>"
  }
  document.getElementById(type + "nest").innerHTML = txt;
}

function updateNestlist(type) {
  var pk = parseInt(document.getElementById(type).value);
  var ne = type + "nest";
  if (eval(ne).find(isIn,pk)) {
    eval(ne).splice(eval(ne).findIndex(isIn,pk), 1);
  } else {
    eval(ne).push(pk);
    eval(ne).sort(function(a, b){return a-b});
  }
  buildNestlist(type);
}

function generateTable() {
  var txt = "";
  var j = 1;
  var old_le = oldnest.length;
  var new_le = newnest.length;
  for (var i = 0; i < old_le ; i++) {
    var oldper = 0;
	txt += "<tr><td>" + getPkmnByDex(oldnest[i])[0].name + "</td><td>";
	do {
	  var p = (j * old_le / new_le) - i;
	  var per = (p*100).toFixed(2);
	  if (per >= 100) { 
	    per = 100;
	  }
	  if (oldper > 0) {
		per -= oldper;		
		per = per.toFixed(2);
	  }
	  if (per > 0) {
	    txt += getPkmnByDex(newnest[j-1])[0].name + " (" + per + "%)";
	  }

	  if (p < 1) {
		j++;
		oldper = (oldper*10 + per*10) / 10;
		if (per > 0) {
		  txt += ", ";
		}
	  }
	}
	while (p < 1);
	txt += "</td></tr>";
  }
  
  document.getElementById("nestcalc").innerHTML = txt;

  $('.nestclc').toggle();
}

function generateLink() {
	if (sel_q.length > 0) {
		/*
		for (i=0; i < forms.length; i++) {
			var fo = sel_q.indexOf(forms[i]);
			if (fo >= 0) {
				sel_q[fo] = parseInt(sel_q[fo].substr(0,sel_q[fo].length - 1));
			}
		}
		*/
		link = boqlink + sel_q.toString();
		document.getElementById("newLink").innerHTML = '<a href="' + link + '" target="_blank">' + link + '</a>';
	} else {
		document.getElementById("newLink").innerHTML = "Bitte wähle mindestens 1 Pokémon oder Item aus.";
	}
  
	if (hidden) {
		$('#newLink').toggle();
		hidden = 0;
	}
}

function hideGBL() {
	if (document.getElementById("hide_gbl").checked) {
		$("#events div[style='background:#f5e6ff']").attr("style", function(i, origValue){return origValue + "; display: none;"});
	} else {
		$("#events div[style='background:#f5e6ff; display: none;']").attr("style", function(i, origValue){return origValue.substr(0,origValue.length-16)});
	}
}

function copyNewToOld() {
  oldnest = newnest.slice();
  buildNestlist("old");
}

function resetList() {
  oldnest = orignest.slice();
  newnest = orignest.slice();
  buildNestlist("old");
  buildNestlist("new");
  $('.nestclc').toggle();
}

function getPkmnByDex(dex) {
  return pokemon.filter(
    function(pokemon){ return pokemon.dex == dex });
}

function getPkmn(name) {
  return pokemon.filter(function(pokemon){return pokemon.name == name})[0];
}

function getPkmnEng(name) {
  return pokemon.filter(function(pokemon){return pokemon.en == name})[0];
}

function getItem(name) {
  return items.filter(function(items){return items.name == name})[0];
}

function getItemEng(name) {
  return items.filter(function(items){return items.en == name})[0];
}

function getSpecial(name) {
  return specialfilter.filter(function(specialfilter){return specialfilter.name == name})[0];
}

function getSpecialEng(name) {
  return specialfilter.filter(function(specialfilter){return specialfilter.en == name})[0];
}

function isIn(dex) {
  return dex == this;
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

/* function counter() {
  secret++;
  if (secret > 5) {
	$('#maske').removeAttr('hidden');
	$('#covid').hide();
	alert("Das Raiden erfolgt auf eigene Verantwortung. berlin-raids.tk ist nicht für gesundheitliche, finanzielle oder andere Schäden durch Missachtung der Verordnung zur Eindämmung von COVID-19 verantwortlich.");
	}
} */

$('#old').on('hidden.bs.select', function () {
  updateNestlist("old");
});

$('#new').on('hidden.bs.select', function () {
  updateNestlist("new");
});
