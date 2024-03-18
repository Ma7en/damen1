// my

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://umeqlwuqnbbtxkzlbmzx.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZXFsd3VxbmJidHhremxibXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3Njg1NDksImV4cCI6MjAyNjM0NDU0OX0.Cn8nnoK275Gq9jnz2vauElwaFjZcm3JysQyQabc2u6w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
