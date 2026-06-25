interface Props {
  title: string;
  value: number;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {value}
      </h2>
    </div>
  );
}