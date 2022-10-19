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