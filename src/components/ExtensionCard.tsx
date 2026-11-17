import { Switch } from '@/components/ui/switch';
interface ExtensionCardProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  onToggle: (name: string, isActive: boolean) => void;
  onRemove: (name: string) => void;
  isDarkMode: boolean;
}
const ExtensionCard = ({
  logo,
  name,
  description,
  isActive,
  onToggle,
  onRemove,
  isDarkMode,
}: ExtensionCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between gap-3 rounded-xl border p-3 shadow-sm mt-3 min-h-30 ${
        isDarkMode
          ? 'bg-neutral-800 border-neutral-700'
          : 'bg-white border-neutral-200'
      }`}
    >
      <div className='flex items-start gap-4'>
        <img src={logo} alt={name} className='h-13 w-13' />
        <div className='flex flex-col gap-1'>
          <h3
            className={`text-base font-bold ${
              isDarkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            {name}
          </h3>
          <p
            className={`text-sm ${
              isDarkMode ? 'text-neutral-300' : 'text-neutral-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <button
          onClick={() => onRemove(name)}
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            isDarkMode
              ? 'border-neutral-600 text-white hover:bg-neutral-700'
              : 'border-neutral-300 text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          Remove
        </button>
        <Switch
          className='data-[state=checked]:bg-[hsl(3,71%,56%)] data-[state=unchecked]:bg-neutral-300'
          checked={isActive}
          onCheckedChange={(checked) => onToggle(name, checked)}
        />
      </div>
    </div>
  );
};
export default ExtensionCard;
