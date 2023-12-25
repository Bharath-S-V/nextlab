import React, { useState } from 'react';

const Folder = ({ name, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onClick={toggleFolder}
        style={{ cursor: 'pointer', marginLeft: '20px' }}
      >
        {isOpen ? '📂 ' : '📁 '}
        {name}
      </div>
      {isOpen && (
        <div style={{ marginLeft: '20px' }}>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <div key={index}>
                {typeof item === 'object' ? (
                  Object.entries(item).map(([key, value]) => (
                    <Folder key={key} name={key} content={value} />
                  ))
                ) : (
                  <div style={{ marginLeft: '20px' }}>📄 {item}</div>
                )}
              </div>
            ))
          ) : (
            <div style={{ marginLeft: '20px' }}>
              {Object.entries(content).map(([key, value]) => (
                <Folder key={key} name={key} content={value} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FolderStructure = ({ data }) => {
  return (
    <div>
      {Object.entries(data).map(([key, value], index) => (
        <Folder key={index} name={key} content={value} />
      ))}
    </div>
  );
};

// Example usage

const jsonData = {
  SchoolOfCode: {
    '.github': [],
    app: [],
    bin: [],
    config: {
      environments: [],
      initializers: [],
      learning_path: [],
      locals: ['application.rb', 'autoprefixer.xml'],
    },
  },
};


const App = () => {
  return (
    <div>
      <h1>Folder Structure</h1>
      <FolderStructure data={jsonData} />
    </div>
  );
};

export default App;
