import { useQuery } from '@tanstack/react-query'
import { getDashboard } from '../lib/api'

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: getDashboard
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading dashboard</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}