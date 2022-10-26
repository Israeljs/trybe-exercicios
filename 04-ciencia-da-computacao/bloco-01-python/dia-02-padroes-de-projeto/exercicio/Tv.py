class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume >=0 or self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume >0 or self.__volume == 99:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""
        - volume: {self.__volume}
        - canal: {self.__canal}
        - tamanho: {self.__tamanho}
        - ligado: {self.__ligada}
        """

tv = Tv( "42 polegadas")
tv.aumentar_volume()
tv.modificar_canal(13)
tv.ligar_desligar()
print(tv)