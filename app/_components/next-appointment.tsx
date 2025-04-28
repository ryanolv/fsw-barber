import { getNextAppointmentByUser } from "../_data/get-appointments-by-user";
import AppointmentItem from "./appointment-item";

interface NextAppointmentProps {
  params: {
    userId: string;
  };
}

const NextAppointment = async ({
  params: { userId },
}: NextAppointmentProps) => {
  const nextAppointment = await getNextAppointmentByUser(userId);
  if (!nextAppointment) return null;

  return (
    <div className="space-y-2 px-5 py-6">
      <h3 className="text-xs font-bold text-accent">PRÓXIMO AGENDAMENTO</h3>
      <AppointmentItem appointment={nextAppointment} />
    </div>
  );
};

export default NextAppointment;
