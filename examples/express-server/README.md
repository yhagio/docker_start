```bash
docker build -t yhagio/express-server .
docker run -p 8080:8080 yhagio/express-server

# To go inside the container
docker exec -it yhagio/express-server sh
```

Visit in browser `localhost:8080`,
you see "Hello there!"
