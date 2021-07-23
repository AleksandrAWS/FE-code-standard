class X {
  protected protectedProp = 123;

  private privProp = 123;
}

const x = new X();
x['privProp'] = 123;
x['protectedProp'] = 213;
