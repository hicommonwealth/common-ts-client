/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt: core.serialization.Schema<
    serializers.GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt.Raw,
    CommonApi.GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt
> = core.serialization.undiscriminatedUnion([core.serialization.date(), core.serialization.string()]);

export declare namespace GetThreadsResponseThreadsItemCollaboratorsItemUserUpdatedAt {
    type Raw = string | string;
}
