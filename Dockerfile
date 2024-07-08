FROM node:22-alpine as base

FROM base as dependencies

WORKDIR /app

COPY ./home-page/package.json ./home-page/package-lock.json ./

RUN npm install

FROM base AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY ./home-page .

RUN npm run build

FROM base AS runner

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]
