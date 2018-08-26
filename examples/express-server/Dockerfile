# Specify a base image
FROM node:8.11-alpine

# Set up working directory (where your application codes are copied to)
# By specifying this, you don't need to accidentally overwrite whatever in root
# directory
WORKDIR /usr/app

# Just copy package.json so that when you just change app code
# it does not affect to package.json, so we can save time 
# always reinstall all dependencies every time re-build the container
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy all files from current working directories to the container
COPY ./ ./

# Default command
CMD ["npm", "start"]