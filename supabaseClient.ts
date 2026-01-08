import { createClient } from '@supabase/supabase-js';

// These environment variables must be set in your .env file or deployment settings
const supabaseUrl = "https://ojduzzmiyihgeuzoiynm.supabase.co" 
const supabaseAnonKey = "eyJhbgCiOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZHV6em1peWloZ2V1em9peW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTQ4NjMsImV4cCI6MjA1MTkzMDg2M30.Knjc4NzI4NjAsImV4cCI6MjA1MTkzMDg2M30..."
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
