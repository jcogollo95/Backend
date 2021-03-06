define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "name": "users",
    "group": "General",
    "description": "<p>Permite mostrar los usuarios de la API</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "users",
            "description": "<p>usuarios en linea de la API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\nusers: Usuarios\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/router.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/songs",
    "title": "",
    "name": "songs",
    "group": "grupo",
    "description": "<p>Permite mostrar los grupos delas colecciones de musica de la API</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Colecciones",
            "description": "<p>de canciones de la API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example",
          "content": "HTTP/1.1 200 OK\n{\nusers: songs\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/router.js",
    "groupTitle": "grupo"
  }
] });
