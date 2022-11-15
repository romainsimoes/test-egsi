import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://xusnmdrenevyqmhjzrvd.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c25tZHJlbmV2eXFtaGp6cnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5MjcxMDUsImV4cCI6MTk4MTUwMzEwNX0.6hKvv5e-8dPMpqtBHxm96Tt7WXjGoe8JBq6KmCFzGB4'
);
