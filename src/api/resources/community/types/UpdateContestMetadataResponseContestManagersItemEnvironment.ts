/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The environment that created the contest manager
 */
export type UpdateContestMetadataResponseContestManagersItemEnvironment =
    | "local"
    | "CI"
    | "frick"
    | "frack"
    | "beta"
    | "demo"
    | "production";
export const UpdateContestMetadataResponseContestManagersItemEnvironment = {
    Local: "local",
    Ci: "CI",
    Frick: "frick",
    Frack: "frack",
    Beta: "beta",
    Demo: "demo",
    Production: "production",
} as const;
