# ---- Build stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY server.js ./

# ---- Runtime stage ----
FROM gcr.io/distroless/nodejs22-debian11

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["server.js"]