FROM python:3.8-alpine

WORKDIR /status

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . /status

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8004"]
