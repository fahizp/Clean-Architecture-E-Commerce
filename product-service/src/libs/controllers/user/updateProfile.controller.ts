import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotAuthorizedError } from "@ecom-microservie/common";
import { UserBlockPublisher } from "../../../events/publisher/user-block-event";
import { natsWrapper } from "../../../nats-wrapper";

export default (dependencies: any): any => {
  const { useCases: { updateUserProfile_UseCase } } = dependencies;

  const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params;

      const userProfile = await updateUserProfile_UseCase(dependencies).execute(userId, req.body);

      if (!userProfile) throw new BadRequestError("No such profile found");

      await new UserBlockPublisher(natsWrapper.client).publish({
        userId: userProfile.id,
        isBlocked: userProfile.isBlocked,
      });

      res.json(userProfile);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return getProfile;
};
