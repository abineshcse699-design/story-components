import {inject, Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {IconRegistration, isIconSvgRegistration} from '../models';

@Injectable({
  providedIn: 'root',
})
export class IconHelper {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  private registeredIcons: Set<string> = new Set<string>();

  registerIcon(iconName: string, icon: string) {
    const newIcon: Record<string, string> = {
      name: iconName,
    };
    if (icon.endsWith('.svg')) {
      newIcon['path'] = icon;
    } else {
      newIcon['svg'] = icon;
    }
    this.registerIcons([newIcon as unknown as IconRegistration]);
  }

  registerIcons(icons: IconRegistration[] = []) {
    icons.forEach((icon) => {
      this.registeredIcons.add(icon.name);
      if (isIconSvgRegistration(icon)) {
        this.iconRegistry.addSvgIconLiteral(
          icon.name,
          this.sanitizer.bypassSecurityTrustHtml(icon.svg),
        );
        return;
      }
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path),
      );
    });
  }

  isSvgIcon(iconName: string): boolean {
    return this.registeredIcons.has(iconName) ?? false;
  }
}
