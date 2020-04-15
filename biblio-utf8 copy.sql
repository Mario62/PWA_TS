-- Skrypt tworzący bazę dla biblioteki

-- Definicja formatu daty na 'dd/mm/yyyy'
SET DATESTYLE TO 'European';
SET DATESTYLE TO 'SQL';


-- DROP TABLE rejestr;
-- DROP TABLE czytelnicy;
-- DROP TABLE books;

CREATE TABLE biblio.czytelnicy
(	
	czyt_id		serial,
	nazwisko	varchar(32) 	NOT NULL,
	imie		varchar(16)	NOT NULL,
	imie2		varchar(16),
	miasto		varchar(32)	NOT NULL,
	kod		char(6)		NOT NULL,
	ulica		varchar(32)	NOT NULL,
	nr_domu		varchar(8)	NOT NULL,
	nr_mieszkania	varchar(8)	NOT NULL,
	data_ur		date		NOT NULL,
	pesel		char(11)	NOT NULL	UNIQUE 	CHECK (pesel ~ '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
	ograniczenie	integer		NOT NULL		CHECK (ograniczenie <= 30),
	CONSTRAINT	czytelnicy_pk	PRIMARY KEY(czyt_id)
);




CREATE TABLE biblio.books
(
	book_id		serial,
	autor		varchar(32),
	tytul		text		NOT NULL,
	wydawca		varchar(64),
	miejsce		varchar(32),
	rok		integer,
	CONSTRAINT 	books_pk 	PRIMARY KEY(book_id)
);



CREATE TABLE biblio.rejestr
(
	book_id		integer,
  	czyt_id		integer,
	data_wyp	date 		DEFAULT CURRENT_DATE,
	data_zwr	date		DEFAULT CURRENT_DATE + 90,
	prolongata	boolean		DEFAULT 'false',
        CONSTRAINT      rejestr_pk      PRIMARY KEY(book_id,czyt_id),
	CONSTRAINT 	czyt_id_fk	FOREIGN KEY(czyt_id)	REFERENCES czytelnicy(czyt_id) 	ON UPDATE CASCADE,
	CONSTRAINT 	book_id_fk	FOREIGN KEY(book_id)	REFERENCES books(book_id) 	ON UPDATE CASCADE
); 
-- Ładowanie tablicy czytelnicy

INSERT INTO biblio.czytelnicy (nazwisko,imie,imie2,miasto,kod,ulica,nr_domu,nr_mieszkania,data_ur,pesel,ograniczenie)
VALUES ('Kowalski','Adam','Aleksander','Tarnów','20-045','Mickiewicza','25','7','17/01/1976','76011223452',15);
INSERT INTO biblio.czytelnicy (nazwisko,imie,imie2,miasto,kod,ulica,nr_domu,nr_mieszkania,data_ur,pesel,ograniczenie)
VALUES ('Kowalewski','Andrzej','Gustaw','Tarnów','20-045','Mackiewicza','26','8','19/02/1977','77021923456',15);
INSERT INTO biblio.czytelnicy (nazwisko,imie,imie2,miasto,kod,ulica,nr_domu,nr_mieszkania,data_ur,pesel,ograniczenie)
VALUES ('Kowaliński','Apoloniusz','Grzegorz','Tarnów','20-045','Milenijna','27','9','19/03/1978','78031923458',15);
INSERT INTO biblio.czytelnicy (nazwisko,imie,imie2,miasto,kod,ulica,nr_domu,nr_mieszkania,data_ur,pesel,ograniczenie)
VALUES ('Kowalewski','Apoloniusz','Grzegorz','Tarnów','20-045','Milenijna','27','9','19/03/1979','79031923458',15);
INSERT INTO biblio.czytelnicy (nazwisko,imie,imie2,miasto,kod,ulica,nr_domu,nr_mieszkania,data_ur,pesel,ograniczenie)
VALUES ('Kowalik','Apolinary','Grzegorz','Tarnów','20-045','Maczka','29','9','19/03/1980','80031923458',15);



-- Ładowanie tablicy books

INSERT INTO biblio.books(autor,tytul,wydawca, miejsce,rok)
VALUES ('Worsley J.C. and J.D. Drake','PostgeSQL. Praktyczny przewodnik','Helion','Gliwice',2002);
INSERT INTO biblio.books(autor,tytul,wydawca, miejsce,rok)
VALUES ('Stones R. and N. Matthew','Bazy danych i PostgeSQL','Helion','Gliwice',2001);
INSERT INTO biblio.books(autor,tytul,wydawca, miejsce,rok)
VALUES ('Connolly T. and C. Begg','Systemy baz danych. Praktyczne metody projektowania, implementacji i zarządzania','RM','Warszawa',2004);

-- Ładowanie tablicy rejestr

INSERT INTO biblio.rejestr(book_id,czyt_id)
VALUES (1,3);
