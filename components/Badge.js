export default function Badge({ children, tone = "neutral" }) {
  const tones = {
    neutral: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    deal: "bg-purple-100 text-purple-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}