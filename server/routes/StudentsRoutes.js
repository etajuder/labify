import Access from '../middlewares/Access';
import Students from '../controllers/StudentsController';

const StudentRoutes = (router) => {
  router.use(Access.init);

  router.route('/students')
    .post(Students.createStudent)
    .get(Students.getAllStudents);
  
  router.route('/students/login')
    .post(Students.login);

  router.route('/students/:id')
    .put(Access.verifyToken, Students.updateRecord)
};

export default StudentRoutes;
