/**
 * Given a table where users' connections are logged, find the first and the last address of the networks they connected from.
*/

SELECT id AS id,
	network(ip_address) AS first_address,
	broadcast(ip_address) AS last_address
FROM connections
GROUP BY id,
	ip_address
ORDER BY id;
