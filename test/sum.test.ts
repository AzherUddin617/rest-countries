import sum from '../utils/sum';

describe("Sum of two numbers", ()=> {
    it('Should sum two number', ()=> {
        expect(sum(1, 2)).toBe(3);
    })
})