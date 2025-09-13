import sqlite3

def create_database():
    connection = sqlite3.connect("database/database.db")
    cursor = connection.cursor()

    # Criar tabela de produtos (se não existir)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL
    )
    """)

    # Inserir alguns produtos de exemplo
    cursor.execute("INSERT INTO products (name, price) VALUES ('Cupcake de Chocolate', 5.50)")
    cursor.execute("INSERT INTO products (name, price) VALUES ('Cupcake de Morango', 6.00)")
    cursor.execute("INSERT INTO products (name, price) VALUES ('Cupcake de Baunilha', 4.75)")

    connection.commit()
    connection.close()
    print("Banco de dados criado com sucesso e produtos adicionados!")

if __name__ == "__main__":
    create_database()
