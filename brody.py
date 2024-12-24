import pybullet as p

p.connect(p.GUI)
planeId = p.loadURDF("plane.urdf")
