# Movie application

#### Technologies
<p>
<img align="left" alt="HTML" width="46px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS"  width="46px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /> 
<img align="left" alt="TypeScript"  width="44px"src="https://imgs.search.brave.com/xRUA4UR_QkfMJQzWWENQ25CQyTSEUn7KjjnNILkmIPU/rs:fit:550:550:1/g:ce/aHR0cDovL3d3dy5z/b2Z0d2FyZS1hcmNo/aXRlY3RzLmNvbS9j/b250ZW50L2ltYWdl/cy9ibG9nLzIwMTYv/MTIvdHlwZXNjcmlw/dC1sb2dvLnBuZw"/>
<img align="left" alt="Angular" width="46px" src="https://imgs.search.brave.com/niD9Ow-Pa2QlCDOjVda7f93oQ5ef85M0wyHGDfvTdiM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLTEubWVk/aXVtLmNvbS9tYXgv/MTIwMC8xKkdtTXRL/em56SjFkUzhzU3p4/elIzb3cucG5n" />
<img align="left" alt="Java" width="56px" src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png" />
<img align="left" alt="Maven" width="46px" src="https://www.pngfind.com/pngs/m/312-3125468_file-maven-logo-svg-maven-logo-png-transparent.png"/>
<img align="left" alt="Spring Boot" width="46px" src="https://imgs.search.brave.com/gtx-FI2SDrKUpHXuC-reMQDAiZ7qeZRlTftul-sl6oo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9kb21p/bmlja20uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA2/L3NwcmluZy1ib290/LWxvZ29fZnVsbC5w/bmc"/>
<img align="left" alt="PostgreSQL" width="46px" src="https://imgs.search.brave.com/GfCliqtmTy95tsaJnJxBTcwSDq7DDEDYToNGmeMjJK0/rs:fit:921:1024:1/g:ce/aHR0cDovL2xvZ29u/b2lkLmNvbS9pbWFn/ZXMvcG9zdGdyZXNx/bC1sb2dvLnBuZw" />
</p>
<br />

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