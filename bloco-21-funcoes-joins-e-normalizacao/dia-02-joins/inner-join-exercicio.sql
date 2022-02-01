-- Monte uma query que exiba o id do ator , nome do ator e id do filme 
-- em que ele já atuou usando as tabelas actor e film_actor .
SELECT act.actor_id, CONCAT(act.first_name, ' ', act.last_name)
AS 'Nome do autor', f.film_id
FROM actor AS act
INNER JOIN film_actor f
ON act.actor_id = f.actor_id;
