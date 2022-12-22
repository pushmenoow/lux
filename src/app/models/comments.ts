export interface Comments {
    isSelected: boolean;
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
    isEdit: boolean
}

export const CommentsColumns = [
    {
        key: 'postId',
        type: 'number',
        label: 'Post ID'
    },
    {
        key: 'id',
        type: 'number',
        label: 'ID'
    },
    {
        key: 'name',
        type: 'string',
        label: 'Name'
    },
    {
        key: 'email',
        type: 'string',
        label: 'Email'
    },
    {
        key: 'body',
        type: 'string',
        label: 'Body'
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }

]