import { Router } from 'express';
import Index from '../controllers';
import questionOneSolution from '../controllers/questionOneController';

const router = Router();

const routes = (app) => {
  router.get('/', Index.home);
  router.get('/api/v1', Index.v1);
  // Input Validation Route
  router.post('/api/v1/question-one-solutions/input-validation', questionOneSolution.inputValidation);
  // Non existent endpoints
  router.use((req, res) => {
    res.status(404).json({
      status: 404,
      error: 'This endpoint doesn\'t exist on this server',
    });
  });

  app.use(router);
};

export default routes;
