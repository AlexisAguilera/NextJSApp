import { createClient } from '@supabase/supabase-js';
import { stringifyError } from 'next/dist/shared/lib/utils';

const bucket = 'temp-home-away';
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '360' });
  if (!data) {
    throw new Error(`Image upload failed, ${stringifyError(error)}`);
  }
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
