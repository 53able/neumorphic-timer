// src/app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import VerticalSlider from '@/components/VerticalSlider';

const Home = () => {
  const [timer, setTimer] = useState(10); // 初期値10分
  const [remainingTime, setRemainingTime] = useState(timer * 60); // 秒単位
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  // 通知の許可をアプリ起動時にリクエスト（削除）
  // useEffect(() => {
  //   if (Notification.permission === 'default') {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === 'granted') {
  //         console.log('通知の許可が得られました。');
  //       } else {
  //         console.log('通知の許可が拒否されました。');
  //       }
  //     });
  //   }
  // }, []);

  // スライダーが変更されたときにタイマーをリセット・開始
  useEffect(() => {
    setRemainingTime(timer * 60);
    if (timer > 0) {
      setIsRunning(true);
      const now = new Date();
      setStartTime(now);
      setEndTime(new Date(now.getTime() + timer * 60 * 1000));
    } else {
      setIsRunning(false);
      setStartTime(null);
      setEndTime(null);
    }
  }, [timer]);

  // タイマーのカウントダウンロジック
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      // タイマー終了時の処理（通知や音再生などをオミット）
      // handleTimerEnd();
    }

    return () => clearInterval(interval);
  }, [isRunning, remainingTime]);

  // フォーマット関数
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-neumorph dark:shadow-neumorph-dark">
        {/* 左側：タイマー情報 */}
        <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-100 dark:bg-gray-700 shadow-neumorph-inset dark:shadow-neumorph-inset-dark">
          <div className="text-3xl font-medium text-gray-800 dark:text-gray-100 mb-6">
            <span className="block text-lg mb-2 text-gray-600 dark:text-gray-300">
              {isRunning ? '残り時間' : '設定時間'}
            </span>
            {formatTime(remainingTime)}
          </div>
          
          {startTime && endTime && (
            <div className="space-y-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-neumorph-subtle dark:shadow-neumorph-subtle-dark">
              <p>開始時刻: {startTime.toLocaleTimeString()}</p>
              <p>終了予定: {endTime.toLocaleTimeString()}</p>
            </div>
          )}
        </div>
    
        {/* 右側：縦向きスライダー */}
        <div className="flex justify-center items-center p-8 rounded-xl bg-gray-100 dark:bg-gray-700 shadow-neumorph-inset dark:shadow-neumorph-inset-dark">
          <VerticalSlider
            value={timer}
            min={1}
            max={120}
            onChange={(value) => {
              setTimer(value);
              setIsRunning(true);
              const now = new Date();
              setStartTime(now);
              setEndTime(new Date(now.getTime() + value * 60 * 1000));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
