/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommunityRequestGroupsItemRequirementsItemAllowData: core.serialization.ObjectSchema<
    serializers.UpdateCommunityRequestGroupsItemRequirementsItemAllowData.Raw,
    CommonApi.UpdateCommunityRequestGroupsItemRequirementsItemAllowData
> = core.serialization.object({
    allow: core.serialization.list(core.serialization.string()),
});

export declare namespace UpdateCommunityRequestGroupsItemRequirementsItemAllowData {
    interface Raw {
        allow: string[];
    }
}
