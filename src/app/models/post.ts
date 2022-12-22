export class Post {
    public isSelected: boolean;
    public userId: number;
    public id: number;
    public title: string;
    public body: string;
    public isEdit: boolean;

    constructor(isEdit: boolean) {
        this.isSelected = false;
        this.userId = 0;
        this.id = 0;
        this.title = '';
        this.body = '';
        this.isEdit = isEdit;
    }
}

export const PostColumns = [
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