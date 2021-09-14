import flask
from dotenv import load_dotenv

from blueprint.hello import hello

load_dotenv()

app = flask.Flask(__name__)
app.config["JSON_AS_ASCII"] = False

app.register_blueprint(hello)

def main():
    app.run()


if __name__ == "__main__":
    main()
