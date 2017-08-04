import Access from '../middlewares/Access';
import Labs from '../controllers/LabsController';

const PurposeRoutes = (router) => {
  router.use(Access.verifyToken);

  router.route('/labs')
    .get(Labs.getLabs)
    .post(Labs.addLabs)

  router.route('/labs/:id')
    .delete(Labs.deleteLabs);
}

export default PurposeRoutes;
