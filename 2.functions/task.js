function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return(0);
  } else {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return(sum);
  }
  
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return(0);
  } else {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let dif = max - min;
  
    return(dif);
  }
  
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return(0);
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    let dif = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
  
     dif = sumEvenElement - sumOddElement;
  
     return(dif);
  }
  
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return(0);
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let avg = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
  
    avg = sumEvenElement / countEvenElement;
  
    return(avg);
  }
  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (maxWorkerResult < func(...arrOfArr[i])) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }

  return(maxWorkerResult);
}
