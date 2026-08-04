import type { Currency, LoginDto, RegisterDto } from '../validate/auth.validator';

export type { Currency, LoginDto, RegisterDto };

// export type Currency = "USD" | "CAD" | "EUR" | "GBP";

/**
 * User row returned from the database - not exactly as row
 */
export interface UserResponse {
   id: number;
   name: string;
   email: string;
   currency: Currency | null;
}

/**
 * Response returned after successful authentication.
 */
export interface AuthResponse {
   user: UserResponse;
   token: string;
}

/**
 * Data used when creating a user in the repository.
 */
export interface CreateUserData {
   name: string;
   email: string;
   passwordHash: string; // hashed password
   currency: Currency | null;
}

export interface UserEntity {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  currency: Currency | null;
  created_at: Date;
}
