export interface Albums {
    isSelected: boolean;
    userId: number,
    id: number,
    title: string,
    isEdit: boolean
}

export const AlbumsColumns = [
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
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }
]