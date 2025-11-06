import { Outlet, NavLink } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 font-semibold text-xl border-b border-gray-200">
          PawHQ
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive
                  ? "bg-primary-100 text-primary-700 font-semibold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive
                  ? "bg-primary-100 text-primary-700 font-semibold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Calendar
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md ${
                isActive
                  ? "bg-primary-100 text-primary-700 font-semibold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            Reports
          </NavLink>
        </nav>

        <div className="p-3 border-t border-gray-200">
          <button className="text-sm text-gray-600 hover:text-gray-800">
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top nav */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-gray-200 bg-white">
          <div className="text-lg font-semibold">Dashboard</div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
