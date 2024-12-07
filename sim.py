import pybullet as p
import time
import pybullet_data

p.connect(p.GUI)
p.setAdditionalSearchPath(pybullet_data.getDataPath())

plane_id = p.loadURDF("plane.urdf")
payload_id = p.loadURDF("r2d2.urdf", [0, 0, 1])

p.setGravity(0, 0, -9.8)

#simulating payload launch and separation
for i in range(1000):
  
  if i < 300:
    p.applyExternalForce(payload_id, -1, [0, 0, 100], [0, 0, 0], p.WORLD_FRAME)

  elif i == 300:
    print("Separation!")

p.resetBasePositionAndOrientation(payload_id, [0, 0, 2], [0, 0, 0, 1])
#for each of the positions.
