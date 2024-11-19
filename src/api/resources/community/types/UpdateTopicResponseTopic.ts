/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateTopicResponseTopic {
    id?: number;
    name?: string;
    community_id?: string;
    description?: string;
    telegram?: string;
    featured_in_sidebar?: boolean;
    featured_in_new_post?: boolean;
    default_offchain_template?: string;
    order?: number;
    channel_id?: string;
    group_ids?: number[];
    default_offchain_template_backup?: string;
    weighted_voting?: CommonApi.UpdateTopicResponseTopicWeightedVoting;
    /** token address, used for ERC20 topics */
    token_address?: string;
    /** token symbol, used for ERC20 topics */
    token_symbol?: string;
    /** vote weight multiplier, used for ERC20 topics */
    vote_weight_multiplier?: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    archived_at?: string;
}
