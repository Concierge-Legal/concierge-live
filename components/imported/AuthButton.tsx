import { createClient } from "@/utils/supabase/server";
import StyledLink from "../StyledLink";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

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

  return user ? (
    <div className="flex items-center gap-4">
      <span className="font-medium text-secondary">Hey, {user.email}!</span>
      <button
        onClick={signOut}
        className="relative px-4 py-2 bg-primary border border-secondary text-white font-medium rounded-lg shadow hover:bg-secondary hover:text-primary transition ease-in-out duration-200">
        Logout
      </button>
    </div>
  ) : (
    <a
      href="/login"
      className="relative px-4 py-2 bg-primary border border-secondary text-black font-medium rounded-lg shadow hover:bg-secondary hover:text-primary transition ease-in-out duration-200"
    >
      Dashboard
    </a>
  );
}
