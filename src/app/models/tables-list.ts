import { Table } from "./table";
import { Album } from 'src/app/models/album';
import { Annotation } from 'src/app/models/annotation';
import { Photo } from 'src/app/models/photo';
import { Post } from 'src/app/models/post';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

export const TABLES: Table[] = [
    { id: 1, name: 'Albums' },
    { id: 2, name: 'Comments' },
    { id: 3, name: 'Photos' },
    { id: 4, name: 'Posts' },
    { id: 5, name: 'Todos' },
    { id: 6, name: 'Users' },
];

export type TargetTable =
    | Album
    | Annotation 
    | Photo 
    | Post 
    | Todo 
    | User;