/*
 Navicat MySQL Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100314
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 100314
 File Encoding         : 65001

 Date: 13/06/2019 13:41:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for em
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
	`id` int(11) not null auto_increment primary key,
  `accountName` varchar(20) DEFAULT NULL, 
  `password` varchar(20) DEFAULT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `emailAddress` varchar(20) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL
)ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

