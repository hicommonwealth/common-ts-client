/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { JoinCommunityResponseBase } from "./JoinCommunityResponseBase";
import { JoinCommunityResponseWalletId } from "./JoinCommunityResponseWalletId";

export const JoinCommunityResponse: core.serialization.ObjectSchema<
    serializers.JoinCommunityResponse.Raw,
    CommonApi.JoinCommunityResponse
> = core.serialization.object({
    communityId: core.serialization.property("community_id", core.serialization.string()),
    base: JoinCommunityResponseBase,
    addressId: core.serialization.property("address_id", core.serialization.number()),
    address: core.serialization.string(),
    walletId: core.serialization.property("wallet_id", JoinCommunityResponseWalletId.optional()),
    ss58Prefix: core.serialization.number().optional(),
});

export declare namespace JoinCommunityResponse {
    interface Raw {
        community_id: string;
        base: JoinCommunityResponseBase.Raw;
        address_id: number;
        address: string;
        wallet_id?: JoinCommunityResponseWalletId.Raw | null;
        ss58Prefix?: number | null;
    }
}
