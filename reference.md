# Reference

## User

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getGlobalActivity</a>({ ...params }) -> CommonApi.GetGlobalActivityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getGlobalActivity();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetGlobalActivityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getUserActivity</a>({ ...params }) -> CommonApi.GetUserActivityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getUserActivity();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetUserActivityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getUser</a>() -> CommonApi.GetUserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getUser();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getNewContent</a>() -> CommonApi.GetNewContentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.user.getNewContent();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Community

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">getCommunities</a>({ ...params }) -> CommonApi.GetCommunitiesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.getCommunities();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetCommunitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">getCommunity</a>({ ...params }) -> CommonApi.GetCommunityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.getCommunity({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetCommunityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">getMembers</a>({ ...params }) -> CommonApi.GetMembersResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.getMembers({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetMembersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">getTopics</a>({ ...params }) -> CommonApi.GetTopicsResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.getTopics({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetTopicsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">createContestMetadata</a>({ ...params }) -> CommonApi.CreateContestMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.createContestMetadata({
    community_id: "community_id",
    contest_address: "contest_address",
    name: "name",
    payout_structure: [1],
    interval: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateContestMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">updateContestMetadata</a>({ ...params }) -> CommonApi.UpdateContestMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.updateContestMetadata({
    community_id: "community_id",
    contest_address: "contest_address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateContestMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">cancelContestMetadata</a>({ ...params }) -> CommonApi.CancelContestMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.cancelContestMetadata({
    community_id: "community_id",
    contest_address: "contest_address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CancelContestMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">deleteContestMetadata</a>({ ...params }) -> CommonApi.DeleteContestMetadataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.deleteContestMetadata({
    community_id: "community_id",
    contest_address: "contest_address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteContestMetadataRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">createCommunity</a>({ ...params }) -> CommonApi.CreateCommunityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.createCommunity({
    id: "id",
    name: "name",
    chain_node_id: 1,
    base: "cosmos",
    default_symbol: "default_symbol",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateCommunityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">updateCommunity</a>({ ...params }) -> CommonApi.UpdateCommunityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.updateCommunity({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateCommunityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">createTopic</a>({ ...params }) -> CommonApi.CreateTopicResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.createTopic({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateTopicRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">updateTopic</a>({ ...params }) -> CommonApi.UpdateTopicResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.updateTopic({
    topic_id: 1.1,
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateTopicRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">toggleArchiveTopic</a>({ ...params }) -> CommonApi.ToggleArchiveTopicResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.toggleArchiveTopic({
    community_id: "community_id",
    topic_id: 1,
    archive: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.ToggleArchiveTopicRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">createGroup</a>({ ...params }) -> CommonApi.CreateGroupResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.createGroup({
    community_id: "community_id",
    metadata: {
        name: "name",
        description: "description",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">updateGroup</a>({ ...params }) -> CommonApi.UpdateGroupResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.updateGroup({
    community_id: "community_id",
    group_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">deleteGroup</a>({ ...params }) -> CommonApi.DeleteGroupResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.deleteGroup({
    community_id: "community_id",
    group_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">joinCommunity</a>({ ...params }) -> CommonApi.JoinCommunityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.joinCommunity({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.JoinCommunityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">banAddress</a>({ ...params }) -> CommonApi.BanAddressResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.banAddress({
    community_id: "community_id",
    address: "address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.BanAddressRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">updateRole</a>({ ...params }) -> CommonApi.UpdateRoleResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.updateRole({
    community_id: "community_id",
    address: "address",
    role: "admin",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Community.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Comment

<details><summary><code>client.comment.<a href="/src/api/resources/comment/client/Client.ts">getComments</a>({ ...params }) -> CommonApi.GetCommentsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comment.getComments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetCommentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comment.<a href="/src/api/resources/comment/client/Client.ts">createComment</a>({ ...params }) -> CommonApi.CreateCommentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comment.createComment({
    thread_id: 1,
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateCommentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comment.<a href="/src/api/resources/comment/client/Client.ts">updateComment</a>({ ...params }) -> CommonApi.UpdateCommentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comment.updateComment({
    comment_id: 1,
    body: "body",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateCommentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comment.<a href="/src/api/resources/comment/client/Client.ts">deleteComment</a>({ ...params }) -> CommonApi.DeleteCommentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comment.deleteComment({
    comment_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteCommentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.comment.<a href="/src/api/resources/comment/client/Client.ts">toggleCommentSpam</a>({ ...params }) -> CommonApi.ToggleCommentSpamResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comment.toggleCommentSpam({
    comment_id: 1,
    spam: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.ToggleCommentSpamRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Thread

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">getThreads</a>({ ...params }) -> CommonApi.GetThreadsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.getThreads({
    community_id: "community_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetThreadsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">getLinks</a>({ ...params }) -> CommonApi.GetLinksResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.getLinks();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">createThread</a>({ ...params }) -> CommonApi.CreateThreadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.createThread({
    community_id: "community_id",
    topic_id: 1,
    title: "title",
    body: "body",
    kind: "discussion",
    stage: "stage",
    read_only: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateThreadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">updateThread</a>({ ...params }) -> CommonApi.UpdateThreadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.updateThread({
    thread_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.UpdateThreadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">deleteThread</a>({ ...params }) -> CommonApi.DeleteThreadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.deleteThread({
    thread_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteThreadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">addLinks</a>({ ...params }) -> CommonApi.AddLinksResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.addLinks({
    thread_id: 1,
    links: [
        {
            source: "snapshot",
            identifier: "identifier",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.AddLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.thread.<a href="/src/api/resources/thread/client/Client.ts">deleteLinks</a>({ ...params }) -> CommonApi.DeleteLinksResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.thread.deleteLinks({
    thread_id: 1,
    links: [
        {
            source: "snapshot",
            identifier: "identifier",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteLinksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Thread.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contest

<details><summary><code>client.contest.<a href="/src/api/resources/contest/client/Client.ts">getAllContests</a>({ ...params }) -> CommonApi.GetAllContestsResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contest.getAllContests();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetAllContestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contest.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Token

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">getTokens</a>({ ...params }) -> CommonApi.GetTokensResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.getTokens();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetTokensRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">createToken</a>({ ...params }) -> CommonApi.CreateTokenResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.createToken({
    community_id: "community_id",
    eth_chain_id: 1.1,
    transaction_hash: "transaction_hash",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">createTrade</a>({ ...params }) -> CommonApi.CreateTradeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.createTrade({
    eth_chain_id: 1.1,
    transaction_hash: "transaction_hash",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateTradeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">getTokenInfoAlchemy</a>({ ...params }) -> CommonApi.GetTokenInfoAlchemyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.getTokenInfoAlchemy({
    eth_chain_id: 1.1,
    token_address: "token_address",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetTokenInfoAlchemyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.token.<a href="/src/api/resources/token/client/Client.ts">getLaunchpadTrades</a>({ ...params }) -> CommonApi.GetLaunchpadTradesResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.token.getLaunchpadTrades();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.GetLaunchpadTradesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Token.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Reaction

<details><summary><code>client.reaction.<a href="/src/api/resources/reaction/client/Client.ts">createThreadReaction</a>({ ...params }) -> CommonApi.CreateThreadReactionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reaction.createThreadReaction({
    thread_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateThreadReactionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reaction.<a href="/src/api/resources/reaction/client/Client.ts">createCommentReaction</a>({ ...params }) -> CommonApi.CreateCommentReactionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reaction.createCommentReaction({
    comment_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.CreateCommentReactionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.reaction.<a href="/src/api/resources/reaction/client/Client.ts">deleteReaction</a>({ ...params }) -> CommonApi.DeleteReactionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reaction.deleteReaction({
    community_id: "community_id",
    reaction_id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.DeleteReactionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Reaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bot

<details><summary><code>client.bot.<a href="/src/api/resources/bot/client/Client.ts">launchTokenBot</a>({ ...params }) -> CommonApi.LaunchTokenBotResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bot.launchTokenBot({
    name: "name",
    symbol: "symbol",
    totalSupply: 1.1,
    eth_chain_id: 1.1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CommonApi.LaunchTokenBotRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
