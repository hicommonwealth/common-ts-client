/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateThreadResponseAddressRole: core.serialization.Schema<
    serializers.UpdateThreadResponseAddressRole.Raw,
    CommonApi.UpdateThreadResponseAddressRole
> = core.serialization.enum_(["admin", "moderator", "member"]);

export declare namespace UpdateThreadResponseAddressRole {
    type Raw = "admin" | "moderator" | "member";
}
