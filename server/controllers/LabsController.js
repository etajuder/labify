import { Labs } from '../models';

class LabsController {
  static getLabs(req, res) {
    Labs.findAll()
      .then((labs) => {
        res.status(200).send(labs);
      })
      .catch((error) => {
        res.status(500).send({ message: 'Error retriving labs' });
      });
  }

  static addLabs(req, res) {
    Labs.findOne({ where: { name: req.body.name } })
      .then((lab) => {
        if (lab) {
          return res.status(409).send({ message: 'Lab has been added already' });
        }
      });
    Labs.create(req.body)
      .then((lab) => {
        res.status(201).send(lab);
      })
      .catch((error) => {
        res.status(400).send({ message: 'Fill all details' });
      });
  }

  static deleteLabs(req, res) {
    Labs.findById(req.params.id)
      .then((lab) => {
        if (lab) {
          lab.destroy().then(() => {
            res.status(202).send({ message: 'Lab deleted successfully' });
          });
        } else {
          res.status(404).send({ message: 'That lab does not exist' });
        }
      });
  }
}

export default LabsController;
