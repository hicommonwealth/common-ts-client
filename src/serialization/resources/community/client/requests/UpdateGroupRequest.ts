/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as CommonApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { UpdateGroupRequestMetadata } from "../../types/UpdateGroupRequestMetadata";
import { UpdateGroupRequestRequirementsItem } from "../../types/UpdateGroupRequestRequirementsItem";
import { UpdateGroupRequestTopicsItem } from "../../types/UpdateGroupRequestTopicsItem";

export const UpdateGroupRequest: core.serialization.Schema<
    serializers.UpdateGroupRequest.Raw,
    CommonApi.UpdateGroupRequest
> = core.serialization.object({
    communityId: core.serialization.property("community_id", core.serialization.string()),
    groupId: core.serialization.property("group_id", core.serialization.number()),
    metadata: UpdateGroupRequestMetadata.optional(),
    requirements: core.serialization.list(UpdateGroupRequestRequirementsItem).optional(),
    topics: core.serialization.list(UpdateGroupRequestTopicsItem).optional(),
});

export declare namespace UpdateGroupRequest {
    interface Raw {
        community_id: string;
        group_id: number;
        metadata?: UpdateGroupRequestMetadata.Raw | null;
        requirements?: UpdateGroupRequestRequirementsItem.Raw[] | null;
        topics?: UpdateGroupRequestTopicsItem.Raw[] | null;
    }
}
