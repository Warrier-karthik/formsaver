# FormSaver Backend

FastAPI backend for the FormSaver browser extension.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Set up environment variables:
Create a `.env` file with:
```
DATABASE_URL=postgresql://username:password@localhost:5432/formsaver
SECRET_KEY=your-secret-key-change-this-in-production
```

3. Set up PostgreSQL database:
- Create a database named `formsaver`
- The tables will be created automatically when you run the server

4. Run the server:
```bash
python run.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## API Endpoints

### Extension Endpoints (no authentication required)
- `POST /save` - Save form data
- `POST /get` - Get form data  
- `POST /clear` - Clear form data

### Web Interface Endpoints (OAuth2 authentication required)
- `POST /api/save` - Save form data
- `POST /api/get` - Get form data
- `POST /api/clear` - Clear form data
- `POST /register` - Register new user
- `POST /login` - Login user

## Data Format

Extension endpoints expect:
```json
{
  "user_id": "string",
  "url": "string", 
  "data": {"field1": "value1", "field2": "value2"}
}
```

Web interface endpoints expect:
```json
{
  "url": "string",
  "data": {"field1": "value1", "field2": "value2"}
}
```

## CORS

The server is configured to allow CORS requests from browser extensions. In production, you should restrict the allowed origins. 