/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {
 *         community_id: "community_id"
 *     }
 */
export interface CreateTopicRequest {
    community_id: string;
    name?: string;
    description?: string;
    featured_in_sidebar?: boolean;
    featured_in_new_post?: boolean;
    default_offchain_template?: string;
    weighted_voting?: CommonApi.CreateTopicRequestWeightedVoting;
    /** token address, used for ERC20 topics */
    token_address?: string;
    /** token symbol, used for ERC20 topics */
    token_symbol?: string;
    /** vote weight multiplier, used for ERC20 topics */
    vote_weight_multiplier?: number;
    /** token chain node ID, used for ERC20 topics */
    chain_node_id?: number;
}
