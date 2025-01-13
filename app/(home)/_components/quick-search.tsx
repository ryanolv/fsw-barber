import { Button } from "@/app/_components/ui/button";

const QuickSearch = () => {
  const typeServices = [
    "Cabelo",
    "Barba",
    "Acabamento",
    "Sobrancelha",
    "Hidratação",
  ];
  return (
    <div className="no-wrap scrollbar-hide flex gap-3 overflow-scroll px-5 py-6">
      {typeServices.map((service) => (
        <Button
          key={service}
          className="rounded-lg border border-muted bg-foreground px-4 py-3 font-bold text-white"
        >
          {service}
        </Button>
      ))}
    </div>
  );
};

export default QuickSearch;
