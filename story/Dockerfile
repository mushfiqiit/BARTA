FROM python:3.8-alpine
RUN python -m pip install --upgrade pip
WORKDIR /story

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . /story

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8004"]
