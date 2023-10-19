 // Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return Hello, Jane!', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called without input', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed boolean true', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" when passed boolean false', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean output', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return false when passed the number 4', function() {
        expect(isFive(4)).toBe(false);
    });
    it('should return false when passed the number 6', function() {
        expect(isFive(6)).toBe(false);
    });
    it('should return true when passed the number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed the number 2', function() {
        expect(isFive(2)).toBe(false);
    });
    it('should return true when passed the string "5"', function() {
        expect(isFive("5")).toBe(true);
    });
});


describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function() {
       expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return true when passed the letter "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when passed "e"', function() {
        expect(isVowel("e")).toBe(true);
    });
    it('should return false if passed a boolean', function () {
        //expect(isVowel(true)).toBe(true);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if passed the string "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if passed no input', function () {
        expect(isVowel()).toBe(false);
    });
    it('should return true if passed "I"', function () {
        expect(isVowel("I")).toBe(true);
    });
});

 describe('add', function() {
     it('should be a defined function', function () {
         expect(typeof add).toBe('function');
     });
     it('should return 5', function () {
         expect(add(5)).toBe(true);
     });
 });









