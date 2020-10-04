# Service 

## Auth
### Register

> POST

```http://localhost:4000/```

>Body

```json
{
  "firstname": "Juan",
  "lastname": "Sanchez",
  "email": "juanCarlos@yahoo.com.pa",
  "password": "123456"
}

```

> Response 
```json
{ 
  message: 'User successfully registered' 
}

```

> Response ERROR

```
{
  "error": "Email and password is requerid"
}
```
```
{
  "error": "email must be unique"
}
```

### Login

> POST

```json

{
  "email": "String",
  "password": "String"
}

```

> Response

```json
{
  "status": 200,
  "token": "string"
}
```

## Products

### Search Products

 > GET
 
```http://localhost:4000/search?query=[parametro]```

 > GET user login
 
```http://localhost:4000/search?query=[parametro]&user_id=[user_id]```

> Response

```json

{
  "count": 2,
  "data": [
    {
      "id": 51102,
      "url": "https://www.digitalife.com.mx/producto/51102",
      "price": 16.18,
      "name": "Cable de datos Blackpcs Lightning Macho a Micro USB Macho 30cm Negro CABLDPP-1",
      "img": "https://www.digitalife.com.mx/admin/uploads/productos/CABLDPP1_1.jpg",
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 51101,
      "url": "https://www.digitalife.com.mx/producto/51101",
      "price": 16.18,
      "name": "Cable de datos Blackpcs Lightning Macho a Micro USB Macho 30cm Blanco CAWDPP-1",
      "img": "https://www.digitalife.com.mx/admin/uploads/productos/CAWDPP1_1.jpg",
      "createdAt": null,
      "updatedAt": null
    }
  ]
}

```



## Recomendations


### Get Recomendations

Recomendaciones basada en la ultima busqueda del usuario
Si el usuario no se encuentra logueado se le muestran productos random
Si el ususario se encuantra logueado se muestan productos random basasos  en la ultima busqueda del usuario

> GET  User Login

```http://localhost:4000/recommendations?user_id=[User_Id]```

> GET  User not Login

```http://localhost:4000/recommendations```

> Response
```json
{
  "count": 2,
  "data": [
    {
      "id": 12317,
      "name": "Protector de pantalla para iPhone 7 PureGear Steel 360 Cristal Templado Transparente 14572VRP",
      "external_id": "39278",
      "store_id": 1,
      "url": "https://www.digitalife.com.mx/producto/39278",
      "price": "99.18",
      "image_url": "https://www.digitalife.com.mx/admin/uploads/productos/14572VRP_1.jpg",
      "active": true,
      "createdAt": null,
      "updatedAt": null
    },
    {
      "id": 9539,
      "name": "Docking cargador NACEB NA-599 iPhone lightning Negro NA-599",
      "external_id": "32440",
      "store_id": 1,
      "url": "https://www.digitalife.com.mx/producto/32440",
      "price": "53.36",
      "image_url": "https://www.digitalife.com.mx/admin/uploads/productos/NA599_1.jpg",
      "active": true,
      "createdAt": null,
      "updatedAt": null
    },
  ]
}

```

## Favs

### Add Favs

> POST

```{url}/favs/{user_id}```

> Body

```json
{
  "product_id": NUMBER
}
```

> Response

```json
{
  "status": 201,
  body": {
    "id": 10,
    "user_id": 66,
    "product_id": 1,
    "status": true,
    "updatedAt": "2020-10-04T23:37:30.685Z",
    "createdAt": "2020-10-04T23:37:30.685Z"
  }
}

```

### Get Favs

> GET

```{{url}}/favs/{user_id}```

> Response 

```json 
{
  "body": [
    {
      "id": 8,
      "product_id": 25710,
      "user_id": 66,
      "status": true,
      "createdAt": "2020-10-04T22:06:01.584Z",
      "updatedAt": "2020-10-04T22:06:01.584Z"
    },
    {
      "id": 9,
      "product_id": 1,
      "user_id": 66,
      "status": true,
      "createdAt": "2020-10-04T22:06:54.534Z",
      "updatedAt": "2020-10-04T22:06:54.534Z"
    },
    {
      "id": 10,
      "product_id": 1,
      "user_id": 66,
      "status": true,
      "createdAt": "2020-10-04T23:37:30.685Z",
      "updatedAt": "2020-10-04T23:37:30.685Z"
    }
  ]
}

```

### Remove Favs

> POST

```{{url}}/removefavs/{product_id}?status=true```

> Response 

```json
{
  "status": 201,
  "body": [
    1
  ]
}
```


