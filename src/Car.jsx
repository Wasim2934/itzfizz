import React from "react";

/**
 * Self-contained stylized top-view sports car SVG.
 * No external image URL or attribution is needed. Replace this component
 * with a transparent PNG/WebP if you have a licensed car asset.
 */
export default function Car() {
  return (
    <svg className="car-svg" viewBox="0 0 560 250" role="img" aria-label="Orange sports car viewed from above">
      <defs>
        <linearGradient id="bodyPaint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9a2f" />
          <stop offset="48%" stopColor="#ff781c" />
          <stop offset="100%" stopColor="#e85b0b" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#17191b" />
          <stop offset="50%" stopColor="#4b4d50" />
          <stop offset="100%" stopColor="#17191b" />
        </linearGradient>
      </defs>
      {/* rear wing and dark diffuser */}
      <path d="M67 48 L30 36 Q10 35 9 52 L18 67 L64 75 Z" fill="#151515" stroke="#f47b1d" strokeWidth="2"/>
      <path d="M67 202 L30 214 Q10 215 9 198 L18 183 L64 175 Z" fill="#151515" stroke="#f47b1d" strokeWidth="2"/>
      <path d="M42 62 Q20 125 42 188 L70 202 L91 186 L91 64 L70 48 Z" fill="#242424" stroke="#ff8a25" strokeWidth="3"/>
      {/* wheels */}
      <g fill="#101112" stroke="#6b6b6b" strokeWidth="2">
        <path d="M134 34 Q159 22 188 27 L205 39 L179 52 L140 51 Z"/>
        <path d="M134 216 Q159 228 188 223 L205 211 L179 198 L140 199 Z"/>
        <path d="M355 28 L389 26 Q410 30 420 49 L399 62 L365 49 Z"/>
        <path d="M355 222 L389 224 Q410 220 420 201 L399 188 L365 201 Z"/>
      </g>
      {/* main shell */}
      <path d="M68 67 Q95 37 151 31 L361 26 Q421 28 467 63 L500 88 Q522 110 522 125 Q522 140 500 162 L467 187 Q421 222 361 224 L151 219 Q95 213 68 183 Q51 162 51 125 Q51 88 68 67 Z"
        fill="url(#bodyPaint)" stroke="#d95a0d" strokeWidth="3"/>
      {/* body highlights */}
      <path d="M78 76 Q112 48 173 43 L361 40 Q420 41 461 71 L426 78 L151 72 Z" fill="#ffb04b" opacity=".5"/>
      <path d="M78 174 Q112 202 173 207 L361 210 Q420 209 461 179 L426 172 L151 178 Z" fill="#d9570a" opacity=".45"/>
      {/* cockpit */}
      <path d="M133 58 Q157 46 201 45 L344 43 Q394 44 423 71 Q447 96 447 125 Q447 154 423 179 Q394 206 344 207 L201 205 Q157 204 133 192 Q111 174 109 145 L109 105 Q111 76 133 58 Z"
        fill="#161719" stroke="#36383b" strokeWidth="5"/>
      <path d="M160 61 Q187 52 218 52 L324 51 Q364 52 389 73 Q410 93 411 125 Q410 157 389 177 Q364 198 324 199 L218 198 Q187 198 160 189 Q139 174 136 146 L136 104 Q139 76 160 61 Z"
        fill="url(#glass)" stroke="#747679" strokeWidth="2"/>
      {/* windscreen / roof divisions */}
      <path d="M279 51 L279 199" stroke="#0c0d0e" strokeWidth="7"/>
      <path d="M285 52 L285 198" stroke="#707174" strokeWidth="1.5" opacity=".7"/>
      <path d="M151 73 Q194 61 260 61 L260 189 Q194 189 151 177 Q141 158 141 125 Q141 92 151 73 Z" fill="#202225" opacity=".8"/>
      <path d="M302 61 L324 61 Q362 63 384 82 Q400 99 400 125 Q400 151 384 168 Q362 187 324 189 L302 189 Z" fill="#5c5e61" opacity=".7"/>
      <path d="M306 81 Q350 81 379 97 M306 169 Q350 169 379 153" stroke="#929497" strokeWidth="2" opacity=".6"/>
      {/* hood vents and headlights */}
      <path d="M458 83 Q480 94 493 110 L487 115 Q469 103 451 96 Z" fill="#171819" stroke="#ffb25e" strokeWidth="2"/>
      <path d="M458 167 Q480 156 493 140 L487 135 Q469 147 451 154 Z" fill="#171819" stroke="#ffb25e" strokeWidth="2"/>
      <path d="M476 91 L495 111" stroke="#f5f5f5" strokeWidth="2" opacity=".85"/>
      <path d="M476 159 L495 139" stroke="#f5f5f5" strokeWidth="2" opacity=".85"/>
      <path d="M105 88 L81 105 L81 145 L105 162" fill="none" stroke="#161616" strokeWidth="7" strokeLinecap="round"/>
      {/* rear vents */}
      <g stroke="#080909" strokeWidth="5" strokeLinecap="round">
        <path d="M77 100 L94 111"/><path d="M73 114 L94 121"/><path d="M73 136 L94 129"/><path d="M77 150 L94 139"/>
      </g>
      {/* side mirrors */}
      <path d="M201 37 L192 20 Q190 14 198 14 L219 18 L231 35" fill="#1c1c1c" stroke="#f4771b" strokeWidth="2"/>
      <path d="M201 213 L192 230 Q190 236 198 236 L219 232 L231 215" fill="#1c1c1c" stroke="#f4771b" strokeWidth="2"/>
      {/* subtle centre line */}
      <path d="M83 74 Q123 51 166 47 M83 176 Q123 199 166 203" fill="none" stroke="#ffbd68" strokeWidth="2" opacity=".65"/>
    </svg>
  );
}