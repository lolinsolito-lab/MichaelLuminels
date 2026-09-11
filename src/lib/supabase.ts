
import { createClient } from '@supabase/supabase-js';

// Queste variabili verranno iniettate dall'ambiente Vercel/Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  tier: 'free' | 'pulse' | 'sync' | 'architect';
  reset_score: number;
  onboarding_completed: boolean;
};
