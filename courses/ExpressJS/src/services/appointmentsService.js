const { PrismaClient } = require('../../generated/prisma');
const prisma = new PrismaClient();

const getUserAppointmentsService = async (userId) =>
  await prisma.appointment.findMany({
    where: { userId: parseInt(userId, 10) },
    include: { timeBlock: true },
  });

module.exports = { getUserAppointmentsService };
