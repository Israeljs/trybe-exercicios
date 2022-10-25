age = 18
print(age)
names = ['israel', 'bebel', 'natalia']

square_root = 25 ** 2 #(1/2)  # raiz quadrada de 25. O operador `**` significa "elevado a"

print(square_root + 1)  # saída: 6.0


counter = 0
# original
counter = counter + 1

# simplificado
counter += 1

# 3 // 2  # saída: 1 quociente.

# 3 / 2  # saída: 1.5

# '1' == 1 # false

a = [1, 2, 3]
b = [1, 2, 3]
# a == b # true

# temperatura = 20
# temperatura < 25 and temperatura > 18
# 18 < temperatura < 25 # maneira mais pythonica
#  idade <= 5 or idade >= 65

a = 5.0
print(type(a))

# sequência(list, tuple, range);
# conjuntos(set, frozenset);
# mapeamento(dict);
# sequências binárias(bytes, bytearray, memoryview).

# listas - arrays
# uma lista é uma sequência mutável e ordenada de elementos. Ela pode armazenar elementos
#  heterogêneos, ter seu tamanho variável e crescer à medida que itens são adicionados.
fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes
fruits[0]  # o acesso é feito por índices iniciados em 0
fruits[-1]  # o acesso também pode ser negativo
fruits.append("banana")  # adicionando uma nova fruta
fruits.remove("abacaxi")  # removendo uma fruta
fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original
fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1
fruits.sort()  # ordena a lista de frutas


chess_player = ['Magnus', 'Carlos', 'Fabiano']
print(chess_player) # ['Magnus', 'Carlos', 'Fabiano']
chess_player.append('Luiz')
print(chess_player) # ['Magnus', 'Carlos', 'Fabiano', 'Luiz']
chess_player.remove('Luiz')
print(chess_player) # ['Magnus', 'Carlos', 'Fabiano']
more_chess_player = ['André', 'Vanessa']
more_chess_player.extend(chess_player)
print(more_chess_player) # ['André', 'Vanessa', 'Magnus', 'Carlos', 'Fabiano']

#tuplas é um conjunto com T coisas
# variável composta apenas com valor
# São similares a listas, porém não podem ser modificados durante a execução do programa.
champion = ('Magnus', 1)
print(champion[0], champion[1])
print(more_chess_player) # ['André', 'Vanessa', 'Magnus', 'Carlos', 'Fabiano']
chess_player_ranking = [champion]
chess_player_ranking.append(('Vanessa', 2))  # type: ignore
chess_player_ranking.extend(
    [
        (more_chess_player[0], 10),
        (more_chess_player[3], 9)
    ]  # type: ignore
)
print(chess_player_ranking)

# dicionário - variável composta com chave e valor
jogador = { "nome": "Israel", "cidade": "Paulista"}
print(jogador['nome'])
people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves
people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.
# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria
# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

# set - conjunto
# é uma coleção de elementos únicos e não ordenados. Conjuntos 
# implementam operações de união, intersecção e outras.
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves
permissions.add("root")  # adiciona um novo elemento ao conjunto
permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.union({"user"})  # retorna um conjunto resultado da união
permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# frozenset É uma variação do set, porém imutável, ou seja, seus elementos 
# não podem ser modificados durante a execução do programa.
permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset
permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado
permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos
permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

user = {'Israel', 'Bebel'}
squad = {'Natalia', 'natali', 'Bebel'}
all_user = {'Israel', 'Bebel', 'Natalia', 'natali'}
print(user.intersection(squad))# {'bebel}
print(all_user.difference(user)) # {'Natalia', 'natali'}
# não tem acesso administrador
standard_user = all_user.difference(user)
# Acesso à todos
user = user.union(standard_user)

# Range
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um 
# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


# lista - se armazena entidades relacionadas. Por exemplo os diferentes elementos de uma lista de supermercados pão, manteiga e leite
# tupla - se armazena informações de uma mesma entidade por exemplo a manteiga é um laticínio, porcentagem de gordura se tem sal
# dicionário - usamos quando se quer associar um valor a uma chave específica. Tanto pode ser usado no lugar de uma lista quanto de uma tupla.
# * a tupla pode ser usada como chave do dicionário
# conjunto - usamos quando se quer fazer operações típicas de conjuntos: União, intersecção. quando quisermos ter diferentes agrupamentos para comparar

#if elif else
# Menor que R$2.000,00, pessoa desenvolvedora estagiária;
# Entre R$2.000,00 e R$5.800,00, pessoa desenvolvedora júnior;
# Entre R$5.800,00 e R$7.500,00, pessoa desenvolvedora pleno;
# Entre R$7.500,00 e R$10.500,00, pessoa desenvolvedora sênior;
# Qualquer valor acima do que já foi mencionado a pessoa desenvolvedora é considerada liderança.
position = ""
salary = 5000
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"
print(position)

#for
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
# Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar o resultado de acordo com
#  a nota. Essa filtragem pode ocorrer percorrendo a lista de restaurantes ou criando uma nova lista com 
#  somente aqueles que atendem ao filtro, assim como mostra o exemplo abaixo:
filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D
# Em alguns casos, podemos ainda querer percorrer uma sequência numérica,
# e para isto iteramos sobre a estrutura de dados range.
for index in range(5):
    print(index)

# Compreensão de lista - list comprehension
# é declarada da mesma maneira que uma lista comum, porém no lugar dos elementos
#  nós colocamos a iteração que vai gerar os elementos da nova lista.
min_rating = 3.0
filtered_restaurants = [restaurant
                         for restaurant in restaurants
                         if restaurant["nota"] > min_rating]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]
# A compreensão de listas também funciona com listas de strings
# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']
# O exemplo a seguir usa uma compreensão de listas para criar uma lista com o quadrado dos números entre 1 e 10.
quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# while
# A Sequência de Fibonacci, muito presente em diversas formas na natureza,
#  é uma sequência numérica começando por 0 e 1 e cada termo subsequente 
#  corresponde à soma dos dois anteriores.

n = 10
last, next = 0, 1 # atribuição múltipla. Isto é, atribuição de vários valores
# a múltiplas variáveis ao mesmo tempo. pode ser utilizado também para fazer a troca de valores entre variáveis: a, b = b, a.
while last < n:
    print(last)
    last, next = next, last + next

# enumerate
languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]
# Você também pode desestruturar (unpack) os itens da lista ou tupla:
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída:
# 0 - Python
# 1 - Java

# função
def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

# pode ser chamado com 2 parâmetros
print(concat("Carlos", "Cristina"))  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
print(concat("Carlos", "Cristina", "Maria"))  # saída: "Carlos, Cristina, Maria"

# dict é uma função que já vem embutida no python
print(dict(nome="Felipe", sobrenome="Silva", idade=25))  # cria um dicionário utilizando as chaves passadas

print(dict(nome="Ana", sobrenome="Souza", idade=21, turma=1))  # o número de parâmetros passados para a função pode variar

len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

# len(obj=[1, 2, 3, 4])  # este código irá falhar

print("Coin", "Rodrigo", ", ")  # imprime Coin Rodrigo ,

print("Coin", "Rodrigo", sep=", ")  # nomeando o terceiro parâmetro, agora temos a saída: Coin, Rodrigo
