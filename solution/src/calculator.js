

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

  // Implementing what I've done in my paper

  return water_size;
}
