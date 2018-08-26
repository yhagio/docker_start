# Build production React code
FROM node:8.11-alpine as builder
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Copy the production React code as the result of the code above
# and run the production React code on NGINX
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html