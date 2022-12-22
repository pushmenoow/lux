export class Annotation {
    public isSelected: boolean;
    public postId: number;
    public id: number;
    public name: string;
    public email: string;
    public body: string;
    public isEdit: boolean;

    constructor(isEdit: boolean) {
        this.isSelected = false;
        this.postId = 0;
        this.id = 0;
        this.name = '';
        this.email = '';
        this.body = '';
        this.isEdit = isEdit
    }
}

export const AnnotationColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: ''
    },
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