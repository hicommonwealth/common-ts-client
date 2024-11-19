/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const CreateCommentResponseThreadAddressUserEmailNotificationInterval: core.serialization.Schema<
    serializers.CreateCommentResponseThreadAddressUserEmailNotificationInterval.Raw,
    CommonApi.CreateCommentResponseThreadAddressUserEmailNotificationInterval
> = core.serialization.enum_(["weekly", "never"]);

export declare namespace CreateCommentResponseThreadAddressUserEmailNotificationInterval {
    type Raw = "weekly" | "never";
}
