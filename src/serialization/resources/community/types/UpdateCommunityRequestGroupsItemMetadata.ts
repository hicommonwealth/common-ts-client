/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommunityRequestGroupsItemMetadata: core.serialization.ObjectSchema<
    serializers.UpdateCommunityRequestGroupsItemMetadata.Raw,
    CommonApi.UpdateCommunityRequestGroupsItemMetadata
> = core.serialization.object({
    name: core.serialization.string(),
    description: core.serialization.string(),
    requiredRequirements: core.serialization.property("required_requirements", core.serialization.number().optional()),
    membershipTtl: core.serialization.property("membership_ttl", core.serialization.number().optional()),
});

export declare namespace UpdateCommunityRequestGroupsItemMetadata {
    interface Raw {
        name: string;
        description: string;
        required_requirements?: number | null;
        membership_ttl?: number | null;
    }
}
