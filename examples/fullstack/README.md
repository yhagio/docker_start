### Full stack web app in Docker demo

Client - Simple React app
Server - Simple Express API
Worker - Interacts with Redis
nginx for directing requests to client and server

Travis CI for Continuous Integration

Development
```bash
docker-compose up         # Start up
docker-compose up --build # Build again
docker-compose down       # Stop gracefully
docker-compose --force-recreate
```

Production

Deployment to AWS Elastic Beanstalk with Docker Hub
