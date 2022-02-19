-- \c dcuocq66flc99i

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT CHECK (price >= 0),
    sale BOOLEAN DEFAULT false,
    rating INT CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    image TEXT
);
