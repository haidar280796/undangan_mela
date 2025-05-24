import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksppqnvkijmnlmjshxrt.supabase.co' // Ganti dengan URL kamu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzcHBxbnZraWptbmxtanNoeHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4ODgyNTIsImV4cCI6MjA2MDQ2NDI1Mn0.jdTzQcNISfbHR5UxoPZucGH1_EVIR4UdNPp88KAk6E8' // Ganti dengan anon key kamu

export const supabase = createClient(supabaseUrl, supabaseKey)