/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionsItemAddressUserCreatedAt: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionsItemAddressUserCreatedAt.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionsItemAddressUserCreatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemReactionsItemAddressUserCreatedAt {
    type Raw = string | string;
}
