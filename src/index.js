
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    let avg = 0;
    let result = 0;
    array.forEach(function (item) {
      result += item;
    })
    avg = (result / (array.length));
    return avg;
  }
}
