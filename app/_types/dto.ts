export type AppointmentDTO = {
  id: string;
  date: Date;
  service: {
    name: string;
    price: number;
    barbershop: {
      name: string;
      imageUrl: string;
      phones: string[];
    };
  };
};
