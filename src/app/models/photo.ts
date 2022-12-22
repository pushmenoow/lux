export class Photo {
    public isSelected: boolean;
    public albumId: number;
    public id: number;
    public title: string;
    public url: string;
    public thumbnailUrl: string;
    public isEdit: boolean;

    constructor(isEdit: boolean) {
            this.isSelected = false;
            this.albumId = 0;
            this.id = 0;
            this. title = '';
            this.url = '';
            this.thumbnailUrl = '';
            this.isEdit = isEdit;
    }
}

export const PhotoColumns = [
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