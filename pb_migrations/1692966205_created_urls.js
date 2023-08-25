/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l8l4v5bl2b4659k",
    "created": "2023-08-25 12:23:25.159Z",
    "updated": "2023-08-25 12:23:25.159Z",
    "name": "urls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k0oi2exj",
        "name": "url",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l8l4v5bl2b4659k");

  return dao.deleteCollection(collection);
})
