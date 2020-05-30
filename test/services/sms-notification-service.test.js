const { smsNotification } = require('../../services/')


test('Boolean output', () => {
    expect(smsNotification()).not.toBe(true)
    expect(smsNotification()).not.toBe(false)
    expect(smsNotification()).not.toBe(Boolean())
});
test('Integer output', () => {
    expect(smsNotification()).not.toBe(123456789)
    expect(smsNotification()).not.toBe(Number())
});
test('String output', () => {
    expect(smsNotification()).not.toBe('123456789')
    expect(smsNotification()).not.toBe(String())
});
test('Object output', () => {
    expect(smsNotification()).not.toBe({})
    expect(smsNotification()).not.toBe({'obj': 1})
    expect(smsNotification()).not.toBe(Object())
});
test('Array output', () => {
    expect(smsNotification()).not.toBe([])
    expect(smsNotification()).not.toBe([1])
    expect(smsNotification()).not.toBe(Array())
});