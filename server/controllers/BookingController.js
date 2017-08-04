import { Bookings } from '../models';

class BookingController {

  static getAllBookings(req, res) {
    Bookings.findAll()
      .then((bookings) => {
        res.status(200).send(bookings);
      });
  }

  static getUserBookings(req, res) {
    Bookings.find({ where: { studentId: req.params.id } })
      .then((bookings) => {
        res.status(200).send(bookings);
      });
  }

  static getUserBookingsByDate(req, res) {
    Bookings.find({ where: {
      date: req.params.date,
      studentId: req.decoded.studentId,
    } })
      .then((bookings) => {
        res.status(200).send(bookings)
      });
  }

  static bookLab(req, res) {
    Bookings.find({
      where: {
        studentId: req.decoded.studentId,
        labId: req.body.labId
      }
    })
      .then((booked) => {
        if (booked) {
          return res.status(409).send({ message: 'You\'ve booked this lab already ' });
        } else {
          Bookings.create(req.body)
            .then((result) => {
              return res.status(201).status({ message: "Successfully booked lab" });
            });
        }
      });
  }

  static cancelBooking(req, res) {
    Bookings.find({ where: { id: req.params.id } })
      .then((booked) => {
        if (booked) {
          booked.destroy()
            .then(() => {
              res.status(203).send({ message: 'You\'ve successfully canceled your lab booking' });
            });
        } else {
          res.status(404).send({ message: 'Lab does not exists' });
        }
      });
  }
}

export default BookingController;
