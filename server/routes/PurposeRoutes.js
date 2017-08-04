import Access from '../middlewares/Access';
import LabPurpose from '../controllers/LabPurposeController';

const PurposeRoutes = (router) => {
  router.use(Access.verifyToken);

  router.route('/purposes')
    .get(LabPurpose.getPurpose)
    .post(LabPurpose.addPurpose)
}

export default PurposeRoutes;
