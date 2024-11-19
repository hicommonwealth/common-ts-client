/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommentResponseThreadReactionsItemAddressRole: core.serialization.Schema<
    serializers.CreateCommentResponseThreadReactionsItemAddressRole.Raw,
    CommonApi.CreateCommentResponseThreadReactionsItemAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace CreateCommentResponseThreadReactionsItemAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
