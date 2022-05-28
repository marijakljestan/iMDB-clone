# Movie application

#### Technologies
<p>
<img align="left" alt="HTML" width="36px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS"  width="36px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /> 
</p>

#### Running my project locally
#### Backend
The backend is a Maven Spring Boot application. Source code is in the <i>./Application/backend</i> folder. It can be started normally as a Java project in Eclipse or IntelliJ. I used Java 11 version. The server is running on port 8082.\
PostgreSQL is needed for the backend. For that purpose, I used AWS RDS service, and connection parameters are configured 
programatically.
  
#### Frontend
The frontend is an Angular application. Source code is in the <i>./Application/Frontend</i> folder. It can be started by running <code>npm install</code> and then <code>npm start</code> in the mentioned folder. The URL address is http://localhost:4200/.

#### AWS deployment
Backend application is hosted on AWS EC2 instance
http://cinematic-aws.s3-website-us-east-1.amazonaws.com 