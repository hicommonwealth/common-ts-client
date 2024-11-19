/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommunityRequestType: core.serialization.Schema<
    serializers.UpdateCommunityRequestType.Raw,
    CommonApi.UpdateCommunityRequestType
> = core.serialization.enum_(["chain", "dao", "token", "offchain"]);

export declare namespace UpdateCommunityRequestType {
    type Raw = "chain" | "dao" | "token" | "offchain";
}
