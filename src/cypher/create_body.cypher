CREATE (body:Body { name: 'Robert' }),
       // Head
       (head:BodyPart { name: 'head' })<-[:CONSISTS_OF]-(body),
       (head)-[:CONNECTS_TO]->(neck:BodyPart { name: 'neck' })<-[:CONSISTS_OF]-(body),
       // Torso
       (neck)-[:CONNECTS_TO]->(chest:BodyPart { name: 'chest' })<-[:CONSISTS_OF]-(body),
       (chest)-[:CONNECTS_TO]->(abdomen:BodyPart { name: 'abdomen' })<-[:CONSISTS_OF]-(body),
       (abdomen)-[:CONNECTS_TO]->(groin:BodyPart { name: 'groin' })<-[:CONSISTS_OF]-(body),
       // Left arm
       (chest)-[:CONNECTS_TO]->(lshoulder:BodyPart { name: 'shoulder', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lshoulder)-[:CONNECTS_TO]->(lupperarm:BodyPart { name: 'upperArm', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lupperarm)-[:CONNECTS_TO]->(lelbow:BodyPart { name: 'elbow', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lelbow)-[:CONNECTS_TO]->(lunderarm:BodyPart { name: 'underArm', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lunderarm)-[:CONNECTS_TO]->(lwrist:BodyPart { name: 'wrist', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lwrist)-[:CONNECTS_TO]->(lhand:BodyPart { name: 'hand', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       // Right arm
       (chest)-[:CONNECTS_TO]->(rshoulder:BodyPart { name: 'shoulder', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rshoulder)-[:CONNECTS_TO]->(rupperarm:BodyPart { name: 'upperArm', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rupperarm)-[:CONNECTS_TO]->(relbow:BodyPart { name: 'elbow', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (relbow)-[:CONNECTS_TO]->(runderarm:BodyPart { name: 'underArm', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (runderarm)-[:CONNECTS_TO]->(rwrist:BodyPart { name: 'wrist', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rwrist)-[:CONNECTS_TO]->(rhand:BodyPart { name: 'hand', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       // Left leg
       (groin)-[:CONNECTS_TO]->(lthigh:BodyPart { name: 'thigh', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lthigh)-[:CONNECTS_TO]->(lknee:BodyPart { name: 'knee', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lknee)-[:CONNECTS_TO]->(lscalf:BodyPart { name: 'scalf', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lscalf)-[:CONNECTS_TO]->(lancle:BodyPart { name: 'ancle', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       (lancle)-[:CONNECTS_TO]->(lfoot:BodyPart { name: 'foot', lateral: 'left' })<-[:CONSISTS_OF]-(body),
       // Right leg
       (groin)-[:CONNECTS_TO]->(rthigh:BodyPart { name: 'thigh', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rthigh)-[:CONNECTS_TO]->(rknee:BodyPart { name: 'knee', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rknee)-[:CONNECTS_TO]->(rscalf:BodyPart { name: 'scalf', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rscalf)-[:CONNECTS_TO]->(rancle:BodyPart { name: 'ancle', lateral: 'right' })<-[:CONSISTS_OF]-(body),
       (rancle)-[:CONNECTS_TO]->(rfoot:BodyPart { name: 'foot', lateral: 'right' })<-[:CONSISTS_OF]-(body)
