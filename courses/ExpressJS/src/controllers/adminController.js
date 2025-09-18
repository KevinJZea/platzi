const {
  createTimeBlocksService,
  listReservationsService,
} = require('../services/adminService');

const createTimeBlocks = async (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access Denied' });
  }

  const { startTime, endTime } = req.body;

  try {
    const newTimeBlock = await createTimeBlocksService(startTime, endTime);
    return res.status(201).json(newTimeBlock);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating time block.' });
  }
};

const listReservations = async (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Access Denied' });
  }

  try {
    const reservations = await listReservationsService();
    return res.json(reservations);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching reservations.' });
  }
};

module.exports = { createTimeBlocks, listReservations };
