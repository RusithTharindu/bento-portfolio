type StatCardProps = {
  value: string;
  suffix: string;
  label: string;
};

export function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="stat">
      <div className="stat-num">
        {value}
        <sup>{suffix}</sup>
      </div>
      <div className="stat-lab">{label}</div>
    </div>
  );
}
