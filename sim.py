import pybullet as p
import time
import pybullet_data

p.connect(p.GUI)
p.setAdditionalSearchPath(pybullet_data.getDataPath())

plane_id = p.loadURDF("plane.urdf")
payload_id = p.loadURDF("r2d2.urdf", [0, 0, 1])

p.setGravity(0, 0, -9.8)
