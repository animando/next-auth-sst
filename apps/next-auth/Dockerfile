FROM node:lts-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY sst-env.d.ts* ./
RUN npm install -g pnpm
RUN pnpm install --prod
COPY . .

# Stage 2: Build the application
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # If static pages need linked resources
# # ARG SST_RESOURCE_MyResource

# RUN npm install -g pnpm
# RUN nx run next-auth:build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/apps/next-auth/.next/standalone/apps/next-auth/ ./
COPY --from=deps /app/apps/next-auth/.next/standalone/node_modules ./node_modules
COPY --from=deps /app/apps/next-auth/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]