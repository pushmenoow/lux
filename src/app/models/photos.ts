export interface Photos {
    isSelected: boolean;
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
    isEdit: boolean
}

export const PhotosColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'albumId',
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
        key: 'url',
        type: 'text',
        label: 'URL'
    },
    {
        key: 'thumbnailUrl',
        type: 'text',
        label: 'Thumbnail URL'
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }
]