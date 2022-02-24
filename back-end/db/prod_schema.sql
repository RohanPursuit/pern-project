-- \c dcuocq66flc99i

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS cart;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT CHECK (price >= 0),
    sale BOOLEAN DEFAULT false,
    rating INT CHECK (rating >= 0 AND rating <= 5) DEFAULT 1,
    featured BOOLEAN DEFAULT false,
    vid TEXT,
    image TEXT DEFAULT 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    description TEXT,
    price INT CHECK (price >= 0),
    sale BOOLEAN DEFAULT false,
    rating INT CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN DEFAULT false,
    image TEXT
)
