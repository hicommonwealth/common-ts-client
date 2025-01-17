/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentReactionResponseAddress {
    id?: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: string;
    verified?: string;
    last_active?: string;
    ghost_address?: boolean;
    wallet_id?: CommonApi.CreateCommentReactionResponseAddressWalletId;
    block_info?: string;
    is_user_default?: boolean;
    role?: CommonApi.CreateCommentReactionResponseAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.CreateCommentReactionResponseAddressUser;
    created_at?: string;
    updated_at?: string;
}
