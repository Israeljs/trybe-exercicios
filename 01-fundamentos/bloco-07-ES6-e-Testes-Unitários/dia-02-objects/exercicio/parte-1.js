const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  // const customerInfo = (order) => {
  //   const anaSilveira = order.order.delivery.deliveryPerson;
  //   const rafaelAndrade = order.name;
  //   const telefone = order.phoneNumber;
  //   const ruaDasFlores = order['address'].street;
  //   const number = order['address'].number;
  //   const apartment = order.address.apartment;

  //   const result = `Olá ${anaSilveira}, entrega para: ${rafaelAndrade}, Telefone: 
  //   ${telefone}, R. ${ruaDasFlores}, Nº: ${number}, AP: ${apartment}.`;
  //   return console.log(result)
  // }
  
  // customerInfo(order);
  
  const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const cocaCola = order.order.drinks.coke.type;
    const preco = order.payment.total = 50;
  

    const result = `Olá ${name}, o total do seu pedido de ${pizzas[0]}, 
    ${pizzas[1]} e ${cocaCola} é R$ ${preco},00.`
    console.log(result);
  
  }
  
  orderModifier(order);