# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select productName, productID, categoryName from products as p
left join categories as c on c.categoryID = p.productID;



### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select o.orderid as Id, s.shippername as Shipper
from orders as o
join shippers as s
on o.shipperid = s.shipperid
where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select productName, orderID, quantity from products as p
join orderDetails as o on p.productID = o.orderDetailID
where o.orderID is 10250
order by productName ;


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select o.orderid as 'Order ID', 
c.customername as 'Customer Name', 
e.lastname as 'Employee Surname'
FROM Orders as o
join customers as c on o.customerid = c.customerid
join employees as e on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 