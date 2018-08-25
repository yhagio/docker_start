# Use an existing an image as the base image
FROM alpine

# Install dependencies
# apk is built-in package manager in alpine
RUN apk add --update redis

# Run
CMD ["redis-server"]