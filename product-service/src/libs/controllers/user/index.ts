import getProfilesController from "./getProfile.controller";
import updateProfileController from "./updateProfile.controller";

export default (depentencies: any) => {
  return { getProfilesController: getProfilesController(depentencies), updateProfileController: updateProfileController(depentencies) };
};
