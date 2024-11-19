/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType } from "./UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType";

export const UpdateGroupResponseRequirementsItemThresholdDataSourceTokenId: core.serialization.ObjectSchema<
    serializers.UpdateGroupResponseRequirementsItemThresholdDataSourceTokenId.Raw,
    CommonApi.UpdateGroupResponseRequirementsItemThresholdDataSourceTokenId
> = core.serialization.object({
    sourceType: core.serialization.property(
        "source_type",
        UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType
    ),
    evmChainId: core.serialization.property("evm_chain_id", core.serialization.number()),
    contractAddress: core.serialization.property("contract_address", core.serialization.string()),
    tokenId: core.serialization.property("token_id", core.serialization.string().optional()),
});

export declare namespace UpdateGroupResponseRequirementsItemThresholdDataSourceTokenId {
    interface Raw {
        source_type: UpdateGroupResponseRequirementsItemThresholdDataSourceTokenIdSourceType.Raw;
        evm_chain_id: number;
        contract_address: string;
        token_id?: string | null;
    }
}
