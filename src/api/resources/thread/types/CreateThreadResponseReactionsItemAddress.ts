/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateThreadResponseReactionsItemAddress {
    id?: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: string;
    verified?: string;
    last_active?: string;
    ghost_address?: boolean;
    wallet_id?: CommonApi.CreateThreadResponseReactionsItemAddressWalletId;
    block_info?: string;
    is_user_default?: boolean;
    role?: CommonApi.CreateThreadResponseReactionsItemAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.CreateThreadResponseReactionsItemAddressUser;
    created_at?: string;
    updated_at?: string;
}
