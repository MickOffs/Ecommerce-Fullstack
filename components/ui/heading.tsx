interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-lime-400 from-20% via-emerald-500 to-lime-500 to-80%">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground"> {description}</p>
    </div>
  );
};

export default Heading;
