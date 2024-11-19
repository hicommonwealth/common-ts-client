/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommentResponseReactionAddressRole: core.serialization.Schema<
    serializers.CreateCommentResponseReactionAddressRole.Raw,
    CommonApi.CreateCommentResponseReactionAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace CreateCommentResponseReactionAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
