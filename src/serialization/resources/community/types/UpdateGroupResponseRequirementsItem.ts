/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { UpdateGroupResponseRequirementsItemThreshold } from "./UpdateGroupResponseRequirementsItemThreshold";
import { UpdateGroupResponseRequirementsItemAllow } from "./UpdateGroupResponseRequirementsItemAllow";

export const UpdateGroupResponseRequirementsItem: core.serialization.Schema<
    serializers.UpdateGroupResponseRequirementsItem.Raw,
    CommonApi.UpdateGroupResponseRequirementsItem
> = core.serialization
    .union("rule", {
        threshold: UpdateGroupResponseRequirementsItemThreshold,
        allow: UpdateGroupResponseRequirementsItemAllow,
    })
    .transform<CommonApi.UpdateGroupResponseRequirementsItem>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace UpdateGroupResponseRequirementsItem {
    type Raw = UpdateGroupResponseRequirementsItem.Threshold | UpdateGroupResponseRequirementsItem.Allow;

    interface Threshold extends UpdateGroupResponseRequirementsItemThreshold.Raw {
        rule: "threshold";
    }

    interface Allow extends UpdateGroupResponseRequirementsItemAllow.Raw {
        rule: "allow";
    }
}
