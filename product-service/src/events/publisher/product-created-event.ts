import { Publisher, Subject, ProductCreatedEvent } from "@ecom-microservie/common";

export class ProductCreatedPublisher extends Publisher<ProductCreatedEvent> {
    subject: Subject.ProductCreated = Subject.ProductCreated;
}