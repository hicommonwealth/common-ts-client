/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateCommentResponseCommentVersionHistoriesItem: core.serialization.ObjectSchema<
    serializers.UpdateCommentResponseCommentVersionHistoriesItem.Raw,
    CommonApi.UpdateCommentResponseCommentVersionHistoriesItem
> = core.serialization.object({
    id: core.serialization.number().optional(),
    commentId: core.serialization.property("comment_id", core.serialization.number()),
    body: core.serialization.string(),
    timestamp: core.serialization.date(),
    contentUrl: core.serialization.property("content_url", core.serialization.string().optional()),
});

export declare namespace UpdateCommentResponseCommentVersionHistoriesItem {
    interface Raw {
        id?: number | null;
        comment_id: number;
        body: string;
        timestamp: string;
        content_url?: string | null;
    }
}
