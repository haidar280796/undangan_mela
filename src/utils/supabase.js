import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tpopirqfvurycnuqhcgi.supabase.co' // Ganti dengan URL kamu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwb3BpcnFmdnVyeWNudXFoY2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNjU1MzYsImV4cCI6MjA2Mzc0MTUzNn0.wqk0elCCDtZFaiVcpi6QU67F34gxhkzJn8toilP4_Cs' // Ganti dengan anon key kamu

export const supabase = createClient(supabaseUrl, supabaseKey)