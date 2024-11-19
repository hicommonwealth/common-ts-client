/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateThreadResponseReactionAddress {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.UpdateThreadResponseReactionAddressWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.UpdateThreadResponseReactionAddressRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.UpdateThreadResponseReactionAddressUser;
    createdAt?: Date;
    updatedAt?: Date;
}
