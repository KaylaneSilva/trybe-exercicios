-- 1
SELECT 
    a.actor_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    f.film_id
FROM
    sakila.actor AS a
        JOIN
    sakila.film_actor AS f ON a.actor_id = f.actor_id;

-- 2
SELECT 
    s.first_name, s.last_name, a.address
FROM
    sakila.staff AS s
        JOIN
    sakila.address AS a ON s.address_id = a.address_id;

-- 3
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    a.address_id,
    a.address
FROM
    sakila.customer AS c
        JOIN
    sakila.address AS a
ORDER BY c.first_name DESC
LIMIT 100;

-- 4
SELECT 
    c.first_name, c.email, a.address_id, a.address, a.district
FROM
    sakila.customer AS c
        JOIN
    sakila.address AS a ON c.address_id = a.address_id;

-- 5
SELECT 
    c.first_name, COUNT(a.address_id) AS qnt_address
FROM
    sakila.customer AS c
        JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC , last_name DESC;

-- 6
SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    AVG(p.amount) AS average_pay
FROM
    sakila.staff AS s
        JOIN
    sakila.payment AS p
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY full_name;

-- 7
SELECT 
    a.actor_id, a.first_name, fa.film_id, film.title
FROM
    sakila.actor AS a
        JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
        JOIN
    sakila.film AS film ON fa.film_id = film.film_id;

