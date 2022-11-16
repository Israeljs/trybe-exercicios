import csv

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

class SimpleReport:
    @staticmethod
    def earliest_manufacturing_date(products_list):
        earlest_date = [
            product["data_de_fabricacao"] for product in products_list
        ]
        return min(earlest_date)

    @staticmethod
    def nearest_expiration_date(products_list):
        nearest_date = [
            product["data_de_validade"] for product in products_list
        ]
        return min(nearest_date)

    @staticmethod
    def more_products_company(products_list):
        companies = [product["nome_da_empresa"] for product in products_list]
        return max(set(companies), key=companies.count)

    @staticmethod
    def generate(products):
        earliest_manufacturing = SimpleReport.earliest_manufacturing_date(
            products
        )
        nearest_expiration = SimpleReport.nearest_expiration_date(products)
        more_products_company = SimpleReport.more_products_company(products)

        return (
            f"Data de fabricação mais antiga: {earliest_manufacturing}\n"
            f"Data de validade mais próxima: {nearest_expiration}\n"
            f"Empresa com mais produtos: {more_products_company}"
        )

# print(SimpleReport.generate(products))

class CompleteReport(SimpleReport):
    def count_products(list_products):
        products = {}

        for product in list_products:
            company = product["nome_da_empresa"]
            if company not in products:
                products[company] = 1
            else:
                products[company] += 1
        return products

    @staticmethod
    def generate(list_products):
        simple_report = SimpleReport.generate(list_products)
        amount = CompleteReport.count_products(list_products)
        items = amount.items()
        products = ""

        for company, quantity in items:
            products += f"- {company}: {quantity}\n"

        return (
            f"{simple_report}\n"
            f"Produtos estocados por empresa:\n"
            f"{products}"
        )

# if __name__ == "__main__":
print(CompleteReport.generate(products))

class Inventory:
    @staticmethod
    def import_data(path: str, report_type: str):
        report = ''

        simple_report = SimpleReport.generate(Inventory.readCSV(path))
        complete_report = CompleteReport.generate(Inventory.readCSV(path))

        if report_type == 'simples':
            report = simple_report
        else:
            report = complete_report
        return report

    @staticmethod
    def readCSV(path):
        with open(path) as file:
            return list(csv.DictReader(file))

