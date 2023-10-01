import { useFetch } from '@vueuse/core'

export const TeamService = {
  getTeams: () => useFetch('/api/teams').json()
}
