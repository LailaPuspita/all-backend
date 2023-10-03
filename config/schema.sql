CREATE DATABASE IF NOT EXISTS `tnt_app`;

USE `tnt_app`;

CREATE TABLE IF NOT EXISTS member (
    `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `photo` VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS doctor (
    `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `experience` VARCHAR(255) NOT NULL,
    `timetable` VARCHAR(20) NOT NULL,
    `photo` VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS appointment (
    `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `time` ENUM('20.00', '21.00', '22.00', '23.00', '24.00') NOT NULL,
    `categories` ENUM('Ear Symptom', 'Nose Symptom', 'Throat Symptom') NOT NULL,
    `complaint` TEXT(500) NOT NULL
);


INSERT INTO member (name, role, photo) VALUES 
("Ahmad Firdaus Hirana", "Group Leader", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Fiqri Juanesta", "Front End Engineer", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Yuliana Putri", "Front End Engineer", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Laila Puspita Sari", "Back End Engineer", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Rifqi Munawar Ridwan", "Back End Engineer", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Luciana Lintiara Tiiwan", "Quality Assurance", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
("Wa Ode Alyathalataf", "Quality Assurance", 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb');


INSERT INTO doctor (name, role, experience, timetable, photo) VALUES
('Dr. Sophia Hilman', 'Ear Specialist', '5 Years', 'Rabu', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb'),
('Dr. Jonathan', 'Nose Specialist', '9 Years', 'Rabu', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthshots.com%2Fmind%2Fmental-health%2Fknow-how-doctors-should-deal-with-stress%2F&psig=AOvVaw0yIOpahspYT_pjhUgS92fs&ust=1696168201742000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjP4Yq90oEDFQAAAAAdAAAAABAb');

INSERT INTO appointment (name, email, date, time, categories, complaint) VALUES 
('Valerie Jhonson', 'vale@gmail.com', '2022-10-16', '22.00', 'Ear Symptom', 'merasa berdenging telinganya');