/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const DeleteReactionResponseAddressRole: core.serialization.Schema<
    serializers.DeleteReactionResponseAddressRole.Raw,
    CommonApi.DeleteReactionResponseAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace DeleteReactionResponseAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
