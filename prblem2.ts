function removeDuplicates(numbers: number[]): number[] {
    return Array.from(new Set(numbers));
    }
    
   
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    
  // Output: [1, 2, 3, 4, 5]
    console.log(result); 