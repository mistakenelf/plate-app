import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.SNOWPACK_PUBLIC_API_URL,
  import.meta.env.SNOWPACK_PUBLIC_API_KEY,
);
