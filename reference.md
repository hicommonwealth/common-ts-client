# Reference

## User

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getGlobalActivity</a>({ ...params }) -> CommonApi.GetGlobalActivityResponseItem[]</code></summary>
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

<details><summary><code>client.user.<a href="/src/api/resources/user/client/Client.ts">getUserActivity</a>({ ...params }) -> CommonApi.GetUserActivityResponseItem[]</code></summary>
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

<details><summary><code>client.community.<a href="/src/api/resources/community/client/Client.ts">deleteTopic</a>({ ...params }) -> CommonApi.DeleteTopicResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.community.deleteTopic({
    community_id: "community_id",
    topic_id: 1,
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

**request:** `CommonApi.DeleteTopicRequest`

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
    text: "text",
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
    text: "text",
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
