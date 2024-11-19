/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommunityResponseAddressesChainNode {
    id?: number;
    url?: string;
    ethChainId?: number;
    altWalletUrl?: string;
    privateUrl?: string;
    balanceType?: CommonApi.GetCommunityResponseAddressesChainNodeBalanceType;
    name?: string;
    description?: string;
    ss58?: number;
    bech32?: string;
    slip44?: number;
    cosmosChainId?: string;
    cosmosGovVersion?: CommonApi.GetCommunityResponseAddressesChainNodeCosmosGovVersion;
    health?: CommonApi.GetCommunityResponseAddressesChainNodeHealth;
    contracts?: CommonApi.GetCommunityResponseAddressesChainNodeContractsItem[];
    blockExplorer?: string;
    maxCeBlockRange?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
