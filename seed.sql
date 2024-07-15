-- Adminer 4.8.3 MySQL 8.0.16 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

INSERT INTO `drinks` (`id`, `type`, `name`, `description`, `price`) VALUES
(1,	'Tea',	'Hojicha',	'Smoked green tea from Uji.',	9.5),
(2,	'Shochu',	'Kurosawa',	'Strongly-infused barley alcohol. 45%. ',	58),
(3,	'Tea',	'Macha',	'Pure high quality macha tea from Kyoto. ',	24);

INSERT INTO `foods` (`id`, `name`, `description`, `price`, `weight`) VALUES
(1,	'Furikake',	'Shiso furikake power to be mixed with rice.',	3.5,	15),
(2,	'Furikake',	'Wakame and dried salty plum powder to be mixed with rice. ',	3.8,	12);


-- 2024-07-15 19:26:06
