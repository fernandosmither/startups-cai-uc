from os import error
import config
from datetime import date, datetime


def err_handler():
    today = datetime.now()
    with open(config.PATH_LOG, "a+", encoding="UTF-8") as log:
        line = str(today) + ": " + str(err) + "\n"
        log.write(line)


def md_reset():
    with open(config.DEFAULT_PATH, "r", encoding="UTF-8") as archivo:
        data = archivo.readlines()
    with open(config.PATH_MD, "w", encoding="UTF-8") as archivo:
        for line in data:
            archivo.write(line)
        print("Se reiniciaron las tablas correctamente")


if __name__ == "__main__":
    with open(config.PATH_CSV, "r", encoding="UTF-8", errors="ignore") as file:
        data = [line.strip() for line in file.readlines()]
        data.pop(0)  # Placeholder

    with open(config.PATH_MD, "w+", encoding="UTF-8") as archivo:
        md_reset()  # Reiniciamos el .md a default
        # Ahora crearemos las tablas de 6x4
        id_ = 1
        for startup in data:
            startup = startup.split(";")
            try:
                # print(startup)
                if id_ % 4 == 0:
                    pass
                else:
                    

                id += 1

            except Exception as err:  # Mala práctica(? What could go wrong...
                err_handler()
                print("Error found. Please check the log file")
