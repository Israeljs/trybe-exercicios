# python3 -m venv .venv
# source .venv/bin/activate
# deactivate

products = [
    {
        "id": 1,
        "nome_do_produto": "CADEIRA",
        "nome_da_empresa": "Forces of Nature",
        "data_de_fabricacao": "2022-04-04",
        "data_de_validade": "2023-02-09",
        "numero_de_serie": "FR48",
        "instrucoes_de_armazenamento": "Conservar em local fresco"
    },
    {
        "id": 2,
        "nome_do_produto": "Feijão",
        "nome_da_empresa": "Feijoaras ltd",
        "data_de_fabricacao": "2022/07/05",
        "data_de_validade": "2023/07/05",
        "numero_de_serie": "GTD524HY2022",
        "instrucoes_de_armazenamento": "Conservar em local fresco e arejado"
    },
    {
        "id": 3,
        "nome_do_produto": "Mesa",
        "nome_da_empresa": "P&D",
        "data_de_fabricacao": "1986-04-04",
        "data_de_validade": "2023-06-07",
        "numero_de_serie": "445GEGE444SDGG32  ",
        "instrucoes_de_armazenamento": "Conservar em local seco"
    },
    {
        "id": 4,
        "nome_do_produto": "Mesa de centro",
        "nome_da_empresa": "P&D",
        "data_de_fabricacao": "1986-04-04",
        "data_de_validade": "2023-06-07",
        "numero_de_serie": "445GEGE444SDGG32  ",
        "instrucoes_de_armazenamento": "Conservar em local seco"
    }
]


def expiration_date(products_list):
    return [product["data_de_validade"] for product in products_list]


print(expiration_date(products))


def product_name(products_list):
    for product in products_list:
        print(product["nome_do_produto"])


product_name(products)

# def oldest_date(products_list):
#     # product["data_de_validade"]
#     for product in products_list:
#         product["nome_do_produto"] = "gfgf"

# oldest_date(products)
# print(products)


def company_with_more_products(products_list):
    companies = [product["nome_da_empresa"] for product in products_list]
    # return max(set(companies), key=companies.count)
    return max(companies)

print(company_with_more_products(products))
