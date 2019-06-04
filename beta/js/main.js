var t5multi = 0;
var t4index = 0;
var t3index = 0;

var txtid = ["txt_beta","txt_mainlink","txt_lang","txt_gym","txt_hatch","txt_start","txt_player","txt_instr","txt_button","txt_multi","txt_chgym","txt_cre_close","txt_cl_close","txt_boq_intro","txt_boq_generate"];

var txt_de = ["Achtung, dies ist die Beta Seite. Funktionen sind eventuell beeinträchtigt und fehlerhaft.",
"Zur Hauptseite",
"Sprache:",
"Arena:",
"Schlüpfzeit:",
"Startzeit:",
"Teilnehmer:",
'Drücke auf "Start!", überprüfe deine Angaben und drücke dann auf "In WhatsApp posten".<br>',
"In WhatsApp posten",
'Um einen Multiraid zu posten, ändere jetzt die Angaben oben für den nächsten Raid und drücke dann auf "Multiraid!". Wiederhole dies, bis alle Raids eingetragen sind.<br>',
"Wähle eine Arena aus.",
"Schließen",
"Schließen",
'Auf dieser Seite kannst du für <a href="https://www.bookofquests.de/">Book of Quests</a> einen Link erstellen, bei dem nur bestimmte Pokémon/Items auf der Karte angezeigt werden. Klicke dazu alle gewünschten Pokémon/Items an und drücke dann auf "Link erstellen!".<br>Um einen Negativfilter zu erstellen, klicke das Pokémon/Item zweimal an.', 
"Link erstellen!"
];

var txt_en = ["Attention, you're currently on the beta page. Functionality might be compromised and bugged.",
"To the main site",
"Language:",
"Gym:",
"Hatch time:",
"Start time:",
"Participants:",
'Press "Start!", check your data and then press "Post in WhatsApp".<br>',
"Post in WhatsApp",
'To post a Multiraid, change the data above for the next raid and then press "Multiraid!". Repeat until all raids have been added.<br>',
"Choose a gym.",
"Close",
"Close",
'On this site you can generate a link to <a href="https://www.bookofquests.de/">Book of Quests</a>, which will only show certain Pokémon/items on the map. Click all the Pokémon/items you want to see and then press "Generate Link!".<br>Click a Pokémon/item twice to generate a negative filter.',
"Generate Link!"
];

var hatchwarn = 0;
var startwarn = 0;
var raidwarn = 0;
var tg_warn = 0;

var warn_de =["",
"Raids schlüpfen nicht vor 6 Uhr.",
"Raids schlüpfen nicht nach 22:45 Uhr.",
"Dieser Raid ist bereits abgelaufen.",
"Die Startzeit kann nicht in der Vergangenheit liegen.",
"Die Startzeit muss innerhalb von 45 Minuten nach der Schlüpfzeit sein.",
"Der Raidboss hat weniger als 5 Minuten Restzeit bei dieser Startzeit.",
"Die Startzeit kann nicht vor der Schlüpfzeit sein.",
"Du hast die maximale Anzahl an Raids für einen Multiraid erreicht.",
"Bitte wähle eine Arena aus.",
"Die Schlüpfzeit kann nicht mehr als eine Stunde in der Zukunft liegen.",
"Bitte geb eine Uhrzeit ein.",
'Das 4er Ei ist noch nicht ausgeschlüpft, bitte wähle bei Raid "4er Ei" aus.',
'Das 5er Ei ist noch nicht ausgeschlüpft, bitte wähle bei Raid "5er Ei" aus.',
"Fehler beim Einlesen der Daten",
"Bitte geb eine passende Startzeit ein."
];

var warn_en =["",
"Raids do not hatch before 6:00.",
"Raids do not hatch after 22:45.",
"This raid has already expired.",
"The start time cannot be in the past.",
"The start time has to be within 45 minutes after the hatch time.",
"There will be less than 5 minutes remaining at this start time.",
"You cannot start a raid before it hatches.",
"You have reached the maximum amount of raids for a multiraid.",
"Please choose a gym.",
"The hatch time must be within 1 hour from now.",
"Please enter a time.",
'The Tier 4 egg has not hatched yet, so please choose "Tier 4 egg" as raid.',
'The Tier 5 egg has not hatched yet, so please choose "Tier 5 egg" as raid.',
"Failed to parse the input",
"Please enter a valid start time."
];

var multi = 0;

var gymjson = {
"gyms": [
{"value":"1892 Historisches Gebäude","token":"historisches haus","map":"https://goo.gl/maps/LJthotdr7b72"},
{"value":"AEG Beamtentor","map":"https://goo.gl/maps/pCd3BJgke8B2"},
{"value":"Amtsgericht Wedding","ex":true,"map":"https://goo.gl/maps/q79rW3P5iz82"},
{"value":"Bahnhof Humboldthain","token":"s-bahnhof","map":"https://goo.gl/maps/NoMxjQmX8Yz"},
{"value":"Bahnsteig S-Bahnhof Gesundbrunnen","map":"https://goo.gl/maps/P6fLg6nSaKM2"},
{"value":"Balance on the Globe","tg":"Balance On The Globe","map":"https://goo.gl/maps/bM2QWrCkDhq"},
{"value":"Berliner Mauer S Wollankstraße","token":"s-bahnhof","map":"https://goo.gl/maps/7ggyACh3c7y"},
{"value":"Birkenmural","map":"https://goo.gl/maps/LUjPLZgELHR2"},
{"value":"Bornholmer Straße Border Crossing","map":"https://goo.gl/maps/borFEx1Zp3D2"},
{"value":"Bösebrücke Bornholmer Straße","map":"https://goo.gl/maps/Fkb2uqJf8kJ2"},
{"value":"Brunnen DRK","tg":"Brunnen","map":"https://goo.gl/maps/WqegcLtthPx"},
{"value":"Brunnenstraße","token":"u-bahnhof voltastraße","map":"https://goo.gl/maps/QEN9FksYAUR2"},
{"value":"Bunker Humboldthain","map":"https://goo.gl/maps/Q5xj3TTdQfR2"},
{"value":"Caritas Berlin","map":"https://goo.gl/maps/hETMiMPwxyo"},
{"value":"Drei-Säulen-Brunnen","map":"https://goo.gl/maps/BD6HAd3WwAC2"},
{"value":"Eingangstor St. Elisabeth","token":"friedhof kirchhof cemetery graveyard","map":"https://goo.gl/maps/6WQqtbYTLFD2"},
{"value":"Ente","ex":true,"token":"🦆","map":"https://goo.gl/maps/9BhrrYtz8432"},
{"value":"Ernst Reuter Büste","map":"https://goo.gl/maps/c3bK2hVWqy32"},
{"value":"Ev. Stephanus Kirche","map":"https://goo.gl/maps/Yxwu2ubRmm52"},
{"value":"Gedenkstein Opfer der Berliner Mauer","map":"https://goo.gl/maps/vKCJtW7CXjm"},
{"value":"Gewachsen auf Beton Mural","token":"u-bahnhof pankstraße","map":"https://goo.gl/maps/8MVUihQXCQ82"},
{"value":"Haus Graffiti","map":"https://goo.gl/maps/NJWvyGY1xN22"},
{"value":"Hausmalerei","map":"https://goo.gl/maps/wJXuVvpzvTv"},
{"value":"Hauswächter","map":"https://goo.gl/maps/Yv9g8aRw9S72"},
{"value":"Hippo Fountain","ex":true,"map":"https://goo.gl/maps/zRQmhYSnYTG2"},
{"value":"Humboldtpark","map":"https://goo.gl/maps/L6gci4KrmRM2"},
{"value":"Jungfräulich Maria St.","tg":"jungfräulich Maria St.","token":"sankt petrus bellermannstraße","map":"https://goo.gl/maps/4qMqQB4rPXG2"},
{"value":"Jux und Tollerei","map":"https://goo.gl/maps/vLZcbgbGXrD2"},
{"value":"Kamel","ex":true,"token":"🐫 🐪","map":"https://goo.gl/maps/xCWVtJhqw1r"},
{"value":"Kulturverein Christiana","map":"https://goo.gl/maps/Mks22S8syUn"},
{"value":"Mother Statue","map":"https://goo.gl/maps/obrXpaCe8Kp"},
{"value":"Phantom der Lichtburg","map":"https://goo.gl/maps/SrWT2D8UXxy6Y1XQ6"},
{"value":"Portal zur Kaiser Wilhelm und Augusta Stiftung","tg":"Portal zur Kaiser Wilhelm Und Augusta Stiftung","map":"https://goo.gl/maps/Z132sxwCnHE2"},
{"value":"Rosengarten am Humboldthain","tg":"Rosengarten am Humboldhain","map":"https://goo.gl/maps/uuFsiJBmDp72"},
{"value":"S-Bahnhof Bornholmer Straße","map":"https://goo.gl/maps/fTpjjxxPXbK2"},
{"value":"Shadow People","map":"https://goo.gl/maps/PzqU2mtenL42"},
{"value":"Spinnennetz Spielplatz","token":"🕸️","map":"https://goo.gl/maps/vKtfoyDAsoS2"},
{"value":"Springbrunnen am Rathaus","tg":"Springbrunnen Am Rathaus","map":"https://goo.gl/maps/j5WL5s81k2K2"},
{"value":"St. Sebastian-Kirche","ex":true,"map":"https://goo.gl/maps/za2Fq6XPC5t"},
{"value":"Stolpersteine Georg und Rudolf Juliusburger","tg":"Stolpersteine Georg Und Rudolf Juliusburger","token":"jüdisches krankenhaus jewish hospital","map":"https://goo.gl/maps/kPsKT4sGpPK2"},
{"value":"Stone Snake","token":"🐍","map":"https://goo.gl/maps/1vVp7mPAtzH2"},
{"value":"Swinemünder Brücke","map":"https://goo.gl/maps/hH2WCCHeLwK2"},
{"value":"The Real Old Mechanical Door","map":"https://goo.gl/maps/WvKP2eCWdu12"},
{"value":"U-Bahnhof Osloer Straße","tg":"U-Bahnhof Osloer Strasse","map":"https://goo.gl/maps/67rcURgu1Y82"},
{"value":"Vergessene Brücke","map":"https://goo.gl/maps/NTR2AcNt6pp"},
{"value":"Wyndham Garden Entrance Relief","token":"hotel","map":"https://goo.gl/maps/o2XreJkiJTx"},
{"value":"Zwillingsstatue","ex":true,"map":"https://goo.gl/maps/q1rctADEE8q"}
]};

