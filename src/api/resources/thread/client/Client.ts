/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CommonApi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Thread {
    export interface Options {
        environment?: core.Supplier<environments.CommonApiEnvironment | string>;
        apiKey: core.Supplier<string>;
        /** Override the address header */
        address?: core.Supplier<string | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the address header */
        address?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Thread {
    constructor(protected readonly _options: Thread.Options) {}

    /**
     * @param {CommonApi.GetThreadsRequest} request
     * @param {Thread.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thread.getThreads({
     *         community_id: "community_id"
     *     })
     */
    public async getThreads(
        request: CommonApi.GetThreadsRequest,
        requestOptions?: Thread.RequestOptions,
    ): Promise<CommonApi.GetThreadsResponse> {
        const {
            community_id: communityId,
            page,
            limit,
            stage,
            topic_id: topicId,
            includePinnedThreads,
            order_by: orderBy,
            from_date: fromDate,
            to_date: toDate,
            archived,
            contestAddress,
            status,
            withXRecentComments,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["community_id"] = communityId;
        if (page != null) {
            _queryParams["page"] = page.toString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (stage != null) {
            _queryParams["stage"] = stage;
        }

        if (topicId != null) {
            _queryParams["topic_id"] = topicId.toString();
        }

        if (includePinnedThreads != null) {
            _queryParams["includePinnedThreads"] = includePinnedThreads.toString();
        }

        if (orderBy != null) {
            _queryParams["order_by"] = orderBy;
        }

        if (fromDate != null) {
            _queryParams["from_date"] = fromDate;
        }

        if (toDate != null) {
            _queryParams["to_date"] = toDate;
        }

        if (archived != null) {
            _queryParams["archived"] = archived.toString();
        }

        if (contestAddress != null) {
            _queryParams["contestAddress"] = contestAddress;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (withXRecentComments != null) {
            _queryParams["withXRecentComments"] = withXRecentComments.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "GetThreads",
            ),
            method: "GET",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.2.3",
                "User-Agent": "@commonxyz/api-client/2.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.GetThreadsResponse;
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
                throw new errors.CommonApiTimeoutError("Timeout exceeded when calling GET /GetThreads.");
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {CommonApi.CreateThreadRequest} request
     * @param {Thread.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thread.createThread({
     *         community_id: "community_id",
     *         topic_id: 1,
     *         title: "title",
     *         body: "body",
     *         kind: "discussion",
     *         stage: "stage",
     *         read_only: true
     *     })
     */
    public async createThread(
        request: CommonApi.CreateThreadRequest,
        requestOptions?: Thread.RequestOptions,
    ): Promise<CommonApi.CreateThreadResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "CreateThread",
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.2.3",
                "User-Agent": "@commonxyz/api-client/2.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.CreateThreadResponse;
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
                throw new errors.CommonApiTimeoutError("Timeout exceeded when calling POST /CreateThread.");
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {CommonApi.UpdateThreadRequest} request
     * @param {Thread.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thread.updateThread({
     *         thread_id: 1
     *     })
     */
    public async updateThread(
        request: CommonApi.UpdateThreadRequest,
        requestOptions?: Thread.RequestOptions,
    ): Promise<CommonApi.UpdateThreadResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "UpdateThread",
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.2.3",
                "User-Agent": "@commonxyz/api-client/2.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.UpdateThreadResponse;
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
                throw new errors.CommonApiTimeoutError("Timeout exceeded when calling POST /UpdateThread.");
            case "unknown":
                throw new errors.CommonApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {CommonApi.DeleteThreadRequest} request
     * @param {Thread.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.thread.deleteThread({
     *         thread_id: 1
     *     })
     */
    public async deleteThread(
        request: CommonApi.DeleteThreadRequest,
        requestOptions?: Thread.RequestOptions,
    ): Promise<CommonApi.DeleteThreadResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "DeleteThread",
            ),
            method: "POST",
            headers: {
                address:
                    (await core.Supplier.get(this._options.address)) != null
                        ? await core.Supplier.get(this._options.address)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@commonxyz/api-client",
                "X-Fern-SDK-Version": "2.2.3",
                "User-Agent": "@commonxyz/api-client/2.2.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as CommonApi.DeleteThreadResponse;
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
                throw new errors.CommonApiTimeoutError("Timeout exceeded when calling POST /DeleteThread.");
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
