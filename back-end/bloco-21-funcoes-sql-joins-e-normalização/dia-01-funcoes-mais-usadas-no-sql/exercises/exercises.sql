use hr;
select * from employees;

-- 1
select max(salary) from employees;

-- 2
select max(salary) - min(salary) from employees;

-- 3
select job_id, avg(salary) as 'avg_salary'
from employees group by job_id
order by `avg_salary` desc;

-- 4
select sum(salary) as `pay_all_employees` from employees;

-- 5
 select round(max(salary), 2) as larger_salary,
	round(min(salary), 2) as small_salary,
	round(sum(salary), 2) as sum_all_salarys,
	round(avg(salary), 2) as average_salary
 from employees;
 
 -- 6
 select job_id, count(*) as employees_qnt from employees
 group by job_id having job_id = 'IT_PROG';
 
 -- 7
 select job_id, sum(salary) as all_payment_salary
 from employees group by job_id;
 
 -- 8
 select job_id, sum(salary) as all_payment_salary
 from employees group by job_id
 having job_id = 'IT_PROG';
 
 -- 9
 select job_id, avg(salary) as average_payment_salary
 from employees group by job_id
 having job_id <> 'IT_PROG'
 order by `average_payment_salary` desc;
 
 -- 10
 select department_id, avg(salary) as average_payment_salary, count(*) as all_employees
 from employees
 group by department_id having `all_employees` > 10;
 
 -- 11
 SET SQL_SAFE_UPDATES = 0;
 update employees
 set phone_number = replace(phone_number, 515, 777)
 where left(phone_number, 3) = 515;
 
 -- 12
 
 select first_name from employees
 where char_length(first_name) >= 8;
 
 -- 13
 select employee_id, first_name, year(hire_date) as hire_year
 from employees;
 
 -- 14
 select employee_id, first_name, day(hire_date) as hire_day
 from employees;
 
 -- 15
 select employee_id, first_name, month(hire_date) as hire_month
 from employees;
 
 -- 16
 select ucase(first_name) as first_name from employees;
 
 -- 17
 select last_name, hire_date from employees
 where hire_date like '1987-07%';
 
 -- 18
 select
 first_name, last_name, datediff(current_date(), hire_date) as worked_days
 from employees;