var raid_de = [];
var raid_en = [];
var tg_gymedit = [];
var tg_gymnew = [];

var pokemon = [
{"dex":1,"name":"Bisasam","en":"Bulbasaur","getshiny":true},
{"dex":2,"name":"Bisaknosp","en":"Ivysaur","evolved":true},
{"dex":3,"name":"Bisaflor","en":"Venusaur","evolved":true},
{"dex":4,"name":"Glumanda","en":"Charmander","getshiny":true},
{"dex":5,"name":"Glutexo","en":"Charmeleon","evolved":true},
{"dex":6,"name":"Glurak","en":"Charizard","evolved":true},
{"dex":7,"name":"Schiggy","en":"Squirtle","getshiny":true},
{"dex":8,"name":"Schillok","en":"Wartortle","evolved":true},
{"dex":9,"name":"Turtok","en":"Blastoise","evolved":true},
{"dex":10,"name":"Raupy","en":"Caterpie","getshiny":true},
{"dex":11,"name":"Safcon","en":"Metapod","evolved":true},
{"dex":12,"name":"Smettbo","en":"Butterfree","evolved":true},
{"dex":13,"name":"Hornliu","en":"Weedle"},
{"dex":14,"name":"Kokuna","en":"Kakuna","evolved":true},
{"dex":15,"name":"Bibor","en":"Beedrill","evolved":true},
{"dex":16,"name":"Taubsi","en":"Pidgey","getshiny":true},
{"dex":17,"name":"Tauboga","en":"Pidgeotto","evolved":true},
{"dex":18,"name":"Tauboss","en":"Pidgeot","evolved":true},
{"dex":19,"name":"Rattfratz","en":"Rattata","getshiny":true},
{"dex":"19A","name":"Alola-Rattfratz","en":"Alolan Rattata","alolan":true},
{"dex":20,"name":"Rattikarl","en":"Raticate","evolved":true},
{"dex":"20A","name":"Alola-Rattikarl","en":"Alolan Raticate","alolan":true,"evolved":true},
{"dex":21,"name":"Habitak","en":"Spearow"},
{"dex":22,"name":"Ibitak","en":"Fearow","evolved":true},
{"dex":23,"name":"Rettan","en":"Ekans"},
{"dex":24,"name":"Arbok","evolved":true},
{"dex":25,"name":"Pikachu","getshiny":true},
{"dex":26,"name":"Raichu","evolved":true},
{"dex":"26A","name":"Alola-Raichu","en":"Alolan Raichu","alolan":true,"evolved":true,"getshiny":true},
{"dex":27,"name":"Sandan","en":"Sandshrew","getshiny":true},
{"dex":"27A","name":"Alola-Sandan","en":"Alolan Sandshrew","alolan":true},
{"dex":28,"name":"Sandamer","en":"Sandslash","evolved":true},
{"dex":"28A","name":"Alola-Sandamer","en":"Alolan Sandslash","alolan":true,"evolved":true},
{"dex":29,"name":"Nidoran♀","getshiny":true},
{"dex":30,"name":"Nidorina","evolved":true},
{"dex":31,"name":"Nidoqueen","evolved":true},
{"dex":32,"name":"Nidoran♂"},
{"dex":33,"name":"Nidorino","evolved":true},
{"dex":34,"name":"Nidoking","evolved":true},
{"dex":35,"name":"Piepi","en":"Clefairy"},
{"dex":36,"name":"Pixi","en":"Clefable","evolved":true},
{"dex":37,"name":"Vulpix"},
{"dex":"37A","name":"Alola-Vulpix","en":"Alolan Vulpix","alolan":true},
{"dex":38,"name":"Vulnona","en":"Ninetales","evolved":true},
{"dex":"38A","name":"Alola-Vulnona","en":"Alolan Ninetales","alolan":true,"evolved":true},
{"dex":39,"name":"Pummeluff","en":"Jigglypuff"},
{"dex":40,"name":"Knuddeluff","en":"Wigglytuff","evolved":true},
{"dex":41,"name":"Zubat"},
{"dex":42,"name":"Golbat","evolved":true},
{"dex":43,"name":"Myrapla","en":"Oddish"},
{"dex":44,"name":"Duflor","en":"Gloom","evolved":true},
{"dex":45,"name":"Giflor","en":"Vileplume","evolved":true},
{"dex":46,"name":"Paras"},
{"dex":47,"name":"Parasek","en":"Parasect","evolved":true},
{"dex":48,"name":"Bluzuk","en":"Venonat"},
{"dex":49,"name":"Omot","en":"Venomoth","evolved":true},
{"dex":50,"name":"Digda","en":"Diglett","getshiny":true},
{"dex":"50A","name":"Alola-Digda","en":"Alolan Diglett","alolan":true},
{"dex":51,"name":"Digdri","en":"Dugtrio","evolved":true},
{"dex":"51A","name":"Alola-Digdri","en":"Alolan Dugtrio","alolan":true,"evolved":true},
{"dex":52,"name":"Mauzi","en":"Meowth"},
{"dex":"52A","name":"Alola-Mauzi","en":"Alolan Meowth","alolan":true},
{"dex":53,"name":"Snobilikat","en":"Persian","evolved":true},
{"dex":"53A","name":"Alola-Snobilikat","en":"Alolan Persian","alolan":true,"evolved":true},
{"dex":54,"name":"Enton","en":"Psyduck","getshiny":true},
{"dex":55,"name":"Entoron","en":"Golduck","evolved":true},
{"dex":56,"name":"Menki","en":"Mankey","getshiny":true},
{"dex":57,"name":"Rasaff","en":"Primeape","evolved":true},
{"dex":58,"name":"Fukano","en":"Growlithe","getshiny":true},
{"dex":59,"name":"Arkani","en":"Arcanine","evolved":true},
{"dex":60,"name":"Quapsel","en":"Poliwag"},
{"dex":61,"name":"Quaputzi","en":"Poliwhirl","evolved":true},
{"dex":62,"name":"Quappo","en":"Poliwrath","evolved":true},
{"dex":63,"name":"Abra"},
{"dex":64,"name":"Kadabra","evolved":true},
{"dex":65,"name":"Simsala","en":"Alakazam","evolved":true},
{"dex":66,"name":"Machollo","en":"Machop","getshiny":true},
{"dex":67,"name":"Maschock","en":"Machoke","evolved":true},
{"dex":68,"name":"Machomei","en":"Machamp","evolved":true},
{"dex":69,"name":"Knofensa","en":"Bellsprout"},
{"dex":70,"name":"Ultrigaria","en":"Weepinbell","evolved":true},
{"dex":71,"name":"Sarzenia","en":"Victreebel","evolved":true},
{"dex":72,"name":"Tentacha","en":"Tentacool"},
{"dex":73,"name":"Tentoxa","en":"Tentacruel","evolved":true},
{"dex":74,"name":"Kleinstein","en":"Geodude","getshiny":true},
{"dex":"74A","name":"Alola-Kleinstein","en":"Alolan Geodude","alolan":true},
{"dex":75,"name":"Georok","en":"Graveler","evolved":true},
{"dex":"75A","name":"Alola-Georok","en":"Alolan Graveler","alolan":true,"evolved":true},
{"dex":76,"name":"Geowaz","en":"Golem","evolved":true},
{"dex":"76A","name":"Alola-Geowaz","en":"Alolan Golem","alolan":true,"evolved":true},
{"dex":77,"name":"Ponita","en":"Ponyta","getshiny":true},
{"dex":78,"name":"Gallopa","en":"Rapidash","evolved":true},
{"dex":79,"name":"Flegmon","en":"Slowpoke"},
{"dex":80,"name":"Lahmus","en":"Slowbro","evolved":true},
{"dex":81,"name":"Magnetilo","en":"Magnemite","getshiny":true},
{"dex":82,"name":"Magneton","evolved":true},
{"dex":83,"name":"Porenta","en":"Farfetch'd","regional":true},
{"dex":84,"name":"Dodu","en":"Doduo"},
{"dex":85,"name":"Dodri","en":"Dodrio","evolved":true},
{"dex":86,"name":"Jurob","en":"Seel","getshiny":true},
{"dex":87,"name":"Jugong","en":"Dewgong","evolved":true},
{"dex":88,"name":"Sleima","en":"Grimer","getshiny":true},
{"dex":"88A","name":"Alola-Sleima","en":"Alolan Grimer","alolan":true},
{"dex":89,"name":"Sleimok","en":"Muk","evolved":true},
{"dex":"89A","name":"Alola-Sleimok","en":"Alolan Muk","alolan":true,"evolved":true},
{"dex":90,"name":"Muschas","en":"Shellder","getshiny":true},
{"dex":91,"name":"Austos","en":"Cloyster","evolved":true},
{"dex":92,"name":"Nebulak","en":"Gastly","getshiny":true},
{"dex":93,"name":"Alpollo","en":"Haunter","evolved":true},
{"dex":94,"name":"Gengar","evolved":true},
{"dex":95,"name":"Onix","getshiny":true},
{"dex":96,"name":"Traumato","en":"Drowzee","getshiny":true},
{"dex":97,"name":"Hypno","evolved":true},
{"dex":98,"name":"Krabby","getshiny":true},
{"dex":99,"name":"Kingler","evolved":true},
{"dex":100,"name":"Voltobal","en":"Voltorb"},
{"dex":101,"name":"Lektrobal","en":"Electrode","evolved":true},
{"dex":102,"name":"Owei","en":"Exeggcute"},
{"dex":103,"name":"Kokowei","en":"Exeggutor","evolved":true},
{"dex":"103A","name":"Alola-Kokowei","en":"Alolan Exeggutor","alolan":true,"evolved":true},
{"dex":104,"name":"Tragosso","en":"Cubone","getshiny":true},
{"dex":105,"name":"Knogga","en":"Marowak","evolved":true},
{"dex":"105A","name":"Alola-Knogga","en":"Alolan Marowak","alolan":true,"evolved":true,"getshiny":true},
{"dex":106,"name":"Kicklee","en":"Hitmonlee"},
{"dex":107,"name":"Nockchan","en":"Hitmonchan"},
{"dex":108,"name":"Schlurp","en":"Lickitung"},
{"dex":109,"name":"Smogon","en":"Koffing"},
{"dex":110,"name":"Smogmog","en":"Weezing","evolved":true},
{"dex":111,"name":"Rihorn","en":"Rhyhorn"},
{"dex":112,"name":"Rizeros","en":"Rhydon","evolved":true},
{"dex":113,"name":"Chaneira","en":"Chansey"},
{"dex":114,"name":"Tangela"},
{"dex":115,"name":"Kangama","en":"Kangaskhan","regional":true},
{"dex":116,"name":"Seeper","en":"Horsea"},
{"dex":117,"name":"Seedra","en":"Seadra","evolved":true},
{"dex":118,"name":"Goldini","en":"Goldeen"},
{"dex":119,"name":"Golking","en":"Seaking","evolved":true},
{"dex":120,"name":"Sterndu","en":"Staryu"},
{"dex":121,"name":"Starmie","evolved":true},
{"dex":122,"name":"Pantimos","en":"Mr. Mime","regional":true},
{"dex":123,"name":"Sichlor","en":"Scyther","getshiny":true},
{"dex":124,"name":"Rossana","en":"Jynx"},
{"dex":125,"name":"Elektek","en":"Electabuzz"},
{"dex":126,"name":"Magmar"},
{"dex":127,"name":"Pinsir","getshiny":true},
{"dex":128,"name":"Tauros","regional":true},
{"dex":129,"name":"Karpador","en":"Magikarp","getshiny":true},
{"dex":130,"name":"Garados","en":"Gyarados","evolved":true},
{"dex":131,"name":"Lapras","getshiny":true},
{"dex":132,"name":"Ditto"},
{"dex":133,"name":"Evoli","en":"Eevee","getshiny":true},
{"dex":134,"name":"Aquana","en":"Vaporeon","evolved":true},
{"dex":135,"name":"Blitza","en":"Jolteon","evolved":true},
{"dex":136,"name":"Flamara","en":"Flareon","evolved":true},
{"dex":137,"name":"Porygon"},
{"dex":138,"name":"Amonitas","en":"Omanyte","getshiny":true},
{"dex":139,"name":"Amoroso","en":"Omastar","evolved":true},
{"dex":140,"name":"Kabuto","getshiny":true},
{"dex":141,"name":"Kabutops","evolved":true},
{"dex":142,"name":"Aerodactyl","getshiny":true},
{"dex":143,"name":"Relaxo","en":"Snorlax"},
{"dex":144,"name":"Arktos","en":"Articuno","legendary":true,"getshiny":true},
{"dex":145,"name":"Zapdos","legendary":true,"getshiny":true},
{"dex":146,"name":"Lavados","en":"Moltres","legendary":true,"getshiny":true},
{"dex":147,"name":"Dratini","getshiny":true},
{"dex":148,"name":"Dragonir","en":"Dragonair","evolved":true},
{"dex":149,"name":"Dragoran","en":"Dragonite","evolved":true},
{"dex":150,"name":"Mewtu","en":"Mewtwo","legendary":true},
{"dex":151,"name":"Mew","mythical":true},
{"dex":152,"name":"Endivie","en":"Chikorita","getshiny":true},
{"dex":153,"name":"Lorblatt","en":"Bayleef","evolved":true},
{"dex":154,"name":"Meganie","en":"Meganium","evolved":true},
{"dex":155,"name":"Feurigel","en":"Cyndaquil","getshiny":true},
{"dex":156,"name":"Igelavar","en":"Quilava","evolved":true},
{"dex":157,"name":"Tornupto","en":"Typhlosion","evolved":true},
{"dex":158,"name":"Karnimani","en":"Totodile","getshiny":true},
{"dex":159,"name":"Tyracroc","en":"Croconaw","evolved":true},
{"dex":160,"name":"Impergator","en":"Feraligatr","evolved":true},
{"dex":161,"name":"Wiesor","en":"Sentret"},
{"dex":162,"name":"Wiesenior","en":"Furret","evolved":true},
{"dex":163,"name":"Hoothoot"},
{"dex":164,"name":"Noctuh","en":"Noctowl","evolved":true},
{"dex":165,"name":"Ledyba"},
{"dex":166,"name":"Ledian","evolved":true},
{"dex":167,"name":"Webarak","en":"Spinarak"},
{"dex":168,"name":"Ariados","evolved":true},
{"dex":169,"name":"Iksbat","en":"Crobat","evolved":true},
{"dex":170,"name":"Lampi","en":"Chinchou"},
{"dex":171,"name":"Lanturn","evolved":true},
{"dex":172,"name":"Pichu","baby":true,"getshiny":true},
{"dex":173,"name":"Pii","en":"Cleffa","baby":true,"getshiny":true},
{"dex":174,"name":"Fluffeluff","en":"Igglybuff","baby":true,"getshiny":true},
{"dex":175,"name":"Togepi","baby":true,"getshiny":true},
{"dex":176,"name":"Togetic"},
{"dex":177,"name":"Natu","getshiny":true},
{"dex":178,"name":"Xatu","evolved":true},
{"dex":179,"name":"Voltilamm","en":"Mareep","getshiny":true},
{"dex":180,"name":"Waaty","en":"Flaaffy","evolved":true},
{"dex":181,"name":"Ampharos","evolved":true},
{"dex":182,"name":"Blubella","en":"Bellossom","evolved":true},
{"dex":183,"name":"Marill"},
{"dex":184,"name":"Azumarill","evolved":true},
{"dex":185,"name":"Mogelbaum","en":"Sudowoodo"},
{"dex":186,"name":"Quaxo","en":"Politoed","evolved":true},
{"dex":187,"name":"Hoppspross","en":"Hoppip"},
{"dex":188,"name":"Hubelupf","en":"Skiploom","evolved":true},
{"dex":189,"name":"Papungha","en":"Jumpluff","evolved":true},
{"dex":190,"name":"Griffel","en":"Aipom","getshiny":true},
{"dex":191,"name":"Sonnkern","en":"Sunkern","getshiny":true},
{"dex":192,"name":"Sonnflora","en":"Sunflora","evolved":true},
{"dex":193,"name":"Yanma"},
{"dex":194,"name":"Felino","en":"Wooper"},
{"dex":195,"name":"Morlord","en":"Quagsire","evolved":true},
{"dex":196,"name":"Psiana","en":"Espeon","evolved":true},
{"dex":197,"name":"Nachtara","en":"Umbreon","evolved":true},
{"dex":198,"name":"Kramurx","en":"Murkrow","getshiny":true},
{"dex":199,"name":"Laschoking","en":"Slowking","evolved":true},
{"dex":200,"name":"Traunfugil","en":"Misdreavus","getshiny":true},
{"dex":201,"name":"Icognito","en":"Unown"},
{"dex":202,"name":"Woingenau","en":"Wobbuffet"},
{"dex":203,"name":"Girafarig"},
{"dex":204,"name":"Tannza","en":"Pineco","getshiny":true},
{"dex":205,"name":"Forstellka","en":"Forretress","evolved":true},
{"dex":206,"name":"Dummisel","en":"Dunsparce"},
{"dex":207,"name":"Skorgla","en":"Gligar"},
{"dex":208,"name":"Stahlos","en":"Steelix","evolved":true},
{"dex":209,"name":"Snubbull","getshiny":true},
{"dex":210,"name":"Granbull","evolved":true},
{"dex":211,"name":"Baldorfish","en":"Quilfish"},
{"dex":212,"name":"Scherox","en":"Scizor","evolved":true},
{"dex":213,"name":"Pottrott","en":"Shuckle","getshiny":true},
{"dex":214,"name":"Skaraborn","en":"Heracross","regional":true},
{"dex":215,"name":"Sniebel","en":"Sneasel"},
{"dex":216,"name":"Teddiursa"},
{"dex":217,"name":"Ursaring","evolved":true},
{"dex":218,"name":"Schneckmag","en":"Slugma"},
{"dex":219,"name":"Magcargo","evolved":true},
{"dex":220,"name":"Quiekel","en":"Swinub","getshiny":true},
{"dex":221,"name":"Keifel","en":"Piloswine","evolved":true},
{"dex":222,"name":"Corasonn","en":"Corsola","regional":true},
{"dex":223,"name":"Remoraid"},
{"dex":224,"name":"Octillery","evolved":true},
{"dex":225,"name":"Botogel","en":"Delibird","getshiny":true},
{"dex":226,"name":"Mantax","en":"Mantine"},
{"dex":227,"name":"Panzaeron","en":"Skarmory"},
{"dex":228,"name":"Hunduster","en":"Houndour","getshiny":true},
{"dex":229,"name":"Hundemon","en":"Houndoom","evolved":true},
{"dex":230,"name":"Seedraking","en":"Kingdra","evolved":true},
{"dex":231,"name":"Phanpy"},
{"dex":232,"name":"Donphan","evolved":true},
{"dex":233,"name":"Porygon2","evolved":true},
{"dex":234,"name":"Damhirplex","en":"Stantler"},
{"dex":235,"name":"Farbeagle","en":"Smeargle"},
{"dex":236,"name":"Rabauz","en":"Tyrogue","baby":true},
{"dex":237,"name":"Kapoera","en":"Hitmontop"},
{"dex":238,"name":"Kussila","en":"Smoochum","baby":true,"getshiny":true},
{"dex":239,"name":"Elekid","baby":true,"getshiny":true},
{"dex":240,"name":"Magby","baby":true,"getshiny":true},
{"dex":241,"name":"Miltank"},
{"dex":242,"name":"Heiteira","en":"Blissey","evolved":true},
{"dex":243,"name":"Raikou","legendary":true},
{"dex":244,"name":"Entei","legendary":true},
{"dex":245,"name":"Suicune","legendary":true},
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
{"dex":258,"name":"Hydropi","en":"Mudkip"},
{"dex":259,"name":"Moorabbel","en":"Marshtomp","evolved":true},
{"dex":260,"name":"Sumpex","en":"Swampert","evolved":true},
{"dex":261,"name":"Fiffyen","en":"Poochyena","getshiny":true},
{"dex":262,"name":"Magnayen","en":"Mightyena","evolved":true},
{"dex":263,"name":"Zigzachs","en":"Zigzagoon","getshiny":true},
{"dex":264,"name":"Geradaks","en":"Linoone","evolved":true},
{"dex":265,"name":"Waumpel","en":"Wurmple"},
{"dex":266,"name":"Schaloko","en":"Silcoon","evolved":true},
{"dex":267,"name":"Papinella","en":"Beautifly","evolved":true},
{"dex":268,"name":"Panekon","en":"Cascoon","evolved":true},
{"dex":269,"name":"Pudox","en":"Dustox","evolved":true},
{"dex":270,"name":"Loturzel","en":"Lotad","getshiny":true},
{"dex":271,"name":"Lombrero","en":"Lombre","evolved":true},
{"dex":272,"name":"Kappalores","en":"Ludicolo","evolved":true},
{"dex":273,"name":"Samurzel","en":"Seedot"},
{"dex":274,"name":"Blanas","en":"Nuzleaf","evolved":true},
{"dex":275,"name":"Tengulist","en":"Shiftry","evolved":true},
{"dex":276,"name":"Schwalbini","en":"Taillow","getshiny":true},
{"dex":277,"name":"Schwalboss","en":"Swellow","evolved":true},
{"dex":278,"name":"Wingull","getshiny":true},
{"dex":279,"name":"Pelipper","evolved":true},
{"dex":280,"name":"Trasla","en":"Ralts"},
{"dex":281,"name":"Kirlia","evolved":true},
{"dex":282,"name":"Guardevoir","en":"Gardevoir","evolved":true},
{"dex":283,"name":"Gehweiher","en":"Surskit"},
{"dex":284,"name":"Maskeregen","en":"Masquerain","evolved":true},
{"dex":285,"name":"Knilz","en":"Shroomish"},
{"dex":286,"name":"Kapilz","en":"Breloom","evolved":true},
{"dex":287,"name":"Bummelz","en":"Slakoth"},
{"dex":288,"name":"Muntier","en":"Vigoroth","evolved":true},
{"dex":289,"name":"Letarking","en":"Slaking","evolved":true},
{"dex":290,"name":"Nincada"},
{"dex":291,"name":"Ninjask","evolved":true},
{"dex":292,"name":"Ninjatom","en":"Shedinja","evolved":true},
{"dex":293,"name":"Flurmel","en":"Whismur"},
{"dex":294,"name":"Krakeelo","en":"Loudred","evolved":true},
{"dex":295,"name":"Krawumms","en":"Exploud","evolved":true},
{"dex":296,"name":"Makuhita","getshiny":true},
{"dex":297,"name":"Hariyama","evolved":true},
{"dex":298,"name":"Azurill","baby":true,"getshiny":true},
{"dex":299,"name":"Nasgnet","en":"Nosepass"},
{"dex":300,"name":"Eneco","en":"Skitty"},
{"dex":301,"name":"Enecoro","en":"Delcatty","evolved":true},
{"dex":302,"name":"Zobiris","en":"Sableye","getshiny":true},
{"dex":303,"name":"Flunkifer","en":"Mawile","getshiny":true},
{"dex":304,"name":"Stollunior","en":"Aron","getshiny":true},
{"dex":305,"name":"Stollrak","en":"Lairon","evolved":true},
{"dex":306,"name":"Stolloss","en":"Aggron","evolved":true},
{"dex":307,"name":"Meditie","en":"Meditite","getshiny":true},
{"dex":308,"name":"Meditalis","en":"Medicham","evolved":true},
{"dex":309,"name":"Frizelbliz","en":"Electrike"},
{"dex":310,"name":"Voltenso","en":"Manectric","evolved":true},
{"dex":311,"name":"Plusle","getshiny":true},
{"dex":312,"name":"Minun","getshiny":true},
{"dex":313,"name":"Volbeat","regional":true},
{"dex":314,"name":"Illumise","regional":true},
{"dex":315,"name":"Roselia"},
{"dex":316,"name":"Schluppuck","en":"Gulpin"},
{"dex":317,"name":"Schlukwech","en":"Swalot","evolved":true},
{"dex":318,"name":"Kanivanha","en":"Carvanha"},
{"dex":319,"name":"Tohaido","en":"Sharpedo","evolved":true},
{"dex":320,"name":"Wailmer","getshiny":true},
{"dex":321,"name":"Wailord","evolved":true},
{"dex":322,"name":"Camaub","en":"Numel"},
{"dex":323,"name":"Camerupt","evolved":true},
{"dex":324,"name":"Qurtel","en":"Torkoal","regional":true},
{"dex":325,"name":"Spoink","getshiny":true},
{"dex":326,"name":"Groink","en":"Grumpig","evolved":true},
{"dex":327,"name":"Pandir","en":"Spinda"},
{"dex":328,"name":"Knacklion","en":"Trapinch"},
{"dex":329,"name":"Vibrava","evolved":true},
{"dex":330,"name":"Libelldra","en":"Flygon","evolved":true},
{"dex":331,"name":"Tuska","en":"Cacnea"},
{"dex":332,"name":"Noktuska","en":"Cacturne","evolved":true},
{"dex":333,"name":"Wablu","en":"Swablu","getshiny":true},
{"dex":334,"name":"Altaria","evolved":true},
{"dex":335,"name":"Sengo","en":"Zangoose","regional":true},
{"dex":336,"name":"Vipitis","en":"Seviper","regional":true},
{"dex":337,"name":"Lunastein","en":"Lunatone","regional":true,"getshiny":true},
{"dex":338,"name":"Sonnfel","en":"Solrock","regional":true,"getshiny":true},
{"dex":339,"name":"Schmerbe","en":"Barboach"},
{"dex":340,"name":"Welsar","en":"Whiscash","evolved":true},
{"dex":341,"name":"Krebscorps","en":"Corphish"},
{"dex":342,"name":"Krebutack","en":"Crawdaunt","evolved":true},
{"dex":343,"name":"Puppance","en":"Baltoy"},
{"dex":344,"name":"Lepumentas","en":"Claydol","evolved":true},
{"dex":345,"name":"Liliep","en":"Lileep","getshiny":true},
{"dex":346,"name":"Wielie","en":"Cradily","evolved":true},
{"dex":347,"name":"Anorith","getshiny":true},
{"dex":348,"name":"Armaldo","evolved":true},
{"dex":349,"name":"Barschwa","en":"Feebas","getshiny":true},
{"dex":350,"name":"Milotic","evolved":true},
{"dex":351,"name":"Formeo","en":"Castform","getshiny":true},
{"dex":"351I","name":"Formeo","de":"Formeo (Schneeform)","en":"Castform (Snowy Form)","evolved":true},
{"dex":"351R","name":"Formeo","de":"Formeo (Regenform)","en":"Castform (Rainy Form)","evolved":true},
{"dex":"351S","name":"Formeo","de":"Formeo (Sonnenform)","en":"Castform (Sunny Form)","evolved":true},
{"dex":352,"name":"Kecleon"},
{"dex":353,"name":"Shuppet","getshiny":true},
{"dex":354,"name":"Banette","evolved":true},
{"dex":355,"name":"Zwirrlicht","en":"Duskull","getshiny":true},
{"dex":356,"name":"Zwirrklop","en":"Dusclops","evolved":true},
{"dex":357,"name":"Tropius","regional":true},
{"dex":358,"name":"Palimpalim","en":"Chimecho"},
{"dex":359,"name":"Absol","getshiny":true},
{"dex":360,"name":"Isso","en":"Wynaut","baby":true,"getshiny":true},
{"dex":361,"name":"Schneppke","en":"Snorunt","getshiny":true},
{"dex":362,"name":"Firnontor","en":"Glalie","evolved":true},
{"dex":363,"name":"Seemops","en":"Spheal"},
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
{"dex":377,"name":"Regirock","legendary":true},
{"dex":378,"name":"Regice","legendary":true},
{"dex":379,"name":"Registeel","legendary":true},
{"dex":380,"name":"Latias","legendary":true,"getshiny":true},
{"dex":381,"name":"Latios","legendary":true,"getshiny":true},
{"dex":382,"name":"Kyogre","legendary":true,"getshiny":true},
{"dex":383,"name":"Groudon","legendary":true,"getshiny":true},
{"dex":384,"name":"Rayquaza","legendary":true},
{"dex":385,"name":"Jirachi","mythical":true},
{"dex":386,"name":"Deoxys","mythical":true},
{"dex":"386A","name":"Deoxys","de":"Deoxys (Angriffsform)","en":"Deoxys (Attack Forme)","mythical":true},
{"dex":"386D","name":"Deoxys","de":"Deoxys (Verteidigungsform)","en":"Deoxys (Defense Forme)","mythical":true},
{"dex":"386S","name":"Deoxys","de":"Deoxys (Initiativeform)","en":"Deoxys (Speed Forme)","mythical":true},
{"dex":387,"name":"Chelast","en":"Turtwig"},
{"dex":388,"name":"Chelcarain","en":"Grotle","evolved":true},
{"dex":389,"name":"Chelterrar","en":"Torterra","evolved":true},
{"dex":390,"name":"Panflam","en":"Chimchar"},
{"dex":391,"name":"Panpyro","en":"Monferno","evolved":true},
{"dex":392,"name":"Panferno","en":"Infernape","evolved":true},
{"dex":393,"name":"Plinfa","en":"Piplup"},
{"dex":394,"name":"Pliprin","en":"Prinplup","evolved":true},
{"dex":395,"name":"Impoleon","en":"Empoleon","evolved":true},
{"dex":396,"name":"Staralili","en":"Starly"},
{"dex":397,"name":"Staravia","evolved":true},
{"dex":398,"name":"Staraptor","evolved":true},
{"dex":399,"name":"Bidiza","en":"Bidoof"},
{"dex":400,"name":"Bidifas","en":"Bibarel","evolved":true},
{"dex":401,"name":"Zirpurze","en":"Kricketot"},
{"dex":402,"name":"Zirpeise","en":"Kricketune","evolved":true},
{"dex":403,"name":"Sheinux","en":"Shinx","getshiny":true},
{"dex":404,"name":"Luxio","evolved":true},
{"dex":405,"name":"Luxtra","en":"Luxray","evolved":true},
{"dex":406,"name":"Knospi","en":"Budew","baby":true,"getshiny":true},
{"dex":407,"name":"Roserade","evolved":true},
{"dex":408,"name":"Koknodon","en":"Cranidos"},
{"dex":409,"name":"Rameidon","en":"Rampardos","evolved":true},
{"dex":410,"name":"Schilterus","en":"Shieldon"},
{"dex":411,"name":"Bollterus","en":"Bastiodon","evolved":true},
{"dex":412,"name":"Burmy","de":"Burmy (Pflanzenumhang)","en":"Burmy (Plant Cloak)"},
{"dex":"412S","name":"Burmy","de":"Burmy (Sandumhang)","en":"Burmy (Sandy Cloak)"},
{"dex":"412T","name":"Burmy","de":"Burmy (Lumpenumhang)","en":"Burmy (Trash Cloak)"},
{"dex":413,"name":"Burmadame","de":"Burmadame (Pflanzenumhang)","en":"Wormadam (Plant Cloak)","evolved":true},
{"dex":"413S","name":"Burmadame","de":"Burmadame (Sandumhang)","en":"Wormadam (Sandy Cloak)","evolved":true},
{"dex":"413T","name":"Burmadame","de":"Burmadame (Lumpenumhang)","en":"Wormadam (Trash Cloak)","evolved":true},
{"dex":414,"name":"Moterpel","en":"Mothim","evolved":true},
{"dex":415,"name":"Wadribie","en":"Combee"},
{"dex":416,"name":"Honweisel","en":"Vespiquen","evolved":true},
{"dex":417,"name":"Pachirisu","regional":true},
{"dex":418,"name":"Bamelin","en":"Buizel"},
{"dex":419,"name":"Bojelin","en":"Floatzel","evolved":true},
{"dex":420,"name":"Kikugi","en":"Cherubi"},
{"dex":421,"name":"Kinoso","de":"Kinoso (Wolkenform)","en":"Cherrim (Overcast Form)","evolved":true},
{"dex":"421S","name":"Kinoso","de":"Kinoso (Sonnenform)","en":"Cherrim (Sunshine Form)","evolved":true},
{"dex":422,"name":"Schalellos","en":"Shellos"},
{"dex":423,"name":"Gastrodon","evolved":true},
{"dex":424,"name":"Ambidiffel","en":"Ambipom","evolved":true},
{"dex":425,"name":"Driftlon","en":"Drifloon","getshiny":true},
{"dex":426,"name":"Drifzepeli","en":"Drifblim","evolved":true},
{"dex":427,"name":"Haspiror","en":"Buneary","getshiny":true},
{"dex":428,"name":"Schlapor","en":"Lopunny","evolved":true},
{"dex":429,"name":"Traunmagil","en":"Mismagius","evolved":true},
{"dex":430,"name":"Kramshef","en":"Honchkrow","evolved":true},
{"dex":431,"name":"Charmian","en":"Glameow"},
{"dex":432,"name":"Shnurgarst","en":"Purugly","evolved":true},
{"dex":433,"name":"Klingplim","en":"Chingling","baby":true},
{"dex":434,"name":"Skunkapuh","en":"Stunky"},
{"dex":435,"name":"Skuntank","evolved":true},
{"dex":436,"name":"Bronzel","en":"Bronzor","getshiny":true},
{"dex":437,"name":"Bronzong","evolved":true},
{"dex":438,"name":"Mobai","en":"Bonsly","baby":true},
{"dex":439,"name":"Pantimimi","en":"Mime Jr.","baby":true,"regional":true},
{"dex":440,"name":"Wonneira","en":"Happiny","baby":true},
{"dex":441,"name":"Plaudagei","en":"Chatot","regional":true},
{"dex":442,"name":"Kryppuk","en":"Spiritomb"},
{"dex":443,"name":"Kaumalat","en":"Gible"},
{"dex":444,"name":"Knarksel","en":"Gabite","evolved":true},
{"dex":445,"name":"Knakrack","en":"Garchomp","evolved":true},
{"dex":446,"name":"Mampfaxo","en":"Munchlax","baby":true},
{"dex":447,"name":"Riolu","baby":true},
{"dex":448,"name":"Lucario"},
{"dex":449,"name":"Hippopotas"},
{"dex":450,"name":"Hippoterus","en":"Hippowdon","evolved":true},
{"dex":451,"name":"Pionskora","en":"Skorupi"},
{"dex":452,"name":"Piondragi","en":"Drapion","evolved":true},
{"dex":453,"name":"Glibunkel","en":"Croagunk"},
{"dex":454,"name":"Toxiquak","en":"Toxicroak","evolved":true},
{"dex":455,"name":"Venuflibis","en":"Carnivine","regional":true},
{"dex":456,"name":"Finneon"},
{"dex":457,"name":"Lumineon","evolved":true},
{"dex":458,"name":"Mantirps","en":"Mantyke","baby":true},
{"dex":459,"name":"Shnebedeck","en":"Snover"},
{"dex":460,"name":"Rexblisar","en":"Abomasnow","evolved":true},
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
{"dex":471,"name":"Glaziola","en":"Glaceon","evolved":true},
{"dex":472,"name":"Skorgro","en":"Gliscor","evolved":true},
{"dex":473,"name":"Mamutel","en":"Mamoswine","evolved":true},
{"dex":474,"name":"Porygon-Z","evolved":true},
{"dex":475,"name":"Galagladi","en":"Gallade","evolved":true},
{"dex":476,"name":"Voluminas","en":"Probopass","evolved":true},
{"dex":477,"name":"Zwirrfinst","en":"Dusknoir","evolved":true},
{"dex":478,"name":"Frosdedje","en":"Froslass","evolved":true},
{"dex":479,"name":"Rotom"},
{"dex":"479F","name":"Rotom","de":"Wirbel-Rotom","en":"Fan Rotom","legendary":true},
{"dex":"479H","name":"Rotom","de":"Hitze-Rotom","en":"Heat Rotom","legendary":true},
{"dex":"479I","name":"Rotom","de":"Frost-Rotom","en":"Frost Rotom","legendary":true},
{"dex":"479M","name":"Rotom","de":"Schneid-Rotom","en":"Mow Rotom","legendary":true},
{"dex":"479W","name":"Rotom","de":"Wasch-Rotom","en":"Wash Rotom","legendary":true},
{"dex":480,"name":"Selfe","en":"Uxie","legendary":true,"regional":true},
{"dex":481,"name":"Vesprit","en":"Mesprit","legendary":true,"regional":true},
{"dex":482,"name":"Tobutz","en":"Azelf","legendary":true,"regional":true},
{"dex":483,"name":"Dialga","legendary":true},
{"dex":484,"name":"Palkia","legendary":true},
{"dex":485,"name":"Heatran","legendary":true},
{"dex":486,"name":"Regigigas","legendary":true},
{"dex":487,"name":"Giratina","de":"Giratina (Wandelform)","en":"Giratina (Altered Forme)","legendary":true},
{"dex":"487O","name":"Giratina","de":"Giratina (Urform)","en":"Giratina (Origin Forme)","legendary":true},
{"dex":488,"name":"Cresselia","legendary":true,"getshiny":true},
{"dex":489,"name":"Phione","mythical":true},
{"dex":490,"name":"Manaphy","mythical":true},
{"dex":491,"name":"Darkrai","mythical":true},
{"dex":492,"name":"Shaymin","de":"Shaymin (Landform)","en":"Shaymin (Land Forme)","mythical":true},
{"dex":"492S","name":"Shaymin","de":"Shaymin (Zenitform)","en":"Shaymin (Sky Forme)","mythical":true},
{"dex":493,"name":"Arceus","mythical":true},
{"dex":808,"name":"Meltan","mythical":true},
{"dex":809,"name":"Melmetal","mythical":true,"evolved":true}
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
{"id":"LMA","name":"Magnet-Lockmodul","en":"Magnetic Lure Module"}
];

