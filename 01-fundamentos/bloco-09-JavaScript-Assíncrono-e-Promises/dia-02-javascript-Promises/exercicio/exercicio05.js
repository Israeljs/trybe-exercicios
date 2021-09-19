// Quando a Promise for bem-sucedida, encadeie nela 
// uma segunda Promise que some os elementos do array.
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
  
    const fetchPromise = async () => {
        const myPromise = new Promise((resolve, reject) => {
          const myArray = Array.from(
            { length: 10 },
            () =>  Math.floor(Math.random() * 50) + 1
          );
          const sum = myArray.map(number => number * number)
                             .reduce((number, acc) => number + acc, 0);
      
          (sum < 8000) ? resolve(sum) : reject(sum);
        });
    
        try {
            const respose = await myPromise;
            const r = [2, 3, 5, 10].map(number => respose / number)
            .reduce((acc, number) => acc + number)
            console.log(`Promise resolvida ${r}`)
          } catch(error){
            console.log(`Promise rejeitada ${error}`) // Promise rejeitada 8726
          }
        }
      
      fetchPromise();
  };
  
  fetchPromise();
