/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateCommunityResponseChainNode {
    id?: number;
    url?: string;
    eth_chain_id?: number;
    alt_wallet_url?: string;
    private_url?: string;
    balance_type?: CommonApi.UpdateCommunityResponseChainNodeBalanceType;
    name?: string;
    description?: string;
    ss58?: number;
    bech32?: string;
    slip44?: number;
    cosmos_chain_id?: string;
    cosmos_gov_version?: CommonApi.UpdateCommunityResponseChainNodeCosmosGovVersion;
    health?: CommonApi.UpdateCommunityResponseChainNodeHealth;
    block_explorer?: string;
    max_ce_block_range?: number;
    alchemy_metadata?: CommonApi.UpdateCommunityResponseChainNodeAlchemyMetadata;
    created_at?: string;
    updated_at?: string;
}
