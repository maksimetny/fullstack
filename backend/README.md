
# backend

## endpoints

### cities

- `/api/cities`
- `/api/cities/<id>`

### citizens

- `/api/citizens`
- `/api/citizens/<id>`

## database

### creating group

- `INSERT INTO groups (name, type) VALUES ('Россия', 'country')`
- `INSERT INTO groups (name, type, parent_id) VALUES ('Москва г.', 'city', 1)`
- `INSERT INTO groups (name, type, parent_id) VALUES ('Пресненский р-н', 'district', 2)`
- `INSERT INTO groups (name, type, parent_id) VALUES ('Гашека ул.', 'street', 3)`
- `INSERT INTO groups (name, type, parent_id) VALUES ('10а', 'house', 4)`

### creating city

- `INSERT INTO cities (name, value) VALUES ('Москва', 10000000)`

### creating citizen

- `INSERT INTO citizens (name, city_id, group_id) VALUES ('Анна', 1, 5)`
