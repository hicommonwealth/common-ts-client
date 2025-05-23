/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { User } from "./api/resources/user/client/Client";
import { Community } from "./api/resources/community/client/Client";
import { Comment } from "./api/resources/comment/client/Client";
import { Thread } from "./api/resources/thread/client/Client";
import { Reaction } from "./api/resources/reaction/client/Client";

export declare namespace CommonApiClient {
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

export class CommonApiClient {
    protected _user: User | undefined;
    protected _community: Community | undefined;
    protected _comment: Comment | undefined;
    protected _thread: Thread | undefined;
    protected _reaction: Reaction | undefined;

    constructor(protected readonly _options: CommonApiClient.Options) {}

    public get user(): User {
        return (this._user ??= new User(this._options));
    }

    public get community(): Community {
        return (this._community ??= new Community(this._options));
    }

    public get comment(): Comment {
        return (this._comment ??= new Comment(this._options));
    }

    public get thread(): Thread {
        return (this._thread ??= new Thread(this._options));
    }

    public get reaction(): Reaction {
        return (this._reaction ??= new Reaction(this._options));
    }
}
