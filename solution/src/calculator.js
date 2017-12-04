

export default function calculator(input) {
  if(!input || input.length < 1) return 0;

  const length = input.length;
  let water_size = 0;

  let i = 0;
  let j = length-1;

  /**
    TODO: update the explanation!

    We have two case when the shape can't make a basin

    - First case -> when all bars matches this : the height of the left bar is less than the height of the right bar.
    - Second case ->  when the first case didn't match but it matches this: the height of the right bar is less than the height of left bar till it reaches the cursor i
  */

  // First case
  while(i < length && input[i] <= input[i+1]) {
    i++;
  }

  if(i+1 === length) return water_size;

  // Second case
  while(j > i && input[j] <= input[j-1]) {
    j--;
  }

  if(j === i) return water_size;


  /**
    Now we have at least one basin and the basin has the left bar and right bar.

    Depends on this:
      "The water in one cell always flows to the neighboring cell of least height"

    so we are gonna always pick the less height between the left and the right bar
    and then we can calculate the water_size by substraction between the height of
    the current picked bar and the height of the next bar

    TODO: improve the explanation

  */

  let left = input[i];
  let right = input[j];

  while((i+1) !== j) {
    if(left < right) {
      i++;
      if(left > input[i]) {
        water_size += left - input[i];
      } else {
        left = input[i]
      }
    } else {
      j--;
      if(right > input[j]) {
        water_size += right - input[j];
      } else {
        right = input[j]
      }
    }
  }

  return water_size;
}
