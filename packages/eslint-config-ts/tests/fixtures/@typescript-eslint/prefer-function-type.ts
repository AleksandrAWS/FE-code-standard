interface Foo {
  (): string;
}
function foo(bar: { (): number }): number {
  return bar();
}
interface Foo extends Function {
  (): void;
}
