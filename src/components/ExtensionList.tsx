import ExtensionCard from './ExtensionCard';
interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}
interface ExtensionListProps {
  extensions: Extension[];
  onToggle: (name: string, isActive: boolean) => void;
  onRemove: (name: string) => void;
  isDarkMode: boolean;
}
const ExtensionList = ({
  extensions,
  onToggle,
  onRemove,
  isDarkMode,
}: ExtensionListProps) => {
  return (
    <div className='mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {extensions.map((extension) => (
        <ExtensionCard
          key={extension.name}
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          onToggle={onToggle}
          onRemove={onRemove}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};
export default ExtensionList;
