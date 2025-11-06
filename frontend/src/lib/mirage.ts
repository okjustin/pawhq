import { createServer } from 'miragejs'

export function startMirage() {
  createServer({
    routes() {
      this.namespace = 'api'

      this.get('/dashboard', () => ({
        stats: {
          petsPresent: 73,
          capacityRemaining: 9,
          moneyOverdue: 320,
          tasksOverdue: 12
        },
        today: {
          checkins: 7,
          feeds: 3,
          meds: 2,
          walks: 3,
          washes: 1,
          alerts: 1
        },
        feed: [
          { time: '09:41', event: 'Rex checked in', actor: 'Cabin 1' },
          { time: '09:55', event: 'Rowley medicated', actor: 'Sarah' }
        ],
        pets: [
          { name: 'Rex', breed: 'Black Labrador', status: ['Aggressive','Vaccinated'] },
          { name: 'Ruby', breed: 'Golden Retriever', status: ['Vaccinated','Chipped'] }
        ],
        staff: [
          { name: 'Justin Tyson', role: 'Team Leader', status: 'Present' }
        ]
      }))
    }
  })
}
