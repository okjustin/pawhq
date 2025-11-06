import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="relative">
      <FiSearch
        className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        size={16}
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border border-gray-200 rounded-sm pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white"
      />
    </div>
  );
}
