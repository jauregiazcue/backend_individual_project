USE zarautz_db;

 INSERT INTO `user` (`email`, `first_name`, `last_name`, `password`) VALUES
('jauregiazcue@gmail.com','Kai','Jauregi','$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6');

 INSERT INTO `documentation` (`documentation_id`,`name`,`last_name_one`,`last_name_two`) VALUES
('12345678P','Kai','Jauregi','Azcue'),
('87654321P','Iak','Igeruaj','Eucza');

 INSERT INTO `object_category` (`name`) VALUES
('Llaves'),('Bicicletas'),('Bolsos / Carteras'),
('Documentación / Tarjetas / Dinero'),
('Electrónica / Informática / Vehículo'),
('Joyas'),('Telefonos'),('Vestir / Complementos'),
('Otros');

 INSERT INTO `object` (`object_id`,`lost_at`,`documentation_id`,`object_category_id`) VALUES
('D16M5A2025M26S08','2025-03-20 10:20:00',null,1),
('D16M5A2025M26S10','2025-03-21 17:50:00',null,1),
('D16M5A2025M26S30','2025-03-22 12:00:00','72537247P',4);

