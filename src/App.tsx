import { useState } from 'react';
import ExtensionFilters from './components/ExtensionFilters';
import ExtensionList from './components/ExtensionList';
import Header from './components/Header';
import extensions from './extensions.json';
function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [extensionList, setExtensionList] = useState(extensions);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (name: string, isActive: boolean) => {
    setExtensionList((previousExtensions) =>
      previousExtensions.map((extension) => {
        if (extension.name === name) {
          return {
            ...extension,
            isActive: isActive,
          };
        }
        return extension;
      }),
    );
  };
  const handleRemove = (name: string) => {
    setExtensionList((previousExtensions) =>
      previousExtensions.filter((extension) => {
        return extension.name !== name;
      }),
    );
  };
  const filteredExtensions = extensionList.filter((extension) => {
    return (
      activeFilter === 'all' ||
      extension.isActive === (activeFilter === 'active')
    );
  });

  return (
    <div
      className={`flex min-h-screen flex-col ${
        isDarkMode ? 'dark dark-background' : 'light-background'
      }`}
    >
      <main className='w-full max-w-5xl mx-auto flex flex-col  px-4 sm:px-6 lg:px-8 py-6'>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ExtensionFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        <ExtensionList
          extensions={filteredExtensions}
          onToggle={handleToggle}
          onRemove={handleRemove}
          isDarkMode={isDarkMode}
        />
      </main>
    </div>
  );
}

export default App;
