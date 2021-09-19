// Utilize somente Higher Order Functions para fazer as operações com o array;
// Refatore a Promise para utilizar somente async e await .
const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((number, acc) => number + acc, 0);
  
      (sum < 8000) ? resolve(sum) : reject();
    });
  
    myPromise
      .then(sum => [2, 3, 5, 10].map(number => sum / number))
      .then(array => array.reduce((number, acc) => number + acc, 0))
      .catch(() =>
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
      );
  };
  
  fetchPromise();

// refatorada
const sumRandomNumbers = () => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);
  
    if (sum >= 8000) {
      throw new Error('Oresultado é maior que oito mil!');
    }
    return sum;
  }
  
  const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
    .reduce((number, acc) => number + acc);
  
  const fetchPromise = async () => {
    try {
      const sum = await sumRandomNumbers();
      const sumFromSum = await sumArrayFromSum(sum);
      console.log(sumFromSum);
    } catch (error) {
      console.log(`É mais de oito mil! Essa promise deve estar quebrada!${error}`);
    }
  }
  
  fetchPromise();
