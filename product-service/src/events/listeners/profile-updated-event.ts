import { Message } from "node-nats-streaming";
import { Subject, Listener, ProfileUpdatedEvent } from "@ecom-microservie/common";
import { queueGroupName } from "./queue-group-name";
import { createProfile_UseCase, updateUserProfile_UseCase } from "../../libs/useCases";
import depentencies from "../../config/depentencies";

export class ProfileUpdateListener extends Listener<ProfileUpdatedEvent> {
    subject: Subject.ProfileUpdated = Subject.ProfileUpdated;
    queueGroupName = queueGroupName;
    
    async onMessage(data: ProfileUpdatedEvent['data'],msg:Message) {
     const {  userId, image, address } = data;

     const createProfile = await updateUserProfile_UseCase(depentencies).execute(userId, { image, address })
    
     msg.ack();
    }
}

