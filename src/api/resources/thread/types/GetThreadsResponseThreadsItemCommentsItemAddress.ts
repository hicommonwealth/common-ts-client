/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetThreadsResponseThreadsItemCommentsItemAddress {
    id: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressVerificationTokenExpires;
    verified?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressVerified;
    last_active?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressLastActive;
    ghost_address?: boolean;
    wallet_id?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressWalletId;
    block_info?: string;
    is_user_default?: boolean;
    role?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUser;
    created_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressCreatedAt;
    updated_at?: CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUpdatedAt;
}
