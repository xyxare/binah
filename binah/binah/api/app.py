import json
import os

import cv2 as cv
import game_crud
import numpy as np
import psycopg2
import schema
from detectors.chess_position_detector import ChessPositionDetector
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
db_password = os.getenv("PASSWORD") #for some reason this works and not os.getenv("DATABASE_URL")???? prob bc my pw has an @ somewhere lol
database_connection = psycopg2.connect(host = "localhost", port = 5432, dbname = "binah", user = "postgres", password = db_password)
CORS(app)

@app.post("/api/create_game")
def create_game():
    data = request.get_json()
    try:
        name = data["name"]
        pgn = data["pgn"]
        game_result = data["result"]
        move_count = data["move_count"]
        with database_connection:
            with database_connection.cursor() as cursor:
                cursor.execute(schema.CREATE_GAMES_TABLE)
                cursor.execute(game_crud.INSERT_GAME, (name, pgn, game_result, move_count))
                game_id = cursor.fetchone()[0]
                
        return {"id": game_id, "message": f"Created game with id {game_id}"}, 201
    except KeyError:
        return {"message": "something happened"}

@app.delete("/api/kill")
def delete_everything():
    with database_connection:
        with database_connection.cursor() as cursor:
            cursor.execute(game_crud.DELETE_EVERYTHING)
    return {"message": "all is kill"}, 200

@app.get("/api/game/<int:game_id>")
def get_game(game_id):
    with database_connection:
            with database_connection.cursor() as cursor:
                cursor.execute(game_crud.GET_A_GAME, (game_id,))
                game_name = cursor.fetchone()[1]
                cursor.execute(game_crud.GET_A_GAME, (game_id,))
                pgn = cursor.fetchone()[2]

    
    return {"name": game_name, "pgn": pgn}


@app.get("/api/games")
def get_all_games():
    with database_connection:
        with database_connection.cursor() as cursor:
            cursor.execute(game_crud.GET_LIMITED_GAMES, (0, 11)) #change this to lower and upper bound
            row_headers = [x[0] for x in cursor.description]
            games = cursor.fetchall()
            games_json = []
            for game in games:
                games_json.append(dict(zip(row_headers, game)))

    print(games_json)
    
    return json.dumps(games_json)

@app.route('/api/get_chess_position', methods=['POST'])
def get_chess_position():
    if 'image' not in request.files:
        return 'No image uploaded', 400

    image_file = request.files['image']
    image_bytes = image_file.read()
    print("hi image read")
    nparr = np.frombuffer(image_bytes, np.uint8)
    print("hi image arrayed")
    original_image = cv.imdecode(nparr, cv.IMREAD_COLOR)
    print("hi cv inputted")
    chess_position_detector = ChessPositionDetector()
    print("hi chess position detector on")
    fen = chess_position_detector.detect(original_image)
    print("if you see this i have no idea what's holding up the api call")
    return jsonify({'fen': fen})
