import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xxx.supabase.co' // Ganti dengan URL kamu
const supabaseKey = '' // Ganti dengan anon key kamu

export const supabase = createClient(supabaseUrl, supabaseKey)
