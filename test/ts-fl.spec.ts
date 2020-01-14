import { TestClass } from '../src/ts-fl'

describe(TestClass, () => {
  it('is instantiable', () => {
    expect(new TestClass()).toBeDefined()
  })

  it('can say hello', () => {
    const testClass = new TestClass()

    expect(testClass.hello()).toStrictEqual('hello')
  })
})
