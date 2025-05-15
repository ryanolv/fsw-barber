import Image from "next/image";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../_lib/auth";
import { getNextAppointmentForUser } from "../_data/get-appointments-by-user";

import Header from "../_components/header";
import HelloMessage from "./_components/hello-message";
import QuickSearch from "./_components/quick-search";
import Search from "./_components/search";
import PopularBarbershops from "./_components/popular-barbershops";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  const nextAppointment = await getNextAppointmentForUser(userId);

  return (
    <>
      <Header />
      <HelloMessage />
      <Search />
      <QuickSearch />
      <div className="flex justify-center">
        <Image src="/banner.png" alt="Banner" height={150} width={350} />
      </div>
      <div className="space-y-2 px-5 py-6">
        {nextAppointment && (
          <>
            <h3 className="text-xs font-bold text-accent">AGENDAMENTOS</h3>
            <AppointmentItem appointment={nextAppointment} />
          </>
        )}
      </div>
      <PopularBarbershops />
    </>
  );
}
