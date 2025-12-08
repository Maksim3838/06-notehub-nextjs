export type AllowedTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export type Note = {
  id: string;
  title: string;
  content: string;
  category: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

