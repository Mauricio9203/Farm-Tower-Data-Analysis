from flask import Flask, render_template, jsonify

#importaciones de archivos de backend

from static.python.farm import bp as farm

# init app
app = Flask(__name__)
app.register_blueprint(farm)


# Agrega las rutas principales de la
#  aplicación Flask
@app.route('/')
def principal():
    return render_template('index.html')


@app.route('/farm')
def farm():
    return render_template('farm.html')



if __name__ == '__main__':
    app.run(debug=True, port=5000)
