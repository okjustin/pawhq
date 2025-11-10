import { Outlet } from "react-router-dom"
import SideNavigation from './SideNavigation'
import TopBar from './TopBar'

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
      <TopBar />

      <div className="flex-1 flex flex-row">
        <SideNavigation />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>
    </div>
  )
}
