// import { SignedIn, SignInButton } from "@clerk/clerk-react";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const TopNav = () => {
  return (
    <nav className="flex w-full justify-between border-b p-4 text-xl font-semibold">
      <p>Gallery</p>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default TopNav;
