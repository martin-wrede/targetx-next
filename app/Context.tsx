"use client"

import React, { createContext, useEffect, useState, ReactNode } from 'react';

// Define the type for the data
type DataType = {
  // Define the structure of your data
  // Example:
  content_chapter: any[],
  sidebar_h2: string,
  sidebar_image: string
  // Add more properties as needed
}

// Define the type for the context value
type ContextValueType = {
  data: DataType[]
}

// Create the context with the defined type
const Context = createContext<ContextValueType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  const [data, setData] = useState<DataType[]>([]);

  const url = "/data2.json";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <Context.Provider value={{ data }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
