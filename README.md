## Node server demo

### Simple Node server with a REST API endpoint and db-connection

* Contains MySQL-server
* Open up your server for GET, POST, PUT and DELETE with REST.

### Contains data for exercise in workshop 16
industrial.json
https://raw.githubusercontent.com/SkillWebDemo/ServerSide/refs/heads/master/data/industrial.json

Your task is to create an API that provides a GET - endpoint for industrial product, taking article number as variable.
```SQL
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `orderId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```