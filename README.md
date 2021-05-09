# asplenio
Pool Temperature Control

# How to init DEV environment

1. Clone this repository
2. Build the container: ```docker-compose up -d --build```
3. Access app on http://localhost:3001/

# How to install new dependencies

1. Update your composer.json file with new dependency
2. Stop and remove the container: ```docker-compose down```
3. Build again: ```docker-compose up -d --build```
4. Access app on http://localhost:3001/
