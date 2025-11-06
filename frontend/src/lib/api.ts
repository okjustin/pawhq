export async function getDashboard() {
  const res = await fetch('/api/dashboard')
  return res.json()
}
