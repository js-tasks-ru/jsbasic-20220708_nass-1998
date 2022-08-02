function getMinMax(str) {
  let arr = str.split(' ');

  let numb = []
  for (key in arr) {

    if (!Number.isNaN(Number(arr[key]))) {
      numb.push(Number(arr[key]))
    }
  }
  return ({min: Math.min(...numb), max: Math.max(...numb)})
}