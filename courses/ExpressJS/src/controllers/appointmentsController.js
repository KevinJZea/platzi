const {
  getUserAppointmentsService,
} = require('../services/appointmentsService');

const getUserAppointments = async (req, res) => {
  try {
    const userId = req.params.id;
    const appointments = await getUserAppointmentsService(userId);

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({
      error: 'Error on fetching appointments history: ' + error.message,
    });
  }
};

module.exports = { getUserAppointments };
