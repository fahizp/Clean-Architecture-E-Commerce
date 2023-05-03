import { Message } from "node-nats-streaming";
import { Subject, Listener, ProfileCreatedEvent } from "@ecom-microservie/common";
import { queueGroupName } from "./queue-group-name";
import { createProfile_UseCase } from "../../libs/useCases";
import depentencies from "../../config/depentencies";

export class ProfileCreatedListener extends Listener<ProfileCreatedEvent> {
    subject: Subject.ProfileCreated = Subject.ProfileCreated;
    queueGroupName = queueGroupName;
    
    async onMessage(data: ProfileCreatedEvent['data'],msg:Message) {
     const { name, email, userId, image, address, isBlocked } = data;

     const createProfile = await createProfile_UseCase(depentencies).execute({
        address: address,
        email: email,
        name: name,
        image: image,
        userId,
        isBlocked: false,
     })
    
     msg.ack();
    }
}

