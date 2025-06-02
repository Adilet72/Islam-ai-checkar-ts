import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';


export interface FormData {
  name: string;
  group: string;
  taskTitle: string;
  taskDescription: string;
  solution: string;
  github?: string;
}

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    group: '',
    taskTitle: '',
    taskDescription: '',
    solution: '',
    github: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Отправка домашнего задания</h2>

      <input
        type="text"
        name="name"
        placeholder="ФИО"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="group"
        placeholder="Группа"
        value={formData.group}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="taskTitle"
        placeholder="Название задания"
        value={formData.taskTitle}
        onChange={handleChange}
        required
      />

      <textarea
        name="taskDescription"
        placeholder="Условие задания"
        value={formData.taskDescription}
        onChange={handleChange}
        required
        rows={3}
      />

      <textarea
        name="solution"
        placeholder="Решение"
        value={formData.solution}
        onChange={handleChange}
        required
        rows={6}
      />

      <input
        type="url"
        name="github"
        placeholder="Ссылка на GitHub (опционально)"
        value={formData.github || ''}
        onChange={handleChange}
      />

      <button type="submit">🚀 Отправить</button>
    </form>
  );
}