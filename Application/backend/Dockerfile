FROM maven:3.8.5-openjdk-11-slim AS cinematicBackendBuild
WORKDIR /root/src/backend
COPY . .
RUN mvn package  -DskipTests

FROM openjdk:11 AS cinematicBackendRuntime
WORKDIR /app
COPY --from=cinematicBackendBuild /root/src/backend/target/cinematic-aws-exe.jar ./
EXPOSE 8080
CMD java -jar cinematic-aws-exe.jar