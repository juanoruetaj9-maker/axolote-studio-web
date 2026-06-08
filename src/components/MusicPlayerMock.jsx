import { useState } from 'react'

const SpotifyIcon = () => (
  <svg viewBox="0 0 168 168" fill="#1DB954" width="18" height="18">
    <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.742-83.744-83.742zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.217 5.217 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684a7.715 7.715 0 01-9.658-5.134 7.715 7.715 0 015.13-9.661c29.599-8.988 78.826-7.258 109.83 11.12a7.713 7.713 0 012.743 10.562 7.707 7.707 0 01-10.757 2.797z"/>
  </svg>
)

export default function MusicPlayerMock({ song = 'Nuestra canción', artist = 'Playlist del evento' }) {
  const [on, setOn] = useState(false)

  return (
    <button
      onClick={() => setOn((p) => !p)}
      className="flex items-center gap-3 bg-black/65 backdrop-blur-md rounded-2xl px-4 py-3 text-left w-full max-w-xs hover:bg-black/75 transition-colors"
    >
      <div className="w-9 h-9 rounded-full bg-[#1DB954] flex items-center justify-center shrink-0 shadow-md">
        {on ? (
          <div className="flex gap-[3px] items-end" style={{ height: 16 }}>
            {[8, 14, 6, 12, 9].map((h, i) => (
              <div
                key={i}
                className="w-[3px] bg-white rounded-full"
                style={{
                  height: h,
                  animation: `bounce ${0.5 + i * 0.12}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>
        ) : (
          <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white text-xs font-semibold truncate">{song}</p>
        <p className="text-white/50 text-[10px] truncate">{artist}</p>
      </div>
      <SpotifyIcon />
    </button>
  )
}
