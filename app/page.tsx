'use client';

import { Button, Card } from '@/components/ui';
import { ThemeToggleWrapper } from '@/components/ui/ThemeToggleWrapper';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-4 right-4">
        <ThemeToggleWrapper />
      </div>
      
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Biblioteca Template</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Template/Boilerplate para projetos Next.js com HeroUI v3
        </p>
        
        <Card className="p-6 mt-8 max-w-md">
          <p className="mb-4">Componentes prontos para uso:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">Primário</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>
        
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
          Inclui 67 componentes do HeroUI v3 + Sistema de temas dark/light
        </p>
      </div>
    </main>
  );
}
