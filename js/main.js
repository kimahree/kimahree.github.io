﻿var t5multi = 0;
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

var shareData = {};

var txtid = ["txt_beta","txt_mainlink","txt_lang","txt_gym","txt_hatch","txt_start","txt_player","txt_remote","txt_instr","txt_button","txt_button2","txt_multi","txt_chgym","txt_cre_close","txt_cl_close","txt_reg_close","txt_evt_current","txt_evt_upcoming","txt_hide_gbl","txt_clip_copy"];

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
"Teilen",
'Um einen Multiraid zu posten, ändere jetzt die Angaben oben für den nächsten Raid und drücke dann auf "Multiraid!". Wiederhole dies, bis alle Raids eingetragen sind.<br>',
"Wähle eine Arena aus.",
"Schließen",
"Schließen",
"Schließen",
"Aktuelle Events",
"Bevorstehende Events",
"Keine GBL",
""
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
"Share",
'To post a Multiraid, change the data above for the next raid and then press "Multiraid!". Repeat until all raids have been added.<br>',
"Choose a gym.",
"Close",
"Close",
"Close",
"Current events",
"Upcoming events",
"Hide GBL",
""
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

var raids = {};

var raidjson = [
{"start":1752480000000,"tier4":["9M"],"tier5":[639]},
{"start":1752897600000,"tier4":["9M"],"tier5":[639,"379SH"]},
{"start":1753038000000,"tier4":["9M"],"tier5":[639]},
{"start":1753171200000,"tier4":["3M"],"tier5":[792]},
{"start":1753502400000,"tier4":["3M"],"tier5":[792,"379SH"]},
{"start":1753642800000,"tier4":["3M"],"tier5":[792]},
{"start":1753689600000,"tier4":["142M"],"tier5":[640]},
{"start":1754107200000,"tier4":["142M"],"tier5":[640,"379SH"]},
{"start":1754247600000,"tier4":["142M"],"tier5":[640]},
];

