from web_433Mhz import app
from flask import render_template, jsonify

import subprocess
import os

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/api/get_code', methods=['GET'])
def get_code():
    cmd = ['sudo', os.path.abspath('./web_433Mhz/433Mhz')]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    code = proc.communicate()[0].decode('utf-8')    # Grab the stdout

    return jsonify({'code': code})
