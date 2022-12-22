export class Todo {
    public isSelected: boolean;
    public userId: number;
    public id: number;
    public title: string;
    public completed: boolean;
    public isEdit: boolean;

    constructor(isEdit: boolean) {
        this.isSelected = false;
        this.userId = 0;
        this.id = 0;
        this.title = '';
        this.completed = false;
        this.isEdit = isEdit;
    }
}

export const TodoColumns = [
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
        key: 'completed',
        type: 'completed',
        label: 'Completed'
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }
]