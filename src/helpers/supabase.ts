import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.SNOWPACK_PUBLIC_SUPABASE_URL,
  import.meta.env.SNOWPACK_PUBLIC_SUPABASE_KEY,
);
