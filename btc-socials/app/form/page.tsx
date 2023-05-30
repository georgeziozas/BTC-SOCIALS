import SubmitForm from "../components/SubmitForm";
import { Roboto } from "next/font/google";
export default async function Form() {
  return (
    <>
      <main>
        <h1 className="text-2xl">Welcome to Ordinals Socials</h1>
        <SubmitForm />
      </main>
    </>
  );
}
