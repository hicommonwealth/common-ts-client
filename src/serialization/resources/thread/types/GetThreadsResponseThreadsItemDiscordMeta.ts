/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetThreadsResponseThreadsItemDiscordMetaUser } from "./GetThreadsResponseThreadsItemDiscordMetaUser";

export const GetThreadsResponseThreadsItemDiscordMeta: core.serialization.ObjectSchema<
    serializers.GetThreadsResponseThreadsItemDiscordMeta.Raw,
    CommonApi.GetThreadsResponseThreadsItemDiscordMeta
> = core.serialization.object({
    user: GetThreadsResponseThreadsItemDiscordMetaUser,
    channelId: core.serialization.property("channel_id", core.serialization.string()),
    messageId: core.serialization.property("message_id", core.serialization.string()),
});

export declare namespace GetThreadsResponseThreadsItemDiscordMeta {
    interface Raw {
        user: GetThreadsResponseThreadsItemDiscordMetaUser.Raw;
        channel_id: string;
        message_id: string;
    }
}
