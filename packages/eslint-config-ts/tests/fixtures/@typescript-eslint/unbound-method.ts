class MyClass {
  public log(): void {
    console.log(this);
  }
}

const instance = new MyClass();

const myLog = instance.log;
myLog();

const { log } = instance;

const arith = {
  double(x: number): number {
    return x * 2;
  },
};
const { double } = arith;
