# Express + Typescript + TypeOrm Demo Api

- [Express + Typescript + TypeOrm Demo Api](#express--typescript--typeorm-demo-api)
    - [About](#about)
    - [Description](#description)
    - [Initialization:](#initialization)
    - [Routes](#routes)
    - [Special thanks to:](#special-thanks-to)
    - [Contact](#contact)


### About

This project was created for educational purposes. It is based on the following YouTube course:
```
https://www.youtube.com/watch?v=RwkvTRXAqZU
```

### Description

This repository contains a basic development of a REST API server using Node.js with the Express framework, TypeScript as the source code language, TypeORM as the ORM, and MySQL as the relational database. The project follows a basic MVC architecture and includes basic troubleshooting and error handling.

### Initialization:

First, clone this repository using the command line or download it as a ZIP file and extract it to your desired location.

Then, open the project using your preferred IDE (Visual Studio Code is recommended).

Once opened, install the dependencies using Node Package Manager:
```
npm i
```

In the file located at db -> connection.ts, configure your local environment by setting the host, port, and database name (ensure that the schema is created before running the server):

```
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "hostname",
    port: defaultport,
    username: "your username",
    password: "your password",
    database: "desirable db name",
    logging: setted up in true by default, //you can change it freely as your needs
    entities:[Student, Teacher, Course], //basic entities of the project
    synchronize: true,
});
```

Once the database is set up, you can manage the server port in the index.ts file within the main function:

```
async function main(){
    try {
        //...
        app.listen(3000 //here you can change the port as your needs, ()=> console.log('Servers running on port ...'));
    }
    ...//
}
```

If everything is set up correctly, you can start the server by running:
```
npm run dev (for dev mode) or npm run start
```

*Dissclaimer*: As this project was made for educational purposes, environment variables were not used. If you want to set up environment variables instead, make sure to install dotenv first and add the variables to the .env file as needed.

### Routes

Basic routes are set up for the three main entities, supporting each CRUD HTTP request (GET, POST, PUT, DELETE):

- **/students**
- **/teachers**
- **/courses**

### Special thanks to:

| [Leonardo Castillo Lacruz](https://github.com/ljcl79) | [base repository](https://github.com/ljcl79/api-nodejs-express-typeorm-mysql) |

### Contact

Feel free to contact me on social media:

| Nombre                    | Rol      | LinkedIn                                                                |
| ------------------------- | -------- | ----------------------------------------------------------------------- |
| **Pablo Velasco**         | Frontend | [LinkedIn](https://www.linkedin.com/in/pablo-r-velasco/)                |