QUnit.module("IsEven");

QUnit.test('isEven()', function(assert) {
    assert.ok(isEven(0), 'Ноль - четное число');
    assert.ok(isEven(2), 'Два - тоже');
    assert.ok(isEven(-4), 'И отрицательное четыре - тоже четное число');
    assert.ok(!isEven(1), 'Один - нечетное число');
    assert.ok(!isEven(-7), 'Как и отрицательное семь - нечетное число');
    assert.ok(!isEven(3), 'Три - четное число');
});

QUnit.module("ODD");
QUnit.test('isOdd()', function(assert) {
    assert.ok(isOdd(3), 'Ноль - четное число');
    assert.ok(isOdd(-981), 'Два - тоже');
});

QUnit.module("three");
QUnit.test('assertions', function(assert) {
    assert.equal( 5, 5, 'один эквивалентно одному');
    assert.equal( {}, {}, 'ошибка, это разные объекты');
    assert.equal( {a: 1}, {a: 1} , 'ошибка');
    assert.equal( [], [], 'ошибка, это разные массивы');
    assert.equal( [1], [1], 'ошибка');
});

QUnit.module("deepEqual");
QUnit.test('test', function(assert) {
    assert.deepEqual( {}, {}, 'проходит, объекты имеют одинаковый контент');
    assert.deepEqual( {a: 1}, {a: 1} , 'проходит');
    assert.deepEqual( [], [], 'проходит, массивы имеют одинаковый контент');
    assert.deepEqual( [1], [1], 'проходит');
});

QUnit.module("async");
QUnit.test('Асинхронный тест', function(assert) {
    assert.expect(2);
    var done = assert.async();
    setTimeout(function() {
        assert.ok(isEven(2), 'Два - тоже');
        // После вызова утверждения
        // продолжаем тест
        done();
    }, 3000);
    assert.deepEqual( [1], [1], 'не асинхрон проходит');
});