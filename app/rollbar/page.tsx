import { cookies } from "next/headers";

export default function rollbar() {
  cookies().get("user");
  throw new Error("Error from page rollbar.tsx");
}
