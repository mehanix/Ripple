CREATE TABLE IF NOT EXISTS categories(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, descr text, img blob, lesson_count integer);

CREATE TABLE IF NOT EXISTS lessons(id INTEGER PRIMARY KEY AUTOINCREMENT, header_title text, header_desc text, header_img blob, category_id integer NOT NULL, paragraphs TEXT,img blob, index_lesson integer, is_complete bool);


