migrate((db) => {
  const collection = new Collection({
    "id": "em29f3anb4c0nnz",
    "created": "2022-12-17 12:37:41.194Z",
    "updated": "2022-12-17 12:37:41.194Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "su2p3ymf",
        "name": "post_title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ycbwg9j2",
        "name": "post_content",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("em29f3anb4c0nnz");

  return dao.deleteCollection(collection);
})
