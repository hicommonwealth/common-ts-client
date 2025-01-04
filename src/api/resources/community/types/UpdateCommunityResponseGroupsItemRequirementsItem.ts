/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export type UpdateCommunityResponseGroupsItemRequirementsItem =
    | CommonApi.UpdateCommunityResponseGroupsItemRequirementsItem.Threshold
    | CommonApi.UpdateCommunityResponseGroupsItemRequirementsItem.Allow;

export namespace UpdateCommunityResponseGroupsItemRequirementsItem {
    export interface Threshold extends CommonApi.UpdateCommunityResponseGroupsItemRequirementsItemThreshold {
        rule: "threshold";
    }

    export interface Allow extends CommonApi.UpdateCommunityResponseGroupsItemRequirementsItemAllow {
        rule: "allow";
    }
}
