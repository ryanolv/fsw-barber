import { db } from "../_lib/prisma";
import { AppointmentDTO } from "../_types/dto";

export const getAppointmentsByUser = async (
  userId: string,
): Promise<AppointmentDTO[]> => {
  const appointments = await db.booking.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      date: true,
      service: {
        select: {
          name: true,
          price: true,
          barbershop: {
            select: {
              name: true,
              imageUrl: true,
              phones: true,
            },
          },
        },
      },
    },
  });

  return appointments.map((appointment) => ({
    ...appointment,
    service: {
      ...appointment.service,
      price: Number(appointment.service.price),
    },
  }));
};

export const getNextAppointmentForUser = async (
  userId: string | undefined,
): Promise<AppointmentDTO | null> => {
  if (userId === undefined) return null;
  const appointment = await db.booking.findFirst({
    where: {
      userId,
      date: { gt: new Date() },
    },
    orderBy: {
      date: "asc",
    },
    select: {
      id: true,
      date: true,
      service: {
        select: {
          name: true,
          price: true,
          barbershop: {
            select: {
              name: true,
              imageUrl: true,
              phones: true,
            },
          },
        },
      },
    },
  });

  if (!appointment) {
    return null;
  }

  return {
    ...appointment,
    service: {
      ...appointment.service,
      price: Number(appointment.service.price),
    },
  };
};
