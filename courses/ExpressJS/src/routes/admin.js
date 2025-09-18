const { Router } = require('express');

const {
  createTimeBlocks,
  listReservations,
} = require('../controllers/adminController');

const authenticateToken = require('../middlewares/auth');

const router = Router();

router.get('/reservations', authenticateToken, listReservations);
router.post('/timeblocks', authenticateToken, createTimeBlocks);

module.exports = router;
