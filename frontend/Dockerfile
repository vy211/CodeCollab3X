# Use Node.js base image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Expose the frontend port
EXPOSE 5173

# Start the frontend server
CMD ["npm", "run", "dev"]
