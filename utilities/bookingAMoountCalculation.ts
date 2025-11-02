export  function bookingAmountCalculations(calculations:string){
const match = calculations.match(/£?(\d+)\s*x\s*(\d+)/);
if (match) {
  const price = Number(match[1]);  // 
  const nights = Number(match[2]); // 

}    
} 

