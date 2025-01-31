import { classNames } from './classNames'

describe('classNames', () => {
    test('with only 1 param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with mods only params', () => {
        expect(classNames('someClass', { covered: true, selected: false })).toBe('someClass covered')
    })

    test('with additionals params', () => {
        expect(classNames('someClass', {}, ['class 1', 'class 2'])).toBe('someClass class 1 class 2')
    })

    test('with mods and additionals params ', () => {
        expect(classNames('someClass', { covered: true, selected: false }, ['class 1', 'class 2'])).toBe(
            'someClass covered class 1 class 2'
        )
    })
})
