/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CommonApi from "../../../index";

export interface CreateGroupResponse {
    id?: string;
    name?: string;
    chain_node_id?: number;
    default_symbol?: string;
    network?: string;
    base?: CommonApi.CreateGroupResponseBase;
    icon_url?: string;
    active?: boolean;
    type?: CommonApi.CreateGroupResponseType;
    description?: string;
    social_links?: CommonApi.CreateGroupResponseSocialLinksItem[];
    ss58_prefix?: number;
    stages_enabled?: boolean;
    custom_stages?: string[];
    custom_domain?: string;
    block_explorer_ids?: string;
    collapsed_on_homepage?: boolean;
    default_summary_view?: boolean;
    default_page?: CommonApi.CreateGroupResponseDefaultPage;
    has_homepage?: CommonApi.CreateGroupResponseHasHomepage;
    terms?: CommonApi.CreateGroupResponseTerms;
    admin_only_polling?: boolean;
    bech32_prefix?: string;
    hide_projects?: boolean;
    token_name?: string;
    ce_verbose?: boolean;
    discord_config_id?: number;
    category?: unknown;
    discord_bot_webhooks_enabled?: boolean;
    directory_page_enabled?: boolean;
    directory_page_chain_node_id?: number;
    namespace?: string;
    namespace_address?: string;
    redirect?: string;
    snapshot_spaces?: string[];
    include_in_digest_email?: boolean;
    profile_count?: number;
    lifetime_thread_count?: number;
    banner_text?: string;
    created_at?: string;
    updated_at?: string;
    Addresses?: CommonApi.CreateGroupResponseAddressesItem[];
    CommunityStakes?: CommonApi.CreateGroupResponseCommunityStakesItem[];
    CommunityTags?: CommonApi.CreateGroupResponseCommunityTagsItem[];
    ChainNode?: CommonApi.CreateGroupResponseChainNode;
    topics?: CommonApi.CreateGroupResponseTopicsItem[];
    groups?: CommonApi.CreateGroupResponseGroupsItem[];
    contest_managers?: CommonApi.CreateGroupResponseContestManagersItem[];
}