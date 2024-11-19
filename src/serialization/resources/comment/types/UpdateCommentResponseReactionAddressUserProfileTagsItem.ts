/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommentResponseReactionAddressUserProfileTagsItemTag } from "./UpdateCommentResponseReactionAddressUserProfileTagsItemTag";

export const UpdateCommentResponseReactionAddressUserProfileTagsItem: core.serialization.ObjectSchema<
    serializers.UpdateCommentResponseReactionAddressUserProfileTagsItem.Raw,
    CommonApi.UpdateCommentResponseReactionAddressUserProfileTagsItem
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.number()),
    tagId: core.serialization.property("tag_id", core.serialization.number()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    tag: core.serialization.property("Tag", UpdateCommentResponseReactionAddressUserProfileTagsItemTag.optional()),
});

export declare namespace UpdateCommentResponseReactionAddressUserProfileTagsItem {
    interface Raw {
        user_id: number;
        tag_id: number;
        created_at?: string | null;
        updated_at?: string | null;
        Tag?: UpdateCommentResponseReactionAddressUserProfileTagsItemTag.Raw | null;
    }
}
