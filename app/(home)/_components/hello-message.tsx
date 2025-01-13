"use client";

import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const HelloMessage = () => {
  const { data, status } = useSession();
  const formattedDate = format(new Date(), "EEEE, d 'de' MMMM", {
    locale: ptBR,
  });
  const name = data?.user?.name?.split(" ")[0];
  return (
    <div className="px-5 py-6 text-white">
      {status === "authenticated" ? (
        <h1 className="text-xl text-white">
          Olá, <span className="font-bold">{name}!</span>
        </h1>
      ) : (
        <h1 className="text-xl text-white">
          Olá, <span className="font-bold">Faça seu Login!</span>
        </h1>
      )}
      <p className="text-sm">{formattedDate}</p>
    </div>
  );
};

export default HelloMessage;
