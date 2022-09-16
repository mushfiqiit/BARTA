FROM python:3.10
RUN python -m pip install --upgrade pip
WORKDIR /user

COPY requirements.txt requirements.txt
RUN pip3 install Django==4.1.1
RUN pip3 install django-cors-headers==3.13.0
RUN pip3 install djangorestframework==3.13.1
RUN pip3 install djangorestframework-simplejwt==4.8.0
RUN pip3 install djoser==2.1.0

COPY . /user

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8004"]
