FROM oven/bun:1.4.4
RUN echo "Starting Web Application"
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
RUN bun run bundle
EXPOSE 3000
CMD [ "bun", "run", "start" ]
