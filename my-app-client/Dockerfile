FROM node:latest

RUN mkdir /my-app-client

# set a directory for the app
WORKDIR /my-app-client

# copy all the files to the container
COPY package.json /my-app-client/

# install dependencies
RUN yarn

COPY . /my-app-client/