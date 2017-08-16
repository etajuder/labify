import jwt from 'jsonwebtoken';
import { Students } from '../models';

class StudentsController {

  static createStudent(req, res) {
    Students.findOne({
      where: {
        regNo: req.body.regNo
      }
    })
      .then((student) => {
        if (student) {
          return res.status(409)
            .send({ message: 'Student record exists' })
        } else {
          Students.create(req.body)
            .then((student) => {
              const token = jwt.sign({
                studentId: student.id,
                fullName: student.fullName,
                email: student.email,
                regNo: student.regNo,
              }, req.secret, { expiresIn: '20 days' });
              res.status(201).send({ data: student, token });
            })
            .catch((error) => {
              console.log(error);
              res.status(500).send({ message: 'Error occurred' });
            });
        }
      }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
      })
  }

  static login(req, res) {
    Students.findOne({
      where: { regNo: req.body.regNo }
    })
    .then((student) => {
      if (student && student.validPassword(req.body.password)) {
        const token = jwt.sign({
          studentId: student.id,
          fullName: student.fullName,
          email: student.email,
          regNo: student.regNo
        }, req.secret, { expiresIn: '20 days' });
        res.status(200).send({ data: student, token });
      } else {
        res.status(400).send({ message: 'Invalid credentials supplied' });
      }
    });
  }

  static updateRecord(req, res) {
    Students.findById(req.decoded.studentId)
      .then((student) => {
        student.update(req.body)
          .then((updatedStudent) => {
            res.status(200).send({ data: updatedStudent })
          });
      })
      .catch((error) => {
        res.status(404).send({ message: 'Invalid student record' });
      });
  }

  static getAllStudents(req, res) {
    Students.findAll()
      .then((students) => {
        res.status(200).send(students);
      });
  }

  
}

export default StudentsController;
