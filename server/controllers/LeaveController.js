import { Leave } from '../models';


class LeaveController {
  
  static createLeave(req, res) {
    Leave.create(req.body)
      .then(() => {
        res.status(201).send('Created');
      })
      .catch(() => {
        res.status(400).send('Bad request');
      });
  }

  static getAllLeaves(req, res) {
    Leave.findAll()
      .then((leaves) => {
        res.status(200).send(JSON.stringify(leaves));
      })
      .catch((error) => {
        res.status(500).send('Error occurred');
      });
  }
}

export default LeaveController;
