/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateThreadResponseReactionsItemAddress {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.CreateThreadResponseReactionsItemAddressWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.CreateThreadResponseReactionsItemAddressRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.CreateThreadResponseReactionsItemAddressUser;
    createdAt?: Date;
    updatedAt?: Date;
}
