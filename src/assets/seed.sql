	
DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS lessons;


CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, descr text, img blob, lesson_count integer, progress integer);

CREATE TABLE IF NOT EXISTS lessons(id INTEGER PRIMARY KEY AUTOINCREMENT, header_title text, header_desc text, header_img text, category_id integer NOT NULL, paragraphs TEXT, img TEXT, index_lesson integer, is_complete bool);

INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count, progress) VALUES (
    1,
  'Geografie',
   "https://www.worldatlas.com/r/w728-h425-c728x425/upload/83/db/8f/geography.jpg",
  'Invata despre continente, relief si capitalele lumii!',
  '5',
   null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    2,
  'Animale',
  "https://hrbc.org.uk/app/uploads/2013/06/JungleAnimalsBorder-600x270.jpg",
  'De la habitatele lor la particularitatile fiecarei specii, lumea animalelor ramane fascinanta. Aceste lectii te vor ajuta sa o intelegi mai bine.',
  '5',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    3,
  'Sistemul solar',
  "https://www.scienceabc.com/wp-content/uploads/2015/09/Solar-System.jpg",
  ' Exploreaza spatiul cu aceste lectii despre planete, sateliti, asteroizi si alte corpuri ceresti fascinante!',
  '5',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    4,
  'Istoria lumii',
  "https://gmw.ethz.ch/en/_jcr_content/fullwidthimageHome/image.imageformat.carousel.750402162.jpg",
  'Te-ai intrebat vreodata cum a ajuns omenirea in punctul in care este astazi? Daca da, lectiile despre Istoria lumii sunt pentru tine! Aceste lectii contin informatii despre evenimentele majore din istorie care au schimbat lumea.',
  '5',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    5,
  'Stiinta de zi cu zi',
  "https://www.open.edu/openlearn/ocw/pluginfile.php/1139252/mod_resource/content/0/snhe_1_OLHP_786x400.jpg",
  'Tot ce e in jurul nostru este, la baza, stiinta - intra in detalii cu acest set de lectii, ce prezinta intr-un mod usor de inteles evenimente din viata de zi cu zi.',
  '5',
  null
);






INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Cele 7 continente',
  'Care sunt continentele lumii, si prin ce se deosebesc ele?',
  'http://www.whereig.com/images/world-continents-map.jpg',
  '1',
  '["Înainte de a enumera continentele lumii și de a specifica dimensiunile lor, trebuie să înțelegem ce este un „continent„? Continentul este o diviziune geografică alcătuită dintr-o întindere mare de uscat, mărginită, total sau parțial, de mări și de oceane, cuprinzând și unele insule sau arhipelaguri vecine.",
"Terra are sapte continente; in ordinea descrescanda a marimii lor, acestea sunt:"," - Asia (inclusiv peninsula Sinai) are o suprafata de 43.602.000 km patrati"," - Africa, cu o suprafata de 30.223.000 km patrati"," - America de Nord, cu o suprafata de 24.241.000 km patrati"," - America de Sud, cu o suprafata de 17.757.000 km patrati"," - Antarctica, cu o suprafata de 14.107.000 km patrati"," - Europa (inclusiv insulele apropiate ca: Islanda, Spitzberg, Marea Britanie si Irlanda, Balearele, Corsica si Sardinia, Sicilia si Creta, precum si Turcia europeana), cu o suprafata de 10.524.000 km patrati"," - Australia si Oceania (inclusiv Noua Guinee), cu suprafata de 8.970.00 km patrati."," Este de notat ca Europa, care nu este „bine” separata de Asia decat prin limita conventionala fixata de geografie pe creasta Muntilor Urali si pe fluviul cu acelasi nume pana in Marea Caspica, constituie, in fond, impreuna cu Asia o compacta masa continentala: Eurasia.",
"Afla mai multe aici: https://e-pedia.ro/2012/04/03/cate-continente-are-pamantul-si-care-sunt-acestea/" ]',
  '["https://3.bp.blogspot.com/-Nvz_D5W2FMg/VxeDjRrQwLI/AAAAAAAAHR8/8tIsg5Ts_ykV5Hd83q3KEfoYL07RFVNNgCLcB/s1600/continentele%2Blumii.png"," "," "," "," "," "," "," ","https://upload.wikimedia.org/wikipedia/commons/9/9c/World_Flag_map.png"]',
  '2',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Despre Terra',
  'Afla ceea ce face planeta noastra mama sa fie speciala!',
  'http://www.youthemploymentdecade.org/wp-content/uploads/2017/09/como-ayudar-al-planeta.jpg',
  '1',
  '["Planeta Pământ (numită și Terra sau Planeta albastră) este a treia planeta după distanța față de Soare și a cincea ca mărime în sistemul solar. Când desemnează planeta (și nu solul), cuvântul se scrie cu majusculă. Terra face parte dintre planetele interioare ale sistemului solar (planetele aflate în interiorul centurii de asteroizi). Este cea mai mare planetă telurica din sistemul solar, și singura din Univers cunoscută ca adăpostind viata(controverse legate de existența vietii extraterestre continuă să existe).",
