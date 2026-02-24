import os

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import get_db, engine, Base

app = FastAPI(tile="Rathena Panel API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Rathena Panel API!"}

@app.get("/api/status")
def check_db_status(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "Database connection successful"}
    except Exception as e:
        # Jika gagal (misal salah password atau host), tampilkan errornya
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to connect to database: {str(e)}"
        )

# CHECK SERVER STATUS
def check_port(ip: str, port: int) -> bool:
    import socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(1)  # Timeout 1 detik
        result = sock.connect_ex((ip, port))
        return result == 0  # Return True jika port terbuka

@app.get("/api/server-status")
def check_server_status(db: Session = Depends(get_db)):
    server_ip = os.getenv("RATHENA_IP", "127.0.0.1")
    status_login = check_port(server_ip, 6900)
    status_char = check_port(server_ip, 6121)
    status_map = check_port(server_ip, 5121)
    active_player = 0

    try:
        db.execute(text("SELECT 1"))
        result = db.execute(text("SELECT COUNT(*) FROM `char` WHERE online = 1"))
        active_player = result.scalar()  # Ambil hasil count

    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to connect to database: {str(e)}"
        )
    
    return {
        "server_status": {
            "login": "Online" if status_login else "Offline",
            "char": "Online" if status_char else "Offline",
            "map": "Online" if status_map else "Offline"
        },
        "active_players": active_player,
    }