var specialfilter = [
{"id":"P","name":"Alle Begegnungen","en":"All encounters"},
{"id":"S","name":"Alle möglichen Shiny Begegnungen","en":"All potential Shiny encounters"}
];

var changelogjson = {
	"items": [
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

var raids = {
	"tier5":[488],
	"tier4":[359,"105A",248,112,306],
	"tier3":["26A",303,403]
};

var quests = [1,4,7,16,37,50,56,58,60,66,70,74,86,88,92,95,100,102,103,113,124,125,126,129,133,138,140,142,147,216,227,246,261,286,287,294,296,302,307,311,312,317,325,327,345,347,353,408,410,425];
var legacy = [3,10,25,27,36,38,40,42,55,59,61,67,73,81,96,98,107,109,114,117,121,123,127,131,132,137,171,179,184,191,193,200,203,204,209,215,224,228,231,241,252,256,270,290,299,309,310,315,320,322,328,349,359,387,390,399,427,436];
var hidden = 1;
var sel_q = [];

var orignest = [1,4,7,25,35,37,43,54,58,60,63,66,72,77,81,84,86,90,92,95,100,102,104,111,116,123,124,125,126,127,129,133,138,140,152,155,158,170,185,190,193,200,202,203,206,209,211,213,215,216,220,226,227,231,234,252,255,258,261,273,278,283,285,296,299,300,302,307,309,311,312,318,320,322,325,333,341,343,345,347,353,355,370,387,390,393,399,449];
var oldnest = orignest.slice();
var newnest = oldnest.slice();


function init() {
	// make Raids
	var txt = "";
	var t3 = 0;
	var t4 = 0;
	var t5 = 0;
	try {
		t5 = raids.tier5.length;
	} catch {}
	if (t5 > 0) {
		txt += '<optgroup label="5er"><option ';
		if (t5 == 1) {
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
		txt += '<optgroup label="4er"><option ';
		if (t4 == 1) {
			txt += "hidden disabled ";
		}
		txt += 'value="4er" style="font-style:italic">4er Ei</option>';
		raid_de.push("4er Ei");
		raid_en.push("Tier 4 Egg");
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
		txt += '<optgroup label="3er, 2er, 1er">';
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
	if (!txt) {
		txt = '<option selected disabled value="" style="font-style:italic">Keine Raids verfügbar.</option>';
		raid_de.push("Keine Raids verfügbar.");
		raid_en.push("No raids available.")
	}
	document.getElementById("raid").innerHTML = txt;
	
	if (t5 > 1) {
		t5multi = 1;
	}
	t4index = (t4) ? t5+1:0;
	t3index = (t3) ? t5+t4+1:0;
	
	// make Gym list
	
	var txt = "";
	for (i = 0; i < gymjson.gyms.length ; i++) {
		txt += '<option value="' + gymjson.gyms[i].value + '"';
		if (gymjson.gyms[i].token || gymjson.gyms[i].ex) {
			txt += ' data-tokens="';
			txt += (gymjson.gyms[i].token) ? gymjson.gyms[i].token:"";
			txt += (gymjson.gyms[i].ex) ? ' ex raid arena gym" style="font-weight:bold"':'"';
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
	
	buildNestlist("old");
	buildNestlist("new");
	
	txt = "";
	for (var i = 0; i < pokemon.length ; i++) {
		if (!pokemon[i].evolved && !pokemon[i].legendary && !pokemon[i].mythical && !pokemon[i].baby && !pokemon[i].alolan) {
			txt += "<option value=" + pokemon[i].dex + ">" + pokemon[i].name + "</option>";
		}
	}
	document.getElementById("old").innerHTML = txt;
	document.getElementById("new").innerHTML = txt;
	
	// init BoQ

	txt = "";
	for (i = 0; i < specialfilter.length; i++) {
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="buttonSpecial' + i + '" value="' + specialfilter[i].id + '">' + specialfilter[i].name + '</button>';
	}
	document.getElementById("specialpoke").innerHTML = txt;
	
	txt = "";
	for (i = 0; i < quests.length ; i++) {
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + i + '" value=' + quests[i] + '>' + getPkmnByDex(quests[i])[0].name; 
		txt += (getPkmnByDex(quests[i])[0].getshiny)?"✨":"" + '</button>';
	}
	document.getElementById("pokelist").innerHTML = txt;
	
	tinysort("#pokelist > button");

	txt = "";
	for (i = 0; i < items.length; i++) {
		var j = i + quests.length;
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + j + '" value="' + items[i].id + '">' + items[i].name + '</button>';
	}
	document.getElementById("itemlist").innerHTML = txt;

	tinysort("#itemlist > button");

	txt = "";
	for (i = 0; i < legacy.length ; i++) {
		var k = i + quests.length + items.length
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + k + '" value=' + legacy[i] + '>' + getPkmnByDex(legacy[i])[0].name;
		txt += (getPkmnByDex(legacy[i])[0].getshiny)?"✨":"" + '</button>';
	}
	document.getElementById("legacylist").innerHTML = txt;

	tinysort("#legacylist > button");
	
	$('.selectpicker').selectpicker('refresh');
}

function generateRaid(raidtext) {
  document.getElementById("ex").innerHTML = "";
  document.getElementById("but").innerHTML = "";

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
  var diff = (new Date("Jan 01 1970 "+start).getTime() - new Date("Jan 01 1970 "+time).getTime()) / 60000;
  var player = document.getElementById("player").value;
  player = player.replace(/\n/g,"<br>")
  
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
  
  
  
  if (gymjson.gyms[document.getElementById("gym").selectedIndex].ex) {
    text += "🎗 <b>EX-Raid Arena</b> 🎗 <br>";
  }
  
  text += "<b>" + raid + " " + gym + "</b> ";
  
  if (time) {
	text += "(🐣" + time + ")";
  }
  
  text += "<br>" + gymjson.gyms[document.getElementById("gym").selectedIndex].map;

  if (t3index == 0 || document.getElementById("raid").selectedIndex <= t3index || start != "") {
  text += "<br><br><b>Start:</b> ";
    if ((diff <= 45 && diff >= 0 && time != "") || (time == "" && start != "") || startwarn == 11) {
	  text += start;
    } else {
      text += "?";
    }
  }
  text += "<br><br>" + player
  
  var exc = document.createAttribute("class");
  exc.value = "m-3 p-2 border rounded bg-light";
  document.getElementById("ex").setAttributeNode(exc);
  
  document.getElementById("ex").innerHTML = text;
  
  var text2 = text.replace(/<br>/g,"\n");
  text2 = text2.replace(/<b>/g,"*");
  text2 = text2.replace(/<\/b>/g,"*");
  
  var n = encodeURIComponent(text2);
  var bu = document.createElement("BUTTON");
  
  var btt1 = document.createAttribute("onclick");
  btt1.value = "location.href='https://api.whatsapp.com/send?text=" + n + "';";
  bu.setAttributeNode(btt1);
  
  var btt2 = document.createAttribute("class");
  btt2.value = "btn btn-success";
  bu.setAttributeNode(btt2);
  
  var btt3 = document.createAttribute("id");
  btt3.value = "txt_button";
  bu.setAttributeNode(btt3);
  
  if (getLang() == "de") {
	var bt = document.createTextNode(txt_de[8]);
  }
  if (getLang() == "en") {
	var bt = document.createTextNode(txt_en[8]);
  }
  bu.appendChild(bt);
  
  document.getElementById("but").appendChild(bu);
 
  
  if (raidwarn != 0) {
	raidwarn = 0;
	document.getElementById("raidwarn").innerHTML = "";
  }
}

function addRaid() {
  multi++;
  var ol = document.getElementById("ex").innerHTML;
  var old = ol + "<br><br>";
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
  
  if (ti) {
	var hat2 = hat - now2;
	ti = ti.substr(0,1)
	if (ti != "0" && ti != "1" && ti != "2") {
		hatchwarn = 11;
		document.getElementById("time").value = null;
	} else if (hat < 21600000) {
		hatchwarn = 1;
	} else if (hat > 81900000) {
		hatchwarn = 2;
	} else if (hat2 < -2700000) {
		hatchwarn = 3;
	} else if (hat2 > 3600000) {
		hatchwarn = 10;
	} else if (hat2 > 0 && ra > t4index) {
		hatchwarn = 12;
	} else if (t5multi && hat2 > 0 && ra > 0) {
		hatchwarn = 13;
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
		startwarn = 11;	
	} else if (now3 < 0) {
		startwarn = 4;
	} else if (hat >= 2700000) {
		startwarn = 5;
	} else if (hat > 2400000) {
		ste.value = "form-text text-muted";
		startwarn = 6;
	} else if (hat < 0) {
		startwarn = 7;
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
	for (i = 0; i < raid_de.length; i++) {
		if (raid_en[i] != raid_de[i]) {
			document.getElementById("raid").options[i].innerHTML = raid_de[i];
		}
	}
	document.getElementById("timeh").innerHTML = warn_de[hatchwarn];
	document.getElementById("starth").innerHTML = warn_de[startwarn];
	document.getElementById("raidwarn").innerHTML = warn_de[raidwarn];
	document.getElementById("tg_warn").innerHTML = warn_de[tg_warn];

	$("#pokelist button, #legacylist button").text(function(i, origText){
		var s;
		if (origText[origText.length-1] == "✨") {
			origText = origText.substr(0,origText.length-1);
			s = 1;
		}
		var newText = (getPkmnEng(origText)) ? getPkmnEng(origText).name:origText;
		newText += s?"✨":"";
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
	
	$('.selectpicker').selectpicker('refresh');
  }
  if (getLang() == "en") {
	for (i = 0; i < txtid.length; i++) {
		try {
			document.getElementById(txtid[i]).innerHTML = txt_en[i];
		} catch {}
	}	
	for (i = 0; i < raid_en.length; i++) {
		if (raid_en[i] != raid_de[i]) {
			document.getElementById("raid").options[i].innerHTML = raid_en[i];
		}
	}
	document.getElementById("timeh").innerHTML = warn_en[hatchwarn];
	document.getElementById("starth").innerHTML = warn_en[startwarn];
	document.getElementById("raidwarn").innerHTML = warn_en[raidwarn];
	document.getElementById("tg_warn").innerHTML = warn_en[tg_warn];

	$("#pokelist button, #legacylist button").text(function(i, origText){
		var s;
		if (origText[origText.length-1] == "✨") {
			origText = origText.substr(0,origText.length-1);
			s = 1;
		}
		var newText = (getPkmn(origText).en) ? getPkmn(origText).en:origText;
		newText += s?"✨":"";
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
	
	$('.selectpicker').selectpicker('refresh');
  }
}

function getLang() {
	return document.getElementById("lang").value;
}

function TierCheck() {
	var ind = document.getElementById("raid").selectedIndex;
	if (hatchwarn == 12 && (ind == t4index || ind === 0 || (!t5multi && ind == 1))) {
		hatchwarn = 0;
		document.getElementById("timeh").innerHTML = "";
	}
	if (ind > t4index && document.getElementById("time").value) {
		checkTime();
	}
	if (t5multi) {
		if (hatchwarn == 13 && (ind === 0 || ind == t4index)) {
			hatchwarn = 0;
			document.getElementById("timeh").innerHTML = "";
		}
		if (ind > 0 && ind < t4index && document.getElementById("time").value) {
			checkTime();
		}
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
		if (item == "" || item.includes("Spieler") || item.includes("EX-RAID") || item.includes("WP-Range:") || item.includes("[0]")) {
			// check for certain terms to identify and delete empty lines, extra players, CP-Range, Ex-Raid tag & empty start times
			arr.splice(i,1);
			i--;
				
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
		console.log(sel_q);
	});   
});

$(document).ready(function() {
	$("#boq").on('click', '.btn-primary', function(){
		$(this).removeClass("btn-primary").addClass("btn-danger");
		sel_q.splice(sel_q.indexOf($(this).attr("value")),1);
		sel_q.push("-" + $(this).attr("value"));
		sel_q.sort();
		console.log(sel_q);
	});   
});

$(document).ready(function() {
	$("#boq").on('click', '.btn-danger', function(){
		$(this).removeClass("btn-danger").addClass("btn-outline-secondary");
		sel_q.splice(sel_q.indexOf($(this).attr("value")),1);

		console.log(sel_q);
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
		link = "https://www.bookofquests.de/#14/1490031.01/6900393.52/0/f=" + sel_q.toString();
		document.getElementById("newLink").innerHTML = '<a href="' + link + '" target="_blank">' + link + '</a>';
	} else {
		document.getElementById("newLink").innerHTML = "Bitte wähle mindestens 1 Pokémon oder Item aus.";
	}
  
	if (hidden) {
		$('#newLink').toggle();
		hidden = 0;
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

$('#old').on('hidden.bs.select', function () {
  updateNestlist("old");
});

$('#new').on('hidden.bs.select', function () {
  updateNestlist("new");
});