/**
  NOTE: Now the algorithm is linear after we are filling the map in the same time
        but in asynchronous way and this done via a strategy that allow us
        to store all the map's works in an array called tasks

*/

export default function calculator(input) {
  // this describe the result's shape of this function
  const result = (water_size = 0, tasks = []) => ({water_size, tasks})

  if(!input || input.length < 1) return result();

  const tasks = []
  const length = input.length;
  const height = Math.max(...input)

  tasks.push(init_map(input, height))
  let water_size = 0;

  let i = 0;
  let j = length-1;

  /**
    We have two cases when the shape can't make a basin

    - First Case -> When all bars from the left to the right are increasing in the height.
    - Second Case -> When the first case didn't match and the bars from the right to the left are increasing in the height till it reaches the cursor i.

  */

  // First case
  while(i < length && input[i] <= input[i+1]) {
    i++;
  }

  if(i+1 === length) return result(water_size, tasks);

  // Second case
  while(j > i && input[j] <= input[j-1]) {
    j--;
  }

  if(j === i) return result(water_size, tasks);


  /**
    Now we have at least one basin and the basin has the left bar and right bar.

    Depends on this:
      "The water in one cell always flows to the neighboring cell of least height"

    so always we are gonna pick the min height between the left and the right bar
    and then we can calculate the water_size by subtraction between the height of
    the current picked bar and the height of the next bar and this depends on the
    direction that we are in if it's from left to right or the inverse

  */

  let left = input[i];
  let right = input[j];

  while((i+1) !== j) {
    if(left < right) {
      i++;
      if(left > input[i]) {
        water_size += left - input[i];
        // this is an injection to fill the map by water cell
        tasks.push(fill_by_water(left-input[i], (height-1) -input[i], i))
      } else {
        left = input[i]
      }
    } else {
      j--;
      if(right > input[j]) {
        water_size += right - input[j];
        // this is an injection to fill the map by water cell
        tasks.push(fill_by_water(right-input[j], (height-1) -input[j], j))
      } else {
        right = input[j]
      }
    }
  }

  return result(water_size, tasks);
}

export const EMPTY = 0;
export const BLOCK = 1;
export const WATER = 2;

/**

*/
function init_map(input, height) {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {

        const map = []
        for(let i = 0; i < height; i++) {
          const row = []

          for(let j = 0; j < input.length; j++) {
            if((i+1) > (height - input[j])) {
              row.push(BLOCK)
            } else {
              row.push(EMPTY)
            }
          }
          map.push(row)
        }

        resolve(map)
      }, 0);
    })
  }

}

/**

*/
function fill_by_water(water_size, start, position) {
  return (map) => {
    return new Promise((resolve) => {
      setTimeout(() => {

          let j = start;
          while(water_size > 0) {
            map[j][position] = WATER;
            water_size--;
            j--;
          }

          resolve(map)
      }, 0);
    })
  }
}

/**
  this is an asynchronous function that will construct a map for us
  depending on the tasks
*/
export async function build_map(tasks) {
  let map = await tasks[0]();

  for(let i = 1; i < tasks.length; i++) {
    map = await tasks[i](map)
  }

  return map
}
