const { Router } = require('express');

const {
  getUserAppointments,
} = require('../controllers/appointmentsController');

const authenticateToken = require('../middlewares/auth');

const router = Router();

router.get('/:id/appointments', authenticateToken, getUserAppointments);

module.exports = router;
