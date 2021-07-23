const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo(bar?: { n: number }) {
  return bar!?.n;
}
