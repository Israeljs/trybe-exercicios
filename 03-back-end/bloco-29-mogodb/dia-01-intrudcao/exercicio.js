use('bios');
// Exercício 1: Retorne o documento com o _id igual a 8.
db.bios.find({_id: 8});
// Exercício 2: Retorne o documento com o _id igual a 8, mas só exiba os atributos: _id e name.
db.bios.find(
  {_id: 8},
  { _id: true, name: 1}
  );
// 🚀 Exercício 3: Retorne apenas os atributos name e birth do documento com o _id igual a 8.
db.bios.find(
  {_id: 8},
  { _id: true, birth: 1}
  );
// Exercício 4: Retorne todos os documentos em que o atributo name.first seja igual a John, utilizando o método pretty().
db.bios.find(
  {'name.first': 'John'}
  ).pretty();
// Exercício 5: Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty().
db.bios.find().limit(3).pretty();
// Exercício 6: Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
db.bios.find().limit(2).skip(5).pretty();
// Utilizando o mongoimport, importe o arquivo books.json para a sua instância local do MongoDB e utilize a coleção books para construir as seguintes consultas:
use('class');
db.books.find().count();
// 🚀 Exercício 7: Retorne a quantidade de documentos da coleção books.
db.books.find().count(); // db.books.countDocuments({})
// 🚀 Exercício 8: Conte quantos livros existem com o status = "PUBLISH".
db.books.find({ status: 'PUBLISH'}).count();
// 🚀 Exercício 9: Exiba os atributos title, isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo _id.
db.books.find(
    {},
    {_id: 0, title: 1, isbn: 1, pageCount: 1}
    ).limit(3);
// Exercício 10: Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.
db.books.find(
    {status: 'MEAP'},
    {
        title: 1, 
        authors: 1, 
        status: 1
    }
    ).skip(5).limit(10);


