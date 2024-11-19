/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CommonApi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Reaction {
    interface Options {
        environment?: core.Supplier<environments.CommonApiEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the address header */
        address?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the address header */
        address?: string | undefined;
    }
}

export class Reaction {
    constructor(protected readonly _options: Reaction.Options) {}

    /**
     * @param {CommonApi.CreateThreadReactionRequest} request
     * @param {Reaction.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.reaction.createThreadReaction({
     *         thread_id: 1
     *     })
     */
    public async createThreadReaction(
        request: CommonApi.CreateThreadReactionRequest,
        requestOptions?: Reaction.RequestOptions
    ): Promise<CommonApi.CreateThreadReactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "CreateThreadReaction"
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.0.0",
                "User-Agent": "@commonxyz/api-client/2.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: { ...request, reaction: "like" },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.CreateThreadReactionResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CommonApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CommonApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CommonApiTimeoutError();
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {CommonApi.CreateCommentReactionRequest} request
     * @param {Reaction.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.reaction.createCommentReaction({
     *         comment_id: 1
     *     })
     */
    public async createCommentReaction(
        request: CommonApi.CreateCommentReactionRequest,
        requestOptions?: Reaction.RequestOptions
    ): Promise<CommonApi.CreateCommentReactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "CreateCommentReaction"
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.0.0",
                "User-Agent": "@commonxyz/api-client/2.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: { ...request, reaction: "like" },
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.CreateCommentReactionResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CommonApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CommonApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CommonApiTimeoutError();
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {CommonApi.DeleteReactionRequest} request
     * @param {Reaction.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.reaction.deleteReaction({
     *         community_id: "community_id",
     *         reaction_id: 1
     *     })
     */
    public async deleteReaction(
        request: CommonApi.DeleteReactionRequest,
        requestOptions?: Reaction.RequestOptions
    ): Promise<CommonApi.DeleteReactionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "DeleteReaction"
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.0.0",
                "User-Agent": "@commonxyz/api-client/2.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.DeleteReactionResponse;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CommonApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CommonApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CommonApiTimeoutError();
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-api-key": apiKeyValue };
    }
}