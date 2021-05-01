-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cms
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirmPassword` varchar(100) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'karan','$2a$10$mlKJlVnqnuU8HNHz7iNgj.ZWb6H8B22DkJO7DGHaiVsQnuNIbHIX6','$2a$10$mlKJlVnqnuU8HNHz7iNgj.ZWb6H8B22DkJO7DGHaiVsQnuNIbHIX6'),(2,'test','$2a$10$UUJQEI4yHebC95WsPyjq7uPTPweHJj6Q1XwBNi5s7p8Nnq99LSxrq','$2a$10$UUJQEI4yHebC95WsPyjq7uPTPweHJj6Q1XwBNi5s7p8Nnq99LSxrq'),(3,'test','$2a$10$S3yaPjSXjL8Q16UWiVH5XeuvvCGp.slsZabvCB6/F2W.Qv1H1EuAG','$2a$10$S3yaPjSXjL8Q16UWiVH5XeuvvCGp.slsZabvCB6/F2W.Qv1H1EuAG'),(4,'admin','$2a$10$WrGxURcQ7Ih/E7Br6ZQDDOH7KCKXjRSCppmVExo3eO4YsLCsqlxiq','$2a$10$WrGxURcQ7Ih/E7Br6ZQDDOH7KCKXjRSCppmVExo3eO4YsLCsqlxiq');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `assigned_doctor` int DEFAULT NULL,
  `doctor_name` varchar(100) DEFAULT NULL,
  `patient_id` int NOT NULL,
  `appointment_date_time` varchar(100) NOT NULL,
  `type_of_appointment` varchar(100) NOT NULL,
  `appointment_status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `doctor_id_idx` (`assigned_doctor`),
  KEY `patient_id_idx` (`patient_id`),
  CONSTRAINT `doctor_id` FOREIGN KEY (`assigned_doctor`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (4,101,'Derek Shepherd',416793002,'2021-03-30 12:50:20 PM','general checkup','Active'),(5,103,'Miranda Bailey',416793003,'2021-04-02 11:02:20 AM','COvid test','Not Active'),(6,104,'Meridth Grey',416793004,'2021-04-02 11:27:20 AM','Follow Up','Active');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_us`
--

DROP TABLE IF EXISTS `contact_us`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_us` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(100) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_us`
--

LOCK TABLES `contact_us` WRITE;
/*!40000 ALTER TABLE `contact_us` DISABLE KEYS */;
INSERT INTO `contact_us` VALUES (1,'karan12','karan.chauhan619@gmail.com','6479393544','test messgae from other side'),(2,'tes','karan.chauhan619@gmail.com','karan.chauhan619@gmail.com','asdasd');
/*!40000 ALTER TABLE `contact_us` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `position` varchar(100) NOT NULL,
  `sin` varchar(100) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (101,'Derek Shepherd','M','Attending Neurosurgeon','945-123001'),(102,'Cristina Yang','F','Attending Cardiothoracic Surgeon','945-123002'),(103,'Miranda Bailey','F','Chief of Surgery','945-123003'),(104,'Meridth Grey','F','Head Chief of General Medicine','945-123004'),(105,'Alex Kerev','M','Chief of pediatrician','945-123005'),(106,'Callie ','F','Chief  orthopedic surgery','945-123006');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_login`
--

DROP TABLE IF EXISTS `doctor_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirmPassword` varchar(100) NOT NULL,
  `doctor_join_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `emp_id_idx` (`emp_id`),
  CONSTRAINT `emp_id` FOREIGN KEY (`emp_id`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_login`
--

LOCK TABLES `doctor_login` WRITE;
/*!40000 ALTER TABLE `doctor_login` DISABLE KEYS */;
INSERT INTO `doctor_login` VALUES (5,101,'$2a$10$LVVn9F1qMr2xwOfgHeLlRePhRQ6wc/07grBFvBMv2pPG/.w/zzggO','$2a$10$LVVn9F1qMr2xwOfgHeLlRePhRQ6wc/07grBFvBMv2pPG/.w/zzggO','2021-03-30 02:58:21'),(9,102,'$2a$10$xAEQAVASp2o.FkHH.J5EqesngIg5gjQuMYFhTrwVqFkTOH/0aJcIS','$2a$10$xAEQAVASp2o.FkHH.J5EqesngIg5gjQuMYFhTrwVqFkTOH/0aJcIS','2021-04-17 17:11:05'),(10,103,'$2a$10$ZdTR7pGuHdP/XJhjjbnt3u7nNFnM3aNlPkQPb/gkqkff6EpbpgaV2','$2a$10$ZdTR7pGuHdP/XJhjjbnt3u7nNFnM3aNlPkQPb/gkqkff6EpbpgaV2','2021-04-17 17:11:12');
/*!40000 ALTER TABLE `doctor_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_notes`
--

DROP TABLE IF EXISTS `doctor_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_notes` (
  `notes_id` int NOT NULL AUTO_INCREMENT,
  `patient_HCN` int NOT NULL,
  `doctor_empid` int NOT NULL,
  `doctor_name` varchar(100) DEFAULT NULL,
  `doctors_notes` varchar(200) DEFAULT NULL,
  `last_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`notes_id`),
  KEY `patient_HCN_idx` (`patient_HCN`),
  KEY `doctor_empid_idx` (`doctor_empid`),
  CONSTRAINT `doctor_empid` FOREIGN KEY (`doctor_empid`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `patient_HCN` FOREIGN KEY (`patient_HCN`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_notes`
--

LOCK TABLES `doctor_notes` WRITE;
/*!40000 ALTER TABLE `doctor_notes` DISABLE KEYS */;
INSERT INTO `doctor_notes` VALUES (1,416793002,101,'Derek Shepherd','testing ','2021-04-06 02:55:06'),(3,416793002,102,'Cristina Yang','this patient is covid negative','2021-04-09 16:39:31'),(5,416793002,101,'Derek Shepherd','test mesgaaskhdkdfsdf','2021-04-09 21:56:09'),(6,416793002,101,'Derek Shepherd','test note test note','2021-04-09 21:59:30'),(7,416793002,101,'Derek Shepherd','Suffering from high fever','2021-04-10 09:33:57'),(8,416793002,101,'Derek Shepherd','test note','2021-04-14 19:10:11'),(9,416793002,101,'Derek Shepherd','this patient needs extra care','2021-04-21 18:31:57'),(10,416793002,101,'Derek Shepherd','test123','2021-04-21 18:44:59');
/*!40000 ALTER TABLE `doctor_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors_log`
--

DROP TABLE IF EXISTS `doctors_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctors_id` int NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `login_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `doctors_id_idx` (`doctors_id`),
  CONSTRAINT `doctors_id` FOREIGN KEY (`doctors_id`) REFERENCES `doctor` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors_log`
--

LOCK TABLES `doctors_log` WRITE;
/*!40000 ALTER TABLE `doctors_log` DISABLE KEYS */;
INSERT INTO `doctors_log` VALUES (1,101,'present','2021-04-01 19:04:03'),(2,102,'present','2021-04-01 19:04:03'),(3,103,'Absent','2021-04-01 19:04:03'),(4,104,'Present','2021-04-01 19:04:03'),(5,105,'Absent','2021-04-01 19:04:03'),(6,106,'Present','2021-04-01 19:04:03');
/*!40000 ALTER TABLE `doctors_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `HealthCard` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `DOB` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`HealthCard`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (416793002,'Enqrique','78 herxzxzc','M','1992-02-7','enrique@gmail.com'),(416793003,'jose ','79 herzberg','M','1991-02-5','joseenrique@gmail.com'),(416793004,'ironman','29herzberg','M','1989-02-5','ironman@gmail.com'),(416793005,'the hulk','89herzberg','M','1987-02-5','thehulk@gmail.com'),(416793006,'scarlett johansson','25herzberg','F','1987-02-5','scarlettjohansson@gmail.com'),(416793007,'Pateint1','44 york street','M','1996-05-22','patient1@gmail.com');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_chart`
--

DROP TABLE IF EXISTS `patient_chart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_chart` (
  `chart_id` int NOT NULL AUTO_INCREMENT,
  `patient_healthcard` int NOT NULL,
  `blood_type` varchar(100) DEFAULT NULL,
  `height` varchar(100) DEFAULT NULL,
  `weight` varchar(100) DEFAULT NULL,
  `allergies` varchar(100) DEFAULT NULL,
  `blood_pressure` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`chart_id`),
  KEY `patient_healthcard_idx` (`patient_healthcard`),
  CONSTRAINT `patient_healthcard` FOREIGN KEY (`patient_healthcard`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_chart`
--

LOCK TABLES `patient_chart` WRITE;
/*!40000 ALTER TABLE `patient_chart` DISABLE KEYS */;
INSERT INTO `patient_chart` VALUES (1,416793002,'b+ve','175cm','85kg','food allergy','120/85'),(8,416793003,'B-ve','165 cm','86kg','skin allergy','90/120'),(9,416793004,'A+ve','175 cm','96kg','dust allergy','120/185'),(10,416793005,'O-ve','185 cm','76kg','insect sting allergy','125/200'),(11,416793006,'AB-ve','195 cm','96kg','pet allergy','80/120');
/*!40000 ALTER TABLE `patient_chart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_imaging`
--

DROP TABLE IF EXISTS `patient_imaging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_imaging` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id_3` int NOT NULL,
  `imaging_name` varchar(100) DEFAULT NULL,
  `date_started` varchar(100) DEFAULT NULL,
  `images` varchar(225) DEFAULT NULL,
  `notes` varchar(200) DEFAULT NULL,
  `last_update` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patient_id_3_idx` (`patient_id_3`),
  CONSTRAINT `patient_id_3` FOREIGN KEY (`patient_id_3`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_imaging`
--

LOCK TABLES `patient_imaging` WRITE;
/*!40000 ALTER TABLE `patient_imaging` DISABLE KEYS */;
INSERT INTO `patient_imaging` VALUES (1,416793002,'This is sample text for testing','10/02/2011','https://physicsworld.com/wp-content/uploads/2009/02/mri.jpg','This is sample text for testing','2021-04-12 16:05:49'),(2,416793003,'This is sample text for testing','10/03/2012','https://embed.widencdn.net/img/veritas/bvjp0lg4mc/1200x630px/mri-scan-neck.jpeg?u=at8tiu&use=d502n&k=c','This is sample text for testing','2021-04-12 16:36:00'),(3,416793004,'This is sample text for testing','10/04/2013','https://oryon.co.uk/app/uploads/2019/08/Brain-MRI-e1565353833878.jpg','This is sample text for testing','2021-04-12 16:36:00'),(5,416793002,'This is sample text for testing','10/01/2011',NULL,'This is sample text for testing','2021-04-17 23:50:23'),(6,416793003,'This is sample text for testing','11/02/2012',NULL,'This is sample text for testing','2021-04-17 23:50:23'),(7,416793004,'This is sample text for testing','12/03/2013',NULL,'This is sample text for testing','2021-04-17 23:50:23');
/*!40000 ALTER TABLE `patient_imaging` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_immunization`
--

DROP TABLE IF EXISTS `patient_immunization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_immunization` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id_4` int DEFAULT NULL,
  `immunization_name` varchar(100) DEFAULT NULL,
  `recieved` varchar(100) DEFAULT NULL,
  `immunization_notes` varchar(200) DEFAULT NULL,
  `last_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patient_id_4_idx` (`patient_id_4`),
  CONSTRAINT `patient_id_4` FOREIGN KEY (`patient_id_4`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_immunization`
--

LOCK TABLES `patient_immunization` WRITE;
/*!40000 ALTER TABLE `patient_immunization` DISABLE KEYS */;
INSERT INTO `patient_immunization` VALUES (1,416793002,'HEP-B','Yes','This is sample text for testing','2021-04-05 23:27:54'),(2,416793003,'POLIO','Yes','This is sample text for testing','2021-04-05 23:27:54'),(3,416793004,'MMR','No','This is sample text for testing','2021-04-05 23:27:54');
/*!40000 ALTER TABLE `patient_immunization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_lab_result`
--

DROP TABLE IF EXISTS `patient_lab_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_lab_result` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id_1` int DEFAULT NULL,
  `test_name` varchar(100) DEFAULT NULL,
  `test_date` varchar(100) DEFAULT NULL,
  `test_result` varchar(100) DEFAULT NULL,
  `test_notes` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `healthcard_idx` (`patient_id_1`),
  CONSTRAINT `patient_id_1` FOREIGN KEY (`patient_id_1`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_lab_result`
--

LOCK TABLES `patient_lab_result` WRITE;
/*!40000 ALTER TABLE `patient_lab_result` DISABLE KEYS */;
INSERT INTO `patient_lab_result` VALUES (1,416793002,'blood test','10/02/2011','pending','This is sample text for testing'),(2,416793003,'covid test','11/03/2012','-ve','This is sample text for testing'),(3,416793004,'urine test','12/04/2012','pending','This is sample text for testing');
/*!40000 ALTER TABLE `patient_lab_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_login`
--

DROP TABLE IF EXISTS `patient_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pat_hcn` int NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(225) DEFAULT NULL,
  `confirmPassword` varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pat_hcn_idx` (`pat_hcn`),
  CONSTRAINT `pat_hcn` FOREIGN KEY (`pat_hcn`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_login`
--

LOCK TABLES `patient_login` WRITE;
/*!40000 ALTER TABLE `patient_login` DISABLE KEYS */;
INSERT INTO `patient_login` VALUES (1,416793002,'Enrique','$2a$10$7q0NoOtDi7feVsE.1OZGre9AkQ4oHG2KtPtDW5Mz4WQulaP5/nDPC','$2a$10$7q0NoOtDi7feVsE.1OZGre9AkQ4oHG2KtPtDW5Mz4WQulaP5/nDPC'),(2,416793003,'Jose','$2a$10$jWy3dMjUVBO8ciwkvhVWk.FgE5Oit3c54pwOBvY3ok9nEF.mqv.hi','$2a$10$jWy3dMjUVBO8ciwkvhVWk.FgE5Oit3c54pwOBvY3ok9nEF.mqv.hi'),(3,416793004,'Iron Man','$2a$10$LEtbrB6CpHAG5pQ70gkQieGGBz1cQQLTdgsmYSotVfgn/0KkCq//G','$2a$10$LEtbrB6CpHAG5pQ70gkQieGGBz1cQQLTdgsmYSotVfgn/0KkCq//G'),(4,416793005,'The Hulk','$2a$10$t6Mt7au41BFGekQADlEoROUenHzyPvcG7aQQYcHp/k000mAGrccXK','$2a$10$t6Mt7au41BFGekQADlEoROUenHzyPvcG7aQQYcHp/k000mAGrccXK'),(9,416793007,'testpatient','$2a$10$e/tyaQjhlW.20LBIxvbZ2etryDAdz4svAF5wgjJCUVuZXeliUXyXO','$2a$10$e/tyaQjhlW.20LBIxvbZ2etryDAdz4svAF5wgjJCUVuZXeliUXyXO');
/*!40000 ALTER TABLE `patient_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_medicalhistory`
--

DROP TABLE IF EXISTS `patient_medicalhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_medicalhistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id_5` int DEFAULT NULL,
  `medical_condition` varchar(200) DEFAULT NULL,
  `date_of_diagnosis` varchar(100) DEFAULT NULL,
  `ongoing_treatment` varchar(100) DEFAULT NULL,
  `history_notes` varchar(200) DEFAULT NULL,
  `last_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patient_id_5_idx` (`patient_id_5`),
  CONSTRAINT `patient_id_5` FOREIGN KEY (`patient_id_5`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_medicalhistory`
--

LOCK TABLES `patient_medicalhistory` WRITE;
/*!40000 ALTER TABLE `patient_medicalhistory` DISABLE KEYS */;
INSERT INTO `patient_medicalhistory` VALUES (0,416793003,'high blood pressure','2/04/2012','Yes','patient is not suffering from high blood pressure','2021-04-05 23:10:28'),(1,416793002,'diabetic','5/02/2011','No','This patient\'s condition is not under control','2021-04-05 23:10:28'),(2,416793004,'asthma','2/05/2007','Yes','This is sample text ','2021-04-05 23:10:12'),(3,416793005,'HIV','14/07/2000','Yes','This is sample text ','2021-04-05 23:10:12'),(4,416793006,'seizure','10/05/2005','No','This is sample text ','2021-04-05 23:10:12');
/*!40000 ALTER TABLE `patient_medicalhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_medication`
--

DROP TABLE IF EXISTS `patient_medication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_medication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patient_id_2` int NOT NULL,
  `medication_name` varchar(100) DEFAULT NULL,
  `medi_date_started` varchar(100) DEFAULT NULL,
  `ongoing_medication` varchar(100) DEFAULT NULL,
  `medi_date_stopped` varchar(100) DEFAULT NULL,
  `medication_notes` varchar(200) DEFAULT NULL,
  `last_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `patient_healthcard_idx` (`patient_id_2`),
  CONSTRAINT `patient_id_2` FOREIGN KEY (`patient_id_2`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_medication`
--

LOCK TABLES `patient_medication` WRITE;
/*!40000 ALTER TABLE `patient_medication` DISABLE KEYS */;
INSERT INTO `patient_medication` VALUES (1,416793002,'ADHD medication','10/01/2010','No',NULL,'This is sample text for testing.','0000-00-00 00:00:00'),(2,416793003,'amoxicillin','11/02/2011','Yes','20/03/2012','This is sample text for testing.','2021-04-05 23:24:28'),(3,416793004,'Banzel rufinamide','12/03/2012','No',NULL,'This is sample text for testing','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `patient_medication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `revision_note`
--

DROP TABLE IF EXISTS `revision_note`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `revision_note` (
  `id` int NOT NULL AUTO_INCREMENT,
  `HealthCard` int NOT NULL,
  `patient_name` varchar(100) DEFAULT NULL,
  `doctor_name` varchar(100) DEFAULT NULL,
  `note` varchar(200) NOT NULL,
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `pateintID_idx` (`HealthCard`),
  CONSTRAINT `HealthCard` FOREIGN KEY (`HealthCard`) REFERENCES `patient` (`HealthCard`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `revision_note`
--

LOCK TABLES `revision_note` WRITE;
/*!40000 ALTER TABLE `revision_note` DISABLE KEYS */;
INSERT INTO `revision_note` VALUES (4,416793002,'Enqrique','Derek Shepherd','changing address','2021-04-09 18:07:36'),(5,416793002,'Enqrique','Derek Shepherd','updated patient\'s address','2021-04-09 18:35:48'),(6,416793002,'Enqrique','Derek Shepherd','Changing the address','2021-04-10 09:35:06'),(7,416793002,'Enqrique','Derek Shepherd','Changing the address to 46 herzberg','2021-04-21 18:34:06'),(8,416793002,'Enqrique','Derek Shepherd','change the adress','2021-04-21 18:44:26');
/*!40000 ALTER TABLE `revision_note` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-22 12:54:12
