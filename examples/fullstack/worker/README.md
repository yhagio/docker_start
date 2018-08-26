Purpose of worker is to 
watch Redis for new indexes.
Pull each new index, calculates new value then puts it
back into Redis.

Check development Docker
```
docker build -f Dockerfile.dev .
docker run <container id>
```
