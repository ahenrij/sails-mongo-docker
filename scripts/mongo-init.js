db.createUser({
  user: "root",
  pwd: "h3W+ee3p+st2VJlnRiIMTw==",
  roles: [
    {
      role: 'dbOwner',
      db: "sailsmongodb",
    },
  ],
});