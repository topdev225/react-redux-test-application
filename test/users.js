use expense_db;
db.users.remove({});

db.users.insert(
[
  {
        "_id": ObjectId("5b0f0c84e19e4a00ef35e4f4"),
        "updatedAt": ISODate("2018-05-30T20:41:40.205Z"),
        "createdAt": ISODate("2018-05-30T20:41:40.205Z"),
        "username": "user@test.com",
        "email": "user@test.com",
        "password": "ee11cbb19052e40b07aac0ca060c23ee"
  }
]
);
