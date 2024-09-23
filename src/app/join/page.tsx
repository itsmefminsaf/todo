import JoinForm from "@/components/JoinForm";
import { redirect } from "next/navigation";
import { FormEvent, FormEventHandler } from "react";

const Join = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <JoinForm />
    </main>
  );
};
export default Join;
