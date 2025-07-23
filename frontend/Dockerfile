# ---------- Build Stage ----------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source & build
COPY . .
RUN npm run build

# ---------- Runtime Stage ----------
FROM nginx:1.27-alpine
# Copy our nginx site config
COPY docker-nginx.conf /etc/nginx/conf.d/default.conf
# Copy built site
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
