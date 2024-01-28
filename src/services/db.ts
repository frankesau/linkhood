import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

// Create a single supabase client for interacting with your database
const PUBLIC_SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

export const db = createClient<Database>(PUBLIC_SUPABASE_URL, SUPABASE_ANON_KEY)

