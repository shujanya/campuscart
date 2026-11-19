import Link from "next/link";

export default function EmptyState({ message, linkHref, linkText }) {
  return (
    <div className="text-center py-16 text-gray-500">
      <p className="mb-4">{message}</p>
      {linkHref && (
        <Link href={linkHref} className="text-blue-600 font-medium hover:underline">
          {linkText}
        </Link>
      )}
    </div>
  );
}