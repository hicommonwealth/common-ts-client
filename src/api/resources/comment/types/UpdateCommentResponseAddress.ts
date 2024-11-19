/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface UpdateCommentResponseAddress {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.UpdateCommentResponseAddressWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.UpdateCommentResponseAddressRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.UpdateCommentResponseAddressUser;
    createdAt?: Date;
    updatedAt?: Date;
}
