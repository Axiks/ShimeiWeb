FROM node:18-alpine AS build
WORKDIR /app
COPY japanesepersongenerator.spa/package.json ./
COPY japanesepersongenerator.spa/yarn.lock ./
RUN yarn install --production
COPY japanesepersongenerator.spa/. ./
RUN yarn build

# Bundle static assets with nginx
FROM nginx:alpine
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=build /app/build /usr/share/nginx/html
# Add your nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]