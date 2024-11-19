/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export type GetCommunityResponseAddressesGroupsItemRequirementsItem =
    | CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItem.Threshold
    | CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItem.Allow;

export declare namespace GetCommunityResponseAddressesGroupsItemRequirementsItem {
    interface Threshold extends CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItemThreshold {
        rule: "threshold";
    }

    interface Allow extends CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItemAllow {
        rule: "allow";
    }
}