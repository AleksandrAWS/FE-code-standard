type T = {
  a?: {
    b?: {
      c: string;
      method?: () => void;
    };
  };
};

function myFunc(foo: T | null) {
  return foo && foo.a && foo.a.b && foo.a.b.c;
}
