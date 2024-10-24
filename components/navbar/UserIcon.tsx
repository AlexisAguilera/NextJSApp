import { LuUser2 } from 'react-icons/lu';
import Image from 'next/image';
import { fetchProfileImage } from '@/utils/actions';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        height={40}
        width={40}
        className='w-6 h-6 rounded-full object-cover'
        alt='profile_image'
      />
    );
  }
  return <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />;
};

export default UserIcon;
