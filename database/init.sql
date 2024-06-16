-- Active: 1718239646167@@127.0.0.1@5432@likeme
CREATE DATABASE likeme;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);

ALTER TABLE posts
ALTER COLUMN titulo TYPE VARCHAR(255);