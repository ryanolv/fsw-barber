import { format } from "date-fns";
import { Card } from "./ui/card";

interface SummaryAppointmentProps {
  service: {
    name: string;
    price: number;
  };
  selectedDay: Date | undefined;
  selectedHour: string | undefined;
  barbershopName: string;
}

const SummaryAppointment = ({
  service,
  selectedDay,
  selectedHour,
  barbershopName,
}: SummaryAppointmentProps) => {
  return (
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
  );
};

export default SummaryAppointment;
