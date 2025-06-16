import { Book } from "./book";

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    books?: Book[];

    /*
    public int Id { get; set; }
    [MaxLength(255)] public string Firstname { get; set; }
    [MaxLength(255)] public string Lastname { get; set; }
    public IList<Book>? Books { get; set; }
    */
}
