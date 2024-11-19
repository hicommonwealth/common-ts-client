/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionsItemAddressUpdatedAt: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionsItemAddressUpdatedAt.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUpdatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemReactionsItemAddressUpdatedAt {
    type Raw = string | string;
}
