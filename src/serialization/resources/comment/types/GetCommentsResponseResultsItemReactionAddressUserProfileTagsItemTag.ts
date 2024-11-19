/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetCommentsResponseResultsItemReactionAddressUserProfileTagsItemTag: core.serialization.ObjectSchema<
    serializers.GetCommentsResponseResultsItemReactionAddressUserProfileTagsItemTag.Raw,
    CommonApi.GetCommentsResponseResultsItemReactionAddressUserProfileTagsItemTag
> = core.serialization.object({
    id: core.serialization.number().optional(),
    name: core.serialization.string(),
});

export declare namespace GetCommentsResponseResultsItemReactionAddressUserProfileTagsItemTag {
    interface Raw {
        id?: number | null;
        name: string;
    }
}