var changelogjson = {
    "items": [
		{"ver":"1.13.62","date":"12.07.2025","change":["New Shiny: Hisuian Lilligant"]},
		{"ver":"1.13.61","date":"01.07.2025","change":["New Shiny: Gimmighoul"]},
		{"ver":"1.13.60","date":"26.06.2025","change":["New Shinies: Carbink, Frigibax","Add raid and event schedule for July 2025"]},
		{"ver":"1.13.59","date":"27.05.2025","change":["Add raid and event schedule for June 2025"]},
		{"ver":"1.13.58","date":"12.05.2025","change":["New Shiny: Pawmi"]},
		{"ver":"1.13.57","date":"25.04.2025","change":["Add raid and event schedule for May 2025"]},
		{"ver":"1.13.56","date":"09.04.2025","change":["New Shinies: Stakataka, Blacephalon"]},
		{"ver":"1.13.55","date":"24.03.2025","change":["Add raid and event schedule for April 2025"]},
		{"ver":"1.13.54","date":"14.03.2025","change":["New Shiny: Bruxish"]},
		{"ver":"1.13.53","date":"08.03.2025","change":["New Shiny: Fuecoco"]},
		{"ver":"1.13.52","date":"05.03.2025","change":["New Shiny: Charcadet"]},
		{"ver":"1.13.51","date":"01.03.2025","change":["New Shinies: Deerling (all Formes)"]},
		{"ver":"1.13.50","date":"28.02.2025","change":["Add raid and event schedule for March 2025"]},
		{"ver":"1.13.49","date":"24.02.2025","change":["New Shinies: Maractus, Sigilyph, Bouffalant"]},
		{"ver":"1.13.48","date":"18.02.2025","change":["New Shiny: Scatterbug"]},
		{"ver":"1.13.47","date":"05.02.2025","change":["New Shiny: Nymble"]},
		{"ver":"1.13.46","date":"24.01.2025","change":["Add raid and event schedule for February 2025"]},
		{"ver":"1.13.45","date":"05.01.2025","change":["New Shiny: Sprigatito"]},
		{"ver":"1.13.44","date":"22.12.2024","change":["New Shiny: Cetoddle"]},
		{"ver":"1.13.43","date":"20.12.2024","change":["Add raid and event schedule for January 2025"]},
		{"ver":"1.13.42","date":"17.12.2024","change":["New Shiny: Sandygast"]},
		{"ver":"1.13.41","date":"03.12.2024","change":["New Shinies: Genesect (Chill Drive), Basculin (Red-Striped & Blue-Striped)"]},
		{"ver":"1.13.40","date":"26.11.2024","change":["New Shinies: Galarian Corsola, Regidrago, Regieleki","Add raid and event schedule for December"]},
		{"ver":"1.13.39","date":"18.11.2024","change":["New Shiny: Toxel"]},
		{"ver":"1.13.38","date":"07.11.2024","change":["New Shiny: Smoliv"]},
		{"ver":"1.13.37","date":"24.10.2024","change":["Add raid and event schedule for November","Basic Gigantamax support","Add missing Gigantamax Pokémon"]},
		{"ver":"1.13.36","date":"06.10.2024","change":["New Shiny: Sewaddle"]},
		{"ver":"1.13.35","date":"04.10.2024","change":["New Shinies: Galarian Articuno, Galarian Zapdos, Galarian Moltres, Zamazenta"]},
		{"ver":"1.13.34","date":"26.09.2024","change":["New Shiny: Zacian","Add raid and event schedule for October"]},
		{"ver":"1.13.33","date":"23.09.2024","change":["New Shiny: Passimian"]},
		{"ver":"1.13.32","date":"08.09.2024","change":["New Shiny: Falinks"]},
		{"ver":"1.13.31","date":"03.09.2024","change":["New Shinies: Skwovet, Wooloo"]},
		{"ver":"1.13.30","date":"31.08.2024","change":["New Shiny: Popplio"]},
		{"ver":"1.13.29","date":"28.08.2024","change":["Add raid and event schedule for September"]},
		{"ver":"1.13.28","date":"27.08.2024","change":["Add events from new season"]},
		{"ver":"1.13.27","date":"16.08.2024","change":["New Shiny: Mienfoo"]},
		{"ver":"1.13.26","date":"25.07.2024","change":["New Shiny: Togedemaru"]},
		{"ver":"1.13.25","date":"24.07.2024","change":["New Shiny: Tynamo","Add raid and event schedule for August","Completely removed Book of Quests functionality"]},
		{"ver":"1.13.24","date":"13.07.2024","change":["New Shiny: Necrozma"]},
		{"ver":"1.13.23","date":"09.07.2024","change":["New Shinies: Ducklett, Jangmo-O, Buzzwole"]},
		{"ver":"1.13.22","date":"04.07.2024","change":["Disabled Quests Tab"]},
		{"ver":"1.13.21","date":"21.06.2024","change":["New Shiny: Larvesta"]},
		{"ver":"1.13.20","date":"15.06.2024","change":["New Shiny: Crabrawler"]},
		{"ver":"1.13.19","date":"07.06.2024","change":["New Shiny: Comala"]},
		{"ver":"1.13.18","date":"01.06.2024","change":["New Shiny: Emolga","Quests: Add Pidgey, Psyduck, Abra, Geodude, Onix, Lapras, Hoothoot, Mareep, Marill, Surskit, Slakoth, Makuhita, Electrike, Plusle, Minun, Clamperl, Luvdisc, Bidoof, Buizel, Patrat, Tympole, Darumaka, Galarian Darumaka, Sandygast, Pawmi","Quests: Remove Nidoran♀, Nidoran♂, Diglett, Machop, Bellsprout, Lickitung, Snorlax, Sentret, Ledyba, Spinarak, Hisuian Qwilfish, Delibird, Skarmory, Zigzagoon, Sableye, Meditite, Snorunt, Cranidos, Shieldon, Burmy (all), Bronzor, Drilbur, Gothita, Solosis, Axew, Spritzee, Swirlix, Grubbin, Togedemaru"]},
		{"ver":"1.13.17","date":"28.05.2024","change":["Add raid and event schedule for June"]},
		{"ver":"1.13.16","date":"23.05.2024","change":["New Shiny: Mareanie"]},
		{"ver":"1.13.15","date":"19.05.2024","change":["New Shiny: Bounsweet"]},
		{"ver":"1.13.14","date":"29.04.2024","change":["Add raid and event schedule for May","Quests: Remove Combee, Foongus"]},
		{"ver":"1.13.13","date":"22.04.2024","change":["Quests: Add Combee, Foongus"]},
		{"ver":"1.13.12","date":"18.04.2024","change":["Quests: Removed Paras, Venonat, Karrablast, Shelmet, Dewpider"]},
		{"ver":"1.13.11","date":"12.04.2024","change":["Quests: Add Paras, Venonat, Karrablast, Shelmet, Dewpider","Quests: Remove Onix, Wailmer, Tynamo, Cutiefly"]},
		{"ver":"1.13.10","date":"04.04.2024","change":["New Shinies: Wimpod, Celesteela, Kartana","Quests: Add Onix, Wailmer, Tynamo, Cutiefly"]},
		{"ver":"1.13.9","date":"01.04.2024","change":["Quests: Remove Pawniard, Vullaby, Deino, Inkay"]},
		{"ver":"1.13.8","date":"27.03.2024","change":["New Shiny: Sandile","Quests: Add Pawniard, Vullaby, Deino, Inkay","Quests: Remove Marill, Slugma, Pansage, Pansear, Panpour"]},
		{"ver":"1.13.7","date":"21.03.2024","change":["New Shiny: Flabébé","Quests: Add Marill, Slugma, Pansage, Pansear, Panpour","Quests: Remove Paras, Castform (all), Drifloon, Helioptile, Amaura"]},
		{"ver":"1.13.6","date":"16.03.2024","change":["New Shiny: Litten"]},
		{"ver":"1.13.5","date":"14.03.2024","change":["Quests: Add Paras, Castform (all), Drifloon, Helioptile, Amaura","Quests: Remove Pikachu, Golduck, Rockruff, Sprigatito, Fuecoco, Quaxly"]},
		{"ver":"1.13.4","date":"05.03.2024","change":["Quests: Add Pikachu, Golduck, Rockruff, Sprigatito, Fuecoco, Quaxly"]},
		{"ver":"1.13.3","date":"01.03.2024","change":["Quests: Add Rattata, Nidoran♀, Nidoran♂, Machop, Bellsprout, Lickitung, Snorlax, Sentret, Ledyba, Spinarak, Chinchou, Hisuian Qwilfish, Swinub, Skarmory, Zigzagoon, Sableye, Snorunt, Cranidos, Shieldon, Burmy (all), Bronzor, Drilbur, Gothita, Solosis, Spritzee, Swirlix, Grubbin, Togedemaru","Quests: Remove Meowth, Alolan Meowth, Galarian Meowth, Ponyta, Galarian Ponyta, Galarian Weezing, Lapras, Wooper, Paldean Wooper, Surskit, Absol, Spheal, Stunky, Darumaka, Galarian Darumaka, Dwebble, Scraggy, Karrablast, Frillish, Cubchoo, Cryogonal, Shelmet, Golett, Skrelp, Bergmite, Morelull, Sandygast, Smoliv, Tadbulb"]},
		{"ver":"1.13.2","date":"28.02.2024","change":["Add raid and event schedule for March"]},
		{"ver":"1.13.1","date":"17.02.2024","change":["New Shinies: Hisuian Voltorb, Hisuian Quilfish, Pachirisu, Chingling, Stunky, Chatot, Carnivine, Rotom, Dialga (Origin Forme), Palkia (Origin Forme), Basculin (White-Striped Forme)"]},
		{"ver":"1.13","date":"15.02.2024","change":["Changed domain to berlin-raids.de","Quests: Remove Snubbull, Roselia, Luvdisc, Furfrou"]},
		{"ver":"1.12.111","date":"13.02.2024","change":["New Shiny: Hisuian Decidueye, Oricorio","Quests: Add Snubbull, Roselia, Luvdisc, Furfrou","Quests: Remove Swablu, Druddigon, Deino, Tyrunt, Goomy, Turtonator, Drampa"]},
		{"ver":"1.12.110","date":"05.02.2024","change":["New Shiny: Drampa","Quests: Add Swablu, Druddigon, Deino, Tyrunt, Goomy, Turtonator, Drampa"]},
		{"ver":"1.12.109","date":"02.02.2024","change":["Quests: Remove Ekans, Zubat, Koffing, Hisuian Qwilfish, Poochyena, Sableye, Mareanie, Bruxish, Nymble"]},
		{"ver":"1.12.108","date":"29.01.2024","change":["Add February events and raids"]},
		{"ver":"1.12.107","date":"27.01.2024","change":["Quests: Add Ekans, Zubat, Koffing, Hisuian Qwilfish, Poochyena, Sableye, Mareanie, Bruxish, Nymble","Quests: Remove Mankey"]},
		{"ver":"1.12.106","date":"19.01.2024","change":["Quests: Add Mankey","Quests: Remove Alolan Vulpix, Spritzee, Swirlix, Carbink, Cutiefly","Quests: Remove Hisuian Sneasel, Rockruff"]},
		{"ver":"1.12.105","date":"14.01.2024","change":["New Shiny: Hisuian Typhlosion"]},
		{"ver":"1.12.104","date":"13.01.2024","change":["New Shiny: Cutiefly","Quests: Add Alolan Vulpix, Spritzee, Swirlix, Carbink, Cutiefly","Quests: Remove Hisuian Sneasel, Rockruff"]},
		{"ver":"1.12.103","date":"06.01.2024","change":["New Shiny: Rowlet","Quests: Add Hisuian Sneasel, Rockruff","Quests: Remove Bronzor"]},
		{"ver":"1.12.102","date":"01.01.2024","change":["Happy New Year!","Quests: Add Bronzor","Quests: Remove Pikachu, Alolan Vulpix, Psyduck, Shellder, Jynx, Stantler, Glaceon, Crabrawler"]},
		{"ver":"1.12.101","date":"25.12.2023","change":["New Shiny: Vanillite","Quests: Add Alolan Vulpix, Psyduck, Stantler","Quests: Remove Alolan Sandshrew"]},
		{"ver":"1.12.100","date":"23.12.2023","change":["New Shiny: Wyrdeer","Add January Events and Raids"]},
		{"ver":"1.12.99","date":"18.12.2023","change":["Quests: Add Pikachu, Alolan Sandshrew, Shellder, Jynx, Glaceon, Crabrawler","Quests: Reomve Togetic, Timburr, Chespin, Fennekin, Froakie, Noibat, Grubbin"]},
		{"ver":"1.12.98","date":"16.12.2023","change":["Changed raids because Niantic","Quests: Add Togetic, Timburr, Chespin, Fennekin, Froakie, Noibat, Grubbin","Quests: Remove Abra, Machop, Geodude, Gastly, Krabby, Voltorb"]},
		{"ver":"1.12.97","date":"11.12.2023","change":["Quests: Add Abra, Machop, Geodude, Gastly, Krabby, Voltorb"]},
		{"ver":"1.12.96","date":"09.12.2023","change":["New Shiny: Cryogonal","Quests: Remove Hisuian Sneasel, Wooloo"]},
		{"ver":"1.12.95","date":"05.12.2023","change":["New Shiny: Hisuian Sneasel","Quests: Add Hisuian Sneasel, Wooloo"]},
		{"ver":"1.12.94","date":"03.12.2023","change":["New Shiny: Hisuian Samurott"]},
		{"ver":"1.12.93","date":"01.12.2023","change":["Quests: Add Meowth, Alolan Meowth, Galarian Meowth, Ponyta, Galarian Ponyta, Galarian Weezing, Lapras, Paldean Wooper, Delibird, Surskit, Meditite, Absol, Stunky, Darumaka, Galarian Darumaka, Dwebble, Scraggy, Karrablast, Frillish, Cubchoo, Cryogonal, Shelmet, Golett, Skrelp, Bergmite, Morelull, Sandygast, Smoliv, Tadbulb","Quests: Remove Caterpie, Weedle, Alolan Rattata, Tentacool, Gastly, Haunter, Onix, Lickitung, Staryu, Ledyba, Spinarak, Chinchou, Marill, Aipom, Murkrow, Misdreavus, Girafarig, Gligar, Snubbull, Houndour, Poochyena, Wurmple, Shedinja, Skitty, Sableye, Burmy, Purrloin, Yamask, Gothita, Solosis, Inkay, Yungoos"]},
		{"ver":"1.12.92","date":"28.11.2023","change":["Add Season 13 data","Quests: Remove Nosepass, Sprigatito, Fuecoco, Quaxly"]},
		{"ver":"1.12.91","date":"22.11.2023","change":["New Shiny: Lucario","Quests: Add Nosepass, Sprigatito, Fuecoco, Quaxly","Quests: Remove Butterfree, Kirlia, Shinx, Blitzle"]},
		{"ver":"1.12.90","date":"15.11.2023","change":["New Shiny: Gothita","Quests: Add Butterfree, Kirlia, Shinx, Blitzle","Quests: Remove Darumaka, Morelull, Tadbulb"]},
		{"ver":"1.12.89","date":"08.11.2023","change":["Change Raid schedule ONCE MORE, since they finally decided to inform their players"]},
		{"ver":"1.12.88","date":"07.11.2023","change":["New Shiny: Morelull","Quests: Add Darumaka, Morelull, Tadbulb"]},
		{"ver":"1.12.87","date":"05.11.2023","change":["New Shiny: Paldean Wooper"]},
		{"ver":"1.12.86","date":"02.11.2023","change":["Change Raid schedule AGAIN, why bother informing your players","New Shiny: Genesect (Douse Drive)","Quests: Remove Cubone, Sunkern, Drifloon, Litwick"]},
		{"ver":"1.12.85","date":"02.11.2023","change":["Change Raid schedule, because Niantic screwed up once again"]},
		{"ver":"1.12.84","date":"01.11.2023","change":["Quests: Add Cubone, Sunkern, Drifloon, Litwick","Quests: Remove Mismagius, Galarian Yamask, Greavard"]},
		{"ver":"1.12.83","date":"26.10.2023","change":["[Gesundbrunnen] Add new Gym: Skulptur von Barno von Sartory","Add November Events","New Shiny: Zorua","Quests: Add Mismagius, Galarian Yamask, Greavard"]},
		{"ver":"1.12.82","date":"19.10.2023","change":["New Shiny: Phantump","Quests: Add Phantump"]},
		{"ver":"1.12.81","date":"17.10.2023","change":["Quests: Remove Pumpkaboo, Smoliv"]},
		{"ver":"1.12.80","date":"12.10.2023","change":["Quests: Add Pumpkaboo, Smoliv"]},
		{"ver":"1.12.79","date":"06.10.2023","change":["New Shiny: Skiddo"]},
		{"ver":"1.12.78","date":"02.10.2023","change":["Quests: Remove Hisuian Qwilfish, Hisuian Sneasel, Pawmi"]},
		{"ver":"1.12.77","date":"27.09.2023","change":["New Shiny: Hisuian Growlithe","Quests: Add Hisuian Qwilfish, Hisuian Sneasel, Pawmi"]},
		{"ver":"1.12.76","date":"24.09.2023","change":["Quests: Remove Kadabra, Wobbuffet, Metang"]},
		{"ver":"1.12.75","date":"23.09.2023","change":["New Shiny: Grubbin"]},
		{"ver":"1.12.74","date":"21.09.2023","change":["Added October events and raids"]},
		{"ver":"1.12.73","date":"20.09.2023","change":["New Shiny: Solosis","Quests: Add Kadabra, Wobbuffet, Metang"]},
		{"ver":"1.12.72","date":"15.09.2023","change":["Quests: Remove Pawmi"]},
		{"ver":"1.12.71","date":"10.09.2023","change":["New Shiny: Bombirdier","Quests: Add Pawmi","Quests: Remove Sprigatito, Fuecoco, Quaxly, Lechonk"]},
		{"ver":"1.12.70","date":"05.09.2023","change":["New Shiny: Lechonk","Quests: Add Sprigatito, Fuecoco, Quaxly, Lechonk"]},
		{"ver":"1.12.69","date":"01.09.2023","change":["Quests: Add Caterpie, Weedle, Tentacool, Doduo, Gastly, Staryu, Chinchou, Marill, Wooper, Murkrow, Gligar, Houndour, Wurmple, Shedinja, Skitty, Spheal, Burmy (Plant Cloak), Purrloin, Yamask, Gothita, Solosis, Inkay, Yungoos","Quests: Remove Pikachu, Nidoran♀, Nidorina, Nidorino, Clefairy, Psyduck, Mankey, Machop, Machoke, Geodude, Alolan Geodude, Galarian Farfetch'd, Exeggcute, Cubone, Marowak, Porygon, Snorlax, Swinub, Lotad, Slakoth, Meditite, Baltoy, Shuppet, Duskull, Bronzor, Lillipup, Woobat, Drilbur, Tympole, Minccino, Karrablast, Klink, Shelmet, Spritzee, Swirlix, Togedemaru"]},
		{"ver":"1.12.68","date":"30.08.2023","change":["Season 12 Update"]},
		{"ver":"1.12.67","date":"26.08.2023","change":["New Shinys: Shellos (all Forms), Joltik, Goomy, Oranguru"]},
		{"ver":"1.12.66","date":"22.08.2023","change":["Quests: Remove Grimer, Skrelp, Noibat, Mareanie"]},
		{"ver":"1.12.65","date":"19.08.2023","change":["Quests: Add Grimer, Skrelp, Noibat, Mareanie"]},
		{"ver":"1.12.64","date":"18.08.2023","change":["New Shinies: Golett, Skrelp"]},
		{"ver":"1.12.63","date":"15.08.2023","change":["Quests: Remove Alolan Sandslash, Seel, Galarian Zigzagoon, Spheal, Passimian"]},
		{"ver":"1.12.62","date":"13.08.2023","change":["New Shiny: Froakie"]},
		{"ver":"1.12.61","date":"11.08.2023","change":["New Shiny: Scraggy","Quests: Add Alolan Sandslash, Seel, Galarian Zigzagoon, Spheal, Passimian"]},
		{"ver":"1.12.60","date":"08.08.2023","change":["Quests: Remove Tangela, Roselia, Petilil, Foongus"]},
		{"ver":"1.12.59","date":"05.08.2023","change":["Quests: Add Tangela, Roselia, Petilil, Foongus"]},
		{"ver":"1.12.58","date":"04.08.2023","change":["New Shinies: Petilil, Dewpider","Quests: Remove Omastar, Kabutops, Cradily, Armaldo, Tyrunt, Amaura"]},
		{"ver":"1.12.57","date":"29.07.2023","change":["August Events Update"]},
		{"ver":"1.12.56","date":"27.07.2023","change":["New Shinies: Tyrunt, Amaura","Quests: Add Omastar, Kabutops, Cradily, Armaldo, Tyrunt, Amaura"]},
		{"ver":"1.12.55","date":"25.07.2023","change":["New Shiny: Tyranitar"]},
		{"ver":"1.12.54","date":"14.07.2023","change":['[Gesundbrunnen] Add new gym: "Schiff im Wattenmeer"']},
		{"ver":"1.12.53","date":"12.07.2023","change":["Quests: Remove Chikorita, Cyndaquil, Totodile, Treecko, Torchic, Mudkip, Turtwig, Chimchar, Piplup, Chespin, Fennekin, Froakie"]},
		{"ver":"1.12.52","date":"06.07.2023","change":["Quests: Add Chikorita, Cyndaquil, Totodile, Treecko, Torchic, Mudkip, Turtwig, Chimchar, Piplup, Chespin, Fennekin, Froakie"]},
		{"ver":"1.12.51","date":"02.07.2023","change":["Quests: Remove Alolan Meowth, Alolan Grimer, Magmar, Litwick, Turtonator"]},
		{"ver":"1.12.50","date":"29.06.2023","change":["New Shiny: Turtonator","Quests: Add Alolan Meowth, Alolan Grimer, Magmar, Litwick, Turtonator"]},
		{"ver":"1.12.49","date":"26.06.2023","change":["Quests: Remove Fomantis"]},
		{"ver":"1.12.48","date":"20.06.2023","change":["New Shiny: Pancham"]},
		{"ver":"1.12.47","date":"16.06.2023","change":["New Shinys: Fomantis, Nihilego","Quests: Add Fomantis"]},
		{"ver":"1.12.46","date":"13.06.2023","change":["Quests: Remove Lapras, Frillish, Clauncher, Sandygast"]},
		{"ver":"1.12.45","date":"06.06.2023","change":["New Shiny: Clauncher","Quests: Add Lapras, Frillish, Clauncher, Sandygast"]},
		{"ver":"1.12.44","date":"01.06.2023","change":["Quests: Add Pikachu, Nidoran♀, Clefairy, Jigglypuff, Diglett, Psyduck, Mankey, Growlithe, Hisuian Growlithe, Machop, Geodude, Slowpoke, Galarian Slowpoke, Haunter, Exeggcute, Alolan Exeggutor, Cubone, Marowak, Alolan Marowak, Scyther, Porygon, Snorlax, Ledyba, Spinarak, Aipom, Misdreavus, Sneasel, Swinub, Remoraid, Larvitar, Poochyena, Lotad, Wingull, Nincada, Mawile, Aron, Meditite, Trapinch, Baltoy, Feebas, Shuppet, Duskull, Clamperl, Buneary, Glameow, Bronzor, Croagunk, Snivy, Tepig, Oshawott, Lillipup, Roggenrola, Woobat, Drilbur, Tympole, Cottonee, Tirtouga, Archen, Trubbish, Vanillite, Klink, Elgyem, Axew, Galarian Stunfisk, Litleo, Spritzee, Swirlix, Binacle, Dedenne, Rowlet, Litten, Popplio, Wimpod, Togedemaru","Quests: Remove Chikorita, Cyndaquil, Totodile, Hoppip, Yanma, Murkrow, Dunsparce, Mantine, Treecko, Torchic, Mudkip"]},
		{"ver":"1.12.43","date":"30.05.2023","change":["Season 11 and June events and raids update"]},
		{"ver":"1.12.42","date":"24.05.2023","change":["Add support for Shadow Raids"]},
		{"ver":"1.12.41","date":"21.05.2023","change":["New Shiny: Fennekin","Quests: Remove Ponyta"]},
		{"ver":"1.12.40","date":"11.05.2023","change":["Quests: Add Ponyta"]},
		{"ver":"1.12.39","date":"09.05.2023","change":["New Shiny: Tapu Fini","Quests: Remove Magneton, Chansey, Electabuzz, Magmar, Snorlax, Chimecho"]},
		{"ver":"1.12.38","date":"06.05.2023","change":["New Shiny: Kleavor"]},
		{"ver":"1.12.37","date":"02.05.2023","change":["New Shinies: Mantyke, Genesect (Shock Drive)","Quests (Event): Add Magneton, Chansey, Electabuzz, Magmar, Snorlax, Chimecho","Quests: Add Alolan Rattata, Nidorina, Nidorino, Machoke, Alolan Geodude, Galarian Farfetch'd, Lickitung, Girafarig, Slakoth, Sableye, Minccino, Karrablast, Shelmet, Stufful","Quests: Remove Weedle, Ekans, Mankey, Kadabra, Krabby, Exeggcute, Porygon, Aipom, Wobbuffet, Donphan, Corphish, Baltoy, Buneary, Foongus, Dedenne, Fomantis"]},
		{"ver":"1.12.36","date":"26.04.2023","change":["Quests: Remove Drilbur"]},
		{"ver":"1.12.35","date":"23.04.2023","change":["New Shiny: Stunfisk"]},
		{"ver":"1.12.34","date":"20.04.2023","change":["New Shiny: Drilbur","Quests: Add Drilbur"]},
		{"ver":"1.12.33","date":"17.04.2023","change":["New Shiny: Tapu Bulu"]},
		{"ver":"1.12.32","date":"11.04.2023","change":["Quests: Remove Pikachu, Chansey, Togetic"]},
		{"ver":"1.12.31","date":"04.04.2023","change":["Quests: Add Pikachu, Chansey, Togetic"]},
		{"ver":"1.12.30","date":"03.04.2023","change":["Quests: Add Weedle, Ekans, Mankey, Kadabra, Krabby, Exeggcute, Porygon, Aipom, Wobbuffet, Donphan, Corphish, Baltoy, Buneary, Foongus, Dedenne, Fomantis","Quests: Remove Alolan Meowth, Psyduck, Poliwhirl, Grimer, Shellder, Seadra, Skarmory, Wailmer, Croagunk, Woobat, Ducklett, Alomomola"]},
		{"ver":"1.12.29","date":"29.03.2023","change":["April events and raids update"]},
		{"ver":"1.12.28","date":"20.03.2023","change":["New Shinies: Galarian Slowpoke, Medicham","Updated events"]},
		{"ver":"1.12.27","date":"02.03.2023","change":["Add March raid schedule and events","Quests: Add Alolan Meowth, Psyduck, Poliwhirl, Grimer, Shellder, Seadra, Skarmory, Wailmer, Croagunk, Woobat, Ducklett, Alomomola","Quests: Remove Oddish, Meowth, Bellsprout, Exeggutor, Lickitung, Weezing, Jynx, Snorlax, Gligar, Miltank, Skitty, Roselia, Feebas, Clamperl, Glameow, Petilil, Rufflet"]},
		{"ver":"1.12.26","date":"27.02.2023","change":["Quests: Remove Pikachu, Surskit, Shedinja, Sableye, Gulpin, Cacnea, Shuppet, Duskull"]},
		{"ver":"1.12.25","date":"25.02.2023","change":["New Shinies: Surskit, Gulpin, Torkoal, Cacnea, Kecleon, Tropius, Relicanth","Change raid bosses (Pokémon GO Tour Hoenn)","Quests: Add Pikachu, Surskit, Shedinja, Sableye, Gulpin, Cacnea, Shuppet, Duskull"]},
		{"ver":"1.12.24","date":"15.02.2023","change":["Change raid bosses","Quests: Remove Pikachu, Chansey, Luvdisc, Combee, Audino, Frillish, Alomomola, Litleo, Morelull"]},
		{"ver":"1.12.23","date":"08.02.2023","change":["New Shinies: Frillish, Tapu Lele","Change raid bosses","Quests: Add Pikachu, Chansey, Luvdisc, Combee, Audino, Frillish, Alomomola, Litleo, Morelull"]},
		{"ver":"1.12.22","date":"06.02.2023","change":["Quests: Remove Voltorb, Hisuian Voltorb, Helioptile"]},
		{"ver":"1.12.21","date":"01.02.2023","change":["Quests: Add Oddish, Meowth, Bellsprout, Exeggutor, Lickitung, Weezing, Jynx, Snorlax, Gligar, Miltank, Skitty, Roselia, Feebas, Clamperl, Glameow, Petilil, Rufflet","Quests: Remove Clefairy, Jigglypuff, Flaafy, Marill, Mawile, Plusle, Minun, Buneary, Purrloin, Emolga, Dedenne, Togedemaru"]},
		{"ver":"1.12.20","date":"27.01.2023","change":["New Shiny: Helioptile","Quests: Add Voltorb, Hisuian Voltorb, Helioptile"]},
		{"ver":"1.12.19","date":"25.01.2023","change":["New Shiny: Tapu Koko","Change raid bosses"]},
		{"ver":"1.12.18","date":"23.01.2023","change":["Quests: Remove Paras, Chimchar, Combee, Tepig, Darumaka, Galarian Darumaka, Fennekin, Litten"]},
		{"ver":"1.12.17","date":"19.01.2023","change":["Quests: Add Paras, Chimchar, Combee, Tepig, Darumaka, Galarian Darumaka, Fennekin, Litten"]},
		{"ver":"1.12.16","date":"16.01.2023","change":["Quests: Remove Goomy"]},
		{"ver":"1.12.15","date":"10.01.2023","change":["New Shiny: Dedenne","Change raid bosses","Quests: Add Goomy"]},
		{"ver":"1.12.14","date":"07.01.2023","change":["New Shiny: Chespin"]},
		{"ver":"1.12.13","date":"01.01.2023","change":["Add support for Gen 9 Pokemon","Seperate Pokemon from main JSON","Change Raid bosses","Quests: Add Clefairy, Jigglypuff, Flaafy, Marill, Mawile, Plusle, Minun, Buneary, Purrloin, Emolga, Dedenne, Togedemaru","Quests: Remove Weedle, Alolan Rattata, Pikachu, Alolan Sandshrew, Machoke, Seel, Shellder, Scyther, Jynx, Sneasel, Swinub, Delibird, Poochyena, Wurmple, Meditite, Carvanha, Spheal, Glaceon, Cubchoo, Crabrawler"]},
		{"ver":"1.12.12","date":"24.12.2022","change":["New Shiny: Hisuian Avalugg"]},
		{"ver":"1.12.11","date":"23.12.2022","change":["Quests: Add Alolan Sandshrew, Cubchoo","Quests: Remove Alolan Vulpix, Stantler","Add January raid schedule"]},
		{"ver":"1.12.10","date":"15.12.2022","change":["New Shinies: Glalie, Bergmite","Quests: Add Pikachu, Alolan Vulpix, Seel, Jynx, Stantler, Glaceon, Crabrawler"]},
		{"ver":"1.12.9","date":"11.12.2022","change":["Quests: Remove Galarian Farfetch'd, Hitmonlee, Hitmonchan, Hitmontop"]},
		{"ver":"1.12.8","date":"06.12.2022","change":["Quests: Add Galarian Farfetch'd, Hitmonlee, Hitmonchan, Hitmontop"]},
		{"ver":"1.12.7","date":"03.12.2022","change":["New Shinies: Sceptile, Blaziken, Swampert"]},
		{"ver":"1.12.6","date":"02.12.2022","change":["New Shinies: Galarian Mr. Mime, Castform (Sunny), Castform (Snowy)","Quests: Add Weedle, Alolan Rattata, Machoke, Shellder, Scyther, Sneasel, Swinub, Delibird, Poochyena, Wurmple, Meditite, Carvanha, Spheal, Cottonee, Vanillite, Cryogonal","Quests: Remove Kakuna, Alolan Vulpix, Growlithe, Kadabra, Weepinbell, Hisuian Voltorb, Goldeen, Ledyba, Octillery, Trapinch, Corphish, Combee, Darumaka, Joltik, Dedenne"]},
		{"ver":"1.12.5","date":"28.11.2022","change":["Add Raid schedule for December","Quests: Remove Staryu"]},
		{"ver":"1.12.4","date":"25.11.2022","change":['Add new gym: "Mercedes"','Remove gym: "Hausmalerei"']},
		{"ver":"1.12.3","date":"23.11.2022","change":["Adjust Raids for Ultra Beast Arrival","Quests: Add Staryu"]},
		{"ver":"1.12.2","date":"18.11.2022","change":["New Shiny: Purrloin","Quests: Remove Exeggcute, Cherubi, Swirlix, Mysterious Component"]},
		{"ver":"1.12.1","date":"14.11.2022","change":["New Shiny: Pawniard","Quests: Add Mysterious Component"]},
		{"ver":"1.12","date":"12.11.2022","change":["Add Share button to support other messengers"]},
		{"ver":"1.11.41","date":"09.11.2022","change":["New Shiny: Munchlax","Quests: Add Exeggcute, Cherubi, Swirlix"]},
		{"ver":"1.11.40","date":"08.11.2022","change":["Change Raid bosses (Debut of Guzzlord)"]},
		{"ver":"1.11.39","date":"02.11.2022","change":["Quests: Remove Cubone, Houndoom, Duskull, Roselia, Litwick"]},
		{"ver":"1.11.38","date":"02.11.2022","change":["Quests: Add Kakuna, Alolan Vulpix, Growlithe, Kadabra, Weepinbell, Hisuian Voltorb, Goldeen, Ledyba, Octillery, Trapinch, Corphish, Combee, Darumaka, Dedenne","Quests: Remove Beedrill, Ekans, Zubat, Gloom, Gastly, Haunter, Ariados, Misdreavus, Teddiursa, Houndour, Poochyena, Shuppet, Drifloon, Woobat, Inkay, Phantump"]},
		{"ver":"1.11.37","date":"01.11.2022","change":["Add November raids","Quests: Add Cubone, Houndoom, Roselia, Litwick","Quests: Remove Pikachu, Yamask, Galarian Yamask, Phantump"]},
		{"ver":"1.11.36","date":"27.10.2022","change":["New Shiny: Pumpkaboo","Change Raid Bosses (Halloween 2022 - Part II)","Quests: Add Pikachu"]},
		{"ver":"1.11.35","date":"20.10.2022","change":["New Shinies: Banette, Finneon, Galarian Yamask, Noibat","Change Raid Bosses (Halloween 2022)","Quests: Add Duskull, Yamask, Galarian Yamask, Phantump"]},
		{"ver":"1.11.34","date":"17.10.2022","change":["Quests: Remove Galarian Ponyta, Electabuzz, Magmar, Chinchou, Blitzle, Dedenne, Morelull"]},
		{"ver":"1.11.33","date":"15.10.2022","change":["New Shiny: Litwick","Update raid schedule wirh new Elite Raids"]},
		{"ver":"1.11.32","date":"14.10.2022","change":["Quests: Add Galarian Ponyta, Electabuzz, Magmar, Chinchou, Blitzle, Dedenne, Morelull"]},
		{"ver":"1.11.31","date":"08.10.2022","change":["New Shiny: Xerneas","Change Raid Bosses (Shiny Xerneas Debut)","Adjusted raids since Niantic messed up again"]},
		{"ver":"1.11.30","date":"04.10.2022","change":["Quests: Remove Skitty, Glameow, Croagunk, Blitzle, Furfrou, Mareanie"]},
		{"ver":"1.11.29","date":"02.10.2022","change":["New Shiny: Shedinja","Quests: Add Beedrill, Ekans, Zubat, Gloom, Gastly, Haunter, Ariados, Misdreavus, Teddiursa, Houndour, Poochyena, Shuppet, Drifloon, Woobat, Inkay, Phantump","Quests: Remove Pikachu, Alolan Raichu, Kadabra, Voltorb, Electabuzz, Chinchou, Mareep, Wobbuffet, Electrike, Plusle, Minun, Baltoy, Bronzor, Joltik, Dedenne"]},
		{"ver":"1.11.28","date":"27.09.2022","change":["New Shinies: Furfrou, Yveltal","Change Raid Bosses (Fashion Week 2022)","Quests: Add Skitty, Glameow, Croagunk, Blitzle, Furfrou, Mareanie"]},
		{"ver":"1.11.27","date":"23.09.2022","change":["New Shiny: Spritzee"]},
		{"ver":"1.11.26","date":"21.09.2022","change":["Quests: Remove Magnemite, Pineco, Nosepass, Drilbur, Ferroseed, Togedemaru"]},
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

var hidden = 1;


function init() {
	// Change Covid message to maintenance message
    var timenow = new Date().getTime()
	if (timenow > 1704063600000 && timenow < 1704150000000) {
		$('#covid').attr("class","alert alert-success alert-dismissible fade show");
		$('#covid > strong').html("Happy New Year!");
	    $('#covid').removeAttr("hidden");
	}


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
		txt += '<optgroup id="t3" label="4er"><option ';
		if (t3 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="4er" style="font-style:italic">4er Ei</option>';
		raid_de.push("4er Ei");
		raid_en.push("Tier 4 Egg");
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
		txt += '<optgroup id="t2" label="Spezial-Raids"><option ';
		if (t2 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="2er" style="font-style:italic">Spezial-Raid Ei</option>';
		raid_de.push("Spezial-Raid Ei");
		raid_en.push("Special Raid Egg");
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
		txt += '<optgroup id="t1" label="Dynamax">';
		txt += '<option ';
		if (t1 >= 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="1er" style="font-style:italic">Gigadynamax</option>';
		raid_de.push("Gigadynamax");
		raid_en.push("Gigantamax"); 
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

	if (t2index == 0) {
		document.getElementById("remote").disabled = true;
		document.getElementById("remote").placeholder = "Kein Fernraid möglich! / No remote raid possible!"; 
		remoteenabled = 0;
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
  
  var text2 = text.replace(/<br>/g,"\r\n");
  text2 = text2.replace(/<b>/g,"*");
  text2 = text2.replace(/<\/b>/g,"*");
  text2 = text2.replace(/<i>/g,"_");
  text2 = text2.replace(/<\/i>/g,"_");
 
  shareData = {
	text: text2,
	};
  
  var n = encodeURIComponent(text2);
  $("#txt_button").attr("onclick", "window.open('https://api.whatsapp.com/send?text=" + n + "')");
  
  // n = n.replace(/\*/g,"**");
  // n = n.replace("%0A","&text=");
 $("#txt_button2").attr("onclick", "share()"); 

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
	if (remoteenabled == 1 && ind >= t2index && ind <= (t2index+t2)) {
		document.getElementById("remote").disabled = true;
		document.getElementById("remote").placeholder = "Kein Fernraid möglich! / No remote raid possible!"; 
		remoteenabled = 0;
	} else if (remoteenabled == 0 && (ind < t2index || ind > (t2index+t2))) {
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

function hideGBL() {
	if (document.getElementById("hide_gbl").checked) {
		$("#events div[style='background:#f5e6ff']").attr("style", function(i, origValue){return origValue + "; display: none;"});
	} else {
		$("#events div[style='background:#f5e6ff; display: none;']").attr("style", function(i, origValue){return origValue.substr(0,origValue.length-16)});
	}
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

function share() {
	try {
		navigator.share(shareData);
	} catch {
		navigator.clipboard.writeText(shareData.text);
		txt_de[21] = "Raid in Zwischenablage kopiert!";
		txt_en[21] = "Raid copied to clipboard!";
		document.getElementById("txt_clip_copy").innerHTML = eval("txt_" + getLang() + "[21];");
	}
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
