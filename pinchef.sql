-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pinchef
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pinchef` ;

-- -----------------------------------------------------
-- Schema pinchef
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pinchef` DEFAULT CHARACTER SET utf8mb4 ;
USE `pinchef` ;

-- -----------------------------------------------------
-- Table `pinchef`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`user` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`user` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `email` TEXT NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `verificationToken` TEXT NULL DEFAULT NULL,
  `verified` DATETIME NULL DEFAULT NULL,
  `push_token` TEXT NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  `acceptTerms` VARCHAR(45) NULL DEFAULT NULL,
  `passwordReset` DATETIME NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `isVerified` TINYINT(4) NULL DEFAULT NULL,
  `is_social_auth` VARCHAR(45) NULL DEFAULT NULL,
  `id_social_hash` TEXT NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`profile` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`profile` (
  `id_profile` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(65) NOT NULL,
  `lastname` VARCHAR(75) NOT NULL,
  `birthday` DATE NULL,
  `gender` VARCHAR(45) NULL DEFAULT NULL,
  `phone` INT(11) NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `photo` TEXT NULL DEFAULT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `role` VARCHAR(45) NULL DEFAULT NULL,
  `user_id_user` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_profile`, `user_id_user`),
  INDEX `fk_profile_user_idx` USING BTREE (`user_id_user`),
  CONSTRAINT `fk_profile_user`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `pinchef`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 53
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`address_book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`address_book` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`address_book` (
  `id_address` INT(11) NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(80) NULL DEFAULT NULL,
  `first_address` TEXT NULL DEFAULT NULL,
  `second_address` TEXT NULL DEFAULT NULL,
  `state_region` TEXT NULL DEFAULT NULL,
  `city` TEXT NULL DEFAULT NULL,
  `postcode` VARCHAR(45) NULL DEFAULT NULL,
  `lat_lon` TEXT NULL DEFAULT NULL,
  `about_info` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `profile_id_profile` INT(11) NOT NULL,
  `user_id_user` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_address`, `profile_id_profile`, `user_id_user`),
  INDEX `fk_address_book_profile1_idx` USING BTREE (`profile_id_profile`, `user_id_user`),
  CONSTRAINT `fk_address_book_profile`
    FOREIGN KEY (`profile_id_profile` , `user_id_user`)
    REFERENCES `pinchef`.`profile` (`id_profile` , `user_id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`cart_order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`cart_order` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`cart_order` (
  `id_cart_order` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `quanty` DOUBLE NULL DEFAULT NULL,
  `tax` DOUBLE NULL DEFAULT NULL,
  `shipping` DOUBLE NULL DEFAULT NULL,
  `total` DOUBLE NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_cart_order`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`chef`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`chef` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`chef` (
  `id_chef` INT(11) NOT NULL AUTO_INCREMENT,
  `short_intro` VARCHAR(145) NULL DEFAULT NULL,
  `long_intro` TEXT NULL DEFAULT NULL,
  `services_name` VARCHAR(65) NULL DEFAULT NULL,
  `service_availability` VARCHAR(65) NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `position` VARCHAR(65) NULL DEFAULT NULL,
  `languages` TEXT NULL DEFAULT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `location_service` TEXT NULL DEFAULT NULL,
  `banner` TEXT NULL DEFAULT NULL,
  `profile_id_profile` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_chef`),
  INDEX `fk_chef_profile1_idx` USING BTREE (`profile_id_profile`),
  CONSTRAINT `fk_chef_profile`
    FOREIGN KEY (`profile_id_profile`)
    REFERENCES `pinchef`.`profile` (`id_profile`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_photo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`chef_photo` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`chef_photo` (
  `id_chef_photo` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `photo_url` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `chef_id_chef` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_chef_photo`),
  INDEX `fk_chef_photo_chef1_idx` USING BTREE (`chef_id_chef`),
  CONSTRAINT `fk_chef_photo_chef1`
    FOREIGN KEY (`chef_id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_position`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`chef_position` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`chef_position` (
  `id_chef_position` INT(11) NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(65) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_chef_position`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_reviews`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`chef_reviews` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`chef_reviews` (
  `id_chef_reviews` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `raiting` VARCHAR(45) NULL DEFAULT NULL,
  `followers` VARCHAR(45) NULL DEFAULT NULL,
  `share` TEXT NULL DEFAULT NULL,
  `likes` INT(11) NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `chef_id_chef` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_chef_reviews`, `chef_id_chef`),
  INDEX `fk_chef_reviews_chef1_idx` USING BTREE (`chef_id_chef`),
  CONSTRAINT `fk_chef_reviews_chef1`
    FOREIGN KEY (`chef_id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`chef_service_availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`chef_service_availability` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`chef_service_availability` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `description` TEXT NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `chef_service_name_id` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id`),
  INDEX `fk_chef_service_availability_chef_service_name1_idx` USING BTREE (`chef_service_name_id`),
  CONSTRAINT `fk_chef_service_availability_chef_service_name1`
    FOREIGN KEY (`chef_service_name_id`)
    REFERENCES `pinchef`.`chef_service_name` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`city`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`city` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`city` (
  `id_city` INT(255) NOT NULL AUTO_INCREMENT,
  `country_iso` VARCHAR(2) NOT NULL,
  `city_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY USING BTREE (`id_city`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `pinchef`.`food_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`food_item` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`food_item` (
  `id_food_item` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `day` DATE NULL DEFAULT NULL,
  `hour` TIME NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `picture` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `chef_id_chef` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_food_item`, `chef_id_chef`),
  INDEX `fk_food_item_chef1_idx` USING BTREE (`chef_id_chef`),
  CONSTRAINT `fk_food_item_chef1`
    FOREIGN KEY (`chef_id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`food_service`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`food_service` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`food_service` (
  `id_food_service` INT(11) NOT NULL AUTO_INCREMENT,
  `service_type` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `day` DATE NULL DEFAULT NULL,
  `hour` TIME NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `picture` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `chef_id_chef` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_food_service`, `chef_id_chef`),
  INDEX `fk_food_service_chef1_idx` USING BTREE (`chef_id_chef`),
  CONSTRAINT `fk_food_service_chef1`
    FOREIGN KEY (`chef_id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 21
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`post`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`post` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`post` (
  `id_post` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `photo` TEXT NULL DEFAULT NULL,
  `location` TEXT NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `privacy` TEXT NULL DEFAULT NULL,
  `time_zone` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `profile_id_profile` INT(11) NOT NULL,
  `profile_user_id_user` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_post`),
  INDEX `fk_post_profile1_idx` USING BTREE (`profile_id_profile`, `profile_user_id_user`),
  CONSTRAINT `fk_post_profile1`
    FOREIGN KEY (`profile_id_profile` , `profile_user_id_user`)
    REFERENCES `pinchef`.`profile` (`id_profile` , `user_id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 64
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`master_class`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`master_class` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`master_class` (
  `id_master_class` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `cousine` VARCHAR(45) NULL DEFAULT NULL,
  `dietary` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `ingredient_list` TEXT NULL DEFAULT NULL,
  `start_date` DATETIME NULL DEFAULT NULL,
  `class_duration` TIME NULL DEFAULT NULL,
  `ticket_count` INT(11) NULL DEFAULT NULL,
  `ticket_price` DOUBLE NULL DEFAULT NULL,
  `notified` VARCHAR(145) NULL DEFAULT NULL,
  `img` TEXT NULL DEFAULT NULL,
  `link` TEXT NULL DEFAULT NULL,
  `chef_id_chef` INT(11) NOT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  PRIMARY KEY USING BTREE (`id_master_class`, `chef_id_chef`),
  INDEX `fk_master_class_chef1_idx` USING BTREE (`chef_id_chef`),
  CONSTRAINT `fk_master_class_chef1`
    FOREIGN KEY (`chef_id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`comment` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`comment` (
  `id_comment` INT(11) NOT NULL AUTO_INCREMENT,
  `comment` TEXT NULL DEFAULT NULL,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `id_post` INT(11) NULL DEFAULT NULL,
  `user_id_user` INT(255) NOT NULL,
  `type` TEXT NOT NULL,
  `id_master_class` INT(255) NULL DEFAULT NULL,
  `id_food_service` INT(255) NULL DEFAULT NULL,
  `id_food_item` INT(255) NULL DEFAULT NULL,
  `id_chef` INT(255) NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_comment`),
  INDEX `comment_id_post` USING BTREE (`id_post`),
  INDEX `comment_master_class` USING BTREE (`id_master_class`),
  INDEX `comment_food_service` USING BTREE (`id_food_service`),
  INDEX `comment_food_item` USING BTREE (`id_food_item`),
  INDEX `comment_chef` USING BTREE (`id_chef`),
  CONSTRAINT `comment_chef`
    FOREIGN KEY (`id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comment_food_item`
    FOREIGN KEY (`id_food_item`)
    REFERENCES `pinchef`.`food_item` (`id_food_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comment_food_service`
    FOREIGN KEY (`id_food_service`)
    REFERENCES `pinchef`.`food_service` (`id_food_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comment_id_post`
    FOREIGN KEY (`id_post`)
    REFERENCES `pinchef`.`post` (`id_post`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `comment_master_class`
    FOREIGN KEY (`id_master_class`)
    REFERENCES `pinchef`.`master_class` (`id_master_class`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`country`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`country` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`country` (
  `iso` VARCHAR(2) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY USING BTREE (`iso`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = DYNAMIC;


-- -----------------------------------------------------
-- Table `pinchef`.`cousine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`cousine` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`cousine` (
  `id_cousine` INT(11) NOT NULL AUTO_INCREMENT,
  `cousine` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_cousine`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`dietary`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`dietary` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`dietary` (
  `id_dietary` INT(11) NOT NULL AUTO_INCREMENT,
  `dietary` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_dietary`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`food_shipping`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`food_shipping` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`food_shipping` (
  `id_shipping` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `food_item_id_foot_item` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_shipping`, `food_item_id_foot_item`),
  INDEX `fk_food_shipping_food_item1_idx` USING BTREE (`food_item_id_foot_item`),
  CONSTRAINT `fk_food_shipping_food_item1`
    FOREIGN KEY (`food_item_id_foot_item`)
    REFERENCES `pinchef`.`food_item` (`id_food_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`food_st`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`food_st` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`food_st` (
  `id_food_st` INT(11) NOT NULL AUTO_INCREMENT,
  `service_type` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_food_st`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`like`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`like` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`like` (
  `id_like` INT(11) NOT NULL AUTO_INCREMENT,
  `status` TINYINT(4) NULL DEFAULT NULL,
  `type` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `id_post` INT(11) NULL DEFAULT NULL,
  `user_id_user` INT(255) NOT NULL,
  `id_chef` INT(255) NULL DEFAULT NULL,
  `id_master_class` INT(255) NULL DEFAULT NULL,
  `id_comment` INT(255) NULL DEFAULT NULL,
  `id_food_item` INT(255) NULL DEFAULT NULL,
  `id_food_service` INT(255) NULL DEFAULT NULL,
  PRIMARY KEY USING BTREE (`id_like`),
  INDEX `fk_post_like_post1_idx` USING BTREE (`id_post`),
  INDEX `fk_post_like_user` USING BTREE (`user_id_user`),
  INDEX `fk_post_like_chef` USING BTREE (`id_chef`),
  INDEX `fk_post_like_master_class` USING BTREE (`id_master_class`),
  INDEX `fk_post_like_master_comment` USING BTREE (`id_comment`),
  INDEX `fk_post_like_food_item` USING BTREE (`id_food_item`),
  INDEX `fk_post_like_food_service` USING BTREE (`id_food_service`),
  CONSTRAINT `fk_post_like_chef`
    FOREIGN KEY (`id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_food_item`
    FOREIGN KEY (`id_food_item`)
    REFERENCES `pinchef`.`food_item` (`id_food_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_food_service`
    FOREIGN KEY (`id_food_service`)
    REFERENCES `pinchef`.`food_service` (`id_food_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_master_class`
    FOREIGN KEY (`id_master_class`)
    REFERENCES `pinchef`.`master_class` (`id_master_class`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_master_comment`
    FOREIGN KEY (`id_comment`)
    REFERENCES `pinchef`.`comment` (`id_comment`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_post1`
    FOREIGN KEY (`id_post`)
    REFERENCES `pinchef`.`post` (`id_post`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_like_user`
    FOREIGN KEY (`user_id_user`)
    REFERENCES `pinchef`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`share`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`share` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`share` (
  `id_share` INT(11) NOT NULL AUTO_INCREMENT,
  `info` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `id_post` INT(11) NULL DEFAULT NULL,
  `id_chef` INT(255) NULL DEFAULT NULL,
  `id_food_service` INT(255) NULL DEFAULT NULL,
  `id_food_item` INT(255) NULL DEFAULT NULL,
  `id_master_class` INT(255) NULL DEFAULT NULL,
  `user_to_share` INT(255) NOT NULL,
  `user_sharing` INT(255) NOT NULL,
  `type` TEXT NOT NULL,
  PRIMARY KEY USING BTREE (`id_share`),
  INDEX `fk_post_share_post1_idx` USING BTREE (`id_post`),
  INDEX `share_chef` USING BTREE (`id_chef`),
  INDEX `share_food_service` USING BTREE (`id_food_service`),
  INDEX `share_food_item` USING BTREE (`id_food_item`),
  INDEX `share_master_class` USING BTREE (`id_master_class`),
  INDEX `share_user_to_share` USING BTREE (`user_to_share`),
  INDEX `share_user_sharing` USING BTREE (`user_sharing`),
  CONSTRAINT `fk_post_share_post1`
    FOREIGN KEY (`id_post`)
    REFERENCES `pinchef`.`post` (`id_post`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_chef`
    FOREIGN KEY (`id_chef`)
    REFERENCES `pinchef`.`chef` (`id_chef`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_food_item`
    FOREIGN KEY (`id_food_item`)
    REFERENCES `pinchef`.`food_item` (`id_food_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_food_service`
    FOREIGN KEY (`id_food_service`)
    REFERENCES `pinchef`.`food_service` (`id_food_service`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_master_class`
    FOREIGN KEY (`id_master_class`)
    REFERENCES `pinchef`.`master_class` (`id_master_class`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_user_sharing`
    FOREIGN KEY (`user_sharing`)
    REFERENCES `pinchef`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `share_user_to_share`
    FOREIGN KEY (`user_to_share`)
    REFERENCES `pinchef`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`state_region`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`state_region` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`state_region` (
  `id_state_region` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `type` VARCHAR(145) NULL DEFAULT NULL,
  `country_id_country` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_state_region`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


-- -----------------------------------------------------
-- Table `pinchef`.`status_order`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pinchef`.`status_order` ;

CREATE TABLE IF NOT EXISTS `pinchef`.`status_order` (
  `id_status_order` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `type_payment` VARCHAR(65) NULL DEFAULT NULL,
  `status` VARCHAR(45) NULL DEFAULT NULL,
  `comment` TEXT NULL DEFAULT NULL,
  `created` DATETIME NULL DEFAULT NULL,
  `updated` DATETIME NULL DEFAULT NULL,
  `cart_order_id_cart_order` INT(11) NOT NULL,
  PRIMARY KEY USING BTREE (`id_status_order`, `cart_order_id_cart_order`),
  INDEX `fk_status_order_cart_order1_idx` USING BTREE (`cart_order_id_cart_order`),
  CONSTRAINT `fk_status_order_cart_order1`
    FOREIGN KEY (`cart_order_id_cart_order`)
    REFERENCES `pinchef`.`cart_order` (`id_cart_order`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
ROW_FORMAT = COMPACT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
