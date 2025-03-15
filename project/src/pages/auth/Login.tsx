import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/AuthLayout';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';

interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) throw error;
      navigate('/buildings');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <AuthLayout
      title="Iniciar Sesión"
      subtitle="Ingresa a tu cuenta para continuar"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label="Email"
          type="email"
          leftIcon={<Mail className="h-5 w-5" />}
          error={errors.email?.message}
          {...register('email', { required: 'Email es requerido' })}
        />

        <Input
          label="Contraseña"
          type="password"
          leftIcon={<Lock className="h-5 w-5" />}
          error={errors.password?.message}
          {...register('password', { required: 'Contraseña es requerida' })}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
        >
          Iniciar Sesión
        </Button>
      </form>
    </AuthLayout>
  );
}