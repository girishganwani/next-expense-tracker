import { checkUser } from "@/public/lib/checkUser";

export default function Navbar() {
  const user = checkUser();
  return <div>Navbar</div>;
}
