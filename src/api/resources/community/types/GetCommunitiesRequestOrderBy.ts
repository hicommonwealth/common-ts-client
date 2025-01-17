/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type GetCommunitiesRequestOrderBy =
    | "created_at"
    | "profile_count"
    | "lifetime_thread_count"
    | "last_30_day_thread_count";
export const GetCommunitiesRequestOrderBy = {
    CreatedAt: "created_at",
    ProfileCount: "profile_count",
    LifetimeThreadCount: "lifetime_thread_count",
    Last30DayThreadCount: "last_30_day_thread_count",
} as const;
