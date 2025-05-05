USE zarautz_db;

 INSERT INTO `user` (`email`, `first_name`, `last_name`, `password`) VALUES
('jauregiazcue@gmail.com','Kai','Jauregi','$2b$10$I8r1SzcLE3vMO4rc4FO/QOi/gxQYms6kilx4CH7rstVc5e7VnETa6');

 INSERT INTO `documentation` (`documentation_id`,`name`,`last_name_one`,`last_name_two`) VALUES
('98765432B','Ana','Gomez','Rodriguez'),
('11223344C','Pedro','Lopez','Martinez'),
('22334455D','Maria','Garcia','Sanchez'),
('33445566E','Jose','Fernandez','Torres'),
('44556677F','Sofia','Diaz','Vazquez'),
('55667788G','David','Perez','Ruiz'),
('66778899H','Laura','Martin','Jimenez'),
('77889900I','Carlos','Moreno','Alonso'),
('88990011J','Elena','Romero','Navarro'),
('99001122K','Javier','Gonzalez','Reyes'),
('10203040L','Isabella','Flores','Herrera'),
('21314151M','Mateo','Cruz','Ortega'),
('32425262N','Valentina','Molina','Serrano'),
('43536373O','Sebastian','Blanco','Pascual'),
('54647484P','Camila','Castillo','Prieto'),
('65758595Q','Diego','Guerrero','Mendez'),
('76869606R','Valeria','Vega','Rivas'),
('87970717S','Andres','Rojas','Gil'),
('98081828T','Lucia','Contreras','Peña'),
('09192939U','Gabriel','Soto','Lozano');

 INSERT INTO `object_category` (`name`) VALUES
('Llaves'),('Bicicletas'),('Bolsos / Carteras'),
('Documentación / Tarjetas / Dinero'),
('Electrónica / Informática / Vehículo'),
('Joyas'),('Telefonos'),('Vestir / Complementos'),
('Otros');

 INSERT INTO `object` (`object_id`,`lost_at`,`documentation_id`,`object_category_id`) VALUES
('D17M5A2025M01S01','2025-04-01 08:15:00',null,2),
('D18M5A2025M02S02','2025-04-02 11:30:00','98765432B',3),
('D20M5A2025M03S03','2025-04-03 14:45:00',null,1),
('D21M5A2025M04S04','2025-04-04 16:00:00','11223344C',4),
('D25M5A2025M05S05','2025-04-05 09:00:00',null,2),
('D01M6A2025M06S06','2025-04-06 13:20:00','22334455D',1),
('D17M6A2025M07S07','2025-04-07 18:10:00',null,3),
('D17M6A2025M08S08','2025-04-08 10:55:00','33445566E',4),
('D17M6A2025M09S09','2025-04-09 15:00:00',null,2),
('D17M6A2025M10S10','2025-04-10 19:30:00','44556677F',1),
('D17M6A2025M11S11','2025-04-11 07:00:00',null,3),
('D17M5A2025M12S12','2025-04-12 12:40:00','55667788G',4),
('D17M5A2025M13S13','2025-04-13 17:00:00',null,1),
('D17M5A2025M14S14','2025-04-14 09:10:00','66778899H',2),
('D17M5A2025M15S15','2025-04-15 14:00:00',null,3),
('D17M5A2025M16S16','2025-04-16 16:50:00','77889900I',4),
('D17M5A2025M17S17','2025-04-17 11:25:00',null,1),
('D17M5A2025M18S18','2025-04-18 08:00:00','88990011J',2),
('D17M5A2025M19S19','2025-04-19 13:15:00',null,3),
('D17M5A2025M20S20','2025-04-20 18:05:00','99001122K',4);

