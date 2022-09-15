FROM python:3.8-slim-buster

WORKDIR /user

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . /user

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8004"]
