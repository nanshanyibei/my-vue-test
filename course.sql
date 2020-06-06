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
  `emailAddress` varchar(20) DEFAULT NULL,
  `passWord` varchar(20) DEFAULT NULL,
	`fullName` varchar(20) DEFAULT NULL
)ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of employee
-- ----------------------------
BEGIN;
INSERT INTO `employee` VALUES (`1234@qq.com`, `1234`, `1234`);
INSERT INTO `employee` VALUES (`1234567@qq.com`, `1234567`, `1234567`);
INSERT INTO `employee` VALUES (`12345@qq.com`, `12345`, `12345`);
COMMIT;

DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
	`id` int(11) not null auto_increment primary key,
  `emailAddress` varchar(20) DEFAULT NULL,
  `passWord` varchar(20) DEFAULT NULL,
	`fullName` varchar(20) DEFAULT NULL
)ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

BEGIN;
INSERT INTO `employee` VALUES (`1234@qq.com`, `1234`, `1234`);
INSERT INTO `employee` VALUES (`1234567@qq.com`, `1234567`, `1234567`);
INSERT INTO `employee` VALUES (`12345@qq.com`, `12345`, `12345`);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
