/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateCommentResponseDiscordMetaUser } from "./UpdateCommentResponseDiscordMetaUser";

export const UpdateCommentResponseDiscordMeta: core.serialization.ObjectSchema<
    serializers.UpdateCommentResponseDiscordMeta.Raw,
    CommonApi.UpdateCommentResponseDiscordMeta
> = core.serialization.object({
    user: UpdateCommentResponseDiscordMetaUser,
    channelId: core.serialization.property("channel_id", core.serialization.string()),
    messageId: core.serialization.property("message_id", core.serialization.string()),
});

export declare namespace UpdateCommentResponseDiscordMeta {
    interface Raw {
        user: UpdateCommentResponseDiscordMetaUser.Raw;
        channel_id: string;
        message_id: string;
    }
}
