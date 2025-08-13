from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI(title="Skeleton API")
templates = Jinja2Templates(directory="backend/app/templates")

@app.get("/api/v1/example/ping")
def ping():
    return {"message": "pong"}

@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "title": "Skeleton"})
