function staircase(n) {
  let sympol = '#';
  let imputLine = '';
  let inputPosition = n -1;

  for (let lineI = 0; lineI < n; lineI++) {
    for (let columnI = 0; columnI < n; columnI++) {
      if (columnI < inputPosition) {
        imputLine += ' ';
      } else {
        imputLine += sympol;
      }
    }
    console.log(imputLine);
    imputLine = '';
    inputPosition -= 1;
  }
}

staircase(3);
