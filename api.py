from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/health', methods=['GET']) #API route
