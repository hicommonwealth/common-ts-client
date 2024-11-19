/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommunityResponseAddressesTermsZero } from "./GetCommunityResponseAddressesTermsZero";

export const GetCommunityResponseAddressesTerms: core.serialization.Schema<
    serializers.GetCommunityResponseAddressesTerms.Raw,
    CommonApi.GetCommunityResponseAddressesTerms
> = core.serialization.undiscriminatedUnion([GetCommunityResponseAddressesTermsZero, core.serialization.string()]);

export declare namespace GetCommunityResponseAddressesTerms {
    type Raw = GetCommunityResponseAddressesTermsZero.Raw | string;
}
