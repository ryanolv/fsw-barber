"use client";

import { Calendar } from "@/app/_components/ui/calendar";
import { Separator } from "@/app/_components/ui/separator";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

const BookingService = () => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDay(date);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-white">Fazer Reserva</h1>
      <div className="py-6">
        <Separator className="bg-muted" />
      </div>
      <Calendar
        mode="single"
        selected={selectedDay}
        onSelect={handleDateSelect}
        locale={ptBR}
        styles={{
          head_cell: {
            width: "100%",
            textTransform: "capitalize",
          },
          cell: {
            width: "100%",
          },
          button: {
            width: "100%",
          },
          nav_button_previous: {
            width: "32px",
            height: "32px",
          },
          nav_button_next: {
            width: "32px",
            height: "32px",
          },
          caption: {
            textTransform: "capitalize",
          },
        }}
      />

      <div className="py-6">
        <Separator className="bg-muted" />
      </div>
    </div>
  );
};

export default BookingService;
