-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: university-timetable
-- ------------------------------------------------------
-- Server version	8.0.22

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
  `username` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('abcd','1234'),('cbe1','123'),('hbchd','edihe'),('jdhcd','nvhvhj'),('mega','123321'),('QUINTON','bbg46'),('RAJ','PDEEP'),('rajesh','1234'),('RAM','2000'),('ramesh','12345'),('ree','1234'),('rema','1234'),('Rock','bbc56'),('sainath','1234'),('THUKKARAM','2020'),('yogesh','ram');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allocation`
--

DROP TABLE IF EXISTS `allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allocation` (
  `course_id` varchar(8) DEFAULT NULL,
  `instructor_id` varchar(10) DEFAULT NULL,
  `slot` int DEFAULT NULL,
  `day` varchar(10) DEFAULT NULL,
  `sec` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allocation`
--

LOCK TABLES `allocation` WRITE;
/*!40000 ALTER TABLE `allocation` DISABLE KEYS */;
INSERT INTO `allocation` VALUES ('coa-lab','coa1',5,'monday','cse-a'),('coa-lab','coa1',6,'monday','cse-a'),('dbms-lab','dbms1',5,'tuesday','cse-a'),('dbms-lab','dbms1',6,'tuesday','cse-a'),('coa','coa1',1,'monday','cse-a'),('coa','coa1',1,'tuesday','cse-a'),('coa','coa1',1,'wednesday','cse-a'),('toc','toc1',2,'tuesday','cse-a'),('toc','toc1',2,'wednesday','cse-a'),('toc','toc1',1,'thursday','cse-a'),('maths','maths1',3,'wednesday','cse-a'),('maths','maths1',2,'thursday','cse-a'),('maths','maths1',1,'friday','cse-a'),('maths','maths1',2,'monday','cse-a'),('elec','elec1',3,'thursday','cse-a'),('elec','elec1',2,'friday','cse-a'),('elec','elec1',3,'monday','cse-a'),('dbms','dbms1',3,'friday','cse-a'),('dbms','dbms1',4,'monday','cse-a'),('dbms','dbms1',3,'tuesday','cse-a'),('env','env1',4,'tuesday','cse-a'),('env','env1',4,'wednesday','cse-a'),('env','env1',4,'thursday','cse-a'),('coa-lab','coa2',5,'tuesday','cse-b'),('coa-lab','coa2',6,'tuesday','cse-b'),('dbms-lab','dbms2',5,'wednesday','cse-b'),('dbms-lab','dbms2',6,'wednesday','cse-b'),('coa','coa2',1,'tuesday','cse-b'),('coa','coa2',1,'wednesday','cse-b'),('coa','coa2',1,'thursday','cse-b'),('toc','toc2',2,'wednesday','cse-b'),('toc','toc2',2,'thursday','cse-b'),('toc','toc2',1,'friday','cse-b'),('maths','maths2',3,'thursday','cse-b'),('maths','maths2',2,'friday','cse-b'),('maths','maths2',1,'monday','cse-b'),('maths','maths2',2,'tuesday','cse-b'),('elec','elec2',3,'friday','cse-b'),('elec','elec2',2,'monday','cse-b'),('elec','elec2',3,'tuesday','cse-b'),('dbms','dbms2',3,'monday','cse-b'),('dbms','dbms2',4,'tuesday','cse-b'),('dbms','dbms2',3,'wednesday','cse-b'),('env','env2',4,'monday','cse-b'),('env','env2',4,'monday','cse-b'),('env','env2',4,'monday','cse-b'),('coa-lab','coa3',5,'wednesday','cse-c'),('coa-lab','coa3',6,'wednesday','cse-c'),('dbms-lab','dbms3',5,'thursday','cse-c'),('dbms-lab','dbms3',6,'thursday','cse-c'),('coa','coa3',1,'wednesday','cse-c'),('coa','coa3',1,'thursday','cse-c'),('coa','coa3',1,'friday','cse-c'),('toc','toc3',2,'thursday','cse-c'),('toc','toc3',2,'friday','cse-c'),('toc','toc3',1,'monday','cse-c'),('maths','maths3',3,'friday','cse-c'),('maths','maths3',2,'monday','cse-c'),('maths','maths3',1,'tuesday','cse-c'),('maths','maths3',2,'wednesday','cse-c'),('elec','elec3',3,'monday','cse-c'),('elec','elec3',2,'tuesday','cse-c'),('elec','elec3',3,'wednesday','cse-c'),('dbms','dbms3',3,'tuesday','cse-c'),('dbms','dbms3',4,'wednesday','cse-c'),('dbms','dbms3',3,'thursday','cse-c'),('env','env3',4,'monday','cse-c'),('env','env3',4,'tuesday','cse-c'),('env','env3',4,'monday','cse-c'),('coa-lab','coa1',5,'thursday','cse-d'),('coa-lab','coa1',6,'thursday','cse-d'),('dbms-lab','dbms1',5,'friday','cse-d'),('dbms-lab','dbms1',6,'friday','cse-d'),('coa','coa1',1,'thursday','cse-d'),('coa','coa1',1,'friday','cse-d'),('coa','coa1',1,'monday','cse-d'),('toc','toc1',2,'friday','cse-d'),('toc','toc1',2,'monday','cse-d'),('toc','toc1',1,'tuesday','cse-d'),('maths','maths1',3,'monday','cse-d'),('maths','maths1',2,'tuesday','cse-d'),('maths','maths1',1,'wednesday','cse-d'),('maths','maths1',2,'thursday','cse-d'),('elec','elec1',3,'tuesday','cse-d'),('elec','elec1',2,'wednesday','cse-d'),('elec','elec1',3,'thursday','cse-d'),('dbms','dbms1',3,'wednesday','cse-d'),('dbms','dbms1',4,'thursday','cse-d'),('dbms','dbms1',3,'friday','cse-d'),('env','env1',4,'monday','cse-d'),('env','env1',4,'tuesday','cse-d'),('env','env1',4,'wednesday','cse-d'),('coa-lab','coa2',5,'friday','cse-e'),('coa-lab','coa2',6,'friday','cse-e'),('dbms-lab','dbms2',5,'monday','cse-e'),('dbms-lab','dbms2',6,'monday','cse-e'),('coa','coa2',1,'friday','cse-e'),('coa','coa2',1,'monday','cse-e'),('coa','coa2',1,'tuesday','cse-e'),('toc','toc2',2,'monday','cse-e'),('toc','toc2',2,'tuesday','cse-e'),('toc','toc2',1,'wednesday','cse-e'),('maths','maths2',3,'tuesday','cse-e'),('maths','maths2',2,'wednesday','cse-e'),('maths','maths2',1,'thursday','cse-e'),('maths','maths2',2,'friday','cse-e'),('elec','elec2',3,'wednesday','cse-e'),('elec','elec2',2,'thursday','cse-e'),('elec','elec2',3,'friday','cse-e'),('env','env2',3,'thursday','cse-e'),('env','env2',4,'friday','cse-e'),('env','env2',3,'monday','cse-e'),('dbms','dbms2',4,'monday','cse-e'),('dbms','dbms2',4,'tuesday','cse-e'),('dbms','dbms2',4,'wednesday','cse-e');
/*!40000 ALTER TABLE `allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `course_id` varchar(8) NOT NULL,
  `title` varchar(40) DEFAULT NULL,
  `credits` int DEFAULT NULL,
  `mode` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('coa','coa',3,'class'),('coa-lab','coa-lab',2,'lab'),('dbms','dbms',3,'class'),('dbms-lab','dbms-lab',2,'lab'),('elec','elec',3,'class'),('env','env',3,'class'),('maths','maths',4,'class'),('toc','toc',3,'class');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructor`
--

DROP TABLE IF EXISTS `instructor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructor` (
  `instructor_id` varchar(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`instructor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructor`
--

LOCK TABLES `instructor` WRITE;
/*!40000 ALTER TABLE `instructor` DISABLE KEYS */;
INSERT INTO `instructor` VALUES ('coa1','shriram'),('coa2','sumesh'),('coa3','prashanth'),('coa4','madhavan'),('coa5','thangavelu '),('dbms1','Manjusha'),('dbms2','Priyanka Kumar'),('dbms3','Bindu KR'),('dbms4','G Jeyakumar'),('dbms5','N Jeyakumar'),('elec1','Karthi'),('elec2','Harini'),('elec3','Lalithamani'),('elec4','Jevitha'),('elec5','Dhanya'),('env1','Nikhil Raj'),('env2','Poongothai'),('env3','Kalai'),('maths1','Poongulazhi'),('maths2','Puvaneswari'),('maths3','Prakash'),('maths4','Santha Kumar'),('maths5','murali krishna'),('toc1','malathi'),('toc2','sujee'),('toc3','bagyamal'),('toc4','senthil kumar'),('toc5','prathilothamai');
/*!40000 ALTER TABLE `instructor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `replacement_faculty`
--

DROP TABLE IF EXISTS `replacement_faculty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `replacement_faculty` (
  `old_instructor_id` varchar(10) DEFAULT NULL,
  `new_instructor_id` varchar(10) DEFAULT NULL,
  `course_id` varchar(8) DEFAULT NULL,
  `slot` int DEFAULT NULL,
  `sec` varchar(1) DEFAULT NULL,
  `day` varchar(10) DEFAULT NULL,
  KEY `old_instructor_id` (`old_instructor_id`),
  KEY `new_instructor_id` (`new_instructor_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `replacement_faculty_ibfk_1` FOREIGN KEY (`old_instructor_id`) REFERENCES `instructor` (`instructor_id`),
  CONSTRAINT `replacement_faculty_ibfk_2` FOREIGN KEY (`new_instructor_id`) REFERENCES `instructor` (`instructor_id`),
  CONSTRAINT `replacement_faculty_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `replacement_faculty`
--

LOCK TABLES `replacement_faculty` WRITE;
/*!40000 ALTER TABLE `replacement_faculty` DISABLE KEYS */;
/*!40000 ALTER TABLE `replacement_faculty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teaches`
--

DROP TABLE IF EXISTS `teaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teaches` (
  `instructor_id` varchar(10) DEFAULT NULL,
  `course_id` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teaches`
--

LOCK TABLES `teaches` WRITE;
/*!40000 ALTER TABLE `teaches` DISABLE KEYS */;
INSERT INTO `teaches` VALUES ('coa1','coa'),('coa2','coa'),('coa3','coa'),('coa4','coa'),('coa5','coa'),('toc1','toc'),('toc2','toc'),('toc3','toc'),('toc4','toc'),('toc5','toc'),('maths1','maths'),('maths2','maths'),('maths3','maths'),('maths4','maths'),('maths5','maths'),('elec1','elec'),('elec2','elec'),('elec3','elec'),('elec4','elec'),('elec5','elec'),('env1','env'),('env2','env'),('env3','env'),('dbms1','dbms'),('dbms2','dbms'),('dbms3','dbms'),('dbms4','dbms'),('dbms5','dbms'),('coa1','coa-lab'),('coa2','coa-lab'),('coa3','coa-lab'),('coa4','coa-lab'),('coa5','coa-lab'),('dbms1','dbms-lab'),('dbms2','dbms-lab'),('dbms3','dbms-lab'),('dbms4','dbms-lab'),('dbms5','dbms-lab');
/*!40000 ALTER TABLE `teaches` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-31 15:49:48
