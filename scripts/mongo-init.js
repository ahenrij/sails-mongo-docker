db.createUser({
  user: _getEnv('MONGO_INITDB_ROOT_USERNAME'),
  pwd: _getEnv('MONGO_INITDB_ROOT_PASSWORD'),
  roles: [{
    role: 'dbOwner',
    db: _getEnv('MONGO_INITDB_DATABASE'),
  }],
});
