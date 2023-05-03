import { Publisher, Subject, ProductDeletedEvent } from "@ecom-microservie/common";

export class ProductDeletedPublisher extends Publisher<ProductDeletedEvent> {
    subject: Subject.ProductDeleted = Subject.ProductDeleted;
}