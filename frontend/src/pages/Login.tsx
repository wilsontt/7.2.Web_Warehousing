import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { useAuth } from '../contexts/auth-context';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// Zod Schema
const loginSchema = z.object({
  username: z.string().min(1, '請輸入帳號'),
  password: z.string().min(1, '請輸入密碼'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { login, isLocked } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showLockAlert, setShowLockAlert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // 如果已經鎖定，顯示鎖定警告
  React.useEffect(() => {
    if (isLocked) {
      setShowLockAlert(true);
    }
  }, [isLocked]);

  const onSubmit = async (data: LoginFormValues) => {
    setErrorMsg(null);
    try {
      const result = await login(data.username, data.password);
      if (result.success) {
        // 登入成功，導向原本想去的頁面或首頁
        const from = (location.state as any)?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        // 登入失敗
        setErrorMsg(result.message || '登入失敗');
        if (result.message?.includes('鎖定')) {
            setShowLockAlert(true);
        }
      }
    } catch (error) {
      setErrorMsg('發生未預期的錯誤，請稍後再試。');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        {/* Logo 與標題 */}
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto object-contain"
            src={logo}
            alt="Crown Logo"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">
            文件倉儲管理系統
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            請輸入您的帳號與密碼以登入系統
          </p>
        </div>

        {/* 登入表單 */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* 帳號欄位 */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                帳號
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.username ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  } rounded-md focus:outline-none sm:text-sm transition duration-150 ease-in-out`}
                  placeholder="請輸入帳號"
                  {...register('username')}
                  disabled={isLocked}
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
              )}
            </div>

            {/* 密碼欄位 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密碼
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  className={`block w-full pl-10 pr-10 py-2 border ${
                    errors.password ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                  } rounded-md focus:outline-none sm:text-sm transition duration-150 ease-in-out`}
                  placeholder="請輸入密碼"
                  {...register('password')}
                  disabled={isLocked}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    disabled={isLocked}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* 錯誤訊息 */}
          {errorMsg && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    登入失敗
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{errorMsg}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 提交按鈕 */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting || isLocked}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isLocked ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              } transition duration-150 ease-in-out`}
            >
              {isSubmitting ? '登入中...' : isLocked ? '帳號已鎖定' : '登入'}
            </button>
          </div>
        </form>
      </div>

      {/* Lock Alert Dialog (Simple implementation) */}
      {showLockAlert && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Lock className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      帳號已被鎖定
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        您已連續輸入錯誤達 6 次，帳號已被鎖定。請與管理人員聯繫。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowLockAlert(false)}
                >
                  確定
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
