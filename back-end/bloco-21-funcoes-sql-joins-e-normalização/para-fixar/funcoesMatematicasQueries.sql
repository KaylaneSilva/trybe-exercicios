-- Desafio MOD e  DIV
-- 1
select if (15 mod 2 = 0, 'Par', 'Ímpar') as `Par ou ímpar?`;

-- 2 - Qnts grupos completos cabe em uma sala que comportta 220 pessoas
select 220 div 12;

-- 3 - sobra lugares? se sim, qnts?
select 220 mod 12;

-- Para fixar

select round(15 + (rand() * 5 ));

select round(15.7515971, 5);

select floor(39.494);

select ceil(85.234);
