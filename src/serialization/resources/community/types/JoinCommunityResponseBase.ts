/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const JoinCommunityResponseBase: core.serialization.Schema<
    serializers.JoinCommunityResponseBase.Raw,
    CommonApi.JoinCommunityResponseBase
> = core.serialization.enum_(["cosmos", "substrate", "ethereum", "near", "solana"]);

export declare namespace JoinCommunityResponseBase {
    type Raw = "cosmos" | "substrate" | "ethereum" | "near" | "solana";
}
