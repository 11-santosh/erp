from fastapi import FastAPI

app = FastAPI(
    title="Python Service",
    description="My Python API",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "Python service is running"
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
    }


@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {
        "user_id": user_id,
        "name": "John no"
    }

