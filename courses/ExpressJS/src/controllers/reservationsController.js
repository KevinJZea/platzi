const {
  createReservationService,
  getReservationService,
  updateReservationService,
  deleteReservationService,
} = require('../services/reservationsService');

const createReservation = async (req, res) => {
  try {
    const reservation = await createReservationService(req.body);
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getReservation = async (req, res) => {
  try {
    const reservation = await getReservationService(req.params.id);

    if (!reservation)
      return res.status(404).json({ error: 'Reservation not found' });

    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateReservation = async (req, res) => {
  try {
    const reservation = await updateReservationService(req.params.id, req.body);

    if (!reservation)
      return res.status(404).json({ error: 'Reservation not found' });

    res.status(200).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservation = await deleteReservationService(req.params.id);

    if (!reservation)
      return res.status(404).json({ error: 'Reservation not found' });

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation,
};
