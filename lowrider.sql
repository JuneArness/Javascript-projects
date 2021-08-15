CREATE database lowrider


USE lowrider;

CREATE TABLE show (
show_id INT PRIMARY KEY NOT NULL IDENTITY (1,1),
show_type VARCHAR(50) NOT NULL
);

INSERT INTO tbl_show
    (show_type)
	VALUES
	('hydraulic'),
	('air')
;

SELECT * FROM tbl_show;

CREATE TABLE tbl_street (
street_id INT PRIMARY KEY NOT NULL IDENTITY (100,1),
street_type VARCHAR(50) NOT NULL
);

INSERT INTO tbl_street
    (street_type)
	VALUES
	('hopper'),
	('dancer'),
	('classic'),
	('lay_and_play'),
	('bomber'),
	('minitruck'),
	('bike'),
	('new_school')
	;

	SELECT * FROM tbl_street;