```bash
# Build a container
docker build .

# Generate container ID at the end
# run the container built
docker run 6975571296e3

# In another terminal, you can stop it
docker stop 6975571296e3



# Tag your image as you wish:


# You can tag your image like
docker build -t yhagio/redis:latest .

# then run it
docker run yhagio/redis
```
