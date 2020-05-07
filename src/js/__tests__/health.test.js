import showHealth from '../health';

test('should healthy', () => {
    const received = showHealth({name: 'Маг', health: 90});
    expect(received).toBe('healthy');
})

test('should wounded', () => {
    const received = showHealth({name: 'Маг', health: 40});
    expect(received).toBe('wounded');
}) 

test('should critical', () => {
    const received = showHealth({name: 'Маг', health: 10});
    expect(received).toBe('critical');
})

test('should killed', () => {
    const received = showHealth({name: 'Маг', health: 'mistake'});
    expect(received).toBe('killed');
})

test('should killed', () => {
    const received = showHealth({});
    expect(received).toBe('killed');
})

test('should killed', () => {
    const received = showHealth({name: 'Маг', health: -10});
    expect(received).toBe('killed');
})