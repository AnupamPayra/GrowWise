import sqlite3



con = sqlite3.connect("database2.db")
curssor = con.cursor()

curssor.execute('''
    CREATE TABLE IF NOT EXISTS user_data(
                username TEXT NOT NULL,
                gmail TEXT NOT NULL
                )
 ''')




curssor.execute("SELECT username FROM user_data")  # Select only the username column
names = curssor.fetchall()



def insert_name_database(name, email):
    con = sqlite3.connect("database2.db")
    curssor = con.cursor()
    curssor.execute('''
    CREATE TABLE IF NOT EXISTS user_data(
                username TEXT NOT NULL,
                gmail TEXT NOT NULL
                )
 ''')

    curssor.execute("INSERT INTO user_data (username, gmail) VALUES(?, ?)", (name, email))
    con.commit()
    con.close()


# def show_list():
#     curssor.execute("SELECT * FROM user_data")
#     for row in curssor.fetchall():
#         print(row)


# show_list()