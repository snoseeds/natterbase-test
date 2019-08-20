import { Router } from 'express';
import Index from '../controllers';

const router = Router();

const routes = (app) => {
  router.get('/', Index.home);
  router.get('/api/v1', Index.v1);
  router.use((req, res) => {
    res.status(404).json({
      status: 404,
      error: 'This endpoint doesn\'t exist on this server',
    });
  });

  app.use(router);
};

export default routes;
