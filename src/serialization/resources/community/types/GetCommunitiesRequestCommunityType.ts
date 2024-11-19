/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetCommunitiesRequestCommunityType: core.serialization.Schema<
    serializers.GetCommunitiesRequestCommunityType.Raw,
    CommonApi.GetCommunitiesRequestCommunityType
> = core.serialization.enum_(["launchpad", "basic"]);

export declare namespace GetCommunitiesRequestCommunityType {
    type Raw = "launchpad" | "basic";
}
