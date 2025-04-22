"use client";

import { useState } from "react";
import { format, isBefore, set, startOfToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";

import { BarbershopServiceDTO } from "@/app/_data/get-barbershop";
import { bookingService } from "@/app/_actions/booking-service";

import { Calendar } from "@/app/_components/ui/calendar";
import { Separator } from "@/app/_components/ui/separator";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";

const HOURS_FREE = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const BookingService = ({
  service,
  barbershopName,
}: {
  service: BarbershopServiceDTO;
  barbershopName: string;
}) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [selectedHour, setSelectedHour] = useState<string | undefined>();
  const { data: session } = useSession();
  const today = startOfToday();

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDay(date);
  };

  const handleHourSelect = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleSubmit = () => {
    if (!selectedDay || !selectedHour) return;
    if (!session?.user) return;
    const dateWithHour = set(selectedDay, {
      hours: parseInt(selectedHour.split(":")[0]),
      minutes: parseInt(selectedHour.split(":")[1]),
    });
    bookingService({
      userId: session.user.id,
      serviceId: service.id,
      date: dateWithHour,
    });
  };

  return (
    <div className="flex min-h-screen flex-col pb-12">
      <h1 className="text-lg font-bold text-white">Fazer Reserva</h1>

      <Separator className="my-6 bg-muted" />

      <Calendar
        mode="single"
        selected={selectedDay}
        onSelect={handleDateSelect}
        locale={ptBR}
        disabled={(date) => isBefore(date, today)}
        classNames={{
          head_cell: "w-full capitalize",
          cell: "w-full",
          button: "w-full",
          nav_button_previous: "w-8 h-8",
          nav_button_next: "w-8 h-8",
          caption: "capitalize flex justify-between items-center",
          caption_label: "font-bold text-center",
          nav: "gap-3 flex",
        }}
      />

      <Separator className="bg-muted" />
      <div className="flex gap-3 overflow-scroll px-5 py-6 scrollbar-hide">
        {HOURS_FREE.map((hour) => (
          <Button
            key={hour}
            className={`rounded-2xl border border-muted bg-foreground px-4 py-2 font-bold text-white ${selectedHour === hour ? "bg-primary" : ""}`}
            onClick={() => handleHourSelect(hour)}
          >
            {hour}
          </Button>
        ))}
      </div>
      <Separator className="mb-6 bg-muted" />

      <Card className="space-y-2 border-muted bg-foreground p-4 text-white">
        <div className="flex justify-between font-bold">
          <p>{service.name}</p>
          <p className="text-sm font-bold">R${service.price}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-accent">Data</p>
          <p className="text-sm">
            {selectedDay ? format(selectedDay, "dd/MM/yyyy") : ""}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-accent">Horário</p>
          <p className="text-sm">{selectedHour}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-accent">Barbearia</p>
          <p className="text-sm">{barbershopName}</p>
        </div>
      </Card>
      <Button onClick={handleSubmit} className="mt-auto w-full rounded-xl">
        Confirmar
      </Button>
    </div>
  );
};

export default BookingService;
