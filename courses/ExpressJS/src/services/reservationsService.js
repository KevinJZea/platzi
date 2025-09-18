const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

const createReservationService = async (data) => {
  const { date, timeBlockId } = data;
  const conflict = await prisma.appointment.findFirst({
    where: { date, timeBlockId },
  });

  if (conflict)
    throw new Error('This appointment slot has already been taken.');

  return prisma.appointment.create({ data });
};

const getReservationService = async (id) =>
  await prisma.appointment.findUnique({ where: { id: parseInt(id, 10) } });

const updateReservationService = async (id, data) => {
  const { date, timeBlockId } = data;
  const conflict = await prisma.appointment.findFirst({
    where: { date, timeBlockId, id: { not: parseInt(id, 10) } },
  });

  if (conflict)
    throw new Error('This appointment slot has already been taken.');

  return prisma.appointment.update({ where: { id: parseInt(id, 10) }, data });
};

const deleteReservationService = async (id) =>
  await prisma.appointment.delete({ where: { id: parseInt(id, 10) } });

module.exports = {
  createReservationService,
  getReservationService,
  updateReservationService,
  deleteReservationService,
};
