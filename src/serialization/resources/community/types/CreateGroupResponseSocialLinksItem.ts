/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateGroupResponseSocialLinksItem: core.serialization.Schema<
    serializers.CreateGroupResponseSocialLinksItem.Raw,
    CommonApi.CreateGroupResponseSocialLinksItem
> = core.serialization.undiscriminatedUnion([core.serialization.unknown(), core.serialization.string().optional()]);

export declare namespace CreateGroupResponseSocialLinksItem {
    type Raw = unknown | (string | null | undefined);
}
