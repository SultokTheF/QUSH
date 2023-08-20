# Use an official Node.js runtime as the base image
FROM node:20.1.0

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json /app/

# Install app dependencies
RUN npm install

# Copy the rest of the app's files
COPY . /app/

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]