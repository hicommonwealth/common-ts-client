/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionAddressVerified: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionAddressVerified.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionAddressVerified
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemReactionAddressVerified {
    type Raw = string | string;
}
