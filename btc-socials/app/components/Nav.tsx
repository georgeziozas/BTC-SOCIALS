"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session) {
  return (
    <>
      <nav className="flex justify-between items-center py-8">
        <h1 className="text-5xl">
          <Link href="/">Ordi Socials</Link>
        </h1>
        <ul className="flex items-center gap-12">
          {/*If the user is not signed in*/}
          {!user && (
            <>
              <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
                <button onClick={() => signIn()}>Sign In</button>
              </li>
            </>
          )}
          {/*If the user is signed in*/}
          {user && (
            <>
              <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
                <Link href="/form">Submit Project</Link>
              </li>

              <li>
                <Image
                  src={user?.image as string}
                  alt={user?.name as string}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
