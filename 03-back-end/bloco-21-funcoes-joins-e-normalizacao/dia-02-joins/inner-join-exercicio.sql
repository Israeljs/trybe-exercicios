-- Monte uma query que exiba o id do ator , nome do ator e id do filme 
-- em que ele já atuou usando as tabelas actor e film_actor .
SELECT act.actor_id, CONCAT(act.first_name, ' ', act.last_name)
AS 'Nome do autor', f.film_id
FROM actor AS act
INNER JOIN film_actor f
ON act.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos 
-- funcionários do banco. Use as tabelas staff e address .
SELECT st.first_name AS Nome, st.last_name AS 'Sobre nome',
ad.address AS Endereco
FROM staff AS st
INNER JOIN address AS ad
ON st.address_id = ad.address_id;

-- Exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film . 
SELECT act.actor_id AS 'id do autor', CONCAT(act.first_name, ' ', act.last_name)
AS 'Nome do autor', fac.film_id AS 'id do film', f.title AS 'título do filme'
FROM actor AS act
INNER JOIN film_actor AS fac
ON act.actor_id = fac.actor_id
INNER JOIN film AS f
ON fac.film_id = f.film_id;
