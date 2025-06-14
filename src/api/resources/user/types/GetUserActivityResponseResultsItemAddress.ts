/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetUserActivityResponseResultsItemAddress {
    id: number;
    address: string;
    community_id: string;
    user_id?: number;
    verification_token?: string;
    verification_token_expires?: CommonApi.GetUserActivityResponseResultsItemAddressVerificationTokenExpires;
    verified?: CommonApi.GetUserActivityResponseResultsItemAddressVerified;
    last_active?: CommonApi.GetUserActivityResponseResultsItemAddressLastActive;
    ghost_address?: boolean;
    wallet_id?: CommonApi.GetUserActivityResponseResultsItemAddressWalletId;
    block_info?: string;
    role?: CommonApi.GetUserActivityResponseResultsItemAddressRole;
    is_banned?: boolean;
    hex?: string;
    User?: CommonApi.GetUserActivityResponseResultsItemAddressUser;
    created_at?: CommonApi.GetUserActivityResponseResultsItemAddressCreatedAt;
    updated_at?: CommonApi.GetUserActivityResponseResultsItemAddressUpdatedAt;
}
