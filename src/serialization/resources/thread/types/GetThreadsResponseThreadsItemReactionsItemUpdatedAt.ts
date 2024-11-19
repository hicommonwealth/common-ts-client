/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionsItemUpdatedAt: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionsItemUpdatedAt.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionsItemUpdatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemReactionsItemUpdatedAt {
    type Raw = string | string;
}
