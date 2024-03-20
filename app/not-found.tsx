import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <p className="my-8">NotFoundPage</p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
