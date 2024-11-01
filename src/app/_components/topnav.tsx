// import { SignedIn, SignInButton } from "@clerk/clerk-react";
"use client";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full justify-between border-b p-4 text-xl font-semibold">
      <p>Gallery</p>
      <div className="flex justify-center gap-4 align-bottom">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint={"imageUploader"}
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
