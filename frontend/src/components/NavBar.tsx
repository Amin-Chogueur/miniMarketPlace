import { Link } from "react-router";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import { ShoppingBagIcon, UserIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { isSignedIn } = useAuth();

  return (
    <div className="navbar bg-base-300 sticky top-0 z-50">
      <div className="  max-w-7xl mx-auto w-full px-2 flex justify-between items-center">
        {/* LOGO - LEFT SIDE */}
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost gap-2">
            <ShoppingBagIcon className="size-5 text-primary" />
            <span className="hidden md:inline text-lg font-bold font-mono  tracking-wider">
              Mini_Market_Place
            </span>
            <span className="inline md:hidden text-lg font-bold font-mono  tracking-wider">
              M_M_P
            </span>
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <ThemeSelector />
          {isSignedIn ? (
            <>
              <Link to="/profile" className="btn btn-ghost btn-sm gap-1">
                <UserIcon className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-ghost btn-sm">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn btn-primary btn-sm">Get Started</button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
