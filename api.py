from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/health', methods=['GET']) #API route
def get_system_health():
health_data = {
        "fuel_level": random.uniform(50, 100),
        "thrust_power": random.uniform(80, 100),
        
    }
