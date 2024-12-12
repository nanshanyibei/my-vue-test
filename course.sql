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
DROP TABLE IF EXISTS `users_list`;
CREATE TABLE `users_list` (
	`userId` int(11) not null auto_increment primary key,
  `userName` varchar(20) DEFAULT NULL, 
  `passWord` varchar(20) DEFAULT NULL,
  `firstName` varchar(20) DEFAULT NULL,
  `lastName` varchar(20) DEFAULT NULL,
  `emailAddress` varchar(20) DEFAULT NULL,
  `phoneNo` varchar(11) DEFAULT NULL,
  `createDate` varchar(11) DEFAULT NULL,
  `ifAdmin` TINYINT(1) DEFAULT NULL
);ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

