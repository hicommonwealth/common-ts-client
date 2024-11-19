/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommunityResponseCommunityChainNodeCosmosGovVersion: core.serialization.Schema<
    serializers.CreateCommunityResponseCommunityChainNodeCosmosGovVersion.Raw,
    CommonApi.CreateCommunityResponseCommunityChainNodeCosmosGovVersion
> = core.serialization.enum_(["v1", "v1beta1govgen", "v1beta1", "v1beta1-attempt-failed", "v1-attempt-failed"]);

export declare namespace CreateCommunityResponseCommunityChainNodeCosmosGovVersion {
    type Raw = "v1" | "v1beta1govgen" | "v1beta1" | "v1beta1-attempt-failed" | "v1-attempt-failed";
}
