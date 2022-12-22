export interface Users {
    isSelected: boolean;
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company,
    isEdit: boolean
}

export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

export interface Company {
    name: string,
    cathcPhrase: string,
    bs: string
}

export interface Geo {
    lat: string,
    lng: string
}

export const UsersColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
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
        key: 'username',
        type: 'string',
        label: 'Username'
    },
    {
        key: 'email',
        type: 'string',
        label: 'Email'
    },
    {
        key: 'address',
        type: 'Address',
        label: 'Address'
    },
    {
        key: 'phone',
        type: 'string',
        label: 'Phone'
    },
    {
        key: 'website',
        type: 'string',
        label: 'Website'
    },
    {
        key: 'company',
        type: 'Company',
        label: 'Company'
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: ''
    }
]