/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommunityRequestChainNodeBalanceType } from "./UpdateCommunityRequestChainNodeBalanceType";
import { UpdateCommunityRequestChainNodeCosmosGovVersion } from "./UpdateCommunityRequestChainNodeCosmosGovVersion";
import { UpdateCommunityRequestChainNodeHealth } from "./UpdateCommunityRequestChainNodeHealth";
import { UpdateCommunityRequestChainNodeContractsItem } from "./UpdateCommunityRequestChainNodeContractsItem";

export const UpdateCommunityRequestChainNode: core.serialization.ObjectSchema<
    serializers.UpdateCommunityRequestChainNode.Raw,
    CommonApi.UpdateCommunityRequestChainNode
> = core.serialization.object({
    id: core.serialization.number().optional(),
    url: core.serialization.string().optional(),
    ethChainId: core.serialization.property("eth_chain_id", core.serialization.number().optional()),
    altWalletUrl: core.serialization.property("alt_wallet_url", core.serialization.string().optional()),
    privateUrl: core.serialization.property("private_url", core.serialization.string().optional()),
    balanceType: core.serialization.property("balance_type", UpdateCommunityRequestChainNodeBalanceType.optional()),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    ss58: core.serialization.number().optional(),
    bech32: core.serialization.string().optional(),
    slip44: core.serialization.number().optional(),
    cosmosChainId: core.serialization.property("cosmos_chain_id", core.serialization.string().optional()),
    cosmosGovVersion: core.serialization.property(
        "cosmos_gov_version",
        UpdateCommunityRequestChainNodeCosmosGovVersion.optional()
    ),
    health: UpdateCommunityRequestChainNodeHealth.optional(),
    contracts: core.serialization.list(UpdateCommunityRequestChainNodeContractsItem).optional(),
    blockExplorer: core.serialization.property("block_explorer", core.serialization.string().optional()),
    maxCeBlockRange: core.serialization.property("max_ce_block_range", core.serialization.number().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace UpdateCommunityRequestChainNode {
    interface Raw {
        id?: number | null;
        url?: string | null;
        eth_chain_id?: number | null;
        alt_wallet_url?: string | null;
        private_url?: string | null;
        balance_type?: UpdateCommunityRequestChainNodeBalanceType.Raw | null;
        name?: string | null;
        description?: string | null;
        ss58?: number | null;
        bech32?: string | null;
        slip44?: number | null;
        cosmos_chain_id?: string | null;
        cosmos_gov_version?: UpdateCommunityRequestChainNodeCosmosGovVersion.Raw | null;
        health?: UpdateCommunityRequestChainNodeHealth.Raw | null;
        contracts?: UpdateCommunityRequestChainNodeContractsItem.Raw[] | null;
        block_explorer?: string | null;
        max_ce_block_range?: number | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
