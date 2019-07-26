	
DROP TABLE IF EXISTS categories;

DROP TABLE IF EXISTS lessons;


CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, descr text, img blob, lesson_count integer, progress integer);

CREATE TABLE IF NOT EXISTS lessons(id INTEGER PRIMARY KEY AUTOINCREMENT, header_title text, header_desc text, header_img text, category_id integer NOT NULL, paragraphs TEXT, img TEXT, index_lesson integer, is_complete bool);

INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count, progress) VALUES (
    1,
  'Geography',
   "https://www.worldatlas.com/r/w728-h425-c728x425/upload/83/db/8f/geography.jpg",
  'world layout and capital cities',
  '5',
   null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    2,
  'Animals',
  "",
  'basic understanding of names and natural habitats',
  '2',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    3,
  'Solar system',
  "",
  'names of planets and moons and scale of understanding relative to earth',
  '2',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    4,
  'World history',
  "",
  'major events and history of the earth',
  '2',
  null
);
INSERT OR IGNORE INTO 'categories' (id,name,img,descr,lesson_count,progress) VALUES (
    5,
  'Everyday Science',
  "",
  'major events and history of the earth',
  '2',
  null
);




INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Cat ipsum',
  'dolor sit ameow',
  'http://lovecats.org/wp-content/uploads/2016/09/cat-in-glasses-and-books.jpg',
  '1',
  '["Cat ipsum dolor sit amet, the fat cat sat on the mat bat away with paws and love furrier and even more furrier hairball. Hack decide to want nothing to do with my owner today push your water glass on the floor and that box? i can fit in that box. Cat is love, cat is life claws in your leg. Hunt anything that moves check cat door for ambush 10 times before coming in i''m bored inside, let me out i''m lonely outside, let me in i can''t make up my mind whether to go in or out, guess i''ll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?!",
"Experiences short bursts of poo-phoria after going to the loo attack the child and cat cat moo moo lick ears lick paws i''m going to lap some water out of my master''s cup meow or fight an alligator and win. Lick sellotape hit you unexpectedly, but hiss and stare at nothing then run suddenly away or stare out cat door then go back inside nap all day. Eat grass, throw it back up try to jump onto window and fall while scratching at wall shred","Hide when guests come over meowzer going to catch the red dot today going to catch the red dot today so eat all the power cords hack up furballs. This cat happen now, it was too purr-fect!!! instantly break out into full speed gallop across the house for no reason i cry and cry and cry unless you pet me, and then maybe i cry just for fun but refuse to drink water except out of someone''s glass sweet beast chase laser, and jump around on couch, meow constantly until given food, ."]',
  '["https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]',
  '1',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Cat ipsum 2',
  'dolor sit ameow',
  'http://lovecats.org/wp-content/uploads/2016/09/cat-in-glasses-and-books.jpg',
  '1',
  '[" 2Cat ipsum dolor sit amet, the fat cat sat on the mat bat away with paws and love furrier and even more furrier hairball. Hack decide to want nothing to do with my owner today push your water glass on the floor and that box? i can fit in that box. Cat is love, cat is life claws in your leg. Hunt anything that moves check cat door for ambush 10 times before coming in i''m bored inside, let me out i''m lonely outside, let me in i can''t make up my mind whether to go in or out, guess i''ll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?!",
"Experiences short bursts of poo-phoria after going to the loo attack the child and cat cat moo moo lick ears lick paws i''m going to lap some water out of my master''s cup meow or fight an alligator and win. Lick sellotape hit you unexpectedly, but hiss and stare at nothing then run suddenly away or stare out cat door then go back inside nap all day. Eat grass, throw it back up try to jump onto window and fall while scratching at wall shred","Hide when guests come over meowzer going to catch the red dot today going to catch the red dot today so eat all the power cords hack up furballs. This cat happen now, it was too purr-fect!!! instantly break out into full speed gallop across the house for no reason i cry and cry and cry unless you pet me, and then maybe i cry just for fun but refuse to drink water except out of someone''s glass sweet beast chase laser, and jump around on couch, meow constantly until given food, ."]',
  'img array here',
  '2',
  '0'
);

INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,header_img,category_id,paragraphs,img,index_lesson,is_complete) VALUES (
  'Cat ipsum 3',
  'dolor sit ameow',
  'http://lovecats.org/wp-content/uploads/2016/09/cat-in-glasses-and-books.jpg',
  '1',
  '["Cat ipsum dolor sit amet, the fat cat sat on the mat bat away with paws and love furrier and even more furrier hairball. Hack decide to want nothing to do with my owner today push your water glass on the floor and that box? i can fit in that box. Cat is love, cat is life claws in your leg. Hunt anything that moves check cat door for ambush 10 times before coming in i''m bored inside, let me out i''m lonely outside, let me in i can''t make up my mind whether to go in or out, guess i''ll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?!",
"Experiences short bursts of poo-phoria after going to the loo attack the child and cat cat moo moo lick ears lick paws i''m going to lap some water out of my master''s cup meow or fight an alligator and win. Lick sellotape hit you unexpectedly, but hiss and stare at nothing then run suddenly away or stare out cat door then go back inside nap all day. Eat grass, throw it back up try to jump onto window and fall while scratching at wall shred","Hide when guests come over meowzer going to catch the red dot today going to catch the red dot today so eat all the power cords hack up furballs. This cat happen now, it was too purr-fect!!! instantly break out into full speed gallop across the house for no reason i cry and cry and cry unless you pet me, and then maybe i cry just for fun but refuse to drink water except out of someone''s glass sweet beast chase laser, and jump around on couch, meow constantly until given food, ."]',
  'img array here',
  '3',
  '0'
);
INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,category_id,paragraphs,index_lesson,is_complete) VALUES (
  'lesson header title',
  'leson header desc',
  '1',
  'js array here',
  '1',
  '0'
);
INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,category_id,paragraphs,index_lesson,is_complete) VALUES (
  'lesson header title',
  'leson header desc',
  '1',
  'js array here',
  '1',
  '0'
);
INSERT OR IGNORE INTO 'lessons' (header_title,header_desc,category_id,paragraphs,index_lesson,is_complete) VALUES (
  'lesson header title',
  'leson header desc',
  '1',
  'js array here',
  '1',
  '0'
);