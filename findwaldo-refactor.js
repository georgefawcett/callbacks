// Re-factor findwaldo.js using foreach method
var names = ["Alice", "Bob", "Waldo", "Winston"];

names.forEach(function(name, i) {
  if (name === "Waldo") {
    console.log(`Found Waldo at index ${i}!`)
  }
  });


// //from class
// forEach(names, functionname);
// forEach([10,20,30], functionname);

// // or can create anonymous function