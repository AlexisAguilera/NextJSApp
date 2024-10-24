'use client';

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleSignOut = () => {
    toast({ description: 'You have been signed out.' });
  };
  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
