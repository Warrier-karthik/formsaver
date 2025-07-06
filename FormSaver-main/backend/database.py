import psycopg2
from os import getenv
from dotenv import load_dotenv

load_dotenv()

# Get database URL from environment, with fallback for development
database_url = getenv("DATABASE_URL", "postgresql://postgres:password@localhost:5432/formsaver")

try:
    conn = psycopg2.connect(database_url)
    print("✅ Database connection established")
except Exception as e:
    print(f"❌ Database connection failed: {e}")
    print("Please check your DATABASE_URL in .env file")
    conn = None

def get_cursor():
    if conn is None:
        raise Exception("Database connection not available")
    return conn.cursor()

# --- Table creation ---

def create_tables():
    cur = get_cursor()

    # Create users table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    """)

    # Create form_data table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS form_data (
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            url TEXT NOT NULL,
            data JSONB,
            PRIMARY KEY (user_id, url)
        );
    """)

    cur.connection.commit()
    cur.close()
    print("✅ Tables ensured")

create_tables()
