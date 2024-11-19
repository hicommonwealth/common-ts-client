/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressVerificationTokenExpires } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressVerificationTokenExpires";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressVerified } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressVerified";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressLastActive } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressLastActive";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressWalletId } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressWalletId";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressRole } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressRole";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressUser } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressUser";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressCreatedAt } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressCreatedAt";
import { GetThreadsResponseThreadsItemCommentsItemReactionAddressUpdatedAt } from "./GetThreadsResponseThreadsItemCommentsItemReactionAddressUpdatedAt";

export const GetThreadsResponseThreadsItemCommentsItemReactionAddress: core.serialization.ObjectSchema<
    serializers.GetThreadsResponseThreadsItemCommentsItemReactionAddress.Raw,
    CommonApi.GetThreadsResponseThreadsItemCommentsItemReactionAddress
> = core.serialization.object({
    id: core.serialization.number(),
    address: core.serialization.string(),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.number().optional()),
    verificationToken: core.serialization.property("verification_token", core.serialization.string().optional()),
    verificationTokenExpires: core.serialization.property(
        "verification_token_expires",
        GetThreadsResponseThreadsItemCommentsItemReactionAddressVerificationTokenExpires.optional()
    ),
    verified: GetThreadsResponseThreadsItemCommentsItemReactionAddressVerified.optional(),
    lastActive: core.serialization.property(
        "last_active",
        GetThreadsResponseThreadsItemCommentsItemReactionAddressLastActive.optional()
    ),
    ghostAddress: core.serialization.property("ghost_address", core.serialization.boolean().optional()),
    walletId: core.serialization.property(
        "wallet_id",
        GetThreadsResponseThreadsItemCommentsItemReactionAddressWalletId.optional()
    ),
    blockInfo: core.serialization.property("block_info", core.serialization.string().optional()),
    isUserDefault: core.serialization.property("is_user_default", core.serialization.boolean().optional()),
    role: GetThreadsResponseThreadsItemCommentsItemReactionAddressRole.optional(),
    isBanned: core.serialization.property("is_banned", core.serialization.boolean().optional()),
    hex: core.serialization.string().optional(),
    user: core.serialization.property("User", GetThreadsResponseThreadsItemCommentsItemReactionAddressUser.optional()),
    createdAt: core.serialization.property(
        "created_at",
        GetThreadsResponseThreadsItemCommentsItemReactionAddressCreatedAt.optional()
    ),
    updatedAt: core.serialization.property(
        "updated_at",
        GetThreadsResponseThreadsItemCommentsItemReactionAddressUpdatedAt.optional()
    ),
});

export declare namespace GetThreadsResponseThreadsItemCommentsItemReactionAddress {
    interface Raw {
        id: number;
        address: string;
        community_id: string;
        user_id?: number | null;
        verification_token?: string | null;
        verification_token_expires?: GetThreadsResponseThreadsItemCommentsItemReactionAddressVerificationTokenExpires.Raw | null;
        verified?: GetThreadsResponseThreadsItemCommentsItemReactionAddressVerified.Raw | null;
        last_active?: GetThreadsResponseThreadsItemCommentsItemReactionAddressLastActive.Raw | null;
        ghost_address?: boolean | null;
        wallet_id?: GetThreadsResponseThreadsItemCommentsItemReactionAddressWalletId.Raw | null;
        block_info?: string | null;
        is_user_default?: boolean | null;
        role?: GetThreadsResponseThreadsItemCommentsItemReactionAddressRole.Raw | null;
        is_banned?: boolean | null;
        hex?: string | null;
        User?: GetThreadsResponseThreadsItemCommentsItemReactionAddressUser.Raw | null;
        created_at?: GetThreadsResponseThreadsItemCommentsItemReactionAddressCreatedAt.Raw | null;
        updated_at?: GetThreadsResponseThreadsItemCommentsItemReactionAddressUpdatedAt.Raw | null;
    }
}
