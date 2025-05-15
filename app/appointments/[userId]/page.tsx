import { getAppointmentsByUser } from "@/app/_data/get-appointments-by-user";
import { AppointmentDTO } from "@/app/_types/dto";

import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import Header from "../../_components/header";
import AppointmentItem from "@/app/_components/appointment-item";
import DetailsAppointment from "./_components/details-appointment";

const AppointmentsPage = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const appointmentsByUser: AppointmentDTO[] =
    await getAppointmentsByUser(userId);
  return (
    <div className="h-screen">
      <Header />
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold text-white">Agendamentos</h1>
        <div className="flex flex-col gap-4 py-6">
          <h3 className="text-sm text-accent">CONFIRMADOS</h3>
          {appointmentsByUser.map((appointment) => (
            <Sheet key={appointment.id}>
              <SheetTrigger>
                <AppointmentItem appointment={appointment} />
              </SheetTrigger>
                <DetailsAppointment appointment={appointment} />
            </Sheet>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
