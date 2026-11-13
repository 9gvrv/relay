FROM oven/bun:1.4.4
ARG APP_VERSION=1.0.0
RUN echo "Starting API version $APP_VERSION"

WORKDIR /app

COPY package.json .
RUN bun install

COPY . .
ENV APP_NAME=Relay_API APP_VERSION=1.0.0 PORT=3000
RUN bun bundle

EXPOSE 3000

CMD [ "bun", "start" ]
