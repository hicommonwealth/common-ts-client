/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The environment that created the contest manager
 */
export type DeleteContestMetadataResponseContestManagersItemEnvironment =
    | "local"
    | "CI"
    | "frick"
    | "frack"
    | "beta"
    | "demo"
    | "production";
export const DeleteContestMetadataResponseContestManagersItemEnvironment = {
    Local: "local",
    Ci: "CI",
    Frick: "frick",
    Frack: "frack",
    Beta: "beta",
    Demo: "demo",
    Production: "production",
} as const;
