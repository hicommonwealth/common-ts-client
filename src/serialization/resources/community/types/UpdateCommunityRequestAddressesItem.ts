/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommunityRequestAddressesItemWalletId } from "./UpdateCommunityRequestAddressesItemWalletId";
import { UpdateCommunityRequestAddressesItemRole } from "./UpdateCommunityRequestAddressesItemRole";
import { UpdateCommunityRequestAddressesItemUser } from "./UpdateCommunityRequestAddressesItemUser";

export const UpdateCommunityRequestAddressesItem: core.serialization.ObjectSchema<
    serializers.UpdateCommunityRequestAddressesItem.Raw,
    CommonApi.UpdateCommunityRequestAddressesItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    address: core.serialization.string(),
    communityId: core.serialization.property("community_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.number().optional()),
    verificationToken: core.serialization.property("verification_token", core.serialization.string().optional()),
    verificationTokenExpires: core.serialization.property(
        "verification_token_expires",
        core.serialization.date().optional()
    ),
    verified: core.serialization.date().optional(),
    lastActive: core.serialization.property("last_active", core.serialization.date().optional()),
    ghostAddress: core.serialization.property("ghost_address", core.serialization.boolean().optional()),
    walletId: core.serialization.property("wallet_id", UpdateCommunityRequestAddressesItemWalletId.optional()),
    blockInfo: core.serialization.property("block_info", core.serialization.string().optional()),
    isUserDefault: core.serialization.property("is_user_default", core.serialization.boolean().optional()),
    role: UpdateCommunityRequestAddressesItemRole.optional(),
    isBanned: core.serialization.property("is_banned", core.serialization.boolean().optional()),
    hex: core.serialization.string().optional(),
    user: core.serialization.property("User", UpdateCommunityRequestAddressesItemUser.optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace UpdateCommunityRequestAddressesItem {
    interface Raw {
        id?: number | null;
        address: string;
        community_id: string;
        user_id?: number | null;
        verification_token?: string | null;
        verification_token_expires?: string | null;
        verified?: string | null;
        last_active?: string | null;
        ghost_address?: boolean | null;
        wallet_id?: UpdateCommunityRequestAddressesItemWalletId.Raw | null;
        block_info?: string | null;
        is_user_default?: boolean | null;
        role?: UpdateCommunityRequestAddressesItemRole.Raw | null;
        is_banned?: boolean | null;
        hex?: string | null;
        User?: UpdateCommunityRequestAddressesItemUser.Raw | null;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
