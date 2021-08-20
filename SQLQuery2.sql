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
culture_id INT FOREIGN KEY NOT NULL IDENTITY (100,1),
culture_type VARCHAR(50) NOT NULL
);

INSERT INTO tbl_culture
    (culture_type)
	VALUES
	('hopper'),
	('dancer'),
	('best paint'),
	('best setup'),
	('best audio'),
	('car clubs'),
	('best in show'),
	('classic')
	;

	

	

   
   

 












