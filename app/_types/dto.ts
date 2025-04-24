export type AppointmentDTO = {
  id: string;
  date: Date;
  service: {
    name: string;
    barbershop: {
      name: string;
      imageUrl: string;
    };
  };
};
