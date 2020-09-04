import {describe, expect, test} from '@jest/globals'
import { hello } from '..'

test('Should match the string "Hello X !"', () => {
  expect(hello('Folkvir')).toBe('Hello Folkvir !')
})