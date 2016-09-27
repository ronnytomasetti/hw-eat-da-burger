CREATE SCHEMA `burgers_db`;

USE `burgers_db`;

CREATE TABLE `burgers_db`.`burgers` (
  `burger_id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(100) NOT NULL,
  `devoured` TINYINT(1),
  `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  				   ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`burger_id`),
  UNIQUE INDEX `burger_id_UNIQUE` (`burger_id` ASC));
