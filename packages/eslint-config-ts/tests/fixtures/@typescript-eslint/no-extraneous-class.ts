class EmptyClass {}

class ConstructorOnly {
  constructor() {
    foo();
  }
}

// Use an object instead:
class StaticOnly {
  static version = 42;
  static hello() {
    console.log('Hello, world!');
  }
}
