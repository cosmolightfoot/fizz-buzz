const test = QUnit.test;

function fizzBuzz(number) {
    let result = '0';
    for(let i = 1; i <= number; i++) {
        if(i % 15 === 0) {
            result += ', fizzbuzz';
        }
        else if(i % 5 === 0) {
            result += ', buzz';
        }
        else if(i % 3 === 0) {
            result += ', fizz';
        }
        else {
            result += ', ' + i;
        }
    }
    return result;
}


// test('divisible by 15', function(assert) {
//     const integer = 15;
//     const expect = 'fizzbuzz';
//     const results = fizzBuzz(integer);
    
//     assert.equal(results, expect);
// });
// test('divisible by 5', function(assert) {
//     const integer = 5;
//     const expect = 'buzz';
//     const results = fizzBuzz(integer);
    
//     assert.equal(results, expect);
// });
// test('divisible by 3', function(assert) {
//     const integer = 3;
//     const expect = 'fizz';
//     const results = fizzBuzz(integer);
    
//     assert.equal(results, expect);
// });
// test('not divisible by 5 or 3 returns a number', function(assert) {
//     const integer = 7;
//     const expect = 7;
//     const results = fizzBuzz(integer);
    
//     assert.equal(results, expect);
// });
test('analyzes first i value and places it in result', function(assert) {
    const number = 1;
    const results = fizzBuzz(number);
    const expect = '0, 1';
    
    assert.equal(results, expect);
});
test('analyzes first 3 i values and places it in result', function(assert) {
    const number = 3;
    const results = fizzBuzz(number);
    const expect = '0, 1, 2, fizz';
    
    assert.equal(results, expect);
});
test('analyzes first 16 i values and places it in result', function(assert) {
    const number = 16;
    const results = fizzBuzz(number);
    const expect = '0, 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16';
    
    assert.equal(results, expect);
});
