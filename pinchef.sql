-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pinchef
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pinchef
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pinchef` DEFAULT CHARACTER SET utf8 ;
USE `pinchef` ;

-- -----------------------------------------------------
-- Table `pinchef`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`user` (
  `id_user` INT NOT NULL,
  `email` TEXT NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `confirmPassword` VARCHAR(255) NULL,
  `token` TEXT NULL,
  `expiration` DATETIME NULL,
  `role` VARCHAR(45) NULL,
  `acceptTerms` VARCHAR(45) NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `isVerified` TINYINT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`profile` (
  `id_profile` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(65) NOT NULL,
  `lastname` VARCHAR(75) NOT NULL,
  `birthday` DATE NOT NULL,
  `gender` VARCHAR(45) NULL,
  `phone` INT NOT NULL,
  `status` TINYINT NULL,
  `photo` TEXT NULL,
  `address` TEXT NULL,
  `role` VARCHAR(45) NULL,
  `user_id_user` INT NOT NULL,
  PRIMARY KEY (`id_profile`, `user_id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef` (
  `id_chef` INT NOT NULL AUTO_INCREMENT,
  `short_intro` VARCHAR(145) NULL,
  `long_intro` TEXT NULL,
  `services_name` VARCHAR(65) NULL,
  `service_availability` VARCHAR(65) NULL,
  `price` DOUBLE NULL,
  `position` VARCHAR(65) NULL,
  `languages` TEXT NULL,
  `address` TEXT NULL,
  `location_service` TEXT NULL,
  `banner` TEXT NULL,
  `profile_id_profile` INT NOT NULL,
  PRIMARY KEY (`id_chef`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`address_book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`address_book` (
  `id_address` INT NOT NULL,
  `country` VARCHAR(80) NULL,
  `first_address` TEXT NULL,
  `second_address` TEXT NULL,
  `state_region` TEXT NULL,
  `city` TEXT NULL,
  `postcode` VARCHAR(45) NULL,
  `lat_lon` TEXT NULL,
  `about_info` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `profile_id_profile` INT NOT NULL,
  `user_id_user` INT NOT NULL,
  PRIMARY KEY (`id_address`, `profile_id_profile`, `user_id_user`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`country`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`country` (
  `id_country` INT NOT NULL,
  `iso` CHAR NULL,
  `name` VARCHAR(80) NULL,
  PRIMARY KEY (`id_country`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_service_name`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef_service_name` (
  `id` INT NOT NULL,
  `service_name` VARCHAR(65) NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_position`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef_position` (
  `id_chef_position` INT NOT NULL,
  `position` VARCHAR(65) NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id_chef_position`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_service_availability`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef_service_availability` (
  `id` INT NOT NULL,
  `service_availability` VARCHAR(65) NULL,
  `description` TEXT NULL,
  `status` TINYINT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `chef_service_name_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`state_region`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`state_region` (
  `id_state_region` INT NOT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  `type` VARCHAR(145) NULL,
  `country_id_country` INT NOT NULL,
  PRIMARY KEY (`id_state_region`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`city` (
  `id_city` INT NOT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  `postcode` VARCHAR(45) NULL,
  `state_region_id_state_region` INT NOT NULL,
  PRIMARY KEY (`id_city`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`food_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`food_item` (
  `id_food_item` INT NOT NULL,
  `name` INT NULL,
  `description` TEXT NULL,
  `day` DATE NULL,
  `hour` TIME NULL,
  `price` DOUBLE NULL,
  `picture` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `chef_id_chef` INT NOT NULL,
  PRIMARY KEY (`id_food_item`, `chef_id_chef`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`food_shipping`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`food_shipping` (
  `id_shipping` INT NOT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `price` DOUBLE NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `food_item_id_foot_item` INT NOT NULL,
  PRIMARY KEY (`id_shipping`, `food_item_id_foot_item`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`food_service`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`food_service` (
  `id_food_service` INT NOT NULL,
  `service_type` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `day` DATE NULL,
  `hour` TIME NULL,
  `price` DOUBLE NULL,
  `picture` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `chef_id_chef` INT NOT NULL,
  PRIMARY KEY (`id_food_service`, `chef_id_chef`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`food_st`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`food_st` (
  `id_food_st` INT NOT NULL,
  `service_type` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id_food_st`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`master_class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`master_class` (
  `id_master_class` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `cousine` VARCHAR(45) NULL,
  `dietary` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `ingredient_list` TEXT NULL,
  `start_date` DATETIME NULL,
  `class_duration` TIME NULL,
  `ticket_count` INT NULL,
  `ticket_price` DOUBLE NULL,
  `notified` VARCHAR(145) NULL,
  `chef_id_chef` INT NOT NULL,
  PRIMARY KEY (`id_master_class`, `chef_id_chef`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`cousine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`cousine` (
  `id_cousine` INT NOT NULL,
  `cousine` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id_cousine`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`dietary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`dietary` (
  `id_dietary` INT NOT NULL,
  `dietary` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  PRIMARY KEY (`id_dietary`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`cart_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`cart_order` (
  `id_cart_order` INT NOT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `quanty` DOUBLE NULL,
  `tax` DOUBLE NULL DEFAULT NULL,
  `shipping` DOUBLE NULL DEFAULT NULL,
  `total` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY (`id_cart_order`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_photo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef_photo` (
  `id_chef_photo` INT NOT NULL,
  `name` TEXT NULL,
  `description` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `chef_id_chef` INT NOT NULL,
  PRIMARY KEY (`id_chef_photo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`chef_reviews` (
  `id_chef_reviews` INT NOT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `raiting` VARCHAR(45) NULL,
  `followers` VARCHAR(45) NULL,
  `share` TEXT NULL,
  `likes` INT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `chef_id_chef` INT NOT NULL,
  PRIMARY KEY (`id_chef_reviews`, `chef_id_chef`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`status_order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`status_order` (
  `id_status_order` INT NOT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `type_payment` VARCHAR(65) NULL,
  `status` VARCHAR(45) NULL,
  `comment` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `cart_order_id_cart_order` INT NOT NULL,
  PRIMARY KEY (`id_status_order`, `cart_order_id_cart_order`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`post` (
  `id_post` INT NOT NULL,
  `name` VARCHAR(145) NULL,
  `description` TEXT NULL,
  `photo` TEXT NULL,
  `location` TEXT NULL,
  `status` TINYINT NULL,
  `privacy` TEXT NULL,
  `time_zone` TEXT NULL,
  `profile_id_profile` INT NOT NULL,
  `profile_user_id_user` INT NOT NULL,
  PRIMARY KEY (`id_post`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`post_share`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`post_share` (
  `id_post_share` INT NOT NULL,
  `share` TEXT NULL,
  `info` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `post_id_post` INT NOT NULL,
  PRIMARY KEY (`id_post_share`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`post_like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`post_like` (
  `id_post_like` INT NOT NULL,
  `like` INT NULL,
  `status` TINYINT NULL,
  `type` TEXT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `post_id_post` INT NOT NULL,
  PRIMARY KEY (`id_post_like`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pinchef`.`post_comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pinchef`.`post_comment` (
  `id_post_comment` INT NOT NULL,
  `comment` TEXT NULL,
  `status` TINYINT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `post_id_post` INT NOT NULL,
  PRIMARY KEY (`id_post_comment`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
