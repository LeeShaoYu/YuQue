> 本文以MySQL数据库为主

##### join

SQL中的连接查询分为以下两种：

- inner join (内连接)
- outer join (外连接)

1. inner join(内连接） 

   在两张表进行连接查询时，只保留两张表中完全匹配的结果集。

   ```sql
   select FirstName, LastName, City, State
   from 
   Person left join Address
   on 
   Person.PersonId = Address.PersonId
   ```

   

2. outer join(外连接)

   outer join  分为以下三种：

   - **left join**:  在两张表进行连接查询时，会返回左表所有的行，即使在右表中没有匹配的记录。
   - **right join**: 在两张表进行连接查询时，会返回右表所有的行，即使在左表中没有匹配的记录。
   - **full join**: 在两张表进行连接查询时，返回左表和右表中所有没有匹配的行。

