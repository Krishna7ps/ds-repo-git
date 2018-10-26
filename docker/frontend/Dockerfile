FROM node:alpine as b
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
#/app/build <-- all the stuff we care about from node image

#From dockerHub nginx documentation, /usr/share/nginx/html is the folder for 
#serving static content

FROM nginx
COPY --from=b /app/build /usr/share/nginx/html
#CMD -- start nginx
#Default command for nginx image is to start nginx for us, so no mentioning of CMD explicitly