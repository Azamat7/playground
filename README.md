# Playground on Flask + React

## Installation

inside my-app-server:

```bash
pip install -r requirements.txt
```

inside my-app-client:

```bash
yarn 
```

## Running

inside my-app-server:

```bash
# assuming you have already started mongodb server
python app.py
```

inside my-app-client:

```bash
yarn run start
```

## Build and Run with Docker Compose

inside playground:

```bash
docker-compose build
docker-compose up
```

useful commands:

```bash
# connect to mongodb instance with admin database
docker exec -it playground_db_1 mongo admin
```
