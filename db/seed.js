module.exports = (db) => {
  db.User.create({
    firstName: 'Adam',
    lastName: 'Gates',
    email: 'adam@gates.com',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true
  }).then(() => {
    db.User.create({
      firstName: 'Uma',
      lastName: 'Pearson',
      email: 'uma@pearson.com',
      password: process.env.USER_PWD,
      isAdmin: false
    }).then(() => {
      db.Example.create({
        text: 'Sample item',
        description: 'Adam can\'t see this',
        UserId: 2
      }).then(() => {
        db.Topic.create({
          id: 1,
          title: 'Why I want a Tesla - A Love Letter',
          poster_id: 1,
        content: 'First of all, who doesnt',
        })
      })
    });
  });
};
