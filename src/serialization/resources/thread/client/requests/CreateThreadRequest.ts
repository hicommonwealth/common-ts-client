/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as CommonApi from "../../../../../api/index";
import * as core from "../../../../../core";
import { CreateThreadRequestKind } from "../../types/CreateThreadRequestKind";
import { CreateThreadRequestDiscordMeta } from "../../types/CreateThreadRequestDiscordMeta";

export const CreateThreadRequest: core.serialization.Schema<
    serializers.CreateThreadRequest.Raw,
    CommonApi.CreateThreadRequest
> = core.serialization.object({
    communityId: core.serialization.property("community_id", core.serialization.string()),
    topicId: core.serialization.property("topic_id", core.serialization.number()),
    title: core.serialization.string(),
    body: core.serialization.string(),
    canvasSignedData: core.serialization.property("canvas_signed_data", core.serialization.string().optional()),
    canvasMsgId: core.serialization.property("canvas_msg_id", core.serialization.string().optional()),
    kind: CreateThreadRequestKind,
    stage: core.serialization.string(),
    url: core.serialization.string().optional(),
    readOnly: core.serialization.property("read_only", core.serialization.boolean()),
    discordMeta: core.serialization.property("discord_meta", CreateThreadRequestDiscordMeta.optional()),
});

export declare namespace CreateThreadRequest {
    interface Raw {
        community_id: string;
        topic_id: number;
        title: string;
        body: string;
        canvas_signed_data?: string | null;
        canvas_msg_id?: string | null;
        kind: CreateThreadRequestKind.Raw;
        stage: string;
        url?: string | null;
        read_only: boolean;
        discord_meta?: CreateThreadRequestDiscordMeta.Raw | null;
    }
}
