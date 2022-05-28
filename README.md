# Movie application

#### Technologies
<p style="align-items: center">
<img align="left" alt="HTML" width="46px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS"  width="46px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /> 
<img align="left" alt="TypeScript"  width="44px"src="https://imgs.search.brave.com/xRUA4UR_QkfMJQzWWENQ25CQyTSEUn7KjjnNILkmIPU/rs:fit:550:550:1/g:ce/aHR0cDovL3d3dy5z/b2Z0d2FyZS1hcmNo/aXRlY3RzLmNvbS9j/b250ZW50L2ltYWdl/cy9ibG9nLzIwMTYv/MTIvdHlwZXNjcmlw/dC1sb2dvLnBuZw"/>
<img align="left" alt="Angular" width="56px" height="56px" src="https://imgs.search.brave.com/niD9Ow-Pa2QlCDOjVda7f93oQ5ef85M0wyHGDfvTdiM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLTEubWVk/aXVtLmNvbS9tYXgv/MTIwMC8xKkdtTXRL/em56SjFkUzhzU3p4/elIzb3cucG5n" />
<img align="left" alt="Java" width="56px" height="56px" src="https://i.pinimg.com/originals/f1/ea/a7/f1eaa7278f64e27128e062a3de918265.png" />
<img align="left" alt="Spring Boot" width="46px" src="https://imgs.search.brave.com/gtx-FI2SDrKUpHXuC-reMQDAiZ7qeZRlTftul-sl6oo/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9kb21p/bmlja20uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA2/L3NwcmluZy1ib290/LWxvZ29fZnVsbC5w/bmc"/>
<img align="left" alt="PostgreSQL" width="56px" height="56px" src="https://imgs.search.brave.com/GfCliqtmTy95tsaJnJxBTcwSDq7DDEDYToNGmeMjJK0/rs:fit:921:1024:1/g:ce/aHR0cDovL2xvZ29u/b2lkLmNvbS9pbWFn/ZXMvcG9zdGdyZXNx/bC1sb2dvLnBuZw"/>
<img align="left" alt="AWS" width="46px" src="https://imgs.search.brave.com/ZTyScVUrOdCAU11SiUM0OLXkUdpSiCR9iadQnPnAlLM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWFnZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDIv/YXdzLWxvZ28tcG5n/LTQucG5n"/>
<img align="left" alt="AWS RDS" width="46px" src="https://imgs.search.brave.com/qkC8DFWUH_hgSNXm2oQiat3s4hEdXswrj_tBW68vnVM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYXdz/LXJkcy1sb2dvLXBu/Zy10cmFuc3BhcmVu/dC5wbmc"/>
<img align="left" alt="AWS EC2" width="46px" src="https://imgs.search.brave.com/ULG66m6Xxh3lT7FC05rbSx0vqw3ybTna3MTlKRtJtZI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYXdz/LWVjMi1sb2dvLXBu/Zy10cmFuc3BhcmVu/dC5wbmc"/>
<img align="left" alt="AWS S3" width="46px" src="https://imgs.search.brave.com/iBtk4fhCIdgXVD3UYnTW9QF9CwXXeg2xnfaGos-ngWM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWJpZXN1cHBs/eS5jb20vbG9nb3Mv/bGFyZ2UvMngvYXdz/LXMzLWxvZ28tcG5n/LXRyYW5zcGFyZW50/LnBuZw"/>
</p>
<br />

<p>
#### Runing my project localy
</p>

#### Backend
The backend is a Maven Spring Boot application. Source code is in the <i>./Application/backend</i> folder. It can be started normally as a Java project in Eclipse or IntelliJ. I used Java 11 version. The server is running on port 8082.\
PostgreSQL is needed for the backend. For that purpose, I used AWS RDS service, and connection parameters are configured 
programatically.
  
#### Frontend
The frontend is an Angular application. Source code is in the <i>./Application/Frontend</i> folder. It can be started by running <code>npm install</code> and then <code>npm start</code> in the mentioned folder. The URL address is http://localhost:4200/.

#### AWS deployment
Backend application is hosted on AWS EC2 instance. \
Frontend static files are stored in AWS S3 Bucket. \
http://cinematic-aws.s3-website-us-east-1.amazonaws.com 