for (var i=10; i; i--) {
  (function() { return i; })();
}

while(i) {
  var a = function() { return i; };
  a();
}
