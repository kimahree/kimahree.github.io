var t5multi = 0;
var t4index = 0;
var t3index = 0;

var txtid = ["txt_beta","txt_mainlink","txt_lang","txt_gym","txt_hatch","txt_start","txt_player","txt_instr","txt_button","txt_button2","txt_multi","txt_chgym","txt_cre_close","txt_cl_close","txt_reg_close","txt_boq_intro","txt_boq_generate"];

var txt_de = ["Achtung, dies ist die Beta Seite. Funktionen sind eventuell beeinträchtigt und fehlerhaft.",
"Zur Hauptseite",
"Sprache:",
"Arena:",
"Schlüpfzeit:",
"Startzeit:",
"Teilnehmer:",
'Drücke auf "Start!", überprüfe deine Angaben und drücke dann auf "In WhatsApp posten".<br>',
"In WhatsApp posten",
"In Telegram posten",
'Um einen Multiraid zu posten, ändere jetzt die Angaben oben für den nächsten Raid und drücke dann auf "Multiraid!". Wiederhole dies, bis alle Raids eingetragen sind.<br>',
"Wähle eine Arena aus.",
"Schließen",
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
"Post in Telegram",
'To post a Multiraid, change the data above for the next raid and then press "Multiraid!". Repeat until all raids have been added.<br>',
"Choose a gym.",
"Close",
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
{"dex":"19A","name":"Alola-Rattfratz","en":"Alolan Rattata","alolan":true,"getshiny":true},
{"dex":20,"name":"Rattikarl","en":"Raticate","evolved":true},
{"dex":"20A","name":"Alola-Rattikarl","en":"Alolan Raticate","alolan":true,"evolved":true},
{"dex":21,"name":"Habitak","en":"Spearow"},
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
{"dex":35,"name":"Piepi","en":"Clefairy"},
{"dex":36,"name":"Pixi","en":"Clefable","evolved":true},
{"dex":37,"name":"Vulpix"},
{"dex":"37A","name":"Alola-Vulpix","en":"Alolan Vulpix","alolan":true,"getshiny":true},
{"dex":38,"name":"Vulnona","en":"Ninetales","evolved":true},
{"dex":"38A","name":"Alola-Vulnona","en":"Alolan Ninetales","alolan":true,"evolved":true},
{"dex":39,"name":"Pummeluff","en":"Jigglypuff"},
{"dex":40,"name":"Knuddeluff","en":"Wigglytuff","evolved":true},
{"dex":41,"name":"Zubat","getshiny":true},
{"dex":42,"name":"Golbat","evolved":true},
{"dex":43,"name":"Myrapla","en":"Oddish"},
{"dex":44,"name":"Duflor","en":"Gloom","evolved":true},
{"dex":45,"name":"Giflor","en":"Vileplume","evolved":true},
{"dex":46,"name":"Paras"},
{"dex":47,"name":"Parasek","en":"Parasect","evolved":true},
{"dex":48,"name":"Bluzuk","en":"Venonat"},
{"dex":49,"name":"Omot","en":"Venomoth","evolved":true},
{"dex":50,"name":"Digda","en":"Diglett","getshiny":true},
{"dex":"50A","name":"Alola-Digda","en":"Alolan Diglett","alolan":true,"getshiny":true},
{"dex":51,"name":"Digdri","en":"Dugtrio","evolved":true},
{"dex":"51A","name":"Alola-Digdri","en":"Alolan Dugtrio","alolan":true,"evolved":true},
{"dex":52,"name":"Mauzi","en":"Meowth"},
{"dex":"52A","name":"Alola-Mauzi","en":"Alolan Meowth","alolan":true,"getshiny":true},
{"dex":53,"name":"Snobilikat","en":"Persian","evolved":true},
{"dex":"53A","name":"Alola-Snobilikat","en":"Alolan Persian","alolan":true,"evolved":true},
{"dex":54,"name":"Enton","en":"Psyduck","getshiny":true},
{"dex":55,"name":"Entoron","en":"Golduck","evolved":true},
{"dex":56,"name":"Menki","en":"Mankey","getshiny":true},
{"dex":57,"name":"Rasaff","en":"Primeape","evolved":true},
{"dex":58,"name":"Fukano","en":"Growlithe","getshiny":true},
{"dex":59,"name":"Arkani","en":"Arcanine","evolved":true},
{"dex":60,"name":"Quapsel","en":"Poliwag","getshiny":true},
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
{"dex":"74A","name":"Alola-Kleinstein","en":"Alolan Geodude","alolan":true,"getshiny":true},
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
{"dex":"88A","name":"Alola-Sleima","en":"Alolan Grimer","alolan":true,"getshiny":true},
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
{"dex":"103A","name":"Alola-Kokowei","en":"Alolan Exeggutor","alolan":true,"evolved":true,"getshiny":true},
{"dex":104,"name":"Tragosso","en":"Cubone","getshiny":true},
{"dex":105,"name":"Knogga","en":"Marowak","evolved":true},
{"dex":"105A","name":"Alola-Knogga","en":"Alolan Marowak","alolan":true,"evolved":true,"getshiny":true},
{"dex":106,"name":"Kicklee","en":"Hitmonlee"},
{"dex":107,"name":"Nockchan","en":"Hitmonchan"},
{"dex":108,"name":"Schlurp","en":"Lickitung"},
{"dex":109,"name":"Smogon","en":"Koffing","getshiny":true},
{"dex":110,"name":"Smogmog","en":"Weezing","evolved":true},
{"dex":111,"name":"Rihorn","en":"Rhyhorn"},
{"dex":112,"name":"Rizeros","en":"Rhydon","evolved":true},
{"dex":113,"name":"Chaneira","en":"Chansey"},
{"dex":114,"name":"Tangela"},
{"dex":115,"name":"Kangama","en":"Kangaskhan","regional":true},
{"dex":116,"name":"Seeper","en":"Horsea","getshiny":true},
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
{"dex":"150R","name":"Mewtu (Rüstung)","de":"Mewtu in Rüstung","en":"Armored Mewtwo","legendary":true},
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
{"dex":161,"name":"Wiesor","en":"Sentret","getshiny":true},
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
{"dex":207,"name":"Skorgla","en":"Gligar","getshiny":true},
{"dex":208,"name":"Stahlos","en":"Steelix","evolved":true},
{"dex":209,"name":"Snubbull","getshiny":true},
{"dex":210,"name":"Granbull","evolved":true},
{"dex":211,"name":"Baldorfish","en":"Quilfish"},
{"dex":212,"name":"Scherox","en":"Scizor","evolved":true},
{"dex":213,"name":"Pottrott","en":"Shuckle","getshiny":true},
{"dex":214,"name":"Skaraborn","en":"Heracross","regional":true},
{"dex":215,"name":"Sniebel","en":"Sneasel","getshiny":true},
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
{"dex":280,"name":"Trasla","en":"Ralts","getshiny":true},
{"dex":281,"name":"Kirlia","evolved":true},
{"dex":282,"name":"Guardevoir","en":"Gardevoir","evolved":true},
{"dex":283,"name":"Gehweiher","en":"Surskit"},
{"dex":284,"name":"Maskeregen","en":"Masquerain","evolved":true},
{"dex":285,"name":"Knilz","en":"Shroomish"},
{"dex":286,"name":"Kapilz","en":"Breloom","evolved":true},
{"dex":287,"name":"Bummelz","en":"Slakoth","getshiny":true},
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
{"dex":309,"name":"Frizelbliz","en":"Electrike","getshiny":true},
{"dex":310,"name":"Voltenso","en":"Manectric","evolved":true},
{"dex":311,"name":"Plusle","getshiny":true},
{"dex":312,"name":"Minun","getshiny":true},
{"dex":313,"name":"Volbeat","regional":true},
{"dex":314,"name":"Illumise","regional":true},
{"dex":315,"name":"Roselia"},
{"dex":316,"name":"Schluppuck","en":"Gulpin"},
{"dex":317,"name":"Schlukwech","en":"Swalot","evolved":true},
{"dex":318,"name":"Kanivanha","en":"Carvanha","getshiny":true},
{"dex":319,"name":"Tohaido","en":"Sharpedo","evolved":true},
{"dex":320,"name":"Wailmer","getshiny":true},
{"dex":321,"name":"Wailord","evolved":true},
{"dex":322,"name":"Camaub","en":"Numel"},
{"dex":323,"name":"Camerupt","evolved":true},
{"dex":324,"name":"Qurtel","en":"Torkoal","regional":true},
{"dex":325,"name":"Spoink","getshiny":true},
{"dex":326,"name":"Groink","en":"Grumpig","evolved":true},
{"dex":327,"name":"Pandir","en":"Spinda","getshiny":true},
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
{"dex":339,"name":"Schmerbe","en":"Barboach","getshiny":true},
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
{"dex":"351I","name":"Formeo (Schnee)","de":"Formeo (Schneeform)","en":"Castform (Snowy Form)","evolved":true},
{"dex":"351R","name":"Formeo (Regen)","de":"Formeo (Regenform)","en":"Castform (Rainy Form)","evolved":true},
{"dex":"351S","name":"Formeo (Sonne)","de":"Formeo (Sonnenform)","en":"Castform (Sunny Form)","evolved":true},
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
{"dex":384,"name":"Rayquaza","legendary":true,"getshiny":true},
{"dex":385,"name":"Jirachi","mythical":true},
{"dex":386,"name":"Deoxys (Normal)","de":"Deoxys (Normalform)","en":"Deoxys (Normal Forme)","mythical":true},
{"dex":"386A","name":"Deoxys (Angriff)","de":"Deoxys (Angriffsform)","en":"Deoxys (Attack Forme)","mythical":true},
{"dex":"386D","name":"Deoxys (Verteidigung)","de":"Deoxys (Verteidigungsform)","en":"Deoxys (Defense Forme)","mythical":true},
{"dex":"386S","name":"Deoxys (Initiative)","de":"Deoxys (Initiativeform)","en":"Deoxys (Speed Forme)","mythical":true},
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
{"dex":412,"name":"Burmy (Pflanze)","de":"Burmy (Pflanzenumhang)","en":"Burmy (Plant Cloak)"},
{"dex":"412S","name":"Burmy (Sand)","de":"Burmy (Sandumhang)","en":"Burmy (Sandy Cloak)"},
{"dex":"412T","name":"Burmy (Lumpen)","de":"Burmy (Lumpenumhang)","en":"Burmy (Trash Cloak)"},
{"dex":413,"name":"Burmadame (Pflanze)","de":"Burmadame (Pflanzenumhang)","en":"Wormadam (Plant Cloak)","evolved":true},
{"dex":"413S","name":"Burmadame (Sand)","de":"Burmadame (Sandumhang)","en":"Wormadam (Sandy Cloak)","evolved":true},
{"dex":"413T","name":"Burmadame (Lumpen)","de":"Burmadame (Lumpenumhang)","en":"Wormadam (Trash Cloak)","evolved":true},
{"dex":414,"name":"Moterpel","en":"Mothim","evolved":true},
{"dex":415,"name":"Wadribie","en":"Combee"},
{"dex":416,"name":"Honweisel","en":"Vespiquen","evolved":true},
{"dex":417,"name":"Pachirisu","regional":true},
{"dex":418,"name":"Bamelin","en":"Buizel"},
{"dex":419,"name":"Bojelin","en":"Floatzel","evolved":true},
{"dex":420,"name":"Kikugi","en":"Cherubi"},
{"dex":421,"name":"Kinoso (Bewölkt)","de":"Kinoso (Wolkenform)","en":"Cherrim (Overcast Form)","evolved":true},
{"dex":"421S","name":"Kinoso (Sonne)","de":"Kinoso (Sonnenform)","en":"Cherrim (Sunshine Form)","evolved":true},
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
{"dex":438,"name":"Mobai","en":"Bonsly","baby":true,"getshiny":true},
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
{"dex":"479F","name":"Rotom (Wirbel)","de":"Wirbel-Rotom","en":"Fan Rotom","legendary":true},
{"dex":"479H","name":"Rotom (Hitze)","de":"Hitze-Rotom","en":"Heat Rotom","legendary":true},
{"dex":"479I","name":"Rotom (Frost)","de":"Frost-Rotom","en":"Frost Rotom","legendary":true},
{"dex":"479M","name":"Rotom (Schneid)","de":"Schneid-Rotom","en":"Mow Rotom","legendary":true},
{"dex":"479W","name":"Rotom (Wasch)","de":"Wasch-Rotom","en":"Wash Rotom","legendary":true},
{"dex":480,"name":"Selfe","en":"Uxie","legendary":true,"regional":true},
{"dex":481,"name":"Vesprit","en":"Mesprit","legendary":true,"regional":true},
{"dex":482,"name":"Tobutz","en":"Azelf","legendary":true,"regional":true},
{"dex":483,"name":"Dialga","legendary":true},
{"dex":484,"name":"Palkia","legendary":true},
{"dex":485,"name":"Heatran","legendary":true},
{"dex":486,"name":"Regigigas","legendary":true},
{"dex":487,"name":"Giratina (Wandel)","de":"Giratina (Wandelform)","en":"Giratina (Altered Forme)","legendary":true},
{"dex":"487O","name":"Giratina (Urform)","de":"Giratina (Urform)","en":"Giratina (Origin Forme)","legendary":true},
{"dex":488,"name":"Cresselia","legendary":true,"getshiny":true},
{"dex":489,"name":"Phione","mythical":true},
{"dex":490,"name":"Manaphy","mythical":true},
{"dex":491,"name":"Darkrai","mythical":true},
{"dex":492,"name":"Shaymin (Land)","de":"Shaymin (Landform)","en":"Shaymin (Land Forme)","mythical":true},
{"dex":"492S","name":"Shaymin (Zenit)","de":"Shaymin (Zenitform)","en":"Shaymin (Sky Forme)","mythical":true},
{"dex":493,"name":"Arceus","mythical":true},
{"dex":494,"name":"Victini","mythical":true},
{"dex":495,"name":"Serpifeu","en":"Snivy"},
{"dex":496,"name":"Efoserp","en":"Servine","evolved":true},
{"dex":497,"name":"Serpiroyal","en":"Serperior","evolved":true},
{"dex":498,"name":"Floink","en":"Tepig"},
{"dex":499,"name":"Ferkokel","en":"Pignite","evolved":true},
{"dex":500,"name":"Flambirex","en":"Emboar","evolved":true},
{"dex":501,"name":"Ottaro","en":"Oshawott"},
{"dex":502,"name":"Zwottronin","en":"Dewott","evolved":true},
{"dex":503,"name":"Admurai","en":"Samurott","evolved":true},
{"dex":504,"name":"Nagelotz","en":"Patrat"},
{"dex":505,"name":"Kukmarda","en":"Watchog","evolved":true},
{"dex":506,"name":"Yorkleff","en":"Lillipup"},
{"dex":507,"name":"Terribark","en":"Herdier","evolved":true},
{"dex":508,"name":"Bissbark","en":"Stoutland","evolved":true},
{"dex":509,"name":"Felilou","en":"Purrloin"},
{"dex":510,"name":"Kleoparda","en":"Liepard","evolved":true},
{"dex":511,"name":"Vegimak","en":"Pansage"},
{"dex":512,"name":"Vegichita","en":"Simisage","evolved":true},
{"dex":513,"name":"Grillmak","en":"Pansear"},
{"dex":514,"name":"Grillchita","en":"Simisear","evolved":true},
{"dex":515,"name":"Sodamak","en":"Panpour"},
{"dex":516,"name":"Sodachita","en":"Simipour","evolved":true},
{"dex":517,"name":"Somniam","en":"Munna"},
{"dex":518,"name":"Somnivora","en":"Musharna","evolved":true},
{"dex":519,"name":"Dusselgurr","en":"Pidove"},
{"dex":520,"name":"Navitaub","en":"Tranquill","evolved":true},
{"dex":521,"name":"Fasasnob","en":"Unfezant","evolved":true},
{"dex":522,"name":"Elezeba","en":"Blitzle"},
{"dex":523,"name":"Zebritz","en":"Zebstrika","evolved":true},
{"dex":524,"name":"Kiesling","en":"Roggenrola"},
{"dex":525,"name":"Sedimantur","en":"Boldore","evolved":true},
{"dex":526,"name":"Brockoloss","en":"Gigalith","evolved":true},
{"dex":527,"name":"Fleknoil","en":"Woobat"},
{"dex":528,"name":"Fletiamo","en":"Swoobat","evolved":true},
{"dex":529,"name":"Rotomurf","en":"Drilbur"},
{"dex":530,"name":"Stalobor","en":"Excadrill","evolved":true},
{"dex":531,"name":"Ohrdoch","en":"Audino"},
{"dex":532,"name":"Praktibalk","en":"Timburr"},
{"dex":533,"name":"Strepoli","en":"Gurdurr","evolved":true},
{"dex":534,"name":"Meistagrif","en":"Conkeldurr","evolved":true},
{"dex":535,"name":"Schallquap","en":"Tympole"},
{"dex":536,"name":"Mebrana","en":"Palpitoad","evolved":true},
{"dex":537,"name":"Branawarz","en":"Seismitoad","evolved":true},
{"dex":538,"name":"Jiutesto","en":"Throh"},
{"dex":539,"name":"Karadonis","en":"Sawk"},
{"dex":540,"name":"Strawickl","en":"Sewaddle"},
{"dex":541,"name":"Folikon","en":"Swadloon","evolved":true},
{"dex":542,"name":"Matrifol","en":"Leavanny","evolved":true},
{"dex":543,"name":"Toxiped","en":"Venipede"},
{"dex":544,"name":"Rollum","en":"Whirlipede","evolved":true},
{"dex":545,"name":"Cerapendra","en":"Scolipede","evolved":true},
{"dex":546,"name":"Waumboll","en":"Cottonee"},
{"dex":547,"name":"Elfun","en":"Whimsicott","evolved":true},
{"dex":548,"name":"Lilminip","en":"Petilil"},
{"dex":549,"name":"Dressella","en":"Lilligant","evolved":true},
{"dex":550,"name":"Barschuft (Rotlinig)","de":"Barschuft (Rotlinige Form)","en":"Basculin (Red-Striped Form)"},
{"dex":"550B","name":"Barschuft (Blaulinig)","de":"Barschuft (Blaulinige Form)","en":"Basculin (Blue-Striped Form)"},
{"dex":551,"name":"Ganovil","en":"Sandile"},
{"dex":552,"name":"Rokkaiman","en":"Krokorok","evolved":true},
{"dex":553,"name":"Rabigator","en":"Krookodile","evolved":true},
{"dex":554,"name":"Flampion","en":"Darumaka"},
{"dex":555,"name":"Flampivian","en":"Darmanitan"},
{"dex":"555Z","name":"Flampivian (Trance)","de":"Flampivian (Trance-Modus)","en":"Darmanitan (Zen Mode)","evolved":true},
{"dex":556,"name":"Maracamba","en":"Maractus"},
{"dex":557,"name":"Lithomith","en":"Dwebble"},
{"dex":558,"name":"Castellith","en":"Crustle","evolved":true},
{"dex":559,"name":"Zurrokex","en":"Scraggy"},
{"dex":560,"name":"Irokex","en":"Scrafty","evolved":true},
{"dex":561,"name":"Symvolara","en":"Sigilyph"},
{"dex":562,"name":"Makabaja","en":"Yamask"},
{"dex":563,"name":"Echnatoll","en":"Cofagrigus","evolved":true},
{"dex":564,"name":"Galapaflos","en":"Tirtouga"},
{"dex":565,"name":"Karippas","en":"Carracosta","evolved":true},
{"dex":566,"name":"Flapteryx","en":"Archen"},
{"dex":567,"name":"Aeropteryx","en":"Archeops","evolved":true},
{"dex":568,"name":"Unratütox","en":"Trubbish"},
{"dex":569,"name":"Deponitox","en":"Garbodor","evolved":true},
{"dex":570,"name":"Zorua"},
{"dex":571,"name":"Zoroark","evolved":true},
{"dex":572,"name":"Picochilla","en":"Minccino"},
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
{"dex":585,"name":"Sesokitz","en":"Deerling"},
{"dex":586,"name":"Kronjuwild","en":"Sawsbuck","evolved":true},
{"dex":587,"name":"Emolga"},
{"dex":588,"name":"Laukaps","en":"Karrablast"},
{"dex":589,"name":"Cavalanzas","en":"Escavalier","evolved":true},
{"dex":590,"name":"Tarnpignon","en":"Foongus"},
{"dex":591,"name":"Hutsassa","en":"Amoonguss","evolved":true},
{"dex":592,"name":"Quabbel","en":"Frillish"},
{"dex":593,"name":"Apoquallyp","en":"Jellicent","evolved":true},
{"dex":594,"name":"Mamolida","en":"Alomomola"},
{"dex":595,"name":"Wattzapf","en":"Joltik"},
{"dex":596,"name":"Voltula","en":"Galvantula","evolved":true},
{"dex":597,"name":"Kastadur","en":"Ferroseed"},
{"dex":598,"name":"Tentantel","en":"Ferrothorn","evolved":true},
{"dex":599,"name":"Klikk","en":"Klink"},
{"dex":600,"name":"Kliklak","en":"Klang","evolved":true},
{"dex":601,"name":"Klikdiklak","en":"Klinklang","evolved":true},
{"dex":602,"name":"Zapplardin","en":"Tynamo"},
{"dex":603,"name":"Zapplalek","en":"Eelektrik","evolved":true},
{"dex":604,"name":"Zapplarang","en":"Eelektross","evolved":true},
{"dex":605,"name":"Pygraulon","en":"Elgyem"},
{"dex":606,"name":"Megalon","en":"Beheeyem","evolved":true},
{"dex":607,"name":"Lichtel","en":"Litwick"},
{"dex":608,"name":"Laternecto","en":"Lampent","evolved":true},
{"dex":609,"name":"Skelabra","en":"Chandelure","evolved":true},
{"dex":610,"name":"Milza","en":"Axew"},
{"dex":611,"name":"Sharfax","en":"Fraxure","evolved":true},
{"dex":612,"name":"Maxax","en":"Haxorus","evolved":true},
{"dex":613,"name":"Petznief","en":"Cubchoo"},
{"dex":614,"name":"Siberio","en":"Beartic","evolved":true},
{"dex":615,"name":"Frigometri","en":"Cryogonal"},
{"dex":616,"name":"Schnuthelm","en":"Shelmet"},
{"dex":617,"name":"Hydragil","en":"Accelgor","evolved":true},
{"dex":618,"name":"Flunschlik","en":"Stunfisk"},
{"dex":619,"name":"Lin-Fu","en":"Mienfoo"},
{"dex":620,"name":"Wie-Shu","en":"Mienshao","evolved":true},
{"dex":621,"name":"Shardrago","en":"Druddigon"},
{"dex":622,"name":"Golbit","en":"Golett"},
{"dex":623,"name":"Golgantes","en":"Golurk","evolved":true},
{"dex":624,"name":"Gladiantri","en":"Pawniard"},
{"dex":625,"name":"Caesurio","en":"Bisharp","evolved":true},
{"dex":626,"name":"Bisofank","en":"Bouffalant"},
{"dex":627,"name":"Geronimatz","en":"Rufflet"},
{"dex":628,"name":"Washakwil","en":"Braviary","evolved":true},
{"dex":629,"name":"Skallyk","en":"Vullaby"},
{"dex":630,"name":"Grypheldis","en":"Mandibuzz","evolved":true},
{"dex":631,"name":"Furnifraß","en":"Heatmor"},
{"dex":632,"name":"Fermicula","en":"Durant"},
{"dex":633,"name":"Kapuno","en":"Deino"},
{"dex":634,"name":"Duodino","en":"Zweilous","evolved":true},
{"dex":635,"name":"Trikephalo","en":"Hydreigon","evolved":true},
{"dex":636,"name":"Ignivor","en":"Larvesta"},
{"dex":637,"name":"Ramoth","en":"Volcarona","evolved":true},
{"dex":638,"name":"Kobalium","en":"Cobalion","legendary":true},
{"dex":639,"name":"Terrakium","en":"Terrakion","legendary":true},
{"dex":640,"name":"Viridium","en":"Virizion","legendary":true},
{"dex":641,"name":"Boreos (Inkarnation)","de":"Boreos (Inkarnationsform)","en":"Tornadus (Incarnate Forme)","legendary":true},
{"dex":"641T","name":"Boreos (Tiergeist)","de":"Boreos (Tiergeistform)","en":"Tornadus (Therian Forme)","legendary":true},
{"dex":642,"name":"Voltolos (Inkarnation)","de":"Voltolos (Inkarnationsform)","en":"Thundurus (Incarnate Forme)","legendary":true},
{"dex":"642T","name":"Voltolos (Tiergeist)","de":"Voltolos (Tiergeistform)","en":"Thundurus (Therian Forme)","legendary":true},
{"dex":643,"name":"Reshiram","legendary":true},
{"dex":644,"name":"Zekrom","legendary":true},
{"dex":645,"name":"Demeteros (Inkarnation)","de":"Demeteros (Inkarnationsform)","en":"Landorus (Incarnate Forme)","legendary":true},
{"dex":"645T","name":"Demeteros (Tiergeist)","de":"Demeteros (Tiergeistform)","en":"Landorus (Therian Forme)","legendary":true},
{"dex":646,"name":"Kyurem","legendary":true},
{"dex":"646B","name":"Schwarzes Kyurem","de":"Schwarzes Kyurem","en":"Black Kyurem","legendary":true},
{"dex":"646W","name":"Weißes Kyurem","de":"Weißes Kyurem","en":"White Kyurem","legendary":true},
{"dex":647,"name":"Keldeo","mythical":true},
{"dex":648,"name":"Meloetta (Gesang)","de":"Meloetta (Gesangsform)","en":"Meloetta (Aria Forme)","mythical":true},
{"dex":"648P","name":"Meloetta (Tanz)","de":"Meloetta (Tanzform)","en":"Meloetta (Pirouette Forme)","mythical":true},
{"dex":649,"name":"Genesect","mythical":true},
{"dex":650,"name":"Igamaro","en":"Chespin"},
{"dex":651,"name":"Igastarnish","en":"Quilladin","evolved":true},
{"dex":652,"name":"Brigaron","en":"Chesnaught","evolved":true},
{"dex":653,"name":"Fynx","en":"Fennekin"},
{"dex":654,"name":"Rutena","en":"Braixen","evolved":true},
{"dex":655,"name":"Fennexis","en":"Delphox","evolved":true},
{"dex":656,"name":"Froxy","en":"Froakie"},
{"dex":657,"name":"Amphizel","en":"Frogadier","evolved":true},
{"dex":658,"name":"Quajutsu","en":"Greninja","evolved":true},
{"dex":"658A","name":"Quajutsu","de":"Ash-Quajutsu","en":"Ash-Greninja","evolved":true},
{"dex":659,"name":"Scoppel","en":"Bunnelby"},
{"dex":660,"name":"Grebbit","en":"Diggersby","evolved":true},
{"dex":661,"name":"Dartiri","en":"Fletchling"},
{"dex":662,"name":"Dartignis","en":"Fletchinder","evolved":true},
{"dex":663,"name":"Fiaro","en":"Talonflame","evolved":true},
{"dex":664,"name":"Purmel","en":"Scatterbug"},
{"dex":665,"name":"Puponcho","en":"Spewpa","evolved":true},
{"dex":666,"name":"Vivillon","evolved":true},
{"dex":667,"name":"Leofeo","en":"Litleo"},
{"dex":668,"name":"Pyroleo","en":"Pyroar","evolved":true},
{"dex":669,"name":"Flabébé"},
{"dex":670,"name":"Floette","evolved":true},
{"dex":671,"name":"Florges","evolved":true},
{"dex":672,"name":"Mähikel","en":"Skiddo"},
{"dex":673,"name":"Chevrumm","en":"Gogoat","evolved":true},
{"dex":674,"name":"Pam-Pam","en":"Pancham"},
{"dex":675,"name":"Pandagro","en":"Pangoro","evolved":true},
{"dex":676,"name":"Coiffwaff","en":"Furfrou"},
{"dex":677,"name":"Psiau","en":"Espurr"},
{"dex":678,"name":"Psiaugon","en":"Meowstic","evolved":true},
{"dex":679,"name":"Gramokles","en":"Honedge"},
{"dex":680,"name":"Duokles","en":"Doublade","evolved":true},
{"dex":681,"name":"Durengard","de":"Durengard (Schildform)","en":"Aegislash (Shield Forme)","evolved":true},
{"dex":"681B","name":"Durengard","de":"Durengard (Klingenform)","en":"Aegislash (Blade Forme)","evolved":true},
{"dex":682,"name":"Parfi","en":"Spritzee"},
{"dex":683,"name":"Parfinesse","en":"Aromatisse","evolved":true},
{"dex":684,"name":"Flauschling","en":"Swirlix"},
{"dex":685,"name":"Sabbaione","en":"Slurpuff","evolved":true},
{"dex":686,"name":"Iscalar","en":"Inkay"},
{"dex":687,"name":"Calamanero","en":"Malamar","evolved":true},
{"dex":688,"name":"Bithora","en":"Binacle"},
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
{"dex":706,"name":"Viscogon","en":"Goodra","evolved":true},
{"dex":707,"name":"Clavion","en":"Klefki"},
{"dex":708,"name":"Paragoni","en":"Phantump"},
{"dex":709,"name":"Trombork","en":"Trevenant","evolved":true},
{"dex":710,"name":"Irrbis","de":"Irrbis (Größe M)","en":"Pumpkaboo (Average Size)"},
{"dex":"710S","name":"Irrbis","de":"Irrbis (Größe S)","en":"Pumpkaboo (Small Size)"},
{"dex":"710L","name":"Irrbis","de":"Irrbis (Größe L)","en":"Pumpkaboo (Large Size)"},
{"dex":"710X","name":"Irrbis","de":"Irrbis (Größe XL)","en":"Pumpkaboo (Super Size)"},
{"dex":711,"name":"Pumpdjinn","de":"Pumpdjinn (Größe M)","en":"Gourgeist (Average Size)","evolved":true},
{"dex":"711S","name":"Pumpdjinn","de":"Pumpdjinn (Größe S)","en":"Gourgeist (Small Size)","evolved":true},
{"dex":"711L","name":"Pumpdjinn","de":"Pumpdjinn (Größe L)","en":"Gourgeist (Large Size)","evolved":true},
{"dex":"711X","name":"Pumpdjinn","de":"Pumpdjinn (Größe XL)","en":"Gourgeist (Super Size)","evolved":true},
{"dex":712,"name":"Arktip","en":"Bergmite"},
{"dex":713,"name":"Arktilas","en":"Avalugg","evolved":true},
{"dex":714,"name":"eF-eM","en":"Noibat"},
{"dex":715,"name":"UHaFnir","en":"Noivern","evolved":true},
{"dex":716,"name":"Xerneas","legendary":true},
{"dex":717,"name":"Yveltal","legendary":true},
{"dex":718,"name":"Zygarde","de":"50%-Zygarde","en":"Zygarde 50% Forme","legendary":true},
{"dex":"718T","name":"Zygarde","de":"10%-Zygarde","en":"Zygarde 10% Forme","legendary":true},
{"dex":"718C","name":"Zygarde","de":"Optimum-Zygarde","en":"Zygarde Complete Forme","legendary":true},
{"dex":719,"name":"Diancie","mythical":true},
{"dex":720,"name":"Hoopa","de":"Gebanntes Hoopa","en":"Hoopa Confined","mythical":true},
{"dex":"720U","name":"Hoopa","de":"Entfesseltes Hoopa","en":"Hoopa Unbound","mythical":true},
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
{"dex":725,"name":"Flamiau","en":"Litten"},
{"dex":726,"name":"Miezunder","en":"Torracat","evolved":true},
{"dex":727,"name":"Fuegro","en":"Incineroar","evolved":true},
{"dex":728,"name":"Robball","en":"Popplio"},
{"dex":729,"name":"Marikeck","en":"Brionne","evolved":true},
{"dex":730,"name":"Primarene","en":"Primarina","evolved":true},
{"dex":731,"name":"Peppeck","en":"Pikipek"},
{"dex":732,"name":"Trompeck","en":"Trumbeak","evolved":true},
{"dex":733,"name":"Tukanon","en":"Toucannon","evolved":true},
{"dex":734,"name":"Mangunior","en":"Yungoos"},
{"dex":735,"name":"Manguspektor","en":"Gumshoos","evolved":true},
{"dex":736,"name":"Mabula","en":"Grubbin"},
{"dex":737,"name":"Akkup","en":"Charjabug","evolved":true},
{"dex":738,"name":"Donarion","en":"Vikavolt","evolved":true},
{"dex":739,"name":"Krabbox","en":"Crabrawler"},
{"dex":740,"name":"Krawell","en":"Crabominable","evolved":true},
{"dex":741,"name":"Choreogel","de":"Choreogel (Flamenco-Stil)","en":"Oricorio (Baile Style)"},
{"dex":"741M","name":"Choreogel","de":"Choreogel (Cheerleading-Stil)","en":"Oricorio (Pom-Pom Style)"},
{"dex":"741P","name":"Choreogel","de":"Choreogel (Hula-Stil)","en":"Oricorio (Pa'u Style)"},
{"dex":"741S","name":"Choreogel","de":"Choreogel (Buyo-Stil)","en":"Oricorio (Sensu Style)"},
{"dex":742,"name":"Wommel","en":"Cutiefly"},
{"dex":743,"name":"Bandelby","en":"Ribombee","evolved":true},
{"dex":744,"name":"Wuffels","en":"Rockruff"},
{"dex":745,"name":"Wolwerock","de":"Wolwerock (Tagform)","en":"Lycanroc (Midday Form)","evolved":true},
{"dex":"745N","name":"Wolwerock","de":"Wolwerock (Nachtform)","en":"Lycanroc (Midnight Form)","evolved":true},
{"dex":"745D","name":"Wolwerock","de":"Wolwerock (Zwielichtform)","en":"Lycanroc (Dusk Form)","evolved":true},
{"dex":746,"name":"Lusardin","de":"Lusardin (Einzelform)","en":"Wishiwashi (Solo Form)"},
{"dex":"746S","name":"Lusardin","de":"Lusardin (Schwarmform)","en":"Wishiwashi (School Form)"},
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
{"dex":759,"name":"Velursi","en":"Stufful"},
{"dex":760,"name":"Kosturso","en":"Bewear","evolved":true},
{"dex":761,"name":"Frubberl","en":"Bounsweet"},
{"dex":762,"name":"Frubaila","en":"Steenee","evolved":true},
{"dex":763,"name":"Fruyal","en":"Tsareena","evolved":true},
{"dex":764,"name":"Curelei","en":"Comfey"},
{"dex":765,"name":"Kommandutan","en":"Oranguru"},
{"dex":766,"name":"Quartermak","en":"Passimian"},
{"dex":767,"name":"Reißlaus","en":"Wimpod"},
{"dex":768,"name":"Tectass","en":"Golisopod","evolved":true},
{"dex":769,"name":"Sankabuh","en":"Sandygast"},
{"dex":770,"name":"Colossand","en":"Palossand","evolved":true},
{"dex":771,"name":"Gufa","en":"Pyukumuku"},
{"dex":772,"name":"Typ:Null","en":"Type: Null","legendary":true},
{"dex":773,"name":"Amigento","en":"Silvally","legendary":true,"evolved":true},
{"dex":774,"name":"Meteno","de":"Meteno (Meteorform)","en":"Minior (Meteor Form)"},
{"dex":"774C","name":"Meteno","de":"Meteno (Kern)","en":"Minior (Core)"},
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
{"dex":797,"name":"Kaguron","en":"Celesteela","ultrabeast":true},
{"dex":798,"name":"Katagami","en":"Kartana","ultrabeast":true},
{"dex":799,"name":"Schlingking","en":"Guzzlord","ultrabeast":true},
{"dex":800,"name":"Necrozma","legendary":true},
{"dex":"800M","name":"Necrozma","de":"Necrozma (Abendmähne)","en":"Dusk Mane Necrozma","legendary":true},
{"dex":"800W","name":"Necrozma","de":"Necrozma (Morgenschwingen)","en":"Dawn Wings Necrozma","legendary":true},
{"dex":"800U","name":"Necrozma","de":"Ultra-Necrozma","en":"Ultra Necrozma","legendary":true},
{"dex":801,"name":"Magearna","mythical":true},
{"dex":802,"name":"Marshadow","mythical":true},
{"dex":803,"name":"Venicro","en":"Poipole","ultrabeast":true},
{"dex":804,"name":"Agoyon","en":"Naganadel","ultrabeast":true,"evolved":true},
{"dex":805,"name":"Muramura","en":"Stakataka","ultrabeast":true},
{"dex":806,"name":"Kopplosio","en":"Blacephalon","ultrabeast":true},
{"dex":807,"name":"Zeraora","mythical":true},
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
{"id":"LMA","name":"Magnet-Lockmodul","en":"Magnetic Lure Module"}
];

