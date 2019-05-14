import { createServer } from 'src/index'

describe('Verify handlers', () => {
  let server: any

  describe('getUserHandler', () => {
    beforeEach(async () => {
      server = await createServer()
    })

    it('should return status code 500 if invalid payload received', async () => {
      const res = await server.server.inject({
        method: 'GET',
        url: '/users/XXX',
        payload: {}
      })

      expect(res.statusCode).toBe(500)
    })

    afterAll(async () => {
      jest.clearAllMocks()
    })
  })
})
