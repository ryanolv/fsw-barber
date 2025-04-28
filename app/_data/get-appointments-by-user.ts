import { db } from "../_lib/prisma";
import { AppointmentDTO } from "../_types/dto";

export const getAppointmentsByUser = async (
  userId: string,
): Promise<AppointmentDTO[]> => {
  return await db.booking.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      date: true,
      service: {
        select: {
          name: true,
          barbershop: {
            select: {
              name: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });
};

export const getNextAppointmentByUser = async (
  userId: string,
): Promise<AppointmentDTO | null> => {
  return await db.booking.findFirst({
    where: {
      userId,
      date: {
        gte: new Date(),
      },
    },
    select: {
      id: true,
      date: true,
      service: {
        select: {
          name: true,
          barbershop: {
            select: {
              name: true,
              imageUrl: true,
            },
          },
        },
      },
    },
  });
};
