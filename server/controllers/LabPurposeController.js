import { LabPurpose } from '../models';


class LabPurposeController {

  static getPurpose(req, res) {
    LabPurpose.findAll()
      .then((purpose) => {
        res.status(200).send(purpose);
      });
  }

  static addPurpose(req, res) {
    LabPurpose.findOne({ where: { name: req.body.name } })
      .then((purpose) => {
        if (purpose) {
          return res.status(409).send({ message: 'Purpose has been created!' });
        } else {
          LabPurpose.create(req.body)
            .then((purpose) => {
              res.status(201).send(purpose);
            })
            .catch((error) => {
              res.status(400).send({ message: 'Please fill all details' });
            });
        }
      });

  }



}

export default LabPurposeController;
