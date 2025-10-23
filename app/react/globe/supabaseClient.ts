import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kyyyesgpbjmqnbgvlbpv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5eXllc2dwYmptcW5iZ3ZsYnB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0OTczNjIsImV4cCI6MjA2MjA3MzM2Mn0.sZwAhZW9yiU1TkNIJf4V4jcDQKRAyDpoULiYu_XkI00';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

