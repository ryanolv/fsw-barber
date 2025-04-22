"use server";

import { db } from "@/app/_lib/prisma";
import { redirect } from "next/navigation";

export interface BookingServiceProps {
  userId: string;
  serviceId: string;
  date: Date;
}

export const bookingService = async ({
  userId,
  serviceId,
  date,
}: BookingServiceProps) => {
  try {
    return await db.booking.create({
      data: {
        userId,
        serviceId,
        date,
      },
    });
  } catch (error) {
    console.error("Error booking service:", error);
    throw new Error("Error booking service");
  } finally {
    redirect("/appointments");
  }
};
