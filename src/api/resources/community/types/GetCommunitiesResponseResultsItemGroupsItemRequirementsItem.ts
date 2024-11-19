/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export type GetCommunitiesResponseResultsItemGroupsItemRequirementsItem =
    | CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItem.Threshold
    | CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItem.Allow;

export declare namespace GetCommunitiesResponseResultsItemGroupsItemRequirementsItem {
    interface Threshold extends CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThreshold {
        rule: "threshold";
    }

    interface Allow extends CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemAllow {
        rule: "allow";
    }
}
