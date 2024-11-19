/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as CommonApi from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Contest {
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

export class Contest {
    constructor(protected readonly _options: Contest.Options) {}

    /**
     * @param {CommonApi.GetAllContestsRequest} request
     * @param {Contest.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.contest.getAllContests({
     *         community_id: "community_id"
     *     })
     */
    public async getAllContests(
        request: CommonApi.GetAllContestsRequest,
        requestOptions?: Contest.RequestOptions
    ): Promise<CommonApi.GetAllContestsResponseItem[]> {
        const { community_id: communityId, contest_address: contestAddress, contest_id: contestId, running } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["community_id"] = communityId;
        if (contestAddress != null) {
            _queryParams["contest_address"] = contestAddress;
        }

        if (contestId != null) {
            _queryParams["contest_id"] = contestId.toString();
        }

        if (running != null) {
            _queryParams["running"] = running.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CommonApiEnvironment.Default,
                "GetAllContests"
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
            return _response.body as CommonApi.GetAllContestsResponseItem[];
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
