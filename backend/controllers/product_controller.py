from flask import Blueprint, render_template
import sqlite3

bp_product = Blueprint("product", __name__)

def get_products():
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    cursor.execute("SELECT id, name, price FROM products")
    products = cursor.fetchall()
    connection.close()
    return products

@bp_product.route("/")
def home():
    products = get_products()
    return render_template("index.html", products=products)
