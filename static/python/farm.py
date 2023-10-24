from flask import Blueprint, jsonify, request
import requests
import pandas as pd
import io


# Definimos la ruta que se importará en el controlador
bp = Blueprint('farm', __name__)

# Definimos una o más rutas con las funciones
@bp.route('/getTowerData', methods=['POST'])
def metodosPost():
    try:
        # Obtén el dato enviado por AJAX
        data = request.json
        # Accede al parámetro utilizando su clave
        parametro = data.get('idFarm')
        dataFarm = getInfoTowerFarm(parametro)
        #f10e802c-55a3-4407-ab6e-16cefa5fd2cc
     
        return jsonify(dataFarm)
    except Exception as e:
        return jsonify({'error': 'Error en la solicitud: ' + str(e)}), 400



def getInfoTowerFarm(idfarm):
    # Leer el archivo CSV y convertirlo en un DataFrame de pandas
    csv_path = "documents/merged_data.csv"
    merged_dataframe = pd.read_csv(csv_path)

    # Filtrar el DataFrame para un farmId específico, por ejemplo, farmId = 1
    specific_farmId = idfarm
    filtered_data = merged_dataframe[merged_dataframe['farmId'] == specific_farmId]

    print("filtered data")
    print(filtered_data)
    if filtered_data.empty:
        print("se detecto vacio")
        return 301
    else:       
        # Calcular el promedio de rssi para cada towerId
        promedio_rssi_por_torre = filtered_data.groupby('towerId')['rssi'].mean().reset_index()

        # Identificar la torre con el promedio más alto
        torre_con_promedio_mas_alto = promedio_rssi_por_torre.loc[promedio_rssi_por_torre['rssi'].idxmax()]


        #transformar a array
        promedio_rssi_por_torre_dic = promedio_rssi_por_torre.to_json()
   
        # Imprimir el DataFrame con el promedio de rssi por cada towerId
        print(promedio_rssi_por_torre)


        return promedio_rssi_por_torre_dic
