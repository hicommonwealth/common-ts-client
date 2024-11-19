/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommunityResponseCommunityCommunityTagsItemTag } from "./CreateCommunityResponseCommunityCommunityTagsItemTag";

export const CreateCommunityResponseCommunityCommunityTagsItem: core.serialization.ObjectSchema<
    serializers.CreateCommunityResponseCommunityCommunityTagsItem.Raw,
    CommonApi.CreateCommunityResponseCommunityCommunityTagsItem
> = core.serialization.object({
    communityId: core.serialization.property("community_id", core.serialization.string()),
    tagId: core.serialization.property("tag_id", core.serialization.number()),
    tag: core.serialization.property("Tag", CreateCommunityResponseCommunityCommunityTagsItemTag.optional()),
});

export declare namespace CreateCommunityResponseCommunityCommunityTagsItem {
    interface Raw {
        community_id: string;
        tag_id: number;
        Tag?: CreateCommunityResponseCommunityCommunityTagsItemTag.Raw | null;
    }
}
