from flask import Flask, jsonify
from flask import *

app = Flask(__name__)

@app.route("/")
def ola():
    return render_template("index.html")

@app.route("/pagina1")
def pagina1():
    return render_template("pagina01.html")

@app.route("/pagina2")
def pagina2():
    return render_template("pagina02.html")

@app.route("/pagina3")
def pagina3():
    return render_template("pagina03.html")

@app.route("/obter_dados")
def criar_tabelas():
    dados = {
        "x": "['giraffes', 'orangutans', 'monkeys']",
        "y": "[20, 14, 23]",
        "type": "bar"
    }
    retorno = {"resultado":"ok"}
    retorno.update({"detalhes":dados});
    resposta = jsonify(retorno)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

app.run(debug=True)