"Terra s-a format acum aproximativ 4,57 miliarde (4,57×109) de ani, iar singurul ei satelit natural Luna, numită și Selena după zeița lunii Selene, a început să o orbiteze puțin timp după aceea, cu circa 4,533 miliarde (4,533×109) de ani în urmă. Pentru comparație, vârsta calculată a Universului este de circa 13,7 miliarde de ani. Suprafața Pământului este acoperită în proporție de 70,8% de apa, restul de 29,2% fiind solid și uscat. Zona acoperită de apă este împărțită în apa, iar uscatul se subîmparte în continente.",
"De la formarea sa Pământul a trecut prin numeroase procese geologice și biologice majore, astfel încât toate urmele condițiilor sale inițiale au fost șterse. Suprafața exterioară a planetei Terra este împărțită în mai multe plăci tectonice, care de-a lungul timpului se deplasează unele față de celelalte. Miezul planetei este activ (fierbinte și lichid), fiind format din mantaua topită și miezul metalic, generator al câmpului magnetic. Condițiile atmosferice și de la suprafață, care au permis apariția vieții pe Terra, au fost la rândul lor influențate în mod decisiv de către diversele forme de viață. Acestea se află într-o balanță ecologică fragilă, în permanentă schimbare.",
"Afla mai multe aici: https://oceanterra.weebly.com/"]',
  '["https://upload.wikimedia.org/wikipedia/commons/a/a5/Planets_and_dwarf_planets_of_the_Solar_System%2C_sizes_to_scale.png"," ","http://www.financiarul.ro/wp-content/uploads/structura-pamant.jpg"]',
  '1',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Cum a apărut viaţa pe pământ?',
  'O serie de procese fizice, geologice si biologice au creat viata pe Pamant!',
  'https://evolution.berkeley.edu/evolibrary/images/ldgcollage.jpg',
  '1',
  '["Cum a apărut viaţa pe pământ? Unii experţi consideră că viaţa terestră ar fi consecinţa finală a unui întreg lanţ de coincidenţe. Alţi astronomi sunt de părere că moleculele organice ar fi fost aduse pe pământ de asteroizi şi meteoriţi extratereştri. Până în prezent, amebele teorii plecau de la ideea că viaţa terestră a apărut cu mult după formarea sistemului solar.",