var specialfilter = [
{"id":"P","name":"Alle Begegnungen","en":"All encounters"},
{"id":"S","name":"Alle möglichen Shiny Begegnungen","en":"All potential Shiny encounters"}
];

var changelogjson = {
	"items": [		
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

var questjson = [
{"id":"berry-3","de":"Verwende 3 Beeren beim Fangen von Pokémon","en":"Use 3 Berries to help catch Pokémon"},
{"id":"berry-5","de":"Verwende 5 Beeren beim Fangen von Pokémon","en":"Use 5 Berries to help catch Pokémon"},
{"id":"berry-na-5","de":"Verwende 5 Nanabbeeren beim Fangen von Pokémon","en":"Use 5 Nanab Berries to help catch Pokémon"},
{"id":"berry-na-10","de":"Verwende 10 Nanabbeeren beim Fangen von Pokémon","en":"Use 10 Nanab Berries to help catch Pokémon"},
{"id":"berry-pi-5","de":"Verwende 5 Sananabeeren beim Fangen von Pokémon","en":"Use 5 Pinap Berries to help catch Pokémon"},
{"id":"berry-pi-10","de":"Verwende 10 Sananabeeren beim Fangen von Pokémon","en":"Use 10 Pinap Berries to help catch Pokémon"},
{"id":"berry-ra-5","de":"Verwende 5 Himmihbeeren beim Fangen von Pokémon","en":"Use 5 Razz Berries to help catch Pokémon"},
{"id":"buddy-1","de":"Verdiene einen Bonbon durch Spazieren mit deinem Kumpel","en":"Earn a candy walking with your buddy"},
{"id":"buddy-3","de":"Verdiene 3 Bonbons durch Spazieren mit deinem Kumpel","en":"Earn 3 candy walking with your buddy"},
{"id":"buddy-5","de":"Verdiene 5 Bonbons durch Spazieren mit deinem Kumpel","en":"Earn 5 candy walking with your buddy"},
{"id":"catch-3","de":"Fange 3 Pokémon","en":"Catch 3 Pokémon"},
{"id":"catch-8","de":"Fange 8 Pokémon","en":"Catch 8 Pokémon"},
{"id":"catch-10","de":"Fange 10 Pokémon","en":"Catch 10 Pokémon"},
{"id":"catch-15","de":"Fange 15 Pokémon","en":"Catch 15 Pokémon"},
{"id":"catch-25","de":"Fange 25 Pokémon","en":"Catch 25 Pokémon"},
{"id":"catch-bu-3","de":"Fange 3 Pokémon vom Typ Käfer","en":"Catch 3 Bug-type Pokémon"},
{"id":"catch-bu-10","de":"Fange 10 Pokémon vom Typ Käfer","en":"Catch 10 Bug-type Pokémon"},
{"id":"catch-bu-15","de":"Fange 15 Pokémon vom Typ Käfer","en":"Catch 15 Bug-type Pokémon"},
{"id":"catch-da-3","de":"Fange 3 Pokémon vom Typ Unlicht","en":"Catch 3 Dark-type Pokémon"},
{"id":"catch-da-5","de":"Fange 5 Pokémon vom Typ Unlicht","en":"Catch 5 Dark-type Pokémon"},
{"id":"catch-dr-1","de":"Fange ein Pokémon vom Typ Drache","en":"Catch a Dragon-type Pokémon"},
{"id":"catch-dr-3","de":"Fange 3 Pokémon vom Typ Drache","en":"Catch 3 Dragon-type Pokémon"},
{"id":"catch-el-3","de":"Fange 3 Pokémon vom Typ Elektro","en":"Catch 3 Electric-type Pokémon"},
{"id":"catch-el-5","de":"Fange 5 Pokémon vom Typ Elektro","en":"Catch 5 Electric-type Pokémon"},
{"id":"catch-elpono-3","de":"Fange 3 Pokémon vom Typ Elektro, Psycho oder Normal","en":"Catch 3 Electric-, Psychic- or Normal-type Pokémon"},
{"id":"catch-fa-5","de":"Fange 5 Pokémon vom Typ Fee","en":"Catch 5 Fairy-type Pokémon"},
{"id":"catch-fg-5","de":"Fange 5 Pokémon vom Typ Kampf","en":"Catch 5 Fighting-type Pokémon"},
{"id":"catch-fi-3","de":"Fange 3 Pokémon vom Typ Feuer","en":"Catch 3 Fire-type Pokémon"},
{"id":"catch-fi-5","de":"Fange 5 Pokémon vom Typ Feuer","en":"Catch 5 Fire-type Pokémon"},
{"id":"catch-fiwael-3","de":"Fange 3 Pokémon vom Typ Feuer, Wasser oder Elektro","en":"Catch 3 Fire-, Water- or Electric-type Pokémon"},
{"id":"catch-fl-3","de":"Fange 3 Pokémon vom Typ Flug","en":"Catch 3 Flying-type Pokémon"},
{"id":"catch-fl-5","de":"Fange 5 Pokémon vom Typ Flug","en":"Catch 5 Flying-type Pokémon"},
{"id":"catch-fldaps-5","de":"Fange 5 Pokémon vom Typ Flug, Unlicht oder Psycho","en":"Catch 5 Flying-, Dark- or Psychic-type Pokémon"},
{"id":"catch-gh-10","de":"Fange 10 Pokémon vom Typ Geist","en":"Catch 10 Ghost-type Pokémon"},
{"id":"catch-gn-10","de":"Fange 10 Pokémon vom Typ Boden","en":"Catch 10 Ground-type Pokémon"},
{"id":"catch-gr-10","de":"Fange 10 Pokémon vom Typ Pflanze","en":"Catch 10 Grass-type Pokémon"},
{"id":"catch-grfiwa-3","de":"Fange 3 Pokémon vom Typ Pflanze, Feuer oder Wasser","en":"Catch 3 Grass-, Fire- or Water-type Pokémon"},
{"id":"catch-grgnfi-3","de":"Fange 3 Pokémon vom Typ Pflanze, Boden oder Feuer","en":"Catch 3 Grass-, Ground- or Fire-type Pokémon"},
{"id":"catch-gric-4","de":"Fange 4 Pokémon vom Typ Pflanze oder Eis","en":"Catch 4 Grass- or Ice-type Pokémon"},
{"id":"catch-grwafi-3","de":"Fange 3 Pokémon vom Typ Pflanze, Wasser oder Feuer","en":"Catch 3 Grass-, Water- or Fire-type Pokémon"},
{"id":"catch-grwafi-7","de":"Fange 7 Pokémon vom Typ Pflanze, Wasser oder Feuer","en":"Catch 7 Grass-, Water- or Fire-type Pokémon"},
{"id":"catch-ic-10","de":"Fange 10 Pokémon vom Typ Eis","en":"Catch 10 Ice-type Pokémon"},
{"id":"catch-no-5","de":"Fange 5 Pokémon vom Typ Normal","en":"Catch 5 Normal-type Pokémon"},
{"id":"catch-no-10","de":"Fange 10 Pokémon vom Typ Normal","en":"Catch 10 Normal-type Pokémon"},
{"id":"catch-po-3","de":"Fange 3 Pokémon vom Typ Gift","en":"Catch 3 Poison-type Pokémon"},
{"id":"catch-ps-10","de":"Fange 10 Pokémon vom Typ Psycho","en":"Catch 10 Psychic-type Pokémon"},
{"id":"catch-wa-2","de":"Fange 2 Pokémon vom Typ Wasser","en":"Catch 2 Water-type Pokémon"},
{"id":"catch-wa-5","de":"Fange 5 Pokémon vom Typ Wasser","en":"Catch 5 Water-type Pokémon"},
{"id":"catch-wa-10","de":"Fange 10 Pokémon vom Typ Wasser","en":"Catch 10 Water-type Pokémon"},
{"id":"catch-waelbu-3","de":"Fange 3 Pokémon vom Typ Wasser, Elektro oder Käfer","en":"Catch 3 Water-, Electric- or Bug-type Pokémon"},
{"id":"catchdiff-da-3","de":"Fange 3 verschiedene Pokémon vom Typ Unlicht","en":"Catch 3 different species of Dark-type Pokémon"},
{"id":"catchdiff-ps-3","de":"Fange 3 verschiedene Pokémon vom Typ Psycho","en":"Catch 3 different species of Psychic-type Pokémon"},
{"id":"catchspec-16-198-3","de":"Fange 3 Taubsi oder Kramurx","en":"Catch 3 Pidgey or Murkrow"},
{"id":"catchspec-43-69-3","de":"Fange 3 Myrapla oder Knofensa","en":"Catch 3 Oddish or Bellsprout"},
{"id":"catchspec-52-300-3","de":"Fange 3 Mauzi oder Eneco","en":"Catch 3 Meowth or Skitty"},
{"id":"catchspec-52-58-1","de":"Fange ein Mauzi oder Fukano","en":"Catch a Meowth or Growlithe"},
{"id":"catchspec-132-1","de":"Fange ein Ditto","en":"Catch a Ditto"},
{"id":"catchspec-165-167-5","de":"Fange 5 Ledyba oder Webarak","en":"Catch 5 Ledyba or Spinarak"},
{"id":"catchspec-228-261-5","de":"Fange 5 Fiffyen oder Hunduster","en":"Catch 5 Poochyena or Houndour"},
{"id":"catchspec-252-258-3","de":"Fange 3 Geckarbor oder Hydropi","en":"Catch 3 Treecko or Mudkip"},
{"id":"catchspec-261-300-1","de":"Fange ein Eneco oder Fiffyen","en":"Catch a Skitty or Poochyena"},
{"id":"catchspec-265-2","de":"Fange 2 Waumpel","en":"Catch 2 Wurmple"},
{"id":"catchspec-296-307-3","de":"Fange 3 Makuhita oder Meditie","en":"Catch 3 Makuhita or Meditite"},
{"id":"catchspec-333-3","de":"Fange 3 Wablu","en":"Catch 3 Swablu"},
{"id":"catchweather-3","de":"Fange 3 Pokémon mit Wetterverstärkung","en":"Catch 3 Pokémon with Weather Boost"},
{"id":"catchweather-5","de":"Fange 5 Pokémon mit Wetterverstärkung","en":"Catch 5 Pokémon with Weather Boost"},
{"id":"catchweather-10","de":"Fange 10 Pokémon mit Wetterverstärkung","en":"Catch 10 Pokémon with Weather Boost"},
{"id":"catchweather-20","de":"Fange 20 Pokémon mit Wetterverstärkung","en":"Catch 20 Pokémon with Weather Boost"},
{"id":"egg-1","de":"Brüte ein Ei aus","en":"Hatch an Egg"},
{"id":"egg-2","de":"Brüte 2 Eier aus","en":"Hatch 2 Eggs"},
{"id":"egg-3","de":"Brüte 3 Eier aus","en":"Hatch 3 Eggs"},
{"id":"egg-5","de":"Brüte 5 Eier aus","en":"Hatch 5 Eggs"},
{"id":"evolve-1","de":"Entwickle ein Pokémon","en":"Evolve a Pokémon"},
{"id":"evolve-3","de":"Entwickle 3 Pokémon","en":"Evolve 3 Pokémon"},
{"id":"evolve-bu-3","de":"Entwickle 3 Pokémon vom Typ Käfer","en":"Evolve 3 Bug-type Pokémon"},
{"id":"evolve-el-3","de":"Entwickle 3 Pokémon vom Typ Elektro","en":"Evolve 3 Electric-type Pokémon"},
{"id":"evolve-elfiwa-1","de":"Entwickle ein Pokémon vom Typ Elektro, Feuer oder Wasser","en":"Evolve an Electric-, Fire- or Water-type Pokémon"},
{"id":"evolve-fi-1","de":"Entwickle ein Pokémon vom Typ Feuer","en":"Evolve a Fire-type Pokémon"},
{"id":"evolve-fi-5","de":"Entwickle 5 Pokémon vom Typ Feuer","en":"Evolve 5 Fire-type Pokémon"},
{"id":"evolve-gr-1","de":"Entwickle ein Pokémon vom Typ Pflanze","en":"Evolve a Grass-type Pokémon"},
{"id":"evolve-gr-2","de":"Entwickle 2 Pokémon vom Typ Pflanze","en":"Evolve 2 Grass-type Pokémon"},
{"id":"evolve-gr-5","de":"Entwickle 5 Pokémon vom Typ Pflanze","en":"Evolve 5 Grass-type Pokémon"},
{"id":"evolve-wa-1","de":"Entwickle ein Pokémon vom Typ Wasser","en":"Evolve a Water-type Pokémon"},
{"id":"evolve-wa-2","de":"Entwickle 2 Pokémon vom Typ Wasser","en":"Evolve 2 Water-type Pokémon"},
{"id":"evolveitem-1","de":"Verwende ein Item um ein Pokémon zu entwickeln","de":"Use an item to evolve a Pokémon"},
{"id":"evolvespec-52-1","de":"Entwickle ein Mauzi","en":"Evolve a Meowth"},
{"id":"evolvespec-353-355-3","de":"Entwickle 3 Zwirrlicht oder Shuppet","en":"Evolve 3 Duskull or Shuppet"},
{"id":"friend-1","de":"Schließe eine neue Freundschaft","en":"Make a new friend"},
{"id":"gift-2","de":"Verschicke 2 Geschenke","en":"Send 2 gifts to friends"},
{"id":"gift-3","de":"Verschicke 3 Geschenke","en":"Send 3 gifts to friends"},
{"id":"gift-10","de":"Verschicke 10 Geschenke","en":"Send 10 gifts to friends"},
{"id":"gymbattle-1","de":"Kämpfe in einer Arena","en":"Battle in a Gym"},
{"id":"gymbattle-5","de":"Kämpfe 5-mal in einer Arena","en":"Battle in a Gym 5 times"},
{"id":"gymcharge-1","de":"Setze eine sehr effektive Lade-Attacke in einem Kampf ein","en":"Use a super effective Charged Attack in a Gym battle"},
{"id":"gymcharge-5","de":"Setze eine sehr effektive Lade-Attacke in 5 Arenakämpfen ein","en":"Use a super effective Charged Attack in 5 Gym battles"},
{"id":"gymcharge-7","de":"Setze eine sehr effektive Lade-Attacke in 7 Arenakämpfen ein","en":"Use a super effective Charged Attack in 7 Gym battles"},
{"id":"gymwin-1","de":"Gewinne einen Arenakampf","en":"Win a Gym battle"},
{"id":"gymwin-3","de":"Gewinne 3 Arenakämpfe","en":"Win 3 Gym battles"},
{"id":"gymwin-5","de":"Gewinne 5 Arenakämpfe","en":"Win 5 Gym battles"},
{"id":"powerup-1","de":"Verwende ein Power-Up bei Pokémon","en":"Power Up a Pokémon"},
{"id":"powerup-3","de":"Verwende 3 Power-Ups bei Pokémon","en":"Power Up Pokémon 3 times"},
{"id":"powerup-5","de":"Verwende 5 Power-Ups bei Pokémon","en":"Power Up Pokémon 5 times"},
{"id":"powerup-7","de":"Verwende 7 Power-Ups bei Pokémon","en":"Power Up Pokémon 7 times"},
{"id":"powerup-10","de":"Verwende 10 Power-Ups bei Pokémon","en":"Power Up Pokémon 10 times"},
{"id":"raid-1","de":"Kämpfe in einem Raid","en":"Battle in a raid"},
{"id":"raidwin-1","de":"Gewinne einen Raid","en":"Win a raid"},
{"id":"raidwin-2","de":"Gewinne 2 Raids","en":"Win 2 raids"},
{"id":"raidwin-3","de":"Gewinne 3 Raids","en":"Win 3 raids"},
{"id":"raidwin-5","de":"Gewinne 5 Raids","en":"Win 5 raids"},
{"id":"raidwin-lv2-1","de":"Gewinne einen Level-2-Raid oder höher","en":"Win a level 2 or higher raid"},
{"id":"raidwin-lv3-1","de":"Gewinne einen Level-3-Raid oder höher","en":"Win a level 3 or higher raid"},
{"id":"rocket-1","de":"Besiege einen Team GO Rocket Rüpel","en":"Defeat a Team GO Rocket Grunt"},
{"id":"snapshot-wa-5","de":"Mache 5 Schnappschüsse von Pokémon vom Typ Wasser","en":"Take 5 Snapshots of Water-type Pokémon"},
{"id":"snapshotspec-133-5","de":"Mache 5 Schnappschüsse von Evoli","en":"Take 5 Snapshots of Eevee"},
{"id":"spin-2","de":"Drehe 2 PokéStops oder Arenen","en":"Spin 2 Pokéstops or Gyms"},
{"id":"spin-10","de":"Drehe 10 PokéStops oder Arenen","en":"Spin 10 Pokéstops or Gyms"},
{"id":"spin-25","de":"Drehe 25 PokéStops oder Arenen","en":"Spin 25 Pokéstops or Gyms"},
{"id":"spinnew-2","de":"Drehe 2 PokéStops, die du noch nie besucht hast","en":"Spin 2 Pokéstops that were not previously visited"},
{"id":"spinnew-3","de":"Drehe 3 PokéStops, die du noch nie besucht hast","en":"Spin 3 Pokéstops that were not previously visited"},
{"id":"spinnew-6","de":"Drehe 6 PokéStops, die du noch nie besucht hast","en":"Spin 6 Pokéstops that were not previously visited"},
{"id":"teamleader-2","de":"Kämpfe 2-mal gegen einen Teamleader","en":"Battle a team leader 2 times"},
{"id":"throw-ex-1","de":"Lande einen fabelhaften Wurf","en":"Make an Excellent Throw"},
{"id":"throw-ex-3","de":"Lande 3 fabelhafte Würfe","en":"Make 3 Excellent Throws"},
{"id":"throw-gr-3","de":"Lande 3 großartige Würfe","en":"Make 3 Great Throws"},
{"id":"throw-gr-5","de":"Lande 5 großartige Würfe","en":"Make 5 Great Throws"},
{"id":"throw-gr-10","de":"Lande 10 großartige Würfe","en":"Make 10 Great Throws"},
{"id":"throw-ni-1","de":"Lande einen guten Wurf","en":"Make a Nice Throw"},
{"id":"throw-ni-5","de":"Lande 5 gute Würfe","en":"Make 5 Nice Throws"},
{"id":"throw-ni-15","de":"Lande 15 gute Würfe","en":"Make 15 Nice Throws"},
{"id":"throw-row-ex-2","de":"Lande 2 fabelhafte Würfe hintereinander","en":"Make 2 Excellent Throws in a row"},
{"id":"throw-row-ex-3","de":"Lande 3 fabelhafte Würfe hintereinander","en":"Make 3 Excellent Throws in a row"},
{"id":"throw-row-gr-2","de":"Lande 2 großartige Würfe hintereinander","en":"Make 2 Great Throws in a row"},
{"id":"throw-row-gr-3","de":"Lande 3 großartige Würfe hintereinander","en":"Make 3 Great Throws in a row"},
{"id":"throw-row-gr-5","de":"Lande 5 großartige Würfe hintereinander","en":"Make 5 Great Throws in a row"},
{"id":"throw-row-ni-2","de":"Lande 2 gute Würfe hintereinander","en":"Make 2 Nice Throws in a row"},
{"id":"throw-row-ni-3","de":"Lande 3 gute Würfe hintereinander","en":"Make 3 Nice Throws in a row"},
{"id":"throwcurve-5","de":"Lande 5 Curveball-Würfe","en":"Make 5 Curveball Throws"},
{"id":"throwcurve-ex-1","de":"Lande einen fabelhaften Curveball-Wurf","en":"Make an Excellent Curveball Throw"},
{"id":"throwcurve-gr-3","de":"Lande 3 großartige Curveball-Würfe","en":"Make 3 Great Curveball Throws"},
{"id":"throwcurve-ni-1","de":"Lande einen guten Curveball-Wurf","en":"Make a Nice Curveball Throw"},
{"id":"throwcurve-row-3","de":"Lande 3 Curveball-Würfe hintereinander","en":"Make 3 Curveball Throws in a row"},
{"id":"throwcurve-row-5","de":"Lande 5 Curveball-Würfe hintereinander","en":"Make 5 Curveball Throws in a row"},
{"id":"throwcurve-row-gr-2","de":"Lande 2 großartige Curveball-Würfe hintereinander","en":"Make 2 Great Curveball Throws in a row"},
{"id":"throwcurve-row-gr-3","de":"Lande 3 großartige Curveball-Würfe hintereinander","en":"Make 3 Great Curveball Throws in a row"},
{"id":"throwcurve-row-gr-4","de":"Lande 4 großartige Curveball-Würfe hintereinander","en":"Make 4 Great Curveball Throws in a row"},
{"id":"throwcurve-row-gr-5","de":"Lande 5 großartige Curveball-Würfe hintereinander","en":"Make 5 Great Curveball Throws in a row"},
{"id":"throwcurve-row-ni-2","de":"Lande 2 gute Curveball-Würfe hintereinander","en":"Make 2 Nice Curveball Throws in a row"},
{"id":"throwcurve-row-ni-3","de":"Lande 3 gute Curveball-Würfe hintereinander","en":"Make 3 Nice Curveball Throws in a row"},
{"id":"trade-1","de":"Tausche ein Pokémon","en":"Trade a Pokémon"},
{"id":"trade-10","de":"Tausche 10 Pokémon","en":"Trade 10 Pokémon"},
{"id":"trainer-1","de":"Kämpfe gegen einen anderen Trainer","en":"Battle another trainer"},
{"id":"transfer-3","de":"Verschicke 3 Pokémon","en":"Transfer 3 Pokémon"},
{"id":"transfer-10","de":"Verschicke 10 Pokémon","en":"Transfer 10 Pokémon"}
];

var raids = {
	"tier5":[386,"386A","386D","386S"],
	"tier4":[359,"105A",149,131,210],
	"tier3":[303,"26A",403]
};

var quests = [
	{"dex":1,"quest":["powerup-5","gymwin-1"]},
	{"dex":4,"quest":["powerup-5","gymwin-1"]},
	{"dex":7,"quest":["powerup-5","gymwin-1"]},
	{"dex":27,"quest":["catch-15"]},
	{"dex":37,"quest":["catchweather-5"]},
	{"dex":56,"quest":["gymbattle-1"]},
	{"dex":60,"quest":["catchweather-5"]},
	{"dex":66,"quest":["gymbattle-5"]},
	{"dex":77,"quest":["buddy-3"]},
	{"dex":84,"quest":["catch-fiwael-3"]},
	{"dex":86,"quest":["catch-gric-4"]},
	{"dex":92,"quest":["throw-gr-3"]},
	{"dex":95,"quest":["throw-row-gr-3"]},
	{"dex":96,"quest":["catchdiff-ps-3"]},
	{"dex":100,"quest":["throw-ni-5"]},
	{"dex":102,"quest":["egg-1"]},
	{"dex":104,"quest":["evolve-1"]},
	{"dex":113,"quest":["egg-5"]},
	{"dex":123,"quest":["berry-na-10"]},
	{"dex":124,"quest":["gymwin-3"]},
	{"dex":125,"quest":["gymcharge-7"]},
	{"dex":126,"quest":["egg-3"]},
	{"dex":129,"quest":["catch-10"]},
	{"dex":138,"quest":["raidwin-lv3-1"]},
	{"dex":140,"quest":["raidwin-lv3-1"]},
	{"dex":142,"quest":["raidwin-5"]},
	{"dex":147,"quest":["catch-dr-1"]},
	{"dex":177,"quest":["teamleader-2"]},
	{"dex":183,"quest":["catch-fa-5"]},
	{"dex":215,"quest":["gift-10"]},
	{"dex":220,"quest":["berry-ra-5"]},
	{"dex":246,"quest":["throw-row-ex-3"]},
	{"dex":261,"quest":["catchdiff-da-3"]},
	{"dex":263,"quest":["catch-no-5"]},
	{"dex":296,"quest":["gymbattle-1"]},
	{"dex":302,"quest":["transfer-3"]},
	{"dex":309,"quest":["trainer-1"]},
	{"dex":316,"quest":["snapshotspec-133-5"]},
	{"dex":325,"quest":["raid-1"]},
	{"dex":327,"quest":["throwcurve-row-gr-5"]},
	{"dex":345,"quest":["throw-gr-3"]},
	{"dex":347,"quest":["throw-gr-3"]},
	{"dex":361,"quest":["berry-5"]},
	{"dex":427,"quest":["throw-gr-3"]},
	{"dex":436,"quest":["trade-1"]}
];

var legacy = [3,9,10,16,25,32,36,38,40,42,50,55,58,59,61,67,70,73,74,81,88,98,"103A",107,109,114,117,121,127,131,132,133,137,171,179,184,191,193,200,203,204,209,216,224,228,231,241,252,256,270,276,286,287,290,294,299,307,310,311,312,315,317,318,320,322,328,333,339,349,353,359,366,387,390,399,408,410,425];
var forms = ["19A","20A","26A","27A","28A","37A","38A","50A","51A","52A","53A","74A","75A","76A","88A","89A","103A","105A","150R","351I","351R","351S","386A","386D","386S","412S","412T","413S","413T","421S","479F","479H","479I","479M","479W","487O","492S","550B","555Z","641T","642T","645T","646B","646W","648P"];
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
		txt += '<optgroup id="t5" label="5er"><option ';
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
		txt += '<optgroup id="t4" label="4er"><option ';
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
		txt += '<optgroup id="t3" label="3er, 2er, 1er">';
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
		txt += "<option value='" + gymjson.gyms[i].value + "'";
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
		if (!pokemon[i].evolved && !pokemon[i].legendary && !pokemon[i].mythical && !pokemon[i].baby && !pokemon[i].alolan && !pokemon[i].mega && !pokemon[i].ultrabeast && !pokemon[i].galarian) {
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
		txt += '<button type="button" class="m-1 btn btn-outline-secondary" id="button' + quests[i].dex + '" value="' + quests[i].dex + '"';
		var questtext = "";
		try {
			for (j=0; j < quests[i].quest.length ; j++) {
				questtext += (j>0)?"<br>":"";
				questtext += getQuestById(quests[i].quest[j]).de;
			}
			txt += ' data-toggle="tooltip" title="' + questtext + '"';
		} catch {}
		txt += '>' + getPkmnByDex(quests[i].dex)[0].name; 
		txt += (getPkmnByDex(quests[i].dex)[0].getshiny)?"✨":"" + '</button>';
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
	$('[data-toggle="tooltip"]').tooltip({html: true, trigger: "hover", delay: {show: 1000, hide: 100}}); 
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
  var diff = (new Date("Jan 01 1970 "+start).getTime() - new Date("Jan 01 1970 "+time).getTime()) / 60000;
  var end = new Date("Jan 01 1970 "+time);
  end.setMinutes(end.getMinutes()+45);
  end = end.toTimeString().substr(0,5);
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
  
  if (region == "Gesundbrunnen") {
  
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

	  if (t3index == 0 || $("#raid").prop("selectedIndex") <= t3index || start != "") {
		text += "<br><br><b>Startzeit:</b> ";
		if ((diff <= 45 && diff >= 0 && time != "") || (time == "" && start != "") || startwarn == 11) {
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
  exc.value = "m-3 p-2 border rounded bg-light";
  document.getElementById("ex").setAttributeNode(exc);

  document.getElementById("ex").innerHTML = text;
  
  var text2 = text.replace(/<br>/g,"\n");
  text2 = text2.replace(/<b>/g,"*");
  text2 = text2.replace(/<\/b>/g,"*");
  
  var n = encodeURIComponent(text2);
  $("#txt_button").attr("onclick", "window.open('https://api.whatsapp.com/send?text=" + n + "')");
  
  n = n.replace(/\*/g,"**");
  n = n.replace("%0A","&text=");
  $("#txt_button2").attr("onclick", "window.open('https://t.me/share/url?url=" + n + "')"); 

  $("#but").show();
  
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
	
	$("#raid>optgroup>option").text(function(i,origText){
		return raid_de[raid_en.indexOf(origText)];
	});
	
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

	$("#pokelist button").attr("data-original-title", function(i, origValue){
		var quester = getQuestByDex($(this).attr("value")).quest;
		var newValue = "";
		for (i = 0; i < quester.length; i++) {
			newValue += (i>0)?"<br>":"";
			newValue += getQuestById(quester[i]).de;
		}
		return newValue;
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
	
	tinysort("#t5>option:not(:first-child)");
	tinysort("#t4>option:not(:first-child)");
	
	$('.selectpicker').selectpicker('refresh');
  }
  if (getLang() == "en") {
	for (i = 0; i < txtid.length; i++) {
		try {
			document.getElementById(txtid[i]).innerHTML = txt_en[i];
		} catch {}
	}
	
	$("#raid>optgroup>option").text(function(i,origText){
		return raid_en[raid_de.indexOf(origText)];
	});
	
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

	$("#pokelist button").attr("data-original-title", function(i, origValue){
		var quester = getQuestByDex($(this).attr("value")).quest;
		var newValue = "";
		for (i = 0; i < quester.length; i++) {
			newValue += (i>0)?"<br>":"";
			newValue += getQuestById(quester[i]).en;
		}
		return newValue;
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
	
	tinysort("#t5>option:not(:first-child)");
	tinysort("#t4>option:not(:first-child)");
	
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
		sel_q.splice(sel_q.indexOf("-" + $(this).attr("value")),1);

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

function getQuestByDex(name) {
  return quests.filter(function(quests){return quests.dex == name})[0];
}

function getQuestById(name) {
  return questjson.filter(function(questjson){return questjson.id == name})[0];
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

$(document).ready(function(){
	$('[data-toggle="tooltip"]').on({
		contextmenu: function(){
			$(this).tooltip("show");
		},
		click: function() {
			$(this).tooltip("hide");
		},
		blur: function(){
			$(this).tooltip("hide");
		}
	});
});