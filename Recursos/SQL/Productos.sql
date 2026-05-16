CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    marca VARCHAR(100),
    precio DECIMAL(10,2),
    cantidad INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);