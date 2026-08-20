-- SQL Query Practice File
-- Add or run your queries here.

-- Example 1: Select all rows
-- SELECT *
-- FROM your_table;

-- Example 2: Filtered query
-- SELECT id, name
-- FROM your_table
-- WHERE status = 'active';

-- Example 3: Ordered + limited results
-- SELECT id, created_at
-- FROM your_table
-- ORDER BY created_at DESC
-- LIMIT 10;


-- Write an SQL query to fetch the names of the customers who have placed an order for the product with ID 1001

SELECT c.customer_name
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id
WHERE o.product_id = 1001;

-- Write an SQL query to fetch the total number of orders for each customer from the orders table

SELECT 
    customer_id,
    COUNT(order_id) AS total_orders
FROM orders
GROUP BY customer_id;

-- Write an SQL query to find the top 3 most expensive products

SELECT *
FROM products
ORDER BY price DESC
LIMIT 3;

-- Write an SQL query to find the names of employees who earn more than the average salary

-- With AVG
SELECT employee_name
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

-- Without AVG
SELECT employee_name
FROM employees
WHERE salary > (
    SELECT SUM(salary) / COUNT(*)
    FROM employees
);