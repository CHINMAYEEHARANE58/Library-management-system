export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
  available: boolean;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  joinDate: string;
}

export interface Issuance {
  id: string;
  bookId: string;
  memberId: string;
  issueDate: string;
  dueDate: string;
  returnDate?: string;
  status: 'active' | 'returned';
}