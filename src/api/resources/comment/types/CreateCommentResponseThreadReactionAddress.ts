/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateCommentResponseThreadReactionAddress {
    id?: number;
    address: string;
    communityId: string;
    userId?: number;
    verificationToken?: string;
    verificationTokenExpires?: Date;
    verified?: Date;
    lastActive?: Date;
    ghostAddress?: boolean;
    walletId?: CommonApi.CreateCommentResponseThreadReactionAddressWalletId;
    blockInfo?: string;
    isUserDefault?: boolean;
    role?: CommonApi.CreateCommentResponseThreadReactionAddressRole;
    isBanned?: boolean;
    hex?: string;
    user?: CommonApi.CreateCommentResponseThreadReactionAddressUser;
    createdAt?: Date;
    updatedAt?: Date;
}
