/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         commentId: 1
 *     }
 */
export interface CreateCommentReactionRequest {
    commentId: number;
    commentMsgId?: string;
    canvasSignedData?: string;
    canvasMsgId?: string;
}
