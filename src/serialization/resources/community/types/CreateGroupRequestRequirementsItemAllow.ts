/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { CreateGroupRequestRequirementsItemAllowData } from "./CreateGroupRequestRequirementsItemAllowData";

export const CreateGroupRequestRequirementsItemAllow: core.serialization.ObjectSchema<
    serializers.CreateGroupRequestRequirementsItemAllow.Raw,
    CommonApi.CreateGroupRequestRequirementsItemAllow
> = core.serialization.object({
    data: CreateGroupRequestRequirementsItemAllowData,
});

export declare namespace CreateGroupRequestRequirementsItemAllow {
    interface Raw {
        data: CreateGroupRequestRequirementsItemAllowData.Raw;
    }
}
