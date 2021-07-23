import { Foo } from 'Foo';
import Bar from 'Bar';
type T = Foo;
const x: Bar = 1;

type T = import('Foo').Foo;
