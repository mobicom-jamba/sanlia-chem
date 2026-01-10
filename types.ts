import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}