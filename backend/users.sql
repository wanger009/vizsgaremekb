CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR NOT NULL,
    jelszo INT NOT NULL,
    accesstoken VARCHAR NOT NULL,
    refresh_token VARCHAR NOT NULL,
);