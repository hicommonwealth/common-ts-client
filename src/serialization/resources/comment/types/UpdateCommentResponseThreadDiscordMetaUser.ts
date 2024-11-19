/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommentResponseThreadDiscordMetaUser: core.serialization.ObjectSchema<
    serializers.UpdateCommentResponseThreadDiscordMetaUser.Raw,
    CommonApi.UpdateCommentResponseThreadDiscordMetaUser
> = core.serialization.object({
    id: core.serialization.string(),
    username: core.serialization.string(),
});

export declare namespace UpdateCommentResponseThreadDiscordMetaUser {
    interface Raw {
        id: string;
        username: string;
    }
}
