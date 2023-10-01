import { MockHandler } from 'vite-plugin-mock-server'
import teams from '../team.json'

const mocks: MockHandler[] = [
    {
      pattern: '/api/teams',
      handle: (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(teams))
      }
    }
  ]
  
  export default mocks