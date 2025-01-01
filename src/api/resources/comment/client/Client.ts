/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CommonApi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Comment {
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

export class Comment {
    constructor(protected readonly _options: Comment.Options) {}

    /**
     * @param {CommonApi.GetCommentsRequest} request
     * @param {Comment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comment.getComments({
     *         thread_id: 1
     *     })
     */
    public async getComments(
        request: CommonApi.GetCommentsRequest,
        requestOptions?: Comment.RequestOptions
    ): Promise<CommonApi.GetCommentsResponse> {
        const {
            limit,
            cursor,
            order_by: orderBy,
            order_direction: orderDirection,
            thread_id: threadId,
            comment_id: commentId,
            include_user: includeUser,
            include_reactions: includeReactions,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit;
        }

        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (orderDirection != null) {
            _queryParams["order_direction"] = orderDirection;
        }

        _queryParams["thread_id"] = threadId.toString();
        if (commentId != null) {
            _queryParams["comment_id"] = commentId.toString();
        }

        if (includeUser != null) {
            _queryParams["include_user"] = includeUser.toString();
        }

        if (includeReactions != null) {
            _queryParams["include_reactions"] = includeReactions.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "GetComments"
            ),
            method: "GET",
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
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.GetCommentsResponse;
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
     * @param {CommonApi.CreateCommentRequest} request
     * @param {Comment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comment.createComment({
     *         thread_id: 1,
     *         body: "body"
     *     })
     */
    public async createComment(
        request: CommonApi.CreateCommentRequest,
        requestOptions?: Comment.RequestOptions
    ): Promise<CommonApi.CreateCommentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "CreateComment"
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
            return _response.body as CommonApi.CreateCommentResponse;
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
     * @param {CommonApi.UpdateCommentRequest} request
     * @param {Comment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comment.updateComment({
     *         comment_id: 1,
     *         body: "body"
     *     })
     */
    public async updateComment(
        request: CommonApi.UpdateCommentRequest,
        requestOptions?: Comment.RequestOptions
    ): Promise<CommonApi.UpdateCommentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "UpdateComment"
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
            return _response.body as CommonApi.UpdateCommentResponse;
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
     * @param {CommonApi.DeleteCommentRequest} request
     * @param {Comment.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.comment.deleteComment({
     *         comment_id: 1
     *     })
     */
    public async deleteComment(
        request: CommonApi.DeleteCommentRequest,
        requestOptions?: Comment.RequestOptions
    ): Promise<CommonApi.DeleteCommentResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "DeleteComment"
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
            return _response.body as CommonApi.DeleteCommentResponse;
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
