function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values appropriately
    console.log('Null values encountered');
    return 0; // Or return a default value
  }
  // ... rest of the function
  return a + b; 
}