/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemCommentsItemAddressVerificationTokenExpires: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemCommentsItemAddressVerificationTokenExpires.Raw,
    CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressVerificationTokenExpires
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemCommentsItemAddressVerificationTokenExpires {
    type Raw = string | string;
}
