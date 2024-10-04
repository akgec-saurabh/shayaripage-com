export interface Poet {
  _id: string;
  name: string;
  username: string;
  picture: string;
  picture_colored: string;
  bio: string;
  description: string;
  sher_count: number;
  ghazal_count: number;
  nazm_count: number;
  likes_count: number;
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;
}

interface Content {
  english_content: string;
  hindi_content: string;
  prime_content: string;
  second_content: string;
  first_line_in_english: string;
  first_line_in_hindi: string;
}

export interface Shayari {
  _id: string;
  content: Content;
  slug: string;
  poet: string;
  type: "sher" | "ghazal" | "nazm";
  old_created_at: string;
  related_mood_slugs: string;
  createdAt: string;
  updatedAt: string;
  likesCount: number;
  __v: number;
}

export interface PoetAllShayari {
  sher: Shayari[];
  ghazal: Shayari[];
  nazm: Shayari[];
  totalPage: { sher: number; ghazal: number; nazm: number };
}
