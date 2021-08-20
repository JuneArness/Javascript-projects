CREATE database db_show


USE db_show;

CREATE TABLE tbl_class(
class_id INT PRIMARY KEY NOT NULL IDENTITY (1,1),
class_type VARCHAR(50) NOT NULL
);

INSERT INTO tbl_class
    (class_type)
	VALUES
	('show'),
	('street')
;

SELECT * FROM tbl_class;


CREATE TABLE tbl_culture (
culture_id INT PRIMARY KEY NOT NULL IDENTITY (100,1),
culture_type VARCHAR(50) NOT NULL,
class_type INT FOREIGN KEY REFERENCES tbl_class(class_id)
);

INSERT INTO tbl_culture
    (culture_type, class_type)
	VALUES
	('hopper', 2),
	('dancer', 2),
	('best paint', 1),
	('best setup', 1),
	('best audio', 1),
	('car clubs', 1),
	('best in show', 1),
	('classic', 2)
	;

	SELECT * FROM tbl_class
	INNER JOIN tbl_culture ON tbl_class.class_id = tbl_culture.class_type

	

   
   

 












