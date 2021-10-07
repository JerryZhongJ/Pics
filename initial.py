import uuid
from PIL import Image
import os
import json
import shutil

def base62(uuid_int):
    alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    res = ""
    for i in range(0, 22):
        res = alphabet[uuid_int % 62] + res
        uuid_int = uuid_int // 62
    return res
    
metadata = {"pictures":[], "alltags":[]}
for filename in os.listdir('./new'):
    base, sep, ext = filename.rpartition('.')
    ext = ext.lower()
    width, height = Image.open('./new/' + filename).size
    newbase = base62(uuid.uuid4().int)
    metadata["pictures"].append({"name": newbase + '.' + ext, "width": width, "height": height, "tags": []})
    shutil.copy('./new/' + filename, './pictures/' + newbase + '.' + ext)
    print(f"./new/{filename} -> ./pictures/{newbase}.{ext}:{width}x{height}")
    
with open('./metadata.json', 'w') as f:
    json.dump(metadata, f, indent=4)

