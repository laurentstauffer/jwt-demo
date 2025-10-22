# Étape 1 : builder Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production --base-href=/

# Étape 2 : serveur Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/jwt-demo-frontend/browser /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
