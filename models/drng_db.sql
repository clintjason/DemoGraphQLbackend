-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 19 mai 2023 à 15:51
-- Version du serveur : 8.0.33
-- Version de PHP : 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `drng_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

CREATE TABLE `appointments` (
  `id` tinyint NOT NULL,
  `unique_code` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `name` varchar(9) DEFAULT NULL,
  `age` tinyint DEFAULT NULL,
  `sex` varchar(6) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar(19) DEFAULT NULL,
  `appointment_date` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `first_time` varchar(3) DEFAULT NULL,
  `request_date` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `appointment_status` varchar(7) DEFAULT NULL,
  `appointment_time` varchar(24) DEFAULT NULL,
  `address` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `city` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `before_appointment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `after_appointment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `updatedAt` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `appointments`
--

INSERT INTO `appointments` (`id`, `unique_code`, `name`, `age`, `sex`, `phone`, `email`, `appointment_date`, `first_time`, `request_date`, `appointment_status`, `appointment_time`, `address`, `city`, `before_appointment`, `after_appointment`, `createdAt`, `updatedAt`) VALUES
(1, 'A01842023', 'Manuella', 22, 'female', 6454245, 'manuella@gmail.com', '2023-05-11', 'no', '2023-05-26', 'passed', '2023-05-17T09:00:00.100Z', 'CNPS', 'Buea', 'Need a meeeting asap.', 'Booked for further exams and come back.', '2023-05-17', '2023-05-19'),
(2, 'A11842023', 'Lea', 22, 'female', 65372892, 'lea@gmail.com', '2023-05-16 23:00:00', 'yes', '2023-05-17 23:00:00', 'passed', '2023-05-17T06:07:00.852Z', 'Mile 17', 'Buea', 'Need a meeting asap.', 'Checkup done and exams prescribed.', '2023-05-17', '2023-05-19 13:00:56'),
(3, 'A21942023', 'Jessy', 14, 'female', 124435, 'jessy@gmail.com', '2023-05-17', 'yes', '2023-05-17', 'pending', '2023-05-17T14:18:00.560Z', 'Deido', 'Douala', 'Want to check myself', 'Patient diagnosed and the following exams prescribed:', '2023-05-17', '2023-05-18'),
(4, 'A32042023', 'Amandine', 22, 'female', 9033241, 'amandine@gmail.com', '2023-05-20', 'yes', '2023-05-19', 'pending', '2023-05-17T19:00:00.395Z', 'Bonaberi', 'Douala', 'Am pregnant want to consult', '', '2023-05-17', '2023-05-17'),
(5, 'A43042023', 'Lionie', 30, 'female', 4689034, 'lionie@gmail.com', '2023-05-30', 'yes', '2023-05-31', 'pending', '2023-05-17T17:00:00.275Z', 'Mendong', 'Yaoundé', 'Am pregnant want to consult', '', '2023-05-17', '2023-05-17'),
(6, 'A53042023', 'Zena', 25, 'female', 29308503, 'zena@gmail.com', '2023-05-29', 'yes', '2023-05-30', 'pending', '2023-05-17T14:00:00.275Z', 'Acacia', 'Yaoundé', 'Simple check up after a miscarriage', 'Submitted to medication and a surgical procedure for cleansing.', '2023-05-17', '2023-05-18'),
(7, 'A63042023', 'Neon', 32, 'female', 9849302, 'neon@gmail.com', '2023-05-29', 'yes', '2023-05-27', 'passed', '2023-05-18T10:00:00.066Z', 'Omnisport', 'Yaoundé', 'Simple check up after a miscarriage', 'Patient is doing perfectly well now.', '2023-05-17', '2023-05-18'),
(8, 'A71942023', 'Mari-Nôel', 32, 'female', 546267647, 'marienoel@gmail.com', '2023-05-19', 'yes', '2023-05-20', 'missed', '2023-05-17T11:00:00.626Z', 'Depanda', 'Douala', 'Simple check up after a 3rd miscarriage', '', '2023-05-17', '2023-05-17'),
(9, 'A81942023', 'Lisa', 35, 'female', 2356533, 'lisa@gmail.com', '2023-05-19', 'yes', '2023-05-20', 'passed', '2023-05-17T09:00:00.197Z', 'Down Beach', 'Limbe', 'Simple check up after a 2nd miscarriage', '', '2023-05-17', '2023-05-17'),
(10, 'A91842023', 'Juliette', 19, 'female', 4332366, 'juliette@gmail.com', '2023-05-18', 'yes', '2023-05-18', 'missed', '2023-05-17T11:00:00.664Z', 'Mile 2', 'Limbe', 'Need an abortion.', '', '2023-05-17', '2023-05-17'),
(11, 'A101942023', 'Noah', 24, 'male', 75432532, 'noah@gmail.com', '2023-05-18', 'yes', '2023-05-23', 'missed', '2023-05-17T18:00:00.721Z', 'Molyko', 'Buea', 'Need to consult.', '', '2023-05-17', '2023-05-19'),
(12, 'A112042023', 'Jonas', 53, 'male', 65849302, 'jonas@gmail.com', '2023-05-20', 'yes', '2023-05-19', 'missed', '2023-05-18T13:00:00.562Z', 'Federal Quaters', 'Buea', 'Need to check my Prostrate.', '', '2023-05-18', '2023-05-18'),
(13, 'A122142023', 'Laure', 20, 'female', 6542346, 'laure@gmail.com', '2023-05-21', 'yes', '2023-05-23', 'missed', '2023-05-18T08:00:00.714Z', 'Tekace', 'Yaoundé', 'Regular Checker.', '', '2023-05-18', '2023-05-18'),
(14, 'A133042023', 'Jeff', 19, 'male', 64433524, 'jeff@gmail.com', '2023-05-30', 'yes', '2023-05-31', 'passed', '2023-05-18T11:00:00.677Z', 'Njapogma', 'Douala', 'Need a checkup of my urinary system', '', '2023-05-18', '2023-05-18'),
(15, 'A142242023', 'Loveline', 24, 'female', 34632323, 'loveline@gmail.com', '2023-05-21', 'yes', '2023-05-22', 'passed', '2023-05-18T09:00:00.005Z', 'Ndogbong', 'Douala', 'Need a checkup.', 'Checkup completed.', '2023-05-18', '2023-05-18'),
(16, 'A152342023', 'Yvette', 23, 'female', 4587543, 'yvette@gmail.com', '2023-05-23', 'yes', '2023-05-27', 'pending', '2023-05-18T08:00:00.145Z', 'Bastos', 'Yaoundé', 'Traveling for the meet up.', '', '2023-05-18', '2023-05-18'),
(17, 'A162042023', 'Ted', 38, 'male', 4533232, 'ted@gmail.com', '2023-05-19 23:00:00', 'yes', '2023-05-19 23:00:00', 'pending', '2023-05-19T07:00:00.285Z', 'Molyko', 'Buea', 'First visit. Has people with prostrate cancer in his family.', NULL, '2023-05-19 12:51:33', '2023-05-19 13:25:17'),
(33, 'A182242023', 'Michael', 15, 'male', 56778854, 'michael@gmail.com', '2023-05-21 23:00:00', 'yes', '2023-05-21 23:00:00', 'passed', '2023-05-19T08:00:00.191Z', 'Biyem-massi', 'Yaoundé', 'Need a checkup.', 'Completed now.', '2023-05-19 13:47:54', '2023-05-19 13:48:47');

-- --------------------------------------------------------

--
-- Structure de la table `sqlite_sequence`
--

CREATE TABLE `sqlite_sequence` (
  `name` varchar(12) DEFAULT NULL,
  `seq` tinyint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `sqlite_sequence`
--

INSERT INTO `sqlite_sequence` (`name`, `seq`) VALUES
('appointments', 16);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` tinyint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
