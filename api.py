from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/health', methods=['GET']) #API route
def get_system_health():
health_data = {
        "fuel_level": random.uniform(50, 100),
        "thrust_power": random.uniform(80, 100),
        "battery_status": random.choice(["Normal", "Poop", "Critical"]),

        "Jettison Separation": random.choice ([3000,"MES 1", "MES 2", "MES 3" -250])
    }
return jsonify(health_data)
