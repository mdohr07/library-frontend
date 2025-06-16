import { Book } from "./book";

export interface Booking {
    id: number;
    book?: Book[];
    bookId: number;

    /*
    public int Id { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
    public int BookId { get; set; }
    public Book Book { get; set; }
    [Required] public DateTime BorrowedAt { get; set; }
    public DateTime? ReturnedAt { get; set; }
    */
}
