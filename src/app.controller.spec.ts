import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from './app.service'

describe('AppService', () => {
  let appService: AppService

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    appService = app.get<AppService>(AppService)
  })

  it(`should be defined`, () => {
    expect(appService).toBeDefined()
  })

  it(`should return a random emoji`, () => {
    const emojis = appService.getEmojis()
    const randomEmoji = appService.getEmoji()
    const isValidEmoji = emojis.some((emoji) => emoji === randomEmoji)

    expect(isValidEmoji).toBe(true)
  })
})
