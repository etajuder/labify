import BookingController from '../controllers/BookingController';
import Access from '../middlewares/Access';

const BookingRoutes = (router) => {

  router.use(Access.init);

  router.route('/bookings')
    .get(BookingController.getAllBookings)
    .post(BookingController.bookLab)
  
  router.route('/bookings/:id')
    .get(BookingController.getUserBookings)
    .delete(BookingController.cancelBooking)
  
  router.route('/bookings/:id/:date')
    .get(BookingController.getUserBookingsByDate);
}

export default BookingRoutes;
