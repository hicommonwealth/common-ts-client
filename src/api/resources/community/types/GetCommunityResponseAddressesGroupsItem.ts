/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface GetCommunityResponseAddressesGroupsItem {
    id?: number;
    community_id: string;
    metadata: CommonApi.GetCommunityResponseAddressesGroupsItemMetadata;
    requirements: CommonApi.GetCommunityResponseAddressesGroupsItemRequirementsItem[];
    is_system_managed?: boolean;
    GroupGatedActions?: CommonApi.GetCommunityResponseAddressesGroupsItemGroupGatedActionsItem[];
    created_at?: string;
    updated_at?: string;
}
