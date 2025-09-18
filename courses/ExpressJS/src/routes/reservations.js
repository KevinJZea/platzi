const { Router } = require('express');

const {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation,
} = require('../controllers/reservationsController');

const authenticateToken = require('../middlewares/auth');

const router = Router();

router.post('/', authenticateToken, createReservation);
router.get('/:id', authenticateToken, getReservation);
router.put('/:id', authenticateToken, updateReservation);
router.delete('/:id', authenticateToken, deleteReservation);

module.exports = router;
