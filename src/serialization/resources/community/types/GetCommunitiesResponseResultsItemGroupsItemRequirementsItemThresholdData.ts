/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource } from "./GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource";

export const GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData: core.serialization.ObjectSchema<
    serializers.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData.Raw,
    CommonApi.GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData
> = core.serialization.object({
    threshold: core.serialization.string(),
    source: GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource,
});

export declare namespace GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdData {
    interface Raw {
        threshold: string;
        source: GetCommunitiesResponseResultsItemGroupsItemRequirementsItemThresholdDataSource.Raw;
    }
}
