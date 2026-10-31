import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss',
})
export class ArtComponent {
  @Input({ required: true }) kind!: 'bowl' | 'packets' | 'samosa' | 'spices' | 'product' | 'chai' | 'jars';
  @Input() className = '';

  private svgs: Record<string, string> = {
    bowl: `
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <path d="M40 100 Q50 60 100 50 Q150 60 160 100" stroke="#C51F32" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M50 100 Q70 75 100 70 Q130 75 150 100" stroke="#EFA071" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.6"/>
        <ellipse cx="100" cy="105" rx="55" ry="12" fill="url(#bowlGrad)" opacity="0.3"/>
        <defs>
          <linearGradient id="bowlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#F5C518"/>
            <stop offset="100%" stop-color="#EFA071"/>
          </linearGradient>
        </defs>
        <circle cx="70" cy="80" r="14" fill="#F5C518" opacity="0.8"/>
        <circle cx="82" cy="68" r="10" fill="#EFA071" opacity="0.8"/>
        <circle cx="110" cy="72" r="12" fill="#C51F32" opacity="0.7"/>
        <circle cx="128" cy="82" r="11" fill="#F5C518" opacity="0.8"/>
        <circle cx="140" cy="68" r="9" fill="#EFA071" opacity="0.8"/>
        <circle cx="95" cy="88" r="16" fill="#EFA071" opacity="0.4"/>
        <circle cx="108" cy="92" r="13" fill="#C51F32" opacity="0.3"/>
        <path d="M25 100 Q50 85 100 80 Q150 85 175 100" stroke="#EFA071" stroke-width="1.5" stroke-dasharray="4 4" fill="none" opacity="0.4"/>
      </svg>
    `,
    packets: `
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <rect x="30" y="40" width="55" height="75" rx="6" fill="#FBF9F5" stroke="#C51F32" stroke-width="2"/>
        <rect x="30" y="40" width="55" height="28" rx="6" fill="#C51F32"/>
        <text x="57.5" y="59" text-anchor="middle" fill="#fff" font-family="Fraunces Variable,Georgia,serif" font-size="11" font-weight="700">CRUNCHORA</text>
        <path d="M42 80 L48 92 L72 70" stroke="#EFA071" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="57.5" cy="100" r="3" fill="#F5C518"/>
        
        <rect x="95" y="25" width="60" height="85" rx="6" fill="#FBF9F5" stroke="#EFA071" stroke-width="2"/>
        <rect x="95" y="25" width="60" height="30" rx="6" fill="#EFA071"/>
        <text x="125" y="45" text-anchor="middle" fill="#3A2A05" font-family="Fraunces Variable,Georgia,serif" font-size="11" font-weight="700">NAMKEEN</text>
        <ellipse cx="125" cy="75" rx="18" ry="12" fill="#F5C518" opacity="0.7"/>
        <path d="M110 70 L120 78 L140 68" stroke="#C51F32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.6"/>
        
        <rect x="168" y="55" width="45" height="60" rx="5" fill="#FBF9F5" stroke="#F5C518" stroke-width="2"/>
        <rect x="168" y="55" width="45" height="22" rx="5" fill="#F5C518"/>
        <text x="190.5" y="70" text-anchor="middle" fill="#3A2A05" font-family="Fraunces Variable,Georgia,serif" font-size="9" font-weight="700">SNACKS</text>
        <circle cx="190" cy="95" r="10" fill="#C51F32" opacity="0.6"/>
        <circle cx="182" cy="88" r="7" fill="#EFA071" opacity="0.6"/>
        <circle cx="198" cy="88" r="6" fill="#F5C518" opacity="0.6"/>
      </svg>
    `,
    samosa: `
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <path d="M100 30 L55 120 L145 120 Z" fill="#F5C518" stroke="#C51F32" stroke-width="2"/>
        <path d="M100 30 L55 120" stroke="#EFA071" stroke-width="1.5"/>
        <path d="M100 30 L145 120" stroke="#EFA071" stroke-width="1.5"/>
        <path d="M70 90 L130 90" stroke="#EFA071" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
        <ellipse cx="100" cy="115" rx="22" ry="4" fill="#EFA071" opacity="0.3"/>
        <path d="M85 60 Q100 50 115 60" stroke="#C51F32" stroke-width="1.5" fill="none" opacity="0.6"/>
        <circle cx="100" cy="70" r="8" fill="#EFA071" opacity="0.5"/>
        <circle cx="90" cy="80" r="5" fill="#C51F32" opacity="0.5"/>
        <circle cx="110" cy="78" r="6" fill="#F5C518" opacity="0.7"/>
        <circle cx="80" cy="100" r="4" fill="#EFA071" opacity="0.5"/>
        <circle cx="120" cy="98" r="4" fill="#C51F32" opacity="0.5"/>
      </svg>
    `,
    spices: `
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <ellipse cx="55" cy="100" rx="18" ry="30" fill="#C51F32" opacity="0.8" transform="rotate(-15 55 100)"/>
        <ellipse cx="55" cy="100" rx="12" ry="22" fill="#EFA071" opacity="0.6" transform="rotate(-15 55 100)"/>
        <path d="M45 85 L65 115" stroke="#C51F32" stroke-width="1.5" stroke-linecap="round" opacity="0.6" transform="rotate(-15 55 100)"/>
        
        <ellipse cx="105" cy="40" rx="22" ry="16" fill="#EFA071" opacity="0.8" transform="rotate(20 105 40)"/>
        <ellipse cx="105" cy="40" rx="15" ry="10" fill="#F5C518" opacity="0.6" transform="rotate(20 105 40)"/>
        <path d="M95 32 L115 48" stroke="#EFA071" stroke-width="1.5" stroke-linecap="round" opacity="0.6" transform="rotate(20 105 40)"/>
        
        <ellipse cx="145" cy="110" rx="20" ry="28" fill="#F5C518" opacity="0.8" transform="rotate(10 145 110)"/>
        <ellipse cx="145" cy="110" rx="14" ry="20" fill="#C51F32" opacity="0.5" transform="rotate(10 145 110)"/>
        <path d="M135 95 L155 125" stroke="#F5C518" stroke-width="1.5" stroke-linecap="round" opacity="0.6" transform="rotate(10 145 110)"/>
        
        <ellipse cx="85" cy="130" rx="14" ry="24" fill="#EFA071" opacity="0.7" transform="rotate(-25 85 130)"/>
        <ellipse cx="125" cy="60" rx="16" ry="26" fill="#C51F32" opacity="0.6" transform="rotate(30 125 60)"/>
        
        <circle cx="100" cy="90" r="3" fill="#fff" opacity="0.6"/>
        <circle cx="90" cy="75" r="2" fill="#fff" opacity="0.5"/>
        <circle cx="110" cy="85" r="2.5" fill="#fff" opacity="0.5"/>
        <circle cx="80" cy="100" r="2" fill="#fff" opacity="0.4"/>
        <circle cx="120" cy="70" r="2" fill="#fff" opacity="0.4"/>
      </svg>
    `,
    product: `
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <rect x="50" y="30" width="100" height="140" rx="12" fill="#FBF9F5" stroke="#C51F32" stroke-width="2.5"/>
        <rect x="50" y="30" width="100" height="42" rx="12" fill="#C51F32"/>
        <text x="100" y="59" text-anchor="middle" fill="#fff" font-family="Fraunces Variable,Georgia,serif" font-size="16" font-weight="700">CRUNCHORA</text>
        <text x="100" y="76" text-anchor="middle" fill="#F5C518" font-family="DM Sans, sans-serif" font-size="9" font-weight="600" letter-spacing="0.1em">CLASSIC NAMKEEN</text>
        <ellipse cx="100" cy="110" rx="30" ry="20" fill="#EFA071" opacity="0.4"/>
        <path d="M80 100 L95 112 L120 92" stroke="#C51F32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="100" cy="135" r="12" fill="#F5C518" opacity="0.7"/>
        <rect x="70" y="158" width="60" height="10" rx="4" fill="#EFA071" opacity="0.5"/>
        <circle cx="80" cy="70" r="5" fill="#F5C518" opacity="0.6"/>
        <circle cx="120" cy="68" r="4" fill="#EFA071" opacity="0.6"/>
        <circle cx="75" cy="55" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="125" cy="52" r="2.5" fill="#fff" opacity="0.6"/>
      </svg>
    `,
    chai: `
      <svg viewBox="0 0 160 180" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <path d="M40 140 L35 50 Q50 30 80 50 L75 140" fill="#F5C518" stroke="#C51F32" stroke-width="2"/>
        <path d="M80 50 Q95 30 110 50 L105 140 L80 140 Z" fill="#EFA071" stroke="#C51F32" stroke-width="2"/>
        <path d="M35 50 Q50 30 80 50" stroke="#C51F32" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M80 50 Q95 30 110 50" stroke="#C51F32" stroke-width="1.5" fill="none" opacity="0.5"/>
        <path d="M110 50 L125 65" stroke="#C51F32" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="70" cy="140" rx="35" ry="6" fill="#EFA071" opacity="0.2"/>
        <path d="M50 70 Q70 60 90 70" stroke="#C51F32" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.4"/>
        <path d="M90 70 Q110 60 100 70" stroke="#C51F32" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.4"/>
        <circle cx="60" cy="80" r="4" fill="#fff" opacity="0.6"/>
        <circle cx="85" cy="75" r="3" fill="#fff" opacity="0.5"/>
        <circle cx="100" cy="85" r="3.5" fill="#fff" opacity="0.5"/>
        <circle cx="55" cy="100" r="2.5" fill="#fff" opacity="0.4"/>
        <circle cx="90" cy="98" r="2" fill="#fff" opacity="0.4"/>
      </svg>
    `,
    jars: `
      <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="art-svg">
        <rect x="25" y="50" width="42" height="90" rx="4" fill="#FBF9F5" stroke="#C51F32" stroke-width="2"/>
        <rect x="25" y="50" width="42" height="18" rx="4" fill="#C51F32"/>
        <ellipse cx="46" cy="110" rx="16" ry="14" fill="#EFA071" opacity="0.6"/>
        <ellipse cx="46" cy="105" rx="13" ry="11" fill="#F5C518" opacity="0.5"/>
        <rect x="38" y="50" width="6" height="18" fill="#EFA071"/>
        
        <rect x="79" y="30" width="50" height="110" rx="5" fill="#FBF9F5" stroke="#EFA071" stroke-width="2"/>
        <rect x="79" y="30" width="50" height="22" rx="5" fill="#EFA071"/>
        <text x="104" y="45" text-anchor="middle" fill="#3A2A05" font-family="Fraunces Variable,Georgia,serif" font-size="9" font-weight="700">MASALA</text>
        <ellipse cx="104" cy="100" rx="18" ry="16" fill="#C51F32" opacity="0.6"/>
        <ellipse cx="104" cy="95" rx="14" ry="12" fill="#EFA071" opacity="0.5"/>
        <rect x="99" y="30" width="10" height="22" fill="#C51F32"/>
        
        <rect x="145" y="65" width="38" height="75" rx="4" fill="#FBF9F5" stroke="#F5C518" stroke-width="2"/>
        <rect x="145" y="65" width="38" height="16" rx="4" fill="#F5C518"/>
        <ellipse cx="164" cy="115" rx="14" ry="12" fill="#EFA071" opacity="0.6"/>
        <ellipse cx="164" cy="110" rx="11" ry="9" fill="#F5C518" opacity="0.5"/>
        <rect x="159" y="65" width="10" height="16" fill="#EFA071"/>
        
        <ellipse cx="60" cy="145" rx="25" ry="4" fill="#EFA071" opacity="0.15"/>
        <ellipse cx="115" cy="145" rx="30" ry="5" fill="#C51F32" opacity="0.1"/>
        <ellipse cx="170" cy="145" rx="22" ry="4" fill="#F5C518" opacity="0.15"/>
      </svg>
    `
  };

  constructor(private sanitizer: DomSanitizer) {}

  get safeHtml(): SafeHtml {
    const svg = this.svgs[this.kind] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}