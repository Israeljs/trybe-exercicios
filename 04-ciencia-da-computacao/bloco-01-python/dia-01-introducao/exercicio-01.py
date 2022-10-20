a = 11
b = 5
result1 = a % b # módulo
result2 = a // b # divisão inteira
print(result1, result2)

# 3
hours = 6
minutes = 60 * hours
seconds = minutes * 60
print(minutes, seconds)
#4
books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
print(format(cost, ".2f"))

trybe_course = ["Introdução", "Front-end", "Back-end"]
#5
trybe_course.append("Ciência da Computação")
#6
trybe_course[0] = "Fundamentos"
