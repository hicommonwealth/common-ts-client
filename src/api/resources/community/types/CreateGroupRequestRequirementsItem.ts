/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export type CreateGroupRequestRequirementsItem =
    | CommonApi.CreateGroupRequestRequirementsItem.Threshold
    | CommonApi.CreateGroupRequestRequirementsItem.Allow;

export namespace CreateGroupRequestRequirementsItem {
    export interface Threshold extends CommonApi.CreateGroupRequestRequirementsItemThreshold {
        rule: "threshold";
    }

    export interface Allow extends CommonApi.CreateGroupRequestRequirementsItemAllow {
        rule: "allow";
    }
}
