/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemCommentsItemReactionAddress {
    id: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressVerificationTokenExpires;
    verified?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressVerified;
    last_active?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressLastActive;
    ghost_address?: boolean;
    wallet_id?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressWalletId;
    block_info?: string;
    is_user_default?: boolean;
    role?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUser;
    created_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddressUpdatedAt;
}