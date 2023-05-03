import { Publisher, Subject, UserBlockEvent } from "@ecom-microservie/common";

export class UserBlockPublisher extends Publisher<UserBlockEvent> {
    subject: Subject.UseBlock = Subject.UseBlock;
}