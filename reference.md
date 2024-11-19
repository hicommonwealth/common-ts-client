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
    communityId: "community_id",
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
    communityId: "community_id",
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
    communityId: "community_id",
    contestAddress: "contest_address",
    name: "name",
    payoutStructure: [1],
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
    communityId: "community_id",
    contestAddress: "contest_address",
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
    communityId: "community_id",
    contestAddress: "contest_address",
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
    chainNodeId: 1,
    base: CommonApi.CreateCommunityRequestBase.Cosmos,
    defaultSymbol: "default_symbol",
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
    communityId: "community_id",
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
    communityId: "community_id",
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
    topicId: 1.1,
    communityId: "community_id",
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
    communityId: "community_id",
    topicId: 1,
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
    communityId: "community_id",
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
    communityId: "community_id",
    groupId: 1,
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
    communityId: "community_id",
    groupId: 1,
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
    communityId: "community_id",
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
    communityId: "community_id",
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
await client.comment.getComments({
    threadId: 1,
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
    threadId: 1,
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
    commentId: 1,
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
    commentId: 1,
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
    communityId: "community_id",
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
    communityId: "community_id",
    topicId: 1,
    title: "title",
    body: "body",
    kind: CommonApi.CreateThreadRequestKind.Discussion,
    stage: "stage",
    readOnly: true,
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
    threadId: 1,
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
    threadId: 1,
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
await client.contest.getAllContests({
    communityId: "community_id",
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
    threadId: 1,
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
    commentId: 1,
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
    communityId: "community_id",
    reactionId: 1,
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
