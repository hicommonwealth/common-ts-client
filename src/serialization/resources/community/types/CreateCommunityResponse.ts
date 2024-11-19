/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateCommunityResponseCommunity } from "./CreateCommunityResponseCommunity";

export const CreateCommunityResponse: core.serialization.ObjectSchema<
    serializers.CreateCommunityResponse.Raw,
    CommonApi.CreateCommunityResponse
> = core.serialization.object({
    community: CreateCommunityResponseCommunity,
    adminAddress: core.serialization.property("admin_address", core.serialization.string().optional()),
});

export declare namespace CreateCommunityResponse {
    interface Raw {
        community: CreateCommunityResponseCommunity.Raw;
        admin_address?: string | null;
    }
}
