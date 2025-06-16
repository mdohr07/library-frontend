import { Author } from "./author";
import { Booking } from "./booking";

export interface Book {
    id: number;
    title: string;
    isbn: string;
    language: string;
    // edition?: string;
    yearOfPublishing: number;
    pageCount: number;
    isBorrowed: boolean;
    // state: BookState;
    authors?: Author[];
    bookings?: Booking[];
}
