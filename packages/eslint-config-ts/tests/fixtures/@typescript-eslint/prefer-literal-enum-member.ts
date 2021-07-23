const str = 'Test';
enum Invalid {
  A = str, // Variable assignment
  B = {}, // Object assignment
  C = `A template literal string`, // Template literal
  D = new Set(1, 2, 3), // Constructor in assignment
  E = 2 + 2, // Expression assignment
}
