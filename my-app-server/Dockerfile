FROM python:3

RUN mkdir /my-app-server

# set a directory for the app
WORKDIR /my-app-server

# copy all the files to the container
COPY requirements.txt /my-app-server/

# install dependencies
RUN pip install -r requirements.txt

COPY . /my-app-server/