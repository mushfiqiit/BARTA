FROM python:3.10
RUN python -m pip install --upgrade pip
WORKDIR /status

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . /status

CMD ["python3", "manage.py", "runserver", "0.0.0.0:5001"]
