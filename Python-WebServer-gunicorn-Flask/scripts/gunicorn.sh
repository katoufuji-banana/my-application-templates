SCRIPT_DIR=$(cd $(dirname $0); pwd)
export PYTHONPATH=${SCRIPT_DIR}/../

gunicorn --chdir your_app app:app