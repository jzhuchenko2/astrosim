import pybullet as p

p.connect(p.GUI)
planeId = p.loadURDF("plane.urdf")

sphereId = p.loadURDF("sphere.urdf", [0, 0, 1])