db.bios.insertMany([
  {
      "_id" : 1,
      "name" : {
          "first" : "John",
          "last" : "Backus"
      },
      "birth" : ISODate("1924-12-03T05:00:00Z"),
      "death" : ISODate("2007-03-17T04:00:00Z"),
      "contribs" : [
          "Fortran",
          "ALGOL",
          "Backus-Naur Form",
          "FP"
      ],
      "awards" : [
          {
              "award" : "W.W. McDowell Award",
              "year" : 1967,
              "by" : "IEEE Computer Society"
          },
          {
              "award" : "National Medal of Science",
              "year" : 1975,
              "by" : "National Science Foundation"
          },
          {
              "award" : "Turing Award",
              "year" : 1977,
              "by" : "ACM"
          },
          {
              "award" : "Draper Prize",
              "year" : 1993,
              "by" : "National Academy of Engineering"
          }
      ]
  },
  {
      "_id" : ObjectId("51df07b094c6acd67e492f41"),
      "name" : {
          "first" : "John",
          "last" : "McCarthy"
      },
      "birth" : ISODate("1927-09-04T04:00:00Z"),
      "death" : ISODate("2011-12-24T05:00:00Z"),
      "contribs" : [
          "Lisp",
          "Artificial Intelligence",
          "ALGOL"
      ],
      "awards" : [
          {
              "award" : "Turing Award",
              "year" : 1971,
              "by" : "ACM"
          },
          {
              "award" : "Kyoto Prize",
              "year" : 1988,
              "by" : "Inamori Foundation"
          },
          {
              "award" : "National Medal of Science",
              "year" : 1990,
              "by" : "National Science Foundation"
          }
      ]
  },
  {
      "_id" : 3,
      "name" : {
          "first" : "Grace",
          "last" : "Hopper"
      },
      "title" : "Rear Admiral",
      "birth" : ISODate("1906-12-09T05:00:00Z"),
      "death" : ISODate("1992-01-01T05:00:00Z"),
      "contribs" : [
          "UNIVAC",
          "compiler",
          "FLOW-MATIC",
          "COBOL"
      ],
      "awards" : [
          {
              "award" : "Computer Sciences Man of the Year",
              "year" : 1969,
              "by" : "Data Processing Management Association"
          },
          {
              "award" : "Distinguished Fellow",
              "year" : 1973,
              "by" : " British Computer Society"
          },
          {
              "award" : "W. W. McDowell Award",
              "year" : 1976,
              "by" : "IEEE Computer Society"
          },
          {
              "award" : "National Medal of Technology",
              "year" : 1991,
              "by" : "United States"
          }
      ]
  },
  {
      "_id" : 4,
      "name" : {
          "first" : "Kristen",
          "last" : "Nygaard"
      },
      "birth" : ISODate("1926-08-27T04:00:00Z"),
      "death" : ISODate("2002-08-10T04:00:00Z"),
      "contribs" : [
          "OOP",
          "Simula"
      ],
      "awards" : [
          {
              "award" : "Rosing Prize",
              "year" : 1999,
              "by" : "Norwegian Data Association"
          },
          {
              "award" : "Turing Award",
              "year" : 2001,
              "by" : "ACM"
          },
          {
              "award" : "IEEE John von Neumann Medal",
              "year" : 2001,
              "by" : "IEEE"
          }
      ]
  },
  {
      "_id" : 5,
      "name" : {
          "first" : "Ole-Johan",
          "last" : "Dahl"
      },
      "birth" : ISODate("1931-10-12T04:00:00Z"),
      "death" : ISODate("2002-06-29T04:00:00Z"),
      "contribs" : [
          "OOP",
          "Simula"
      ],
      "awards" : [
          {
              "award" : "Rosing Prize",
              "year" : 1999,
              "by" : "Norwegian Data Association"
          },
          {
              "award" : "Turing Award",
              "year" : 2001,
              "by" : "ACM"
          },
          {
              "award" : "IEEE John von Neumann Medal",
              "year" : 2001,
              "by" : "IEEE"
          }
      ]
  },
  {
      "_id" : 6,
      "name" : {
          "first" : "Guido",
          "last" : "van Rossum"
      },
      "birth" : ISODate("1956-01-31T05:00:00Z"),
      "contribs" : [
          "Python"
      ],
      "awards" : [
          {
              "award" : "Award for the Advancement of Free Software",
              "year" : 2001,
              "by" : "Free Software Foundation"
          },
          {
              "award" : "NLUUG Award",
              "year" : 2003,
              "by" : "NLUUG"
          }
      ]
  },
  {
      "_id" : ObjectId("51e062189c6ae665454e301d"),
      "name" : {
          "first" : "Dennis",
          "last" : "Ritchie"
      },
      "birth" : ISODate("1941-09-09T04:00:00Z"),
      "death" : ISODate("2011-10-12T04:00:00Z"),
      "contribs" : [
          "UNIX",
          "C"
      ],
      "awards" : [
          {
              "award" : "Turing Award",
              "year" : 1983,
              "by" : "ACM"
          },
          {
              "award" : "National Medal of Technology",
              "year" : 1998,
              "by" : "United States"
          },
          {
              "award" : "Japan Prize",
              "year" : 2011,
              "by" : "The Japan Prize Foundation"
          }
      ]
  },
  {
      "_id" : 8,
      "name" : {
          "first" : "Yukihiro",
          "aka" : "Matz",
          "last" : "Matsumoto"
      },
      "birth" : ISODate("1965-04-14T04:00:00Z"),
      "contribs" : [
          "Ruby"
      ],
      "awards" : [
          {
              "award" : "Award for the Advancement of Free Software",
              "year" : "2011",
              "by" : "Free Software Foundation"
          }
      ]
  },
  {
      "_id" : 9,
      "name" : {
          "first" : "James",
          "last" : "Gosling"
      },
      "birth" : ISODate("1955-05-19T04:00:00Z"),
      "contribs" : [
          "Java"
      ],
      "awards" : [
          {
              "award" : "The Economist Innovation Award",
              "year" : 2002,
              "by" : "The Economist"
          },
          {
              "award" : "Officer of the Order of Canada",
              "year" : 2007,
              "by" : "Canada"
          }
      ]
  },
  {
      "_id" : 10,
      "name" : {
          "first" : "Martin",
          "last" : "Odersky"
      },
      "contribs" : [
          "Scala"
      ]
  }
] )