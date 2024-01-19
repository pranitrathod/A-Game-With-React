const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  function calculateSum(matrix)
  {  const rowSum1=[];
    const colSum=[];
    

    for (const row of matrix) {
        let rowNum=0;
        let colNum=0;
        for (const  number of row) {
         rowNum += number;  
         colNum+= matrix[0][row][number];
        }
        rowSum1.push(rowNum);
        colSum.push(colNum);
    }
    return {
       rowResult: rowSum1,
        colResult:colSum
    }

  }
  const result=calculateSum(matrix);
  console.log(result);

//   console.log(result);