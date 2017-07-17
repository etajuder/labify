

const StudentRoutes = (router) => {
  router.route('/students')
    .post((req, res) => {
      res.status(200).send({ message: 'Students Account created' })
    })
};

export default StudentRoutes;
