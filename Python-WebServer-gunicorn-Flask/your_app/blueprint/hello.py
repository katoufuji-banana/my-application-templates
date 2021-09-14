import os
from flask import request, Blueprint

hello = Blueprint("hello", __name__)


@hello.route("/hello", methods=['GET', 'POST'])
def get_hello():
    return {"msg": "Hello world!"}
