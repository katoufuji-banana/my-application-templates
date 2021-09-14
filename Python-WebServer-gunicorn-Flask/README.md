# Web server by Flask and gunicorn, Python

## Technology Stack

- Python (3.x expected)
- Flask
- gunicorn
- pipenv

## Usecase

- Web API server

## Quick start

1. Download this project code.
2. add ".env" to your .gitignore
3. Move to the directory where there is the Pipfile.
4. Execute the command whichever you like.
   ```
   pipenv install
   ```
5. Feel free to write your code. The entry point is ./your_app/app.py.
6. Run the web server. As a warning message says, this command is not for production use.
   ```
   pipenv run start
   ```
7. Run the web server with gunicorn.
   ```
   pipenv run gunicorn
   ```
8. Try to call your server's API.
   ```
   curl http://localhost:5000/hello
   ```
