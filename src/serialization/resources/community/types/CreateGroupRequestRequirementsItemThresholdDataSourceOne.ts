/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateGroupRequestRequirementsItemThresholdDataSourceOne: core.serialization.ObjectSchema<
    serializers.CreateGroupRequestRequirementsItemThresholdDataSourceOne.Raw,
    CommonApi.CreateGroupRequestRequirementsItemThresholdDataSourceOne
> = core.serialization.object({
    sourceType: core.serialization.property("source_type", core.serialization.stringLiteral("eth_native")),
    evmChainId: core.serialization.property("evm_chain_id", core.serialization.number()),
});

export declare namespace CreateGroupRequestRequirementsItemThresholdDataSourceOne {
    interface Raw {
        source_type: "eth_native";
        evm_chain_id: number;
    }
}
