# Use Node.js as the base image
FROM mcr.microsoft.com/playwright:v1.61.0-noble

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

# Install Playwright dependencies and browsers
RUN npx playwright install --with-deps

# Default command to run tests
CMD ["npx", "playwright", "test", "healthcheck"]