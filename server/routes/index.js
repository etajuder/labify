import StudentsRoutes from './StudentsRoutes';
import PurposeRoutes from './PurposeRoutes';
import LabsRoutes from './LabsRoutes';
import BoookingRoutes from './BookingRoutes';
import AdminRoutes from './AdminRoutes';


const Routes = (router) => {
  StudentsRoutes(router);
  PurposeRoutes(router);
  LabsRoutes(router);
  BoookingRoutes(router);
  AdminRoutes(router);
};

export default Routes;
