import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}
function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <header
      className={`flex items-center justify-between rounded-xl  px-4 py-2 min-h-17 border ${
        isDarkMode
          ? 'bg-neutral-800 border-neutral-700'
          : 'bg-white border-neutral-200'
      }
      `}
    >
      <img
        src='/assets/images/logo.svg'
        alt='Browser Extensions logo'
        className='w-45 h-auto'
      />
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        variant='ghost'
        size='icon'
        aria-label='Toggle theme'
        className={`rounded-lg ${
          isDarkMode
            ? 'bg-neutral-700 hover:bg-neutral-600 text-white'
            : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
        }`}
      >
        {isDarkMode ? (
          <Sun className='h-5 w-5' />
        ) : (
          <Moon className='h-5 w-5' />
        )}
      </Button>
    </header>
  );
}

export default Header;
