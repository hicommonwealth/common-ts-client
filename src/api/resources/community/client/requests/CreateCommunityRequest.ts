/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../../index";

/**
 * @example
 *     {
 *         id: "id",
 *         name: "name",
 *         chainNodeId: 1,
 *         base: CommonApi.CreateCommunityRequestBase.Cosmos,
 *         defaultSymbol: "default_symbol"
 *     }
 */
export interface CreateCommunityRequest {
    id: string;
    name: string;
    chainNodeId: number;
    description?: string;
    iconUrl?: string;
    socialLinks?: string[];
    tags?: string[];
    directoryPageEnabled?: boolean;
    type?: CommonApi.CreateCommunityRequestType;
    base: CommonApi.CreateCommunityRequestBase;
    tokenName?: string;
    defaultSymbol: string;
    website?: string;
    github?: string;
    telegram?: string;
    element?: string;
    discord?: string;
}
