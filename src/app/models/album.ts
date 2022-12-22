export class Album {
    public isSelected: boolean;
    public userId: number;
    public id: number;
    public title: string;
    public isEdit: boolean;

    constructor (isEdit: boolean) {
        this.isSelected = false;
        this.userId = 0;
        this.id = 0;
        this.title = '';
        this.isEdit = isEdit;
    }
}

export const AlbumColumns = [
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