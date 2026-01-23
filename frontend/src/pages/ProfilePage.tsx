import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export default function ProfilePage() {
  return (
    <div className="flex justify-between items-center">
      <h1>ProfilePage</h1>
      <Link to="/create" className="btn btn-primary btn-sm gap-1">
        <PlusIcon className="size-4" />
        <span className="hidden sm:inline">New Product</span>
      </Link>
    </div>
  );
}
