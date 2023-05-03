import { Publisher, Subject, ProductUpdatedEvent } from "@ecom-microservie/common";

export class ProductUpdatedPublisher extends Publisher<ProductUpdatedEvent> {
    subject: Subject.ProductUpdated = Subject.ProductUpdated;
}