# Use nginx to serve our static files
FROM nginx:alpine

# Copy our website files to nginx's serving directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# nginx runs automatically, no need for CMD