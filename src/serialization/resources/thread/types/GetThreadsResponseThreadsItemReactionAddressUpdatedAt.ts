/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionAddressUpdatedAt: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionAddressUpdatedAt.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionAddressUpdatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemReactionAddressUpdatedAt {
    type Raw = string | string;
}
