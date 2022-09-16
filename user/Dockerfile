FROM python:3.10-alpine
RUN python -m pip install --upgrade pip
WORKDIR /user

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . /user

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8004"]
