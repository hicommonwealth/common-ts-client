/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemReactionAddressRole: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemReactionAddressRole.Raw,
    CommonApi.GetThreadsResponseThreadsItemReactionAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace GetThreadsResponseThreadsItemReactionAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
