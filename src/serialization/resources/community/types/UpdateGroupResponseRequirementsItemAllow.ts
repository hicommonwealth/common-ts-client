/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateGroupResponseRequirementsItemAllowData } from "./UpdateGroupResponseRequirementsItemAllowData";

export const UpdateGroupResponseRequirementsItemAllow: core.serialization.ObjectSchema<
    serializers.UpdateGroupResponseRequirementsItemAllow.Raw,
    CommonApi.UpdateGroupResponseRequirementsItemAllow
> = core.serialization.object({
    data: UpdateGroupResponseRequirementsItemAllowData,
});

export declare namespace UpdateGroupResponseRequirementsItemAllow {
    interface Raw {
        data: UpdateGroupResponseRequirementsItemAllowData.Raw;
    }
}
