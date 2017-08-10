import AdminController from '../controllers/AdminController';
import LeaveController from '../controllers/LeaveController';

const AdminRoutes = (router) => {
  router.post('/admin', AdminController.createAdmin);

  router.post('/admin/login', AdminController.login);

  router.post('/leave', LeaveController.createLeave);

  router.get('/leave', LeaveController.getAllLeaves);
}

export default AdminRoutes;
