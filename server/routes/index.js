import StudentsRoutes from './StudentsRoutes';
import PurposeRoutes from './PurposeRoutes';
import LabsRoutes from './LabsRoutes';
import BoookingRoutes from './BookingRoutes';

const Routes = (router) => {
  StudentsRoutes(router);
  PurposeRoutes(router);
  LabsRoutes(router);
  BoookingRoutes(router);
};

export default Routes;
