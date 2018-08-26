Frontend - React Typescript
Backend -
Travis CI
AWS


**front**

In front folder

Build Development
```bash
# Build and start development code
docker-compose up
```

!!! We don't use following long commands but you can use it if you want,
but we use docker-compose up (above) to make it simpler. Just shows the equivalent.
```bash
# Build development docker container
docker build -f Dockerfile.dev .

# "-v $(pwd):/app" Map current working directory to /app folder in the coantainer
# "-v /app/node_modules" Don't map this one to anything, just use it in the container
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <container id>
```

Build Production
```bash
docker build .

# Run it
docker run -p 8080:80 <container id>

# Go to localhost:8080 to check
```

**back**

