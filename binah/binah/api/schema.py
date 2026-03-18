


#account (id, username)

CREATE_ACCOUNTS_TABLE = "CREATE TABLE IF NOT EXISTS accounts (id SERIAL PRIMARY KEY, username VARCHAR(67));"
# game (name, pgn, result, accountid)

CREATE_GAMES_TABLE = "CREATE TABLE IF NOT EXISTS games (id SERIAL PRIMARY KEY, name VARCHAR(30), pgn VARCHAR, moveCount INT, result VARCHAR(10));"
#, AccountId INT NOT NULL, FOREIGN KEY (AccountId) REFERENCES Accounts(id)
#note to self: somehow find a way to make game ids a 64-bit number a la youtube urls
#if you have time lol
#move (fen)
CREATE_MOVE_TABLE = "CREATE TABLE IF NOT EXISTS moves (fen VARCHAR(92) PRIMARY KEY);"
#many to many interface (good practice (or so i was taught))

CREATE_GAME_MOVES_TABLE = "CREATE TABLE IF NOT EXISTS GameMoves (GameId INT NOT NULL, MoveFen VARCHAR(92) NOT NULL, FOREIGN KEY (GameId) REFERENCES Games(id), FOREIGN KEY (MoveFen) REFERENCES Moves(fen));"
#move



# account
# account# account
# accoun