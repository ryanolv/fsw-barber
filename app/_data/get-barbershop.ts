import { db } from "../_lib/prisma";

export interface BarbershopDTO {
  id: string;
  name: string;
  address: string;
  phones: string[];
  description: string;
  imageUrl: string;
  services: BarbershopServiceDTO[];
}

export interface BarbershopServiceDTO {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const getUniqueBarbershop = async (
  id: string,
): Promise<BarbershopDTO | null> => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) return null;
  return {
    ...barbershop,
    services: barbershop.services.map((service) => ({
      ...service,
      price: Number(service.price),
    })),
  };
};
