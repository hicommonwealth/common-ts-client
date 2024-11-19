/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
    serializers.GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage.Raw,
    CommonApi.GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage
> = core.serialization.object({
    url: core.serialization.string().optional(),
    imageBehavior: core.serialization.string().optional(),
});

export declare namespace GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage {
    interface Raw {
        url?: string | null;
        imageBehavior?: string | null;
    }
}
