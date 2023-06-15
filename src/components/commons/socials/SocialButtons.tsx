import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { RiGitlabFill } from 'react-icons/ri';

export default function SocialsButtons() {
  const sharedComponentClasses =
    'flex gap-2 items-center w-[200px] transition-colors p-2 justify-between rounded-md border-2 shadow-md shadow-black';
  const sharedButtonClasses = 'text-slate-100 text-xl';

  return (
    <div className='flex flex-col gap-5 mt-10'>
      <a
        className={sharedComponentClasses + ' bg-[#1da1f2] hover:bg-[#068ce0]'}
        href='https://twitter.com/cocodrilette'
        target='_blank'
        rel='noreferrer'
      >
        Twitter <BsTwitter className={sharedButtonClasses} />
      </a>
      <a
        className={sharedComponentClasses + ' bg-[#161b22] hover:bg-[#0b0d11]'}
        href='https://github.com/Cocodrilette'
        target='_blank'
        rel='noreferrer'
      >
        Github <BsGithub className={sharedButtonClasses} />
      </a>
      <a
        className={sharedComponentClasses + ' bg-[#e94d27] hover:bg-[#d83c15]'}
        href='https://gitlab.com/Cocodrilette'
        target='_blank'
        rel='noreferrer'
      >
        GitLab <RiGitlabFill className={sharedButtonClasses} />
      </a>
      <a
        className={sharedComponentClasses + ' bg-[#0a66c2] hover:bg-[#005cb7]'}
        href='https://www.linkedin.com/in/juan-fernando-cogollo-doria/'
        target='_blank'
        rel='noreferrer'
      >
        LinkedIn
        <BsLinkedin className={sharedButtonClasses} />
      </a>
    </div>
  );
}
