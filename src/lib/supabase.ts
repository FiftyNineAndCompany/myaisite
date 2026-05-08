import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// This client automatically syncs with the cookies set by your route.ts
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)