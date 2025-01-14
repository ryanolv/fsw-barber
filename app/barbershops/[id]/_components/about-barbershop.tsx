const AboutBarbershop = ({ description }: { description: string }) => {
  return (
    <div className="space-y-3 px-5">
      <h2 className="text-xs font-bold text-accent">SOBRE NÓS</h2>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
};

export default AboutBarbershop;
