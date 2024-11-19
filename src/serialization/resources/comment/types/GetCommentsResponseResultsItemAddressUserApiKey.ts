/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetCommentsResponseResultsItemAddressUserApiKey: core.serialization.ObjectSchema<
    serializers.GetCommentsResponseResultsItemAddressUserApiKey.Raw,
    CommonApi.GetCommentsResponseResultsItemAddressUserApiKey
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.number().optional()),
    hashedApiKey: core.serialization.property("hashed_api_key", core.serialization.string()),
    salt: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
});

export declare namespace GetCommentsResponseResultsItemAddressUserApiKey {
    interface Raw {
        user_id?: number | null;
        hashed_api_key: string;
        salt: string;
        created_at?: string | null;
        updated_at?: string | null;
    }
}
