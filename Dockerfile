FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine AS runtime

COPY --from=build /app/dist/moviefy /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
