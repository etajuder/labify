import { Admin } from '../models';

class AdminController {


  static login(req, res) {
    Admin.findOne({
      where: {
        $and: [
          { username: req.body.username },
          { password: req.body.password }
        ]
      }
    })
    .then((response) => {
      if (response) {
        res.status(200).send('User Logged in successfully');
      } else {
        res.status(404).send('Invalid details supplied');
      }
    })
    .catch((error) => {
      res.status(404).send({ message: 'Invalid Credentials Supplied' });
    });
  }

  static createAdmin(req, res) {
    Admin.create(req.body)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((error) => {
        res.status(500).send({ message: 'Account could not be created' });
      });
  }
}

export default AdminController;