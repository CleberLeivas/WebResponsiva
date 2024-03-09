CREATE DATABASE ControleFinanceiro;
GO
USE ControleFinanceiro;
GO

CREATE TABLE Registros (
    id INT PRIMARY KEY IDENTITY(1,1),
    valor DECIMAL(10, 2) NOT NULL,
    data DATE NOT NULL
);
GO
