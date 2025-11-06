import { FaInbox } from 'react-icons/fa';

export default function Inbox() {
  return (
    <div className="relative inline-block group">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
      >
        <FaInbox className="text-2xl text-text-primary" />
      </button>

      <div
        className="
          invisible opacity-0 translate-y-2 pointer-events-none
          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
          group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
          transition-all duration-150
          absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-4
        "
        role="menu"
        aria-label="Inbox"
      >
        <h3 className="font-semibold mb-2">Inbox</h3>
        <ul className="space-y-2">
          <li className="border-b border-gray-200 pb-2">
            <button className="text-left w-full">
              <div className="font-medium">Message 1</div>
              <div className="text-sm text-gray-600">This is the first message.</div>
            </button>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <button className="text-left w-full">
              <div className="font-medium">Message 2</div>
              <div className="text-sm text-gray-600">This is the second message.</div>
            </button>
          </li>
          <li>
            <button className="text-left w-full">
              <div className="font-medium">Message 3</div>
              <div className="text-sm text-gray-600">This is the third message.</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
