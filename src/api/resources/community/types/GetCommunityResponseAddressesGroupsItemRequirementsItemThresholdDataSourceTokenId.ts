/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenId {
    source_type: CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItemThresholdDataSourceTokenIdSourceType;
    evm_chain_id: number;
    contract_address: string;
    token_id?: string;
}