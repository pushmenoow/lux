export interface Todos {
    isSelected: boolean;
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    isEdit: boolean
}

export const TodosColumns = [
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