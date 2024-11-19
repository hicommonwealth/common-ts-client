/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemCommentsItemAddressRole: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemCommentsItemAddressRole.Raw,
    CommonApi.GetThreadsResponseThreadsItemCommentsItemAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace GetThreadsResponseThreadsItemCommentsItemAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
