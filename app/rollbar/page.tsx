import { cookies } from "next/headers";

interface RollbarProps {
  searchParams: {
    search: string;
    page: number;
  };
}

export default function rollbar({ searchParams }: RollbarProps) {
  console.log(searchParams);
  const user = cookies().get("user");
  throw new Error("Error from page rollbar.tsx");
  return <div>rollbar</div>;
}
