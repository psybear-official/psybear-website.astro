# Static Astro build served by nginx. BASE_PATH sets the URL prefix (e.g. /psybear-staging).
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
ARG BASE_PATH=/
ENV BASE_PATH=$BASE_PATH
RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
