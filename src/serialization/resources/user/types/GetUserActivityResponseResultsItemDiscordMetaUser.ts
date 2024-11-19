/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetUserActivityResponseResultsItemDiscordMetaUser: core.serialization.ObjectSchema<
    serializers.GetUserActivityResponseResultsItemDiscordMetaUser.Raw,
    CommonApi.GetUserActivityResponseResultsItemDiscordMetaUser
> = core.serialization.object({
    id: core.serialization.string(),
    username: core.serialization.string(),
});

export declare namespace GetUserActivityResponseResultsItemDiscordMetaUser {
    interface Raw {
        id: string;
        username: string;
    }
}
