/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemCommentsItemAddressUserEmailNotificationInterval: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemCommentsItemAddressUserEmailNotificationInterval.Raw,
    CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressUserEmailNotificationInterval
> = core.serialization.enum_(["weekly", "never"]);

export declare namespace GetThreadsResponseThreadsItemCommentsItemAddressUserEmailNotificationInterval {
    type Raw = "weekly" | "never";
}
