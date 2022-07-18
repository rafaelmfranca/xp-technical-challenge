import useSession from '@/hooks/useSession';

export default function Avatar() {
  const { email } = useSession();

  return (
    <div className="avatar online placeholder" role="img" aria-label="Avatar">
      <div className="w-10 rounded-full bg-neutral text-neutral-content">
        <span className="text-md">{email.substring(0, 2)}</span>
      </div>
    </div>
  );
}
