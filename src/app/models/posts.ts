export interface Posts {
    isSelected: boolean;
    userId: number,
    id: number,
    title: string,
    body: string,
    isEdit: boolean
}

export const PostsColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'userId',
        type: 'number',
        label: 'User ID'
    },
    {
        key: 'id',
        type: 'number',
        label: 'ID'
    },
    {
        key: 'title',
        type: 'text',
        label: 'Title'
    },
    {
        key: 'body',
        type: 'text',
        label: 'Body'
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }
]