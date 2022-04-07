select film_id, title, 
	if(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
		as 'conheço o filme?'
	from sakila.film;
    
select title, rating,
	case
		when rating = 'G' then 'Livre para todos'
        when rating = 'PG' then 'Não recomendado para menores de 10 anos'
        when rating = 'PG-13' then 'Não recomendado para menores de 13 anos'
        when rating = 'R' then 'Não recomendado para menores de 17 anos'
		else 'Proibido para menores de idade'
	end as publico_alvo
from sakila.film;
