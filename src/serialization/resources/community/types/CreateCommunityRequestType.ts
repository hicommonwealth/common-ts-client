/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommunityRequestType: core.serialization.Schema<
    serializers.CreateCommunityRequestType.Raw,
    CommonApi.CreateCommunityRequestType
> = core.serialization.enum_(["chain", "dao", "token", "offchain"]);

export declare namespace CreateCommunityRequestType {
    type Raw = "chain" | "dao" | "token" | "offchain";
}
