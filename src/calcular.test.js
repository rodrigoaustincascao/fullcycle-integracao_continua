const calcular = require('./calcular')

test("Multiplica 2 * 3 e retorna 6", ()=> {
    expect(calcular(2,3)).toBe(6);
});