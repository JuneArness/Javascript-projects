USE db_zoo
--1--
SELECT * FROM tbl_habitat;
--2--
SELECT species_name 
FROM tbl_species
WHERE species_order = 3;
--3--
SELECT Nutrition_type
FROM tbl_nutrition 
WHERE Nutrition_cost <= 600;

SELECT * FROM tbl_nutrition;


--Retrieve all species_names with the nutrition_id between 2202 and 2206 from the nutrition table.
--4--
SELECT species_name
FROM tbl_nutrition
INNER JOIN tbl_species  ON tbl_nutrition.nutrition_id = tbl_species.species_nutrition
WHERE nutrition_id BETWEEN 2202 AND 2206;
   
   
  
   --5--Retrieve all names within the species_name column using the alias "Species Name:"
   --from the species table and their corresponding nutrition_type under the alias "Nutrition Type:" 
   --from the nutrition table.

SELECT species_name  AS "Species Name:" , nutrition_type AS "Nutrition Type:" 
FROM tbl_species
INNER JOIN tbl_nutrition ON tbl_nutrition.nutrition_id = tbl_species.species_nutrition

select * from tbl_nutrition
select * from tbl_species


--6--
--From the specialist table, retrieve the first name, last name and contact number
--for the people that provide care to penguins from the species table.

SELECT specialist_fname, specialist_lname, specialist_contact
FROM tbl_specialist
INNER JOIN tbl_care  ON tbl_specialist.specialist_id = tbl_care.care_specialist
INNER JOIN tbl_species ON tbl_care.care_id = tbl_species.species_care
WHERE species_name = 'penguin'

select * from tbl_specialist
select * from tbl_care
select * from tbl_species



INNER JOIN tbl_nutrition a6 ON a6.nutrition_id =a1.species_nutrition


SELECT
  product.name AS product_name,
  category.name AS category_name
FROM product
JOIN category ON product.category_id=category.id
WHERE category.name != ’toys’;