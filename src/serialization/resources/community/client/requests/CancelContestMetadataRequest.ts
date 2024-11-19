/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as CommonApi from "../../../../../api/index";
import * as core from "../../../../../core";

export const CancelContestMetadataRequest: core.serialization.Schema<
    serializers.CancelContestMetadataRequest.Raw,
    CommonApi.CancelContestMetadataRequest
> = core.serialization.object({
    communityId: core.serialization.property("community_id", core.serialization.string()),
    contestAddress: core.serialization.property("contest_address", core.serialization.string()),
});

export declare namespace CancelContestMetadataRequest {
    interface Raw {
        community_id: string;
        contest_address: string;
    }
}
