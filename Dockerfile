FROM node:14-alpine
WORKDIR /app
RUN npm install
# ENV UPSIDEDOWN_MODE=true
# COPY $UPSIDEDOWN_MODE README.md index.js ./data ./services package*.json ./
COPY . .
CMD ["npm", "start"]
EXPOSE 3002