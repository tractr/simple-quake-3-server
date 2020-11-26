# Step 1: Fetch pak0 file
FROM cirrusci/wget:latest as pak0
RUN wget https://github.com/nrempel/q3-server/raw/master/baseq3/pak0.pk3

# Step 2: Fetch custom maps


# Step 3: Build GUI front-end
FROM node:10-alpine as front-builder
ADD gui/front /app
WORKDIR /app
RUN npm ci && \
    npm run ng build -- --prod --output-path=dist


FROM jberrenberg/quake3:1.1

# Copy pak0
RUN rm /home/ioq3srv/ioquake3/baseq3/pak0.pk3
COPY --from=pak0 /pak0.pk3 /home/ioq3srv/ioquake3/baseq3/


