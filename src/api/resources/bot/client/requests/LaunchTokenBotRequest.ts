/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "name",
 *         symbol: "symbol",
 *         totalSupply: 1.1,
 *         eth_chain_id: 1.1
 *     }
 */
export interface LaunchTokenBotRequest {
    /** The name of the token */
    name: string;
    /** The symbol of the token */
    symbol: string;
    /** The total supply of the token */
    totalSupply: number;
    /** The chain id to create token for */
    eth_chain_id: number;
    /** The icon url of the token */
    icon_url?: string;
    /** The description of the token */
    description?: string;
}
