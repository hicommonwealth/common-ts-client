/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenSymbol: core.serialization.ObjectSchema<
    serializers.GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenSymbol.Raw,
    CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenSymbol
> = core.serialization.object({
    sourceType: core.serialization.property("source_type", core.serialization.stringLiteral("cosmos_native")),
    cosmosChainId: core.serialization.property("cosmos_chain_id", core.serialization.string()),
    tokenSymbol: core.serialization.property("token_symbol", core.serialization.string()),
});

export declare namespace GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenSymbol {
    interface Raw {
        source_type: "cosmos_native";
        cosmos_chain_id: string;
        token_symbol: string;
    }
}
