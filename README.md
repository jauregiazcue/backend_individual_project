# Backend Proyecto Individual
### Hecho por Kai Jauregi

## Tema
Una web en donde utilizando la API de [QR code api](https://goqr.me/api/) para crear QRs,
ademas de poder generar distintos tipos de cifrados

## Como verlo
Para poder verlo teneis que :

- Clickar en el boton Code que hay en el repositiorio 
- Descargarlo en zip o clonarlo
- Abrirlo en visual studio
- Meter la informacion necesaria en el .env
- En el terminal teneis que :
    - npm install
    - docker compose up --build

## Estructura del proyecto

```
├── database
│   ├── 0_zarautz_db.sql
│   ├── 1_zarautz_db_data.sql
│   ├── conf
│   │   └── mycustom.cnf
│   ├── zarautz_db.mwb
│   ├── zarautz_db.mwb.bak
│   └── zarautz_db_schema.mwb.bak
├── docker-compose.yml
├── Dockerfile
├── node_modules
├── package.json
├── package-lock.json
├── public
│   ├── assets
│   │   ├── bag.jpg
│   │   ├── bicicle.jpg
│   │   ├── clothes.jpg
│   │   ├── creditCard.jpg
│   │   ├── electronics.jpg
│   │   ├── joyas.jpg
│   │   ├── key.jpg
│   │   ├── logo.png
│   │   ├── money.jpg
│   │   ├── other.jpg
│   │   └── telephones.jpg
│   └── styles.css
├── README.md
└── src
    ├── config
    │   └── sequelize.js
    ├── controllers
    │   ├── documentation
    │   │   ├── documentationApiController.js
    │   │   └── documentationController.js
    │   ├── objCategory
    │   │   ├── objCategoryApiController.js
    │   │   └── objCategoryController.js
    │   ├── object
    │   │   ├── objectApiController.js
    │   │   └── objectController.js
    │   ├── request
    │   │   ├── requestApiController.js
    │   │   └── requestController.js
    │   └── user
    │       ├── userApiController.js
    │       └── userController.js
    ├── index.js
    ├── models
    │   ├── documentationModel.js
    │   ├── objectCategoryModel.js
    │   ├── objectModel.js
    │   ├── requestModel.js
    │   └── userModel.js
    ├── routes
    │   ├── api
    │   │   ├── apiRouter.js
    │   │   ├── documentationApiRouter.js
    │   │   ├── objectApiRouter.js
    │   │   ├── objectCategoryApiRouter.js
    │   │   ├── requestRouter.js
    │   │   └── userApiRouter.js
    │   ├── router.js
    │   └── views
    │       └── viewRouter.js
    ├── utils
    │   ├── bcrypt.js
    │   └── token.js
    └── views
        ├── layout.pug
        ├── navbar.pug
        └── pages
            ├── cityhall.pug
            ├── city.pug
            ├── home.pug
            ├── lostAndFound
            │   └── lostAndFound.pug
            ├── schedule.pug
            ├── services.pug
            └── turism.pug
```
