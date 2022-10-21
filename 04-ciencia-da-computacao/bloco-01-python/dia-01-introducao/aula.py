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