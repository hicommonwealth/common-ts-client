/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseReactionAddress {
    id?: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: string;
    verified?: string;
    last_active?: string;
    ghost_address?: boolean;
    wallet_id?: CommonApi.CreateCommentResponseReactionAddressWalletId;
    block_info?: string;
    is_user_default?: boolean;
    role?: CommonApi.CreateCommentResponseReactionAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.CreateCommentResponseReactionAddressUser;
    created_at?: string;
    updated_at?: string;
}