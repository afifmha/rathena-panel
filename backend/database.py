import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base


DB_HST = os.getenv("DB_HOST", "localhost")
DB_USR = os.getenv("DB_USER", "ragnarok")
DB_PWD = os.getenv("DB_PASS", "ragnarok")
DB_NME = os.getenv("DB_NAME", "rag_main")
DATABASE_URL = f"mysql+pymysql://{DB_USR}:{DB_PWD}@{DB_HST}/{DB_NME}"

engine = create_engine(DATABASE_URL, echo=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()