'use client';

import { useState } from 'react';
import { Link, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `${title} — learn it in 90 minutes`
      )}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const sharePinterest = () => {
    window.open(
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
        url
      )}&description=${encodeURIComponent(`${title} — 90-minute learning plan`)}`,
      '_blank'
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
        style={{
          backgroundColor: copied ? '#E8F5E9' : '#F5F5F5',
          color: copied ? '#2E7D32' : '#666666',
        }}
      >
        <Link size={13} />
        {copied ? 'Copied!' : 'Copy link'}
      </button>
      <button
        onClick={shareX}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:opacity-80"
        style={{ backgroundColor: '#F5F5F5', color: '#666666' }}
      >
        <Share2 size={13} />
        X
      </button>
      <button
        onClick={sharePinterest}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:opacity-80"
        style={{ backgroundColor: '#F5F5F5', color: '#666666' }}
      >
        <Share2 size={13} />
        Pin
      </button>
    </div>
  );
}