"Cu 4,4 miliarde de ani în urmă, Pământul ar fi intrat în coliziune cu o altă planetă, de dimensiunea planetei Marte, iar în urma impactului, din resturile aruncate în spațiu, s-a format Luna. De asemenea, uriașul impact a mai generat ceva: viață pe Terra. Oamenii de știință susțin că totul a pornit de la faptul că, planeta mai mică, distrusă în urma impactului, avea un miez bogat în sulf și conținea elementele necesare vieții.",
"Aceste ingrediente au ajuns pe Terra, iar viața a putut să apară și să evolueze, scrie The Independent, care citează concluzia unei echipe de cercetători de la Universitatea Rice din Texas (SUA), coordonată de Rajdeep Dasgupta. Cercetătorul a realizat mai multe simulări computerizate, pentru a vedea care au fost efectele acestui impact cosmic.",
"Conform sursei citate, printre cele mai importante ingrediente necesare apariției vieții pe Terra se numără nitrogenul și carbonul, pe care se bazează acum toate formele de viață de aici. Cercetătorii cred că asemenea coliziuni cresc semnificativ șansele apariției vieții, pentru că aduc mai multe elemente chimice, care pot lipsi inițial unei planete. Și alte teorii, mai vechi, susțin de asemenea că elementele necesare vieții pe Terra au ajuns pe planeta noastră de asemenea, în urma impactului cu asteroizi și comete.",
"Sursa: https://evz.ro/cum-a-aparut-viata-pe-pamant-misterul-a-fost-dezlegat.html"]',
  '["","https://i2-prod.mirror.co.uk/incoming/article6425059.ece/ALTERNATES/s810/Meteor-Hitting-The-Earth.jpg","https://d9np3dj86nsu2.cloudfront.net/thumb/69b6779ea5da596daba77a6eeeac0fd4/240_277"]',
  '3',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Incalzirea globala: un pericol',
  'Ce este incalzirea globala, si ce am putea face ca sa o incetinim?',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMjAlkKB0HZTDZaOL7R2sUh5PawXrGLxc0fbVb_zQ_yBpaS0r',
  '1',
  '["Incalzirea globala este fenomenul de creștere continuă a temperaturilor medii înregistrate ale atmosferei în imediata apropiere a solului, precum și a apei oceanelor, constatată în ultimele două secole, dar mai ales în ultimele decenii. Fenomene de încălzire globală au existat dintotdeauna în istoria Pământului, ele fiind asociate cu fenomenul cosmic de maximum solar, acestea alternând cu mici glaciațiuni terestre asociate cu fenomenul de minimum solar",
    "Încălzirea globală are presupuse efecte profunde în cele mai diferite domenii. Ea determină sau va determina ridicarea nivelului mării, extreme climatice, topirea ghețarilor, extincția a numeroase specii și schimbări privind sănătatea oamenilor. Împotriva efectelor încălzirii globale se duce o luptă susținută de către guverne privind reducerea emisiei poluanților care influențează viteza încălzirii.",
    "Explicația fenomenului: efectul de seră este un fenomen natural prin care o parte a radiației terestre în infraroșu este reținută de atmosfera terestră. Efectul se datorează gazelor cu efect de seră care reflectă înapoi această radiație. Efectul actual al existenței gazelor cu efect de seră este că temperatura medie a Pământului este cu cca. 33 °C mai mare decât ar fi în lipsa lor, adică este de cca. +15 °C în loc să fie de -18 °C. În acest sens, efectul de seră este benefic, el asigurând încălzirea suficientă a Pământului pentru a permite dezvoltare a plantelor așa cum le cunoaștem noi azi.",
    "Limitarea încălzirii globale se reduce practic la limitarea concentrațiilor de CO2 . Pentru a evita foarte probabila depășire a celor 2 °C ar trebui ca nivelele de CO2 să fie stabilizate imediat. Calea propusă este reducerea emisiilor de gaze cu efect de seră prin reducerea consumurilor energetice și utilizarea energiei din surse regenerabile",
    "Afla mai multe aici: http://ies.gov.md/wp-content/uploads/2019/02/Incalzirea-globala-1.pdf"]',
  '["https://image.cnbcfm.com/api/v1/image/104183090-GettyImages-599854185.jpg?v=1539014317&w=630&h=391","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EazDihwaxOHPwPwJyZgPeV4-Rwh4wNX6gpH1P8zVbS46BsKC","http://www.descopera.org/wp-content/uploads/efectul-de-sera.jpg"]',
  '4',
  '0'
);





INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Insectele',
  'Stiai ca insectele sunt considerate tot animale? Afla ceea ce le defineste, astazi!',
  'https://assets.tvm.com.mt/mt/wp-content/uploads/sites/1/2019/02/insetti.jpg',
  '2',
  '["Ce este o insectă? Insectele sunt nevertebrate. Asta înseamnă că nu au coloană vertebrală. Din contră, au o carapace dură care se transformă odată cu dezvoltarea lor. Această carapace le protejează de şocuri şi uscăciune. Corpul unei insecte este alcătuit din trei părţi: capul, toracele şi abdomenul. Capul are două antene, ochi şi aparatul bucal care ţine locul gurii. Toracele insectelor este alcătuit întotdeauna din trei perechi de picioare.",
    "Ciclul vieţii al insectelor: Majoritatea insectelor suferă modificări importante în timpul vieţii lor. Aceste modificări de formă şi de activităţi pe care le suferă insectele de-a lungul dezvoltării lor se numeşte metamorfoză. Există trei tipuri de dezvoltare a insectelor: metamorfoza completă (la fluturi, muşte, tenebrion), metamorfoza incompletă (la lăcuste) si cele fără metamorfoză",
    "Utilitatea insectelor: Majoritatea insectelor sunt dăunătoare omului şi animalelor. Cu siguranţă că larvele şi adulţii devorează plantele cartofilor, frunzele şi trunchiurile copacilor, pomii fructiferi şi multe altele. În plus, unele specii de ţânţari, ploşniţele, muştele sunt mari purtători de boli şi infecţii. Din contră, alte insecte sunt foarte utile omului. De exemplu, buburuzele se hrănesc cu insecte dăunătoare. Fără insectele bune care le mănâncă pe cele rele, dăunătoare, multe recolte ar fi distruse. Insectele joacă un rol important în viaţa plantelor. Ele asigură polenizarea a unui număr mare de plante cultivate sau utile omului. Când o insectă se aşează pe o floare, ea ia cu ea granule de polen care stau fixate pe corp şi pe picioare. Când zboară pe o altă floare de aceeaşi specie, lasă o parte din polen acolo şi aşa are loc fecundaţia florii. De aceea insectele cum ar fi albina sunt utile."]',
  '["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Insects_collage.jpg/300px-Insects_collage.jpg","https://assets.tvm.com.mt/mt/wp-content/uploads/sites/1/2019/02/insetti.jpg",""]',
  '2',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Pasarile',
  'Bune inotatoare sau bune zburatoare - pasarile sunt animale atat frumoase, cat si importante pentru om.',
  'https://miro.medium.com/max/1200/0*BhXnmoTJyaewzciJ.jpg',
  '2',
  '["Păsările sunt animale vieţuitoare vertebrate care au corpul acoperit cu pene şi sunt, în general, adaptate la zbor. Păsările au apărut în acum aproximativ 150 milioane de ani prin evoluţie dintr-un grup de reptile. ",
    "Pasărea are un corp format din: cap (frunte, creastă, cioc, vibrize - penele care înconjoară ciocul), gât, trunchi (piept, abdomen, flancuri, spate, târtiţă - portiunea de deasupra cozii, coada), membre anterioare - transformate în aripi şi membre posterioare - picioarele cu gheare.",
    "De ce migrează păsările? Cauza principală a migraţiei este lipsa hranei. Speciile care nu găsesc hrană peste iarna migrează. Păsările pot fi: - migratoare – când cuibăresc într-un anumit sezon iar când hrana se împuţinează, migrează (insectivorele) - eratice – care nu au o rută de migraţie bine definită şi iarna se deplasează din loc în loc pentru a căuta hrană - sedentare – specii care nu migrează pentru că găsesc hrana la care sunt adaptate şi iarna (g",
    "Relaţiile păsărilor cu natura înconjurătoare: Păsările sunt o componentă importantă a a ecosistemelor în care trăiesc. Ele sunt o verigă ce asigură echilibrul acestor ecosisteme. Pot fi considerate de exemplu ca şi factorul care controlează dezvoltarea exagerată a unor specii de insecte sau rozătoare. Astfel, dispariţia oricărei specii din ecosistemele pe care le ocupă poate aduce dezechilibre importante.",
    "Afla mai multe despre pasari aici: http://potaissa.org/download/brosura_pasari.pdf"]',
  '["http://dev.adworks.ro/pasari-sunete-app/images/birds-bottom.png","http://dev.adworks.ro/pasari-sunete-app/images/birds-top.png",""]',
  '1',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Mamiferele',
  'Categorie a regnului animal din care face parte si omul, mamiferele sunt cel mai bine cunoscute drept animalele ce isi alapteaza puii.',
  'https://images.theconversation.com/files/72513/original/image-20150219-28204-1iw4k6l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
  '2',
  '["Mamiferele sunt cele mai dezvoltate vertebrate. Se cunosc peste 4000 de specii de mamifere. Ele trăiesc în toate mediile de viaţă: terestru (lupii, urşii), acvatic (delfini), subteran (cârtiţa), aerian (liliecii). Se mai deosebesc de alte animale prin faptul că au glande mamare. Ei nasc pui vii, îi hrănesc cu lapte, au sistem nervos foarte bine dezvoltat, sunt homeoterme.",
    "Mamiferele au o musculatură bine dezvoltată şi un endoschelet dur. Toate mamiferele au o cutie craniană dezvoltată. Dantura este mai puternică şi dinţii sunt diferenţiaţi în canini, molari şi incisivi. Regiunea cervicală a coloanei vertebrale este la toate mamiferele alcătuită din 7 vertebre. Coloana vertebrală este mai mobilă. Cu regiunea toracală a coloanei vertebrale (12-15 vertebre) sunt unite coastele, alcătuind împreună cutia toracică. Muşchii sunt foarte dezvoltaţi, în special muşchii membrelor. Muşchii scheletici ai vertebratelor participă la termoregulare, la comunicare şi la locomoţie. Structura internă la toate mamiferele este cam aceeaşi. Cavitatea toracică este la fel, conţinând inima şi plămânii, iar cea abdominală conţine stomacul, intestinele, ficatul, rinichii, etc.",
    "Toate aceste mamifere sunt foarte importante în ecosistem, fiecare având un rol bine stabilit. De exemplu animalele carnivore cum sunt râsul, lupul, ursul şi pisica sălbatică sunt considerate dăunătoare de om, petru că mai atacă câteodată turmele de oi, vacile sau alte animele domestice. Dar nu trebuie să uităm că ele curăţă pădurea de animale moarte sau bolnave, menţinând natura curată şi prevenind astfel răspândirea bolilor, putând fi numite “doctori” ai pădurii.",
    "Afla mai multe despre mamifere aici: http://potaissa.org/download/brosura_animale.pdf"]',
  '["https://www.shtiu.ro/wp-content/uploads/2018/11/animale-820x500.jpg","https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL1056067_vez0le.jpg"]',
  '3',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Reptilele',
  ' Afla informatii despre aceste animale cu sange rece!',
  'https://noahsarkvet.com/wp-content/uploads/2017/10/The-Basics-of-Pet-Care-for-Reptiles.jpg',
  '2',
  '["Reptilele sunt vertebrate şi fac parte din Clasa Reptilia. Corpul lor, mai mult sau mai puţin masiv, este înzestrat cu 4 picioare, ale căror degete se termină cu gheare. Dar la şerpi, acestea au dispărut sau sunt foarte slab reprezentate, ei deplasându-se prin târâre.",
    "Caracteristica de bază a reptilelor o reprezintă solzii care acoperă pielea aproape în totalitate. Toate reptilele au un tip de solzi, iar unele şi-au dezvoltat aceşti solzi în diferite scopuri. Carapacea broaştele ţestoase, de exemplu, este alcătuită din solzi măriţi şi întăriţi, care au evoluat în aşa fel cu scopul de a le apăra de duşmani. O altă caracteristică prin care se definesc ca reptile este faptul că ele nu pot să-şi regleze temperatura corpului, astfel că depind mult de condiţiile de mediu, pentru ca precum ştiţi, reptilele nu au blană sau pene.",
    "Cele mai multe reptile sunt carnivore şi se hrănesc cu animale mici. Sunt prădători pricepuţi, cu reflexe uimitoare, care îi ajută să prindă prada care se mişcă foarte rapid. Şopârlele, broaştele ţestoase, crocodilii şi multe specii de şerpi îşi prind prada cu gura şi o mestecă sau o înghit întreagă. Dar există reptile cu moduri sofisticate de a prinde prada. Şerpii veninoşi, de exemplu, îşi muşcă victima cu o 5 mişcare rapidă, injectându-i toxine puternice care o ucid sau o paralizează rapid. Pitonul sau boa îşi sufocă prada încolăcindu-şi inelele corpului în jurul acestora şi apoi le înghit în întregime. Pot face asta prin dislocarea mandibulei şi prin întinderea pielii",
    "Afla mai multe despre reptile aici: http://potaissa.org/download/brosura_herpetofauna.pdf"]',
  '["https://cdn.shopify.com/s/files/1/1215/6108/files/AdobeStock_131092591_large.jpeg?v=1537528067","https://www.proprofs.com/quiz-school/topic_images/p1bttgrdmeu0chrj1bh0h531sb13.jpg",""]',
  '4',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Pestii',
  'Aceste vietuitoare ale lumii subacvatice se deosebesc de celelalte animale prin trasaturile lor - afla care!',
  'https://resize.hswstatic.com/w_907/gif/koi.jpg',
  '2',
  '["Pestii reprezinta clasa (conform ultimelor clasificari - supraclasa) cea mai numeroasa de animale vertebrate acvatice. Traiesc si se reproduc în apa. Au corpul acoperit de regula cu solzi, se deplaseaza cu ajutorul înotatoarelor si a cozii, respira prin branhii (pestii dipnoi au si plamîni). Dupa structura scheletului se împart în pesti cartilaginosi si ososi.",
    "Pestii difera mult si dupa culoare care totdeauna are un rol protector. Speciile care populeaza paturile superioare ale apei au un luciu argintiu (ocheana, sabita, scrumbia), cele care traiesc la fundul apelor nu au acest luciu, pestii abisali (de mare adâncime) au o culoare rosiatica, cafenie si neagra-violeta, iar cambula poate sa-si schimbe culoarea dupa culoarea nisipului sau a scoicilor.",
    "Unii pesti (cleanul, pastravul, somnul) sunt capabili sa execute miscari foarte iuti si pot învinge cu usurinta curentii puternici de apa, fapt care le permite sa traiasca în râurile de munte, sa urce pe cursul lor superior pentru a depune icre, strabatând în acest scop praguri si mici cascade de apa. Cel mai mare rapid peste este considerat tonul, care dezvolta o viteza de pâna la 90 km pe ora.",
    "Majoritatea speciilor de peste sunt adaptate la un anumit fel de hrana. Speciile rapitoare se hranesc în special, cu pesti mai mici (salaul, somnul, stiuca s.a.). Pestii care se hranesc cu nevertebrate de fund (amurul-negru, platica, linul) au dintii maxilari sau faringieni puternic dezvoltati. Multe specii de exempu (scrumbiele, ciprinidele) se hranesc, în special cu animale planctonice, altele (bunauara, ambul-alb, hipoftalmictisul-alb, rosioara, scobarul) - numai cu vegetatie acvatica.",
    "Afla mai multe despre pesti aici: http://www.scritub.com/timp-liber/pescuit/Despre-pesti1831111231.php"]',
  '["https://5mpublishing.sirv.com/fish%2Farticles%2Fseabass-seabream-juveniles.jpg?profile=teaser-lead","http://www.rasfoiesc.com/files/pescuit/15_poze/image003.jpg",""]',
  '5',
  '0'
);



INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Tipurile de stele',
  'Stiai ca exista mai multe tipuri de stele, categorizate in functie de intensitatea lor?',
  'http://www.tusciaweb.eu/wp-content/uploads/2014/12/email.view_.related.php_11.jpg',
  '3',
  '["Stele pot fi de multe tipuri. Apariţia şi stingerea lor se măsoară în milioane de ani. Soarele nostru are circa 5 miliarde de ani, şi după părerea astronauţilor, mai are de trăit încă atât până să înceapă să moară. Soarele este o stea singulară, dar există stele duble, formate din două stele ce se învârt una în jurul celeilalte. Există şi stele triple sau multiple.",
    "Cele mai mari stele se numesc super-uriaşe. De exemplu, diametrul Antares-ului este de 330 de ori mai mare decât diametru Soarelui. Super-uriaşele au densităţi foarte reduse. Urmează, ca oridine de mărime, stelele uriaşe, care au diametrul de 10 sau 100 de ori mai mare decât cel al Soarelui. Şi acestea au densităţi reduse, dar nu ca super-uriaşele. Majoritatea stelelor vizibile sunt de categorie mijlocie, cum este şi Soarele. Acestea se mai numesc stele de serie principală. Mărimea lor poate fi de zece ori mai mare sau mai mică decât cea a Soarelui.",
    "Cele mai mici stele din seria principală sunt piticii roşii. Piticii albi, care reprezintă a doua categorie a stelelor mici, nu mai fac parte din seria principală. Aceştia sunt de mărimea Pământului şi au lumini foarte palide. Densitatea lor este extrem de mare – de la 100.000 la 20 milioane de ori mai dense decât apa. Astronomii sunt de părere că numărul lor poate atinge 5 milioane numai în Calea Lactee. S-au indentificat până în prezent doar câteva sute dintre aceştia. ",
    "Afla mai multe despre stele aici: https://www.percep.ro/stelele-tipuri-de-stele/",
    ""]',
  '["","","https://i.ytimg.com/vi/Y5VU3Mp6abI/maxresdefault.jpg"]',
  '1',
  '0'
);


INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Planete locuibile',
  'Cercetatorii au incercat sa descopere planete cu conditii asemanatoare ca ale Pamantului, conditii care permit viata. Afla astazi in ce constau cautarile lor.',
  'http://www.astronomy.com/-/media/Images/Magazine%20Articles/2018/08/EX1.png?mw=600',
  '3',
  '["Zona locuibilă este un câmp teoretic aproape de o stea în care toate planetele prezente au apă lichidă pe suprafața lor. Apa lichidă este considerată ca cel mai important element pentru viață, în mare parte din cauza rolului de solvent pe care îl joacă pe Pământ. Pentru o planetă, ca să aibă apă lichidă la suprafață, distanța de la soare trebuie să îi permită să aibă o temperatură cuprinsă între 0 și 100 °C și să aibă o masă suficientă pentru a reține o atmosferă și apa. Această zonă locuibilă depinde de tipul de stea (cu cat o stea este mai fierbinte, cu atat zona locuibila se indeparteaza), iar cum multe stele devin mai strălucitoare, cu vârsta, ele imping tot mai mult zona locuibila in afara.",
    "În prezent avem un singur exemplu de locuibilitate planetară, Pământul nostru, deci o planetă unde există viață, aproape de marginea interioară a zonei sale locuibile în jurul unei stele de tip G (galben). În ciuda tuturor propriei noastre planete, în timpul milioanelor de ani de schimbări geologice și atmosferice, el a avut perioade în care a fost mai favorabil sau mai puțin favorabil vieții. Dimensiunea continentele, oceanele, elementele din atmosfera de lucru pot varia locuit ale unei planete și forma ființelor vii pe care-l populează. Există speculații că planete sau esolune cu oceane puțin adânci au o biodiversitate mai mult decât marine planete cu oceane foarte adânci; Planete cu continente mici și numeroase pot fi mai locuibile și umed, în timp ce planete foarte mari continente, ar avea deserturi imense inospitalier în zonele interioare.",
    "Planete sau esolune puțin mai cald Pământul ar avea zone vaste tropicale foarte favorabile pentru viață și biodiversitate, dar aceleași planete pot avea oceane prea fierbinți și săracii de oxigen. Mai mult decât atât, aceste planete, creșteri bruște de temperatură, de asemenea, discret, ar putea duce la numeroase extincții în masă peste milioane de ani. Planete cu o mulțime de oxigen în schimb ar crește dimensiunea organismelor, și s-ar putea prospera ființe gigantice. Planete cu o greutate ridicată ar putea găzdui forme de viață, mai degrabă pisate, masive si indesate. Planete cu gravitate redusă ar fi forme de viață mai lung și subțire",
    "Afla mai multe aici: http://www.mondialieni.altervista.org/"]',
  '["https://upload.wikimedia.org/wikipedia/commons/6/61/Habitable_zone_-_HZ.png","",""]',
  '3',
  '0'
);


INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Ce sunt asteroizii?',
  'Care este diferenta dintre un asteroid si un meteorit? Afla aici!',
  'http://s1.ziareromania.ro/?mmid=47721a3e4890ebf2c',
  '3',
  '["Asteroidul este o roca cu un diametru mai mic de 1.000 km, de obicei compusa din carbon sau metale. De obicei, asteroizii orbiteaza Soarele. Majoritatea asteroizilor din sitemul nostru solar se afla in centura dintre planetele Marte si Jupiter.",
    "In aceasta portiune se afla milioane de asteroizi. Exista cateva sute cu un diametru mai mare de 100 km. Daca ar fi pusi laolalta, masa lor totala ar fi mai mica de 5% decat cea a Lunii.",
    "Cometele au forma circulara si sunt compuse din gheata. Ele se formeaza in Centura Kuiper sau in Norul Oort. Si ele orbiteaza Soarele, insa pe o orbita mai mare decat cea a asteroizilor. Coada specifica a cometelor este data de topirea ghetii lor si transformarea in vapori, sub actiunea caldurii Soarelui.",
    "Meteoroizii sunt resturi de marime mica, provenite din coliziunea unor asteroizi sau din dezintegrarea unor comete. Meteoritii sunt meteoroizi care intra in atmosfera Pamantului si se dezintegreaza. Uneori, resturi din ei, ajung la faza de impact cu solul planetei noastre. Denumirea stele cazatoare vine din observarea urmelor luminoase lasate de meteoriti pe cer, in procesul dezintegrarii lor.",
    "Afla mai multe despre asteroizi aici: http://www.ziare.com/magazin/spatiu/ce-sunt-asteroizii-cometele-meteoroizii-si-meteoritii-1055468"]',
  '["https://sm.mashable.com/t/mashable_in/photo/default/asteroids-earth-reason_ut29.910.jpg","https://img.freepik.com/free-vector/cartoon-outer-space-objects-set-glowing-cold-comet-meteorite-fast-falling-meteor_33099-266.jpg?size=626&ext=jpg",""]',
  '4',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Planetele sistemului solar',
  'Care sunt planetele sistemului nostru solar, si ce le face sa fie speciale?',
  'https://www.divahair.ro/images/speciale/articole/articole_imagini/alexag_135/2017.02.27/650x488/planetele%20sistemului_%20solar_650_406.jpg',
  '3',
  '["Mercur: Este planeta cea mai apropiată de soare și este doar puțin mai mare decât Luna, satelitul natural al Pământului. Din cauza distanței mici față de Soare, temperatura poate ajunge în timpul zilei la 450 de grade Celsius, iar noaptea este atinsă cealaltă extremă, ajungându-se la sute de grade sub 0. Mercur nu are o atmosferă care să o protejeze de meteoriți, așa că suprafața ei este plină de cratere.",
    "Venus: A doua planetă de la Soare are la rândul ei niște temperaturi infernale, chiar mai mari decât Mercur. Atmosfera pe Venus este toxică, iar presiunea este atât de mare, încât ar strivi un om. S-a ajuns la această situație din cauza efectului de seră scăpat de sub control. În mod bizar, planeta Venus se rotește în sens invers față de toate celelalte planete ale sistemului solar.",
    "Pământul: A treia planetă de la soare este cea pe care locuim noi și este acoperită în proporție de două treimi cu apă. Este singura planetă din sistemul nostru solar pe care s-a dezvoltat viața, în mare parte datorită atmosferei bogate în nitrogen și oxigen.",
    "Marte: este o planetă rece și „prăfuită”, pe care oamenii de știință abia au început să o studieze mai îndeaproape. Culoarea roșie a planetei este dată de o combinație de praf și oxid de fier. În rest, Marte are multe similitudini cu Pământul: are munți și văi, furtuni, zăpadă și gheață. Oamenii de știință cred că a fost cândva o planetă ca a noastră, caldă și cu multă apă.",
    "Jupiter este o planetă masivă, cea mai mare din sistemul nostru solar, formată preponderent din heliu și hidrogen. Pot fi observați nori colorați diferit din cauza reziduurilor de gaze și una dintre trăsăturile distincte ale aceste planete este o furtună gigantică ce a pornit acum sute de ani. Jupiter are un câmp magnetic foarte puternic și mulți sateliți naturali.",
	"Saturn: A șasea planetă de la soare este cunoscută în mod special pentru inelele care o înconjoară, despre existența cărora se știe încă din secolul al XVI-lea. Aceste inele sunt formate din gheață și rocă și nu se știe sigur cum s-au format. La fel ca Jupiter, Saturn este formată preponderent din hidrogen și heliu și are foarte mulți sateliți naturali.",
	"Uranus, cea de-a șaptea planetă de la Soare, este cel puțin bizară când o comparăm cu celelalte. Este singura planetă gigantică al cărei ecuator este așezat aproape perpendicular pe orbită. Oamenii de știință cred că a avut loc cândva o coliziune foarte puternică și astfel s-a ajuns la această anomalie, care face ca fiecare anotimp să dureze 20 de ani.",
	"Neptun este cunoscută pentru vijeliile sale puternice, unele cu o viteză mai mare decât cea a sunetului. Este la o distanță de 30 de ori mai mare de Soare decât Pământul și este rece, cu un centru format din rocă. A fost prima planetă a cărei existență a fost prezisă matematic, fără ca ea să fie vizibilă cu ochiul liber.",
  "Afla mai multe aici: https://www.divahair.ro/timp_liber/care-sunt-planetele-sistemului-solar"]',
  '["https://mk0astronomynow9oh6g.kinstacdn.com/wp-content/uploads/2019/04/042219_mercury_globe2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/260px-Venus-real_color.jpg",
  "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAyMi85Njkvb3JpZ2luYWwvMDkwMjEtZWFydGgtdmlldy0wMi5qcGc=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCcT5GSufp7UcT9FR84KxsP42DFSogA1oUxrDmVLTkK-BSp7qr",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/260px-Jupiter_by_Cassini-Huygens.jpg",
  "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA3dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMTYl/MkYxMSUyRjA0JTJGNzAxNzQ0XzcwMTc0/NF9zYXR1cm4uanBnJnc9NzgwJmg9NDQw/Jmhhc2g9OWRjNTg1NmRiOTFkMDcyMzQ5MjJhNTNjNWYzY2E4Mzc=.thumb.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/260px-Uranus2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/220px-Neptune_Full.jpg"]',
  '2',
  '0'
);