INSERT INTO `request` (`request_at`,`first_name`,`last_name`,`dni`,`direction`,`telephone`,`email`,`lost_at`,`place`,`description`,`object_category_id`) VALUES
('2025-04-01 09:00:00','Juan','Perez','23456789B','Calle Falsa 123','600 111 222','juan.perez@email.com','2025-03-31 15:30:00','Plaza Mayor','Perdi mi cartera con documentos.',1),
('2025-04-02 11:30:00','Ana','Gomez','34567890C','Avenida Siempre Viva 456','611 222 333','ana.gomez@email.com','2025-04-01 10:00:00','Parque Central','Extravie mis llaves de casa.',2),
('2025-04-03 14:00:00','Pedro','Rodriguez','45678901D','Ronda del Mar 789','622 333 444','pedro.r@email.com','2025-04-02 18:00:00','Estacion de Tren','Se me cayo el telefono movil.',3),
('2025-04-04 16:30:00','Maria','Sanchez','56789012E','Paseo Arbolado 101','633 444 555','maria.s@email.com','2025-04-03 12:00:00','Centro Comercial','Perdi una bolsa de la compra con ropa.',4),
('2025-04-05 08:00:00','Jose','Fernandez','67890123F','Via Principal 202','644 555 666','jose.f@email.com','2025-04-04 09:30:00','Biblioteca Publica','No encuentro mi libro.',5),
('2025-04-06 10:45:00','Sofia','Diaz','78901234G','Camino Viejo 303','655 666 777','sofia.d@email.com','2025-04-05 17:00:00','Polideportivo','Perdi mi toalla y mis zapatillas.',6),
('2025-04-07 13:15:00','David','Lopez','89012345H','Travesia Estrecha 404','666 777 888','david.l@email.com','2025-04-06 11:00:00','Mercado Municipal','Extravie mi billetera.',1),
('2025-04-08 15:00:00','Laura','Martinez','90123456I','Plazoleta Bonita 505','677 888 999','laura.m@email.com','2025-04-07 14:30:00','Museo','Perdi una pulsera.',2),
('2025-04-09 17:20:00','Carlos','Garcia','01234567J','Calle Ancha 606','688 999 000','carlos.g@email.com','2025-04-08 19:00:00','Universidad','No encuentro mi ordenador portatil.',3),
('2025-04-10 09:30:00','Elena','Sanchez','12345678K','Avenida Nueva 707','699 000 111','elena.s@email.com','2025-04-09 08:45:00','Hospital','Creo que perdi mi telefono en la sala de espera.',4),
('2025-04-11 12:00:00','Javier','Fernandez','23456789L','Ronda Norte 808','700 111 222','javier.f@email.com','2025-04-10 16:00:00','Estadio','Perdi mi bufanda.',5),
('2025-04-12 14:30:00','Isabella','Diaz','34567890M','Paseo del Sol 909','711 222 333','isabella.d@email.com','2025-04-11 10:20:00','Playa','Extravie mis gafas de sol.',6),
('2025-04-13 16:00:00','Mateo','Lopez','45678901N','Via del Comercio 1010','722 333 444','mateo.l@email.com','2025-04-12 13:00:00','Tienda','Creo que deje mi paraguas en la tienda.',1),
('2025-04-14 08:45:00','Valentina','Martinez','56789012O','Camino Real 1111','733 444 555','valentina.m@email.com','2025-04-13 17:30:00','Gimnasio','Perdi mi botella de agua.',2),
('2025-04-15 11:00:00','Sebastian','Garcia','67890123P','Travesia Larga 1212','744 555 666','sebastian.g@email.com','2025-04-14 11:45:00','Oficina','No encuentro mis auriculares.',3),
('2025-04-16 13:30:00','Camila','Sanchez','78901234Q','Plazoleta Mayor 1313','755 666 777','camila.s@email.com','2025-04-15 15:00:00','Ayuntamiento','Perdi un documento.',4),
('2025-04-17 15:00:00','Diego','Fernandez','89012345R','Callejon Oscuro 1414','766 777 888','diego.f@email.com','2025-04-16 19:10:00','Calle','Creo que se me cayo algo mientras caminaba.',5),
('2025-04-18 17:40:00','Valeria','Diaz','90123456S','Avenida Amplia 1515','777 888 999','valeria.d@email.com','2025-04-17 09:00:00','Parada de Autobus','Perdi mi tarjeta de transporte.',6),
('2025-04-19 09:00:00','Andres','Lopez','01234567T','Ronda del Bosque 1616','788 999 000','andres.l@email.com','2025-04-18 14:00:00','Campo de Futbol','Extravie mis guantes.',1),
('2025-04-20 11:30:00','Lucia','Martinez','12345678U','Paseo Fluvial 1717','799 000 111','lucia.m@email.com','2025-04-19 10:30:00','Cafe','Creo que olvide mi agenda.',2);

