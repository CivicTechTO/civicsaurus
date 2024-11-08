// src/pages/resources.tsx
import React, { useEffect, useState } from 'react';

// Define a TypeScript interface for your resource data
interface Resource {
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
}

const Resources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    // Fetch the resources.json file
    fetch('/resources.json')
      .then((response) => response.json())
      .then((data: Resource[]) => setResources(data))
      .catch((error) => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div>
      <h1>Resource Database</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;