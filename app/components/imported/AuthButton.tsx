import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

//   return user ? (
//     <div className="flex items-center gap-4">
//       Hey, {user.email}!
//       <form action={signOut}>
//         <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
//           Logout
//         </button>
//       </form>
//     </div>
//   ) : (
//     <Link
//       href="/login"
//       className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
//     >
//       Login
//     </Link>




  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <button onClick={signOut} className="relative px-5 py-3 overflow-hidden font-medium text-[#081209] bg-[#F8FDFD] border border-[#11A688] rounded-lg shadow-inner group hover:bg-[#11A688]">
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#081209] group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#081209] group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-cyan-800 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Logout</span>
      </button>
    </div>
  ) : (
    <Link href="/login" className="relative px-5 py-3 overflow-hidden font-medium text-[#081209] bg-[#F8FDFD] border border-[#11A688] rounded-lg shadow-inner group hover:bg-[#11A688]">
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#081209] group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#081209] group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#081209] group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-cyan-800 opacity-0 group-hover:opacity-100"></span>
      <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Login</span>
    </Link>
  );
};

