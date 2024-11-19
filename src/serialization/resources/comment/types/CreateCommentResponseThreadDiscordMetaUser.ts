/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommentResponseThreadDiscordMetaUser: core.serialization.ObjectSchema<
    serializers.CreateCommentResponseThreadDiscordMetaUser.Raw,
    CommonApi.CreateCommentResponseThreadDiscordMetaUser
> = core.serialization.object({
    id: core.serialization.string(),
    username: core.serialization.string(),
});

export declare namespace CreateCommentResponseThreadDiscordMetaUser {
    interface Raw {
        id: string;
        username: string;
    }
}
