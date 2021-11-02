from peewee import PostgresqlDatabase

DATABASE = PostgresqlDatabase('Paws_db')

def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print("Tables were created!")
    DATABASE.